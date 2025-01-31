// Dados mockados para simulação
const prestadores = [
    { 
        id: 1,
        nome: "João Silva",
        servico: "Eletricista",
        avaliacao: 4.8,
        experiencia: "experiente",
        precoHora: 80,
        disponibilidade: ["manha", "tarde"],
        certificacoes: ["senai", "crea"],
        comentarios: [
            { usuario: "Maria", texto: "Ótimo profissional, muito pontual", nota: 5 },
            { usuario: "Pedro", texto: "Trabalho bem feito", nota: 4.5 }
        ],
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
        whatsapp: "5511999999999",
        email: "joao@email.com"
    },
    { 
        id: 2,
        nome: "Maria Santos",
        servico: "Diarista",
        avaliacao: 4.9,
        experiencia: "intermediario",
        precoHora: 50,
        disponibilidade: ["manha", "tarde", "noite"],
        certificacoes: ["sebrae"],
        comentarios: [
            { usuario: "João", texto: "Excelente trabalho", nota: 5 },
            { usuario: "Ana", texto: "Muito profissional", nota: 4.8 }
        ],
        foto: "https://randomuser.me/api/portraits/women/1.jpg",
        whatsapp: "5511999999998",
        email: "maria@email.com"
    },
    { 
        id: 3,
        nome: "Carlos Oliveira",
        servico: "Encanador",
        avaliacao: 4.7,
        experiencia: "iniciante",
        precoHora: 60,
        disponibilidade: ["tarde", "noite", "fimdesemana"],
        certificacoes: ["senai"],
        comentarios: [
            { usuario: "Paulo", texto: "Resolveu o problema rapidamente", nota: 5 },
            { usuario: "Sandra", texto: "Preço justo", nota: 4.4 }
        ],
        foto: "https://randomuser.me/api/portraits/men/2.jpg",
        whatsapp: "5511999999997",
        email: "carlos@email.com"
    }
];

// Funções de LocalStorage
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('prestadores')) {
        setLocalStorage('prestadores', prestadores);
    }
    
    // Inicializar listagem se estiver na página de serviços
    if (window.location.pathname.includes('servicos.html')) {
        initializeFiltros();
        listarPrestadores();
    }
});

// Sistema de Filtros
function initializeFiltros() {
    // Toggle do painel de filtros avançados
    document.getElementById('filtrosAvancados')?.addEventListener('click', () => {
        const painel = document.getElementById('painelFiltrosAvancados');
        painel.style.display = painel.style.display === 'none' ? 'grid' : 'none';
    });

    // Range slider de preço
    const precoMin = document.getElementById('precoMin');
    const precoMax = document.getElementById('precoMax');
    const valorMin = document.getElementById('valorMin');
    const valorMax = document.getElementById('valorMax');

    if (precoMin && precoMax) {
        precoMin.addEventListener('input', () => {
            const min = parseInt(precoMin.value);
            const max = parseInt(precoMax.value);
            if (min > max) precoMax.value = min;
            valorMin.textContent = min;
            aplicarFiltros();
        });

        precoMax.addEventListener('input', () => {
            const min = parseInt(precoMin.value);
            const max = parseInt(precoMax.value);
            if (max < min) precoMin.value = max;
            valorMax.textContent = max;
            aplicarFiltros();
        });
    }

    // Event listeners para filtros
    document.getElementById('busca')?.addEventListener('input', aplicarFiltros);
    document.getElementById('categoria')?.addEventListener('change', aplicarFiltros);
    document.getElementById('experiencia')?.addEventListener('change', aplicarFiltros);
    document.getElementById('ordenar')?.addEventListener('change', aplicarFiltros);
    
    // Event listeners para checkboxes de disponibilidade e certificações
    document.querySelectorAll('.checkbox-grupo input[type="checkbox"]')
        .forEach(checkbox => checkbox.addEventListener('change', aplicarFiltros));
    
    // Event listeners para avaliação
    document.querySelectorAll('.estrelas-filtro input[type="radio"]')
        .forEach(radio => radio.addEventListener('change', aplicarFiltros));
    
    // Botões de ação
    document.getElementById('limparFiltros')?.addEventListener('click', limparFiltros);
    document.getElementById('aplicarFiltros')?.addEventListener('click', aplicarFiltros);
}

