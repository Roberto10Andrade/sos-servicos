// Função auxiliar para gerar número aleatório único
// const usedPhotoNumbers = new Set();
// function getUniquePhotoNumber(gender) { ... }

// Dados mockados para simulação
const prestadores = [
    { 
        id: 1,
        nome: "João Silva",
        servico: "Eletricista",
        descricao: "Especialista em instalações elétricas residenciais e comerciais. Realizo reparos, instalação de quadros, iluminação LED e sistemas de energia solar.",
        avaliacao: 4.8,
        experiencia: "experiente",
        precoHora: 80,
        disponibilidade: ["manha", "tarde"],
        certificacoes: ["senai", "crea"],
        comentarios: [
            { usuario: "Maria", texto: "Ótimo profissional, muito pontual", nota: 5 },
            { usuario: "Pedro", texto: "Trabalho bem feito", nota: 4.5 }
        ],
        foto: "https://randomuser.me/api/portraits/men/11.jpg",
        whatsapp: "5511999999999",
        email: "joao@email.com",
        pesquisas: 150
    },
    { 
        id: 2,
        nome: "Maria Santos",
        servico: "Diarista",
        descricao: "Limpeza residencial completa, incluindo organização de ambientes, lavagem de roupas e passadoria. Especialista em limpeza pós-obra.",
        avaliacao: 4.9,
        experiencia: "experiente",
        precoHora: 50,
        disponibilidade: ["manha", "tarde", "noite"],
        certificacoes: ["sebrae"],
        comentarios: [
            { usuario: "João", texto: "Excelente trabalho", nota: 5 },
            { usuario: "Ana", texto: "Muito profissional", nota: 4.8 }
        ],
        foto: "https://randomuser.me/api/portraits/women/12.jpg",
        whatsapp: "5511999999998",
        email: "maria@email.com",
        pesquisas: 200
    },
    { 
        id: 3,
        nome: "Carlos Oliveira",
        servico: "Encanador",
        descricao: "Especializado em reparos hidráulicos, detecção de vazamentos, instalação de aquecedores e manutenção de sistemas de esgoto.",
        avaliacao: 4.7,
        experiencia: "experiente",
        precoHora: 70,
        disponibilidade: ["tarde", "noite", "fimdesemana"],
        certificacoes: ["senai"],
        comentarios: [
            { usuario: "Paulo", texto: "Resolveu o problema rapidamente", nota: 5 },
            { usuario: "Sandra", texto: "Preço justo", nota: 4.4 }
        ],
        foto: "https://randomuser.me/api/portraits/men/13.jpg",
        whatsapp: "5511999999997",
        email: "carlos@email.com",
        pesquisas: 120
    },
    {
        id: 4,
        nome: "Ana Pereira",
        servico: "Pintora",
        descricao: "Pintura residencial e comercial, texturização, efeitos decorativos e restauração. Trabalho com tintas ecológicas e técnicas modernas.",
        avaliacao: 4.9,
        experiencia: "experiente",
        precoHora: 65,
        disponibilidade: ["manha", "tarde"],
        certificacoes: ["senai", "sebrae"],
        comentarios: [
            { usuario: "Roberto", texto: "Acabamento perfeito", nota: 5 },
            { usuario: "Carla", texto: "Muito caprichosa", nota: 4.8 }
        ],
        foto: "https://randomuser.me/api/portraits/women/14.jpg",
        whatsapp: "5511999999996",
        email: "ana@email.com",
        pesquisas: 180
    },
    {
        id: 5,
        nome: "Pedro Souza",
        servico: "Jardineiro",
        descricao: "Paisagismo, manutenção de jardins, poda de árvores e controle de pragas. Especialista em jardins verticais e hortas orgânicas.",
        avaliacao: 4.6,
        experiencia: "intermediario",
        precoHora: 55,
        disponibilidade: ["manha", "tarde", "fimdesemana"],
        certificacoes: ["sebrae"],
        comentarios: [
            { usuario: "Lucia", texto: "Jardim ficou lindo", nota: 4.5 },
            { usuario: "Miguel", texto: "Muito dedicado", nota: 4.7 }
        ],
        foto: "https://randomuser.me/api/portraits/men/15.jpg",
        whatsapp: "5511999999995",
        email: "pedro@email.com",
        pesquisas: 90
    },
    {
        id: 6,
        nome: "Mariana Costa",
        servico: "Designer de Interiores",
        descricao: "Projetos de interiores residenciais e comerciais, consultoria em decoração, reforma e organização de ambientes.",
        avaliacao: 4.8,
        experiencia: "experiente",
        precoHora: 120,
        disponibilidade: ["manha", "tarde"],
        certificacoes: ["crea", "sebrae"],
        comentarios: [
            { usuario: "Patricia", texto: "Transformou minha casa", nota: 5 },
            { usuario: "Fernando", texto: "Excelente profissional", nota: 4.6 }
        ],
        foto: "https://randomuser.me/api/portraits/women/16.jpg",
        whatsapp: "5511999999994",
        email: "mariana@email.com",
        pesquisas: 160
    },
    {
        id: 7,
        nome: "Lucas Santos",
        servico: "Técnico em Ar Condicionado",
        descricao: "Instalação, manutenção e limpeza de ar condicionado split e janela. Especialista em sistemas centrais e industriais.",
        avaliacao: 4.7,
        experiencia: "experiente",
        precoHora: 90,
        disponibilidade: ["manha", "tarde", "noite"],
        certificacoes: ["senai"],
        comentarios: [
            { usuario: "Ricardo", texto: "Muito profissional", nota: 4.7 },
            { usuario: "Amanda", texto: "Ótimo serviço", nota: 4.7 }
        ],
        foto: "https://randomuser.me/api/portraits/men/17.jpg",
        whatsapp: "5511999999993",
        email: "lucas@email.com",
        pesquisas: 140
    },
    {
        id: 8,
        nome: "Beatriz Lima",
        servico: "Cuidadora de Idosos",
        descricao: "Cuidados especializados para idosos, acompanhamento em consultas, administração de medicamentos e atividades recreativas.",
        avaliacao: 4.9,
        experiencia: "experiente",
        precoHora: 45,
        disponibilidade: ["manha", "tarde", "noite", "fimdesemana"],
        certificacoes: ["sebrae", "tecnico_enfermagem"],
        comentarios: [
            { usuario: "José", texto: "Muito atenciosa", nota: 5 },
            { usuario: "Maria", texto: "Excelente cuidadora", nota: 4.8 }
        ],
        foto: "https://randomuser.me/api/portraits/women/18.jpg",
        whatsapp: "5511999999992",
        email: "beatriz@email.com",
        pesquisas: 170
    },
    {
        id: 9,
        nome: "Rafael Almeida",
        servico: "Marceneiro",
        descricao: "Fabricação de móveis sob medida, restauração de móveis antigos e instalação de armários planejados.",
        avaliacao: 4.8,
        experiencia: "experiente",
        precoHora: 85,
        disponibilidade: ["manha", "tarde"],
        certificacoes: ["senai", "sebrae"],
        comentarios: [
            { usuario: "Clara", texto: "Móveis perfeitos", nota: 4.8 },
            { usuario: "Paulo", texto: "Acabamento impecável", nota: 4.8 }
        ],
        foto: "https://randomuser.me/api/portraits/men/19.jpg",
        whatsapp: "5511999999991",
        email: "rafael@email.com",
        pesquisas: 130
    },
    {
        id: 10,
        nome: "Juliana Martins",
        servico: "Personal Organizer",
        descricao: "Organização de ambientes residenciais e comerciais, otimização de espaços e consultoria em organização pessoal.",
        avaliacao: 4.7,
        experiencia: "intermediario",
        precoHora: 70,
        disponibilidade: ["manha", "tarde"],
        certificacoes: ["sebrae"],
        comentarios: [
            { usuario: "Marcia", texto: "Transformou minha casa", nota: 4.7 },
            { usuario: "Eduardo", texto: "Muito organizada", nota: 4.7 }
        ],
        foto: "https://randomuser.me/api/portraits/women/20.jpg",
        whatsapp: "5511999999990",
        email: "juliana@email.com",
        pesquisas: 110
    },
    {
        id: 11,
        nome: "Fernando Costa",
        servico: "Técnico em Informática",
        descricao: "Manutenção de computadores e notebooks, instalação de redes, recuperação de dados e remoção de vírus.",
        avaliacao: 4.6,
        experiencia: "experiente",
        precoHora: 75,
        disponibilidade: ["tarde", "noite", "fimdesemana"],
        certificacoes: ["senai", "microsoft"],
        comentarios: [
            { usuario: "Renata", texto: "Resolveu rapidamente", nota: 4.6 },
            { usuario: "Carlos", texto: "Muito conhecimento", nota: 4.6 }
        ],
        foto: "https://randomuser.me/api/portraits/men/21.jpg",
        whatsapp: "5511999999989",
        email: "fernando@email.com",
        pesquisas: 145
    },
    {
        id: 12,
        nome: "Carolina Silva",
        servico: "Professora Particular",
        descricao: "Aulas particulares de matemática, física e química para ensino fundamental e médio. Preparação para vestibular e ENEM.",
        avaliacao: 4.9,
        experiencia: "experiente",
        precoHora: 60,
        disponibilidade: ["manha", "tarde", "noite"],
        certificacoes: ["licenciatura", "especializacao"],
        comentarios: [
            { usuario: "Marina", texto: "Ótima professora", nota: 5 },
            { usuario: "Lucas", texto: "Muito didática", nota: 4.8 }
        ],
        foto: "https://randomuser.me/api/portraits/women/22.jpg",
        whatsapp: "5511999999988",
        email: "carolina@email.com",
        pesquisas: 190
    }
];

