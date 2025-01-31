// Dados mockados para simulação
const prestadores = [
    { 
        id: 1,
        nome: "João Silva",
        servico: "Eletricista",
        avaliacao: 4.8,
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
    if (!localStorage.getItem('usuarios')) {
        setLocalStorage('usuarios', []);
    }
    
    // Inicializar listagem se estiver na página de serviços
    if (window.location.pathname.includes('servicos.html')) {
        listarPrestadores();
    }
});

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

// Busca e Filtros
function buscarServicos() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const categoria = document.getElementById('categoria').value.toLowerCase();
    const prestadores = getLocalStorage('prestadores');
    
    const resultado = prestadores.filter(p => {
        const matchTermo = p.nome.toLowerCase().includes(termo) || 
                         p.servico.toLowerCase().includes(termo);
        const matchCategoria = !categoria || p.servico.toLowerCase() === categoria;
        return matchTermo && matchCategoria;
    });
    
    exibirResultados(resultado);
}

function exibirResultados(prestadores) {
    const container = document.getElementById('lista-servicos');
    container.innerHTML = '';
    
    prestadores.forEach(prestador => {
        const card = criarCardPrestador(prestador);
        container.appendChild(card);
    });
}

function criarCardPrestador(prestador) {
    const card = document.createElement('div');
    card.className = 'prestador-card';
    
    const estrelas = "⭐".repeat(Math.round(prestador.avaliacao));
    
    card.innerHTML = `
        <img src="${prestador.foto}" alt="${prestador.nome}" class="prestador-foto">
        <div class="prestador-info">
            <h3>${prestador.nome}</h3>
            <p>${prestador.servico}</p>
            <p class="avaliacao">${estrelas} (${prestador.avaliacao})</p>
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

// Cadastro
function cadastrarPrestador(event) {
    event.preventDefault();
    
    const form = event.target;
    const novoPrestador = {
        id: Date.now(),
        nome: form.nome.value,
        email: form.email.value,
        servico: form.servico.value,
        whatsapp: form.whatsapp.value.replace(/\D/g, ''),
        avaliacao: 0,
        comentarios: [],
        foto: "https://randomuser.me/api/portraits/lego/1.jpg" // Foto padrão
    };
    
    const prestadores = getLocalStorage('prestadores');
    prestadores.push(novoPrestador);
    setLocalStorage('prestadores', prestadores);
    
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'servicos.html';
}

// Perfil e Avaliações
function mostrarPerfilPrestador(prestador) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content perfil-modal">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="perfil-header">
                <img src="${prestador.foto}" alt="${prestador.nome}" class="perfil-foto">
                <h2>${prestador.nome}</h2>
                <p>${prestador.servico}</p>
                <p class="avaliacao">⭐ ${prestador.avaliacao.toFixed(1)}</p>
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

// Event Listeners
document.getElementById('loginForm')?.addEventListener('submit', login);
document.getElementById('cadastroForm')?.addEventListener('submit', cadastrarPrestador);
document.getElementById('busca')?.addEventListener('input', buscarServicos);
document.getElementById('categoria')?.addEventListener('change', buscarServicos);

// Inicializar estado do login
atualizarBotoesLogin();