function limparFiltros() {
    document.getElementById('busca').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('experiencia').value = '';
    document.getElementById('ordenar').value = 'relevancia';
    document.getElementById('precoMin').value = 0;
    document.getElementById('precoMax').value = 200;
    document.getElementById('valorMin').textContent = '0';
    document.getElementById('valorMax').textContent = '200';
    
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[type="radio"]').forEach(rd => rd.checked = false);
    
    aplicarFiltros();
}

function aplicarFiltros() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const categoria = document.getElementById('categoria').value.toLowerCase();
    const experiencia = document.getElementById('experiencia').value;
    const avaliacaoMinima = document.querySelector('input[name="avaliacao"]:checked')?.value || 0;
    const precoMin = parseInt(document.getElementById('precoMin').value);
    const precoMax = parseInt(document.getElementById('precoMax').value);
    const ordenacao = document.getElementById('ordenar').value;
    
    // Coletar disponibilidades selecionadas
    const disponibilidades = Array.from(document.querySelectorAll('input[type="checkbox"][value^="manha"], input[type="checkbox"][value^="tarde"], input[type="checkbox"][value^="noite"], input[type="checkbox"][value^="fimdesemana"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Coletar certificações selecionadas
    const certificacoes = Array.from(document.querySelectorAll('input[type="checkbox"][value^="senai"], input[type="checkbox"][value^="sebrae"], input[type="checkbox"][value^="crea"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    let prestadoresFiltrados = getLocalStorage('prestadores').filter(p => {
        const matchTermo = p.nome.toLowerCase().includes(termo) || 
                         p.servico.toLowerCase().includes(termo);
        const matchCategoria = !categoria || p.servico.toLowerCase() === categoria;
        const matchExperiencia = !experiencia || p.experiencia === experiencia;
        const matchAvaliacao = p.avaliacao >= avaliacaoMinima;
        const matchPreco = p.precoHora >= precoMin && p.precoHora <= precoMax;
        const matchDisponibilidade = disponibilidades.length === 0 || 
            disponibilidades.some(d => p.disponibilidade.includes(d));
        const matchCertificacoes = certificacoes.length === 0 ||
            certificacoes.some(c => p.certificacoes.includes(c));
        
        return matchTermo && matchCategoria && matchExperiencia && 
               matchAvaliacao && matchPreco && matchDisponibilidade && 
               matchCertificacoes;
    });
    
    // Aplicar ordenação
    switch(ordenacao) {
        case 'avaliacao':
            prestadoresFiltrados.sort((a, b) => b.avaliacao - a.avaliacao);
            break;
        case 'preco_menor':
            prestadoresFiltrados.sort((a, b) => a.precoHora - b.precoHora);
            break;
        case 'preco_maior':
            prestadoresFiltrados.sort((a, b) => b.precoHora - a.precoHora);
            break;
        case 'experiencia':
            const expOrder = { 'experiente': 3, 'intermediario': 2, 'iniciante': 1 };
            prestadoresFiltrados.sort((a, b) => expOrder[b.experiencia] - expOrder[a.experiencia]);
            break;
    }
    
    exibirResultados(prestadoresFiltrados);
}

function exibirResultados(prestadores) {
    const container = document.getElementById('lista-servicos');
    const totalResultados = document.getElementById('totalResultados');
    
    if (!container) return;
    
    container.innerHTML = '';
    totalResultados.textContent = prestadores.length;
    
    if (prestadores.length === 0) {
        container.innerHTML = `
            <div class="sem-resultados">
                <i class="fas fa-search"></i>
                <h3>Nenhum profissional encontrado</h3>
                <p>Tente ajustar seus filtros para encontrar mais resultados</p>
            </div>
        `;
        return;
    }
    
    prestadores.forEach(prestador => {
        const card = criarCardPrestador(prestador);
        container.appendChild(card);
    });
}

function criarCardPrestador(prestador) {
    const card = document.createElement('div');
    card.className = 'prestador-card';
    
    const estrelas = "⭐".repeat(Math.round(prestador.avaliacao));
    const experienciaNomes = {
        'iniciante': '0-2 anos',
        'intermediario': '2-5 anos',
        'experiente': '5+ anos'
    };
    
    card.innerHTML = `
        <img src="${prestador.foto}" alt="${prestador.nome}" class="prestador-foto">
        <div class="prestador-info">
            <h3>${prestador.nome}</h3>
            <p class="servico">${prestador.servico}</p>
            <p class="avaliacao">${estrelas} (${prestador.avaliacao.toFixed(1)})</p>
            <p class="experiencia"><i class="fas fa-briefcase"></i> ${experienciaNomes[prestador.experiencia]}</p>
            <p class="preco"><i class="fas fa-dollar-sign"></i> R$ ${prestador.precoHora}/hora</p>
            <div class="certificacoes">
                ${prestador.certificacoes.map(cert => `<span class="badge">${cert.toUpperCase()}</span>`).join('')}
            </div>
            <div class="prestador-contato">
                <a href="https://wa.me/${prestador.whatsapp}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="mailto:${prestador.email}" class="btn-email">
                    <i class="far fa-envelope"></i> Email
                </a>
            </div>
        </div>
    `;
    
    card.onclick = () => mostrarPerfilPrestador(prestador);
    return card;
}

// Perfil e Avaliações
function mostrarPerfilPrestador(prestador) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const experienciaNomes = {
        'iniciante': '0-2 anos',
        'intermediario': '2-5 anos',
        'experiente': '5+ anos'
    };
    
    modal.innerHTML = `
        <div class="modal-content perfil-modal">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="perfil-header">
                <img src="${prestador.foto}" alt="${prestador.nome}" class="perfil-foto">
                <h2>${prestador.nome}</h2>
                <p class="servico">${prestador.servico}</p>
                <p class="avaliacao">⭐ ${prestador.avaliacao.toFixed(1)}</p>
                <p class="experiencia"><i class="fas fa-briefcase"></i> ${experienciaNomes[prestador.experiencia]}</p>
                <p class="preco"><i class="fas fa-dollar-sign"></i> R$ ${prestador.precoHora}/hora</p>
                <div class="certificacoes">
                    ${prestador.certificacoes.map(cert => `<span class="badge">${cert.toUpperCase()}</span>`).join('')}
                </div>
                <div class="disponibilidade">
                    <h4>Disponibilidade:</h4>
                    ${prestador.disponibilidade.map(d => `<span class="badge">${d}</span>`).join('')}
                </div>
            </div>
            <div class="comentarios">
                <h3>Avaliações</h3>
                ${prestador.comentarios.map(c => `
                    <div class="comentario">
                        <p><strong>${c.usuario}</strong> - ⭐ ${c.nota}</p>
                        <p>${c.texto}</p>
                    </div>
                `).join('')}
            </div>
            <div class="perfil-contato">
                <a href="https://wa.me/${prestador.whatsapp}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Contatar via WhatsApp
                </a>
                <a href="mailto:${prestador.email}" class="btn-email">
                    <i class="far fa-envelope"></i> Enviar Email
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Login e Registro
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function login(event) {
    event.preventDefault();
    const email = document.querySelector('#loginForm input[type="email"]').value;
    const senha = document.querySelector('#loginForm input[type="password"]').value;
    
    const usuarios = getLocalStorage('usuarios');
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
        setLocalStorage('usuarioAtual', usuario);
        alert('Login realizado com sucesso!');
        toggleLogin();
        atualizarBotoesLogin();
    } else {
        alert('Email ou senha incorretos!');
    }
}

function logout() {
    localStorage.removeItem('usuarioAtual');
    atualizarBotoesLogin();
}

function atualizarBotoesLogin() {
    const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
    const loginBtn = document.querySelector('.login-btn');
    
    if (usuario) {
        loginBtn.textContent = 'Sair';
        loginBtn.onclick = logout;
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = toggleLogin;
    }
}

// Event Listeners
document.getElementById('loginForm')?.addEventListener('submit', login);