// Dados mockados para promoções e cupons
const promocoes = [
    {
        id: 1,
        desconto: 30,
        codigo: "PRIMEIRA30",
        descricao: "30% OFF na primeira contratação",
        validade: "2024-02-26",
        restricoes: "Válido apenas para primeira contratação"
    },
    {
        id: 2,
        desconto: 15,
        codigo: "FIMDESEMANA15",
        descricao: "15% OFF em serviços no fim de semana",
        validade: "2024-02-27",
        restricoes: "Válido apenas para serviços agendados para sábado e domingo"
    },
    {
        id: 3,
        desconto: 20,
        codigo: "INDICACAO20",
        descricao: "20% OFF para indicações",
        validade: "2024-02-28",
        restricoes: "Válido apenas para novos clientes indicados"
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
    
    // Inicializar promoções e ranking na página inicial
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        initializePromocoes();
        initializeRanking();
    }
    
    // Inicializar filtros na página de serviços
    if (window.location.pathname.includes('servicos.html')) {
        initializeFiltros();
        listarPrestadores();
    }

    // Inicializa cadastro se estiver na página de cadastro
    if (window.location.pathname.includes('cadastro.html')) {
        initializeCadastro();
    }

    // Inicializa o chatbot em todas as páginas
    initializeChatbotGlobal();

    // Carregar detalhes do prestador se estiver na página correta
    carregarDetalhesPrestador();
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

// Funções para ranking e mais pesquisados
function initializeRanking() {
    const rankingTabs = document.querySelectorAll('.ranking-tab');
    rankingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            rankingTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            atualizarRanking(tab.dataset.tipo);
        });
    });

    // Inicializar com mais avaliados
    atualizarRanking('avaliados');
}

