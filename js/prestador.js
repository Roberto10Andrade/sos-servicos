// Dados de exemplo para a galeria de trabalhos
const trabalhos = [
    {
        id: 1,
        imagem: '../assets/images/trabalhos/trabalho1.jpg',
        titulo: 'Instalação Elétrica Residencial',
        descricao: 'Instalação completa em casa de 150m²'
    },
    {
        id: 2,
        imagem: '../assets/images/trabalhos/trabalho2.jpg',
        titulo: 'Manutenção Preventiva',
        descricao: 'Revisão geral do quadro elétrico'
    },
    {
        id: 3,
        imagem: '../assets/images/trabalhos/trabalho3.jpg',
        titulo: 'Iluminação LED',
        descricao: 'Projeto de iluminação eficiente'
    }
];

// FAQ do prestador
const faqItems = [
    {
        pergunta: 'Qual a forma de pagamento?',
        resposta: 'Aceito pagamentos em dinheiro, PIX, cartão de débito e crédito.'
    },
    {
        pergunta: 'Qual a região de atendimento?',
        resposta: 'Atendo em toda a Grande São Paulo.'
    },
    {
        pergunta: 'Fornece garantia do serviço?',
        resposta: 'Sim, todos os serviços têm garantia de 90 dias.'
    },
    {
        pergunta: 'Qual o prazo médio para agendamento?',
        resposta: 'O prazo médio é de 2 a 3 dias úteis, dependendo da urgência.'
    }
];

// Tipos de serviço
const tiposServico = [
    'Instalação Elétrica',
    'Manutenção Preventiva',
    'Reparo Emergencial',
    'Projeto Elétrico',
    'Instalação de Equipamentos',
    'Adequação de Instalações'
];

document.addEventListener('DOMContentLoaded', () => {
    preencherGaleria();
    preencherFAQ();
    preencherTiposServico();
    inicializarCalendario();
    inicializarHorarios();
});

// Função para preencher a galeria de trabalhos
function preencherGaleria() {
    const galeriaGrid = document.querySelector('.galeria-grid');
    trabalhos.forEach(trabalho => {
        const trabalhoItem = document.createElement('div');
        trabalhoItem.className = 'trabalho-item';
        trabalhoItem.innerHTML = `
            <img src="${trabalho.imagem}" alt="${trabalho.titulo}">
            <div class="trabalho-overlay">
                <h3>${trabalho.titulo}</h3>
                <p>${trabalho.descricao}</p>
            </div>
        `;
        galeriaGrid.appendChild(trabalhoItem);
    });
}

// Função para preencher o FAQ
function preencherFAQ() {
    const faqList = document.querySelector('.faq-list');
    faqList.innerHTML = ''; // Limpa o conteúdo existente
    
    faqItems.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-pergunta" onclick="toggleFAQ(this)">
                <h3>${item.pergunta}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-resposta">
                <p>${item.resposta}</p>
            </div>
        `;
        faqList.appendChild(faqItem);
    });
}

// Função para preencher os tipos de serviço
function preencherTiposServico() {
    const select = document.getElementById('tipoServico');
    tiposServico.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.toLowerCase().replace(/\s+/g, '-');
        option.textContent = tipo;
        select.appendChild(option);
    });
}

// Função para inicializar o calendário
function inicializarCalendario() {
    const calendario = document.getElementById('calendario');
    // Aqui você pode implementar um calendário completo
    // Por enquanto, vamos apenas mostrar uma mensagem
    calendario.innerHTML = `
        <div style="text-align: center; padding: 1rem;">
            Calendário será implementado com uma biblioteca específica
        </div>
    `;
}

// Função para inicializar os horários disponíveis
function inicializarHorarios() {
    const horariosGrid = document.getElementById('horarios-grid');
    const horarios = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
    
    horarios.forEach(horario => {
        const horarioItem = document.createElement('div');
        horarioItem.className = 'horario-item';
        horarioItem.textContent = horario;
        horarioItem.onclick = () => selecionarHorario(horarioItem);
        horariosGrid.appendChild(horarioItem);
    });
}

// Função para selecionar horário
function selecionarHorario(elemento) {
    document.querySelectorAll('.horario-item').forEach(item => {
        item.classList.remove('selecionado');
    });
    elemento.classList.add('selecionado');
}

// Função para alternar FAQ
function toggleFAQ(elemento) {
    const item = elemento.parentElement;
    const estaAtivo = item.classList.contains('ativo');
    
    // Fecha todos os itens
    document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.classList.remove('ativo');
    });
    
    // Abre o item clicado se não estava ativo
    if (!estaAtivo) {
        item.classList.add('ativo');
    }
}

// Função para carregar mais trabalhos
function carregarMaisTrabalhos() {
    // Implementar lógica para carregar mais trabalhos
    alert('Funcionalidade de carregar mais trabalhos será implementada');
}

// Listener para o formulário de agendamento
document.getElementById('agendamentoForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const horarioSelecionado = document.querySelector('.horario-item.selecionado')?.textContent;
    if (!horarioSelecionado) {
        alert('Por favor, selecione um horário');
        return;
    }
    
    // Aqui você implementaria a lógica de envio do agendamento
    alert('Agendamento solicitado com sucesso!');
}); 