function atualizarRanking(tipo) {
    const prestadores = getLocalStorage('prestadores');
    let prestadoresOrdenados = [...prestadores];

    switch(tipo) {
        case 'avaliados':
            prestadoresOrdenados.sort((a, b) => b.avaliacao - a.avaliacao);
            break;
        case 'pesquisados':
            prestadoresOrdenados.sort((a, b) => (b.pesquisas || 0) - (a.pesquisas || 0));
            break;
        case 'tendencias':
            prestadoresOrdenados.sort((a, b) => 
                ((b.pesquisas || 0) + b.avaliacao * 10) - 
                ((a.pesquisas || 0) + a.avaliacao * 10)
            );
            break;
    }

    exibirRanking(prestadoresOrdenados.slice(0, 5));
}

function exibirRanking(prestadores) {
    const container = document.querySelector('.ranking-cards');
    if (!container) return;

    container.innerHTML = '';
    
    prestadores.forEach((prestador, index) => {
        const card = document.createElement('div');
        card.className = 'ranking-card';
        
        card.innerHTML = `
            <div class="ranking-position">#${index + 1}</div>
            <img src="${prestador.foto}" alt="${prestador.nome}" class="prestador-foto">
            <div class="ranking-info">
                <h3>${prestador.nome}</h3>
                <div class="avaliacao">★★★★★ <span>(${prestador.avaliacao.toFixed(1)})</span></div>
                <div class="ranking-stats">
                    <span class="ranking-stat-item">
                        <i class="fas fa-user-check"></i>
                        ${prestador.comentarios.length} avaliações
                    </span>
                    <span class="ranking-stat-item">
                        <i class="fas fa-search"></i>
                        ${prestador.pesquisas || 0} pesquisas
                    </span>
                </div>
            </div>
            ${index === 0 ? `
                <span class="trending-badge">
                    <i class="fas fa-arrow-trend-up"></i>
                    Em alta
                </span>
            ` : ''}
        `;
        
        container.appendChild(card);
    });
}

// Funções para promoções e cupons
function initializePromocoes() {
    const container = document.querySelector('.promocoes-grid');
    if (!container) return;

    promocoes.forEach(promocao => {
        const card = document.createElement('div');
        card.className = 'cupom-card';
        
        card.innerHTML = `
            <div class="cupom-desconto">${promocao.desconto}% OFF</div>
            <h3>${promocao.descricao}</h3>
            <div class="cupom-codigo">${promocao.codigo}</div>
            <div class="cupom-validade">
                <i class="far fa-calendar-alt"></i>
                Válido até ${new Date(promocao.validade).toLocaleDateString()}
            </div>
            <p class="cupom-restricoes">${promocao.restricoes}</p>
            <button class="btn-copiar-cupom" onclick="copiarCupom('${promocao.codigo}')">
                Copiar Cupom
            </button>
        `;
        
        container.appendChild(card);
    });
}

function copiarCupom(codigo) {
    navigator.clipboard.writeText(codigo).then(() => {
        alert('Cupom copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar cupom:', err);
        alert('Erro ao copiar cupom. Por favor, tente novamente.');
    });
}

// Funções para o cadastro
function initializeCadastro() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.cadastro-form');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            // Atualiza botões
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Atualiza formulários
            forms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `form${tab.charAt(0).toUpperCase() + tab.slice(1)}`) {
                    form.classList.add('active');
                }
            });
        });
    });

    // Inicializa formulários
    document.getElementById('formCliente')?.addEventListener('submit', cadastrarCliente);
    document.getElementById('formPrestador')?.addEventListener('submit', cadastrarPrestador);
}

function cadastrarCliente(event) {
    event.preventDefault();
    
    const cliente = {
        tipo: 'cliente',
        nome: document.getElementById('clienteNome').value,
        email: document.getElementById('clienteEmail').value,
        telefone: document.getElementById('clienteTelefone').value,
        senha: document.getElementById('clienteSenha').value,
        endereco: document.getElementById('clienteEndereco').value,
        cep: document.getElementById('clienteCEP').value,
        dataCadastro: new Date(),
        status: 'ativo'
    };

    const clientes = getLocalStorage('clientes');
    clientes.push(cliente);
    setLocalStorage('clientes', clientes);

    alert('Cadastro realizado com sucesso!');
    window.location.href = '/index.html';
}

function cadastrarPrestador(event) {
    event.preventDefault();
    
    const prestador = {
        tipo: 'prestador',
        nome: document.getElementById('prestadorNome').value,
        email: document.getElementById('prestadorEmail').value,
        telefone: document.getElementById('prestadorTelefone').value,
        cpfCnpj: document.getElementById('prestadorCPF').value,
        servicos: Array.from(document.getElementById('prestadorServicos').selectedOptions).map(opt => opt.value),
        descricao: document.getElementById('prestadorDescricao').value,
        dataCadastro: new Date(),
        status: 'pendente',
        avaliacoes: [],
        portfolio: [],
        documentos: []
    };

    // Tratamento dos arquivos
    const documentos = document.getElementById('prestadorDocumentos').files;
    const portfolio = document.getElementById('prestadorPortfolio').files;

    // Aqui você implementaria o upload dos arquivos para um servidor
    // Por enquanto, apenas simulamos o processo

    const prestadores = getLocalStorage('prestadores');
    prestadores.push(prestador);
    setLocalStorage('prestadores', prestadores);

    alert('Cadastro realizado com sucesso! Aguarde a validação dos seus documentos.');
    window.location.href = '/index.html';
}

// Sistema de avaliações
function exibirAvaliacoes(prestadorId) {
    const prestador = prestadores.find(p => p.id === prestadorId);
    if (!prestador) return;

    const container = document.querySelector('.avaliacoes-container');
    if (!container) return;

    // Calcular média das avaliações
    const mediaAvaliacoes = prestador.comentarios.reduce((acc, curr) => acc + curr.nota, 0) / prestador.comentarios.length;

    // Exibir resumo das avaliações
    const resumoHTML = `
        <div class="avaliacoes-resumo">
            <div class="media-geral">
                <span class="nota">${mediaAvaliacoes.toFixed(1)}</span>
                <div class="estrelas">
                    ${gerarEstrelas(mediaAvaliacoes)}
                </div>
                <span class="total">${prestador.comentarios.length} avaliações</span>
            </div>
            <div class="distribuicao">
                ${gerarDistribuicaoAvaliacoes(prestador.comentarios)}
            </div>
        </div>
    `;

    // Exibir comentários
    const comentariosHTML = `
        <div class="comentarios-lista">
            ${prestador.comentarios.map(comentario => `
                <div class="comentario-item">
                    <div class="comentario-header">
                        <span class="usuario">${comentario.usuario}</span>
                        <div class="estrelas">${gerarEstrelas(comentario.nota)}</div>
                        <span class="data">${formatarData(comentario.data || new Date())}</span>
                    </div>
                    <p class="texto">${comentario.texto}</p>
                    ${comentario.resposta ? `
                        <div class="resposta-prestador">
                            <strong>Resposta do prestador:</strong>
                            <p>${comentario.resposta}</p>
                        </div>
                    ` : ''}
                    ${!comentario.resposta && prestadorLogado?.id === prestadorId ? `
                        <button onclick="responderAvaliacao(${prestadorId}, ${comentario.id})" class="btn-responder">
                            Responder
                        </button>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = resumoHTML + comentariosHTML;
}

function gerarEstrelas(nota) {
    let estrelas = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= nota) {
            estrelas += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= nota) {
            estrelas += '<i class="fas fa-star-half-alt"></i>';
        } else {
            estrelas += '<i class="far fa-star"></i>';
        }
    }
    return estrelas;
}

function gerarDistribuicaoAvaliacoes(comentarios) {
    const distribuicao = [0, 0, 0, 0, 0]; // 1 a 5 estrelas
    comentarios.forEach(c => distribuicao[Math.floor(c.nota) - 1]++);
    
    return distribuicao.map((qtd, idx) => {
        const porcentagem = (qtd / comentarios.length) * 100;
        return `
            <div class="barra-distribuicao">
                <span class="estrelas">${5 - idx} <i class="fas fa-star"></i></span>
                <div class="barra">
                    <div class="preenchimento" style="width: ${porcentagem}%"></div>
                </div>
                <span class="quantidade">${qtd}</span>
            </div>
        `;
    }).join('');
}

// Função para adicionar avaliação
function avaliarServico(prestadorId) {
    const modal = document.createElement('div');
    modal.className = 'modal avaliar-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Avaliar Serviço</h2>
            <form id="formAvaliacao" onsubmit="submitAvaliacao(event, ${prestadorId})">
                <div class="rating">
                    <input type="radio" id="star5" name="rating" value="5" required>
                    <label for="star5"><i class="fas fa-star"></i></label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4"><i class="fas fa-star"></i></label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3"><i class="fas fa-star"></i></label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2"><i class="fas fa-star"></i></label>
                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1"><i class="fas fa-star"></i></label>
                </div>
                <textarea name="comentario" placeholder="Conte sua experiência..." required></textarea>
                <button type="submit" class="btn-avaliar">Enviar Avaliação</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('.close').onclick = () => modal.remove();
}

// Função para enviar avaliação
function submitAvaliacao(event, prestadorId) {
    event.preventDefault();
    const form = event.target;
    const nota = form.rating.value;
    const texto = form.comentario.value;

    const prestador = prestadores.find(p => p.id === prestadorId);
    if (!prestador) return;

    const novaAvaliacao = {
        id: prestador.comentarios.length + 1,
        usuario: 'Cliente Atual', // Idealmente, pegar do usuário logado
        nota: Number(nota),
        texto,
        data: new Date()
    };

    prestador.comentarios.push(novaAvaliacao);
    setLocalStorage('prestadores', prestadores);
    
    // Fechar modal e atualizar exibição
    event.target.closest('.modal').remove();
    exibirAvaliacoes(prestadorId);
}

// Função para responder avaliação
function responderAvaliacao(prestadorId, comentarioId) {
    const modal = document.createElement('div');
    modal.className = 'modal responder-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Responder Avaliação</h2>
            <form onsubmit="submitResposta(event, ${prestadorId}, ${comentarioId})">
                <textarea name="resposta" placeholder="Digite sua resposta..." required></textarea>
                <button type="submit">Enviar Resposta</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('.close').onclick = () => modal.remove();
}

// Função para enviar resposta
function submitResposta(event, prestadorId, comentarioId) {
    event.preventDefault();
    const resposta = event.target.resposta.value;

    const prestador = prestadores.find(p => p.id === prestadorId);
    if (!prestador) return;

    const comentario = prestador.comentarios.find(c => c.id === comentarioId);
    if (!comentario) return;

    comentario.resposta = resposta;
    setLocalStorage('prestadores', prestadores);

    // Fechar modal e atualizar exibição
    event.target.closest('.modal').remove();
    exibirAvaliacoes(prestadorId);
}

// Função para buscar serviços
function buscarServicos() {
    const categoria = document.getElementById('categoria').value.toLowerCase();
    const busca = document.getElementById('busca').value.toLowerCase();
    const experiencia = document.getElementById('experiencia')?.value;
    const avaliacaoMinima = document.querySelector('input[name="avaliacao"]:checked')?.value;
    const precoMin = parseInt(document.getElementById('precoMin')?.value || 0);
    const precoMax = parseInt(document.getElementById('precoMax')?.value || 200);
    
    // Obter certificações selecionadas
    const certificacoesSelecionadas = Array.from(
        document.querySelectorAll('.checkbox-grupo input[type="checkbox"]:checked')
    ).map(cb => cb.value);
    
    // Obter disponibilidades selecionadas
    const disponibilidadesSelecionadas = Array.from(
        document.querySelectorAll('.checkbox-grupo input[type="checkbox"]:checked')
    ).map(cb => cb.value);
    
    // Filtrar prestadores
    let resultados = prestadores.filter(prestador => {
        // Filtro de texto e categoria
        const matchTexto = !busca || 
            prestador.nome.toLowerCase().includes(busca) ||
            prestador.servico.toLowerCase().includes(busca) ||
            prestador.descricao.toLowerCase().includes(busca);
            
        const matchCategoria = !categoria || prestador.servico.toLowerCase() === categoria;
        
        // Filtro de experiência
        const matchExperiencia = !experiencia || prestador.experiencia === experiencia;
        
        // Filtro de avaliação
        const matchAvaliacao = !avaliacaoMinima || prestador.avaliacao >= parseFloat(avaliacaoMinima);
        
        // Filtro de preço
        const matchPreco = prestador.precoHora >= precoMin && prestador.precoHora <= precoMax;
        
        // Filtro de certificações
        const matchCertificacoes = certificacoesSelecionadas.length === 0 || 
            certificacoesSelecionadas.every(cert => prestador.certificacoes.includes(cert));
            
        // Filtro de disponibilidade
        const matchDisponibilidade = disponibilidadesSelecionadas.length === 0 ||
            disponibilidadesSelecionadas.some(disp => prestador.disponibilidade.includes(disp));
            
        return matchTexto && matchCategoria && matchExperiencia && 
               matchAvaliacao && matchPreco && matchCertificacoes && 
               matchDisponibilidade;
    });
    
    // Ordenação
    const ordenacao = document.getElementById('ordenar')?.value;
    if (ordenacao) {
        switch(ordenacao) {
            case 'avaliacao':
                resultados.sort((a, b) => b.avaliacao - a.avaliacao);
                break;
            case 'preco_menor':
                resultados.sort((a, b) => a.precoHora - b.precoHora);
                break;
            case 'preco_maior':
                resultados.sort((a, b) => b.precoHora - a.precoHora);
                break;
            case 'experiencia':
                const expPeso = { 'iniciante': 1, 'intermediario': 2, 'experiente': 3 };
                resultados.sort((a, b) => expPeso[b.experiencia] - expPeso[a.experiencia]);
                break;
            default:
                // Relevância (padrão): avaliação + número de pesquisas
                resultados.sort((a, b) => {
                    const scoreA = a.avaliacao * 10 + (a.pesquisas || 0) / 100;
                    const scoreB = b.avaliacao * 10 + (b.pesquisas || 0) / 100;
                    return scoreB - scoreA;
                });
        }
    }
    
    // Exibir resultados
    exibirResultados(resultados);
}

// Funções auxiliares
function formatarPeriodo(periodo) {
    const periodos = {
        manha: 'Manhã',
        tarde: 'Tarde',
        noite: 'Noite',
        fimdesemana: 'Fim de Semana'
    };
    return periodos[periodo] || periodo;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar busca ao pressionar Enter no campo de busca
    document.getElementById('busca').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarServicos();
        }
    });

    // Buscar automaticamente ao selecionar categoria
    document.getElementById('categoria').addEventListener('change', buscarServicos);
});

// Adicione a função para redirecionar para a página de detalhes
function verPrestador(id) {
    // Prevenir o comportamento padrão do evento de clique
    if (event) event.preventDefault();
    
    // Obter o caminho base do site
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
    
    // Redirecionar para a página do prestador
    window.location.href = `${basePath}pages/prestador.html?id=${id}`;
}

// Adicione a função para carregar os detalhes do prestador
function carregarDetalhesPrestador() {
    // Verificar se estamos na página de detalhes
    if (!window.location.pathname.includes('prestador.html')) return;

    // Pegar o ID da URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    
    if (!id) {
        window.location.href = '../index.html';
        return;
    }

    // Encontrar o prestador
    const prestador = prestadores.find(p => p.id === id);
    if (!prestador) {
        window.location.href = '../index.html';
        return;
    }

    // Exibir detalhes
    const container = document.querySelector('.prestador-detalhes');
    if (!container) return;

    container.innerHTML = `
        <div class="prestador-header">
            <img src="${prestador.foto}" alt="${prestador.nome}" class="prestador-foto-grande">
            <div class="prestador-info-principal">
                <h1>${prestador.nome}</h1>
                <p class="servico-principal">${prestador.servico}</p>
                <div class="avaliacao-principal">
                    ${gerarEstrelas(prestador.avaliacao)}
                    <span>(${prestador.avaliacao.toFixed(1)})</span>
                </div>
            </div>
        </div>
        
        <div class="prestador-corpo">
            <div class="prestador-sobre">
                <h2>Sobre</h2>
                <p>${prestador.descricao}</p>
            </div>

            <div class="prestador-certificacoes">
                <h2>Certificações</h2>
                <div class="badges-lista">
                    ${prestador.certificacoes.map(cert => `
                        <span class="badge ${cert}">${cert.toUpperCase()}</span>
                    `).join('')}
                </div>
            </div>

            <div class="prestador-disponibilidade">
                <h2>Disponibilidade</h2>
                <div class="periodos-lista">
                    ${prestador.disponibilidade.map(disp => `
                        <span class="periodo ${disp}">${formatarPeriodo(disp)}</span>
                    `).join('')}
                </div>
            </div>

            <div class="prestador-preco">
                <h2>Preço por Hora</h2>
                <div class="preco-valor">R$ ${prestador.precoHora.toFixed(2)}</div>
            </div>

            <div class="prestador-acoes">
                <a href="https://wa.me/${prestador.whatsapp}" class="btn-whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    Contatar via WhatsApp
                </a>
                <a href="mailto:${prestador.email}" class="btn-email">
                    <i class="fas fa-envelope"></i>
                    Enviar E-mail
                </a>
                <button onclick="avaliarServico(${prestador.id})" class="btn-avaliar">
                    <i class="fas fa-star"></i>
                    Avaliar Serviço
                </button>
            </div>
        </div>
    `;

    // Carregar avaliações
    exibirAvaliacoes(id);
}

// Adicionar estilo CSS para o cursor pointer nos cards
const style = document.createElement('style');
style.textContent = `
    .prestador-card {
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .prestador-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--hover-shadow);
    }
`;
document.head.appendChild(style);

// Adicione esta função para exibir os resultados
function exibirResultados(resultados) {
    const container = document.querySelector('#lista-servicos');
    if (!container) return;
    
    // Atualizar contador de resultados
    const totalElement = document.getElementById('totalResultados');
    if (totalElement) {
        totalElement.textContent = resultados.length;
    }
    
    if (resultados.length === 0) {
        container.innerHTML = `
            <div class="sem-resultados">
                <i class="fas fa-search"></i>
                <h3>Nenhum resultado encontrado</h3>
                <p>Tente outros termos ou categorias</p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="prestadores-grid">
                ${resultados.map(prestador => `
                    <div class="prestador-card" 
                         onclick="verPrestador(${prestador.id})"
                         role="button"
                         tabindex="0">
                        <div class="prestador-card-header">
                            <img src="${prestador.foto}" alt="${prestador.nome}" class="prestador-foto">
                            <div class="prestador-info-principal">
                                <h3>${prestador.nome}</h3>
                                <p class="servico">${prestador.servico}</p>
                                <div class="avaliacao">
                                    ${gerarEstrelas(prestador.avaliacao)}
                                    <span>(${prestador.avaliacao.toFixed(1)})</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="prestador-card-body">
                            <p class="descricao">${prestador.descricao}</p>
                            
                            <div class="prestador-detalhes">
                                <div class="badges">
                                    ${prestador.certificacoes.map(cert => `
                                        <span class="badge ${cert}">${cert.toUpperCase()}</span>
                                    `).join('')}
                                </div>
                                
                                <div class="disponibilidade">
                                    ${prestador.disponibilidade.map(disp => `
                                        <span class="periodo ${disp}">${formatarPeriodo(disp)}</span>
                                    `).join('')}
                                </div>
                                
                                <div class="experiencia">
                                    <i class="fas fa-briefcase"></i>
                                    <span>${formatarExperiencia(prestador.experiencia)}</span>
                                </div>
                                
                                <div class="preco">
                                    <i class="fas fa-tag"></i>
                                    <span class="valor">R$ ${prestador.precoHora.toFixed(2)}/hora</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="prestador-card-footer">
                            <div class="estatisticas">
                                <span class="pesquisas">
                                    <i class="fas fa-search"></i>
                                    ${prestador.pesquisas} pesquisas
                                </span>
                                <span class="comentarios">
                                    <i class="fas fa-comment"></i>
                                    ${prestador.comentarios.length} avaliações
                                </span>
                            </div>
                            <button class="btn-ver-mais">Ver detalhes</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Adicione esta função auxiliar para formatar a experiência
function formatarExperiencia(exp) {
    const experiencias = {
        'iniciante': 'Iniciante (0-2 anos)',
        'intermediario': 'Intermediário (2-5 anos)',
        'experiente': 'Experiente (5+ anos)'
    };
    return experiencias[exp] || exp;
}

// Adicione esta função auxiliar para gerar estrelas
function gerarEstrelas(avaliacao) {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= avaliacao) {
            estrelas.push('<i class="fas fa-star"></i>');
        } else if (i - 0.5 <= avaliacao) {
            estrelas.push('<i class="fas fa-star-half-alt"></i>');
        } else {
            estrelas.push('<i class="far fa-star"></i>');
        }
    }
    return estrelas.join('');
}

// Adicione esta função auxiliar para formatar período
function formatarPeriodo(periodo) {
    const periodos = {
        'manha': 'Manhã',
        'tarde': 'Tarde',
        'noite': 'Noite',
        'fimdesemana': 'Fim de Semana'
    };
    return periodos[periodo] || periodo;
}
