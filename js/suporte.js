// Dados das FAQs
const faqs = {
    geral: [
        {
            pergunta: "Como funciona o SOS Serviços?",
            resposta: "O SOS Serviços conecta você a profissionais qualificados. Basta buscar o serviço desejado, escolher um profissional com base em avaliações e entrar em contato."
        },
        {
            pergunta: "Os profissionais são verificados?",
            resposta: "Sim, todos os profissionais passam por verificação de documentos e precisam comprovar suas habilidades antes de serem aceitos na plataforma."
        },
        {
            pergunta: "Como faço para me tornar um prestador de serviços?",
            resposta: "Basta se cadastrar como prestador, enviar seus documentos e certificações para verificação. Após aprovação, seu perfil estará disponível na plataforma."
        }
    ],
    pagamentos: [
        {
            pergunta: "Quais formas de pagamento são aceitas?",
            resposta: "Aceitamos cartão de crédito, PIX, boleto bancário e pagamento em dinheiro diretamente ao prestador."
        },
        {
            pergunta: "Como funciona o sistema de reembolso?",
            resposta: "Em caso de insatisfação, você pode solicitar reembolso em até 48h após o serviço, desde que apresente justificativa válida."
        },
        {
            pergunta: "Os preços são fixos?",
            resposta: "Os preços são definidos pelos prestadores e podem variar conforme a complexidade do serviço. Você pode negociar diretamente com o profissional."
        }
    ],
    servicos: [
        {
            pergunta: "Quais tipos de serviços são oferecidos?",
            resposta: "Oferecemos diversos serviços como eletricista, encanador, pintor, diarista, jardineiro, entre outros. Você pode ver a lista completa na página de serviços."
        },
        {
            pergunta: "Como avalio um serviço?",
            resposta: "Após a conclusão do serviço, você receberá um link por email para avaliar o prestador, atribuindo estrelas e deixando um comentário."
        },
        {
            pergunta: "Posso cancelar um serviço agendado?",
            resposta: "Sim, você pode cancelar com até 24h de antecedência sem custo. Cancelamentos com menos de 24h podem estar sujeitos a taxa."
        }
    ],
    conta: [
        {
            pergunta: "Como altero minha senha?",
            resposta: "Acesse seu perfil, vá em 'Configurações' e clique em 'Alterar Senha'. Você receberá um email com as instruções."
        },
        {
            pergunta: "Como atualizo meus dados cadastrais?",
            resposta: "Entre no seu perfil e clique em 'Editar Informações'. Lá você pode atualizar seus dados pessoais e de contato."
        },
        {
            pergunta: "Posso ter mais de uma conta?",
            resposta: "Não, cada CPF/CNPJ pode ter apenas uma conta ativa na plataforma."
        }
    ]
};

// Chatbot
const chatbotResponses = {
    default: "Desculpe, não entendi. Pode reformular sua pergunta?",
    greeting: ["Olá! Como posso ajudar?", "Oi! Em que posso ser útil?", "Olá! Estou aqui para ajudar!"],
    farewell: ["Tchau! Tenha um ótimo dia!", "Até logo! Estamos sempre à disposição!", "Até mais! Volte sempre!"],
    help: "Como posso ajudar você hoje?",
    servicos: "Oferecemos diversos serviços como eletricista, encanador, pintor, diarista, jardineiro, entre outros. Quer conhecer algum serviço específico?",
    pagamento: "Aceitamos cartão de crédito, PIX, boleto bancário e pagamento em dinheiro. Qual forma de pagamento você prefere?",
    horario: "Nosso suporte está disponível de segunda a sexta, das 8h às 20h. Para emergências, temos atendimento 24h via WhatsApp.",
    contato: "Você pode nos contatar pelo telefone 0800 123 4567 ou pelo email suporte@sosservicos.com. Como prefere falar conosco?",
    emergencia: "Para emergências, utilize nosso WhatsApp 24h: (11) 99999-9999. Quer que eu te passe o número?",
    cadastro: "Para se cadastrar, clique no botão 'Cadastre-se' no menu superior. Quer que eu te explique o processo?",
    precos: "Os preços variam de acordo com o serviço e o profissional. Você pode ver os valores no perfil de cada prestador. Quer buscar algum serviço específico?"
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initializeChatbotGlobal();
    initializeQuickContact();
    
    // Se estiver na página de suporte, inicializa o FAQ
    if (window.location.pathname.includes('suporte.html')) {
        initializeFAQ();
    }
});

// FAQ
function initializeFAQ() {
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const categoria = btn.dataset.categoria;
            categoriaBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            carregarFAQs(categoria);
        });
    });

    // Carregar FAQs iniciais
    carregarFAQs('geral');
}

function carregarFAQs(categoria) {
    const container = document.querySelector('.faq-lista');
    container.innerHTML = '';

    faqs[categoria].forEach(faq => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <div class="faq-pergunta">
                ${faq.pergunta}
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-resposta">
                ${faq.resposta}
            </div>
        `;

        item.querySelector('.faq-pergunta').addEventListener('click', () => {
            const resposta = item.querySelector('.faq-resposta');
            resposta.classList.toggle('active');
        });

        container.appendChild(item);
    });
}

// Chatbot
function initializeChatbotGlobal() {
    const chatbot = document.getElementById('chatbot');
    const trigger = document.getElementById('chatbot-trigger');
    
    if (!chatbot || !trigger) return; // Sai se não encontrar os elementos

    const closeBtn = chatbot.querySelector('.close-btn');
    const minimizeBtn = chatbot.querySelector('.minimize-btn');
    const input = chatbot.querySelector('input');
    const sendBtn = chatbot.querySelector('.chatbot-input button');

    trigger.addEventListener('click', () => {
        chatbot.classList.add('active');
        trigger.style.display = 'none';
        addBotMessage(getRandomResponse(chatbotResponses.greeting));
    });

    closeBtn.addEventListener('click', () => {
        chatbot.classList.remove('active');
        trigger.style.display = 'block';
    });

    minimizeBtn.addEventListener('click', () => {
        chatbot.classList.remove('active');
        trigger.style.display = 'block';
    });

    sendBtn.addEventListener('click', () => {
        const mensagem = input.value.trim();
        if (mensagem) {
            addUserMessage(mensagem);
            input.value = '';
            setTimeout(() => {
                const resposta = processarMensagem(mensagem);
                addBotMessage(resposta);
            }, 500);
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const mensagem = input.value.trim();
            if (mensagem) {
                addUserMessage(mensagem);
                input.value = '';
                setTimeout(() => {
                    const resposta = processarMensagem(mensagem);
                    addBotMessage(resposta);
                }, 500);
            }
        }
    });
}

function addUserMessage(mensagem) {
    const messages = document.querySelector('.chatbot-messages');
    const div = document.createElement('div');
    div.className = 'message user';
    div.textContent = mensagem;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function addBotMessage(mensagem) {
    const messages = document.querySelector('.chatbot-messages');
    const div = document.createElement('div');
    div.className = 'message bot';
    div.textContent = mensagem;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function processarMensagem(mensagem) {
    mensagem = mensagem.toLowerCase();
    
    // Cumprimentos
    if (mensagem.includes('oi') || mensagem.includes('olá') || mensagem.includes('ola')) {
        return getRandomResponse(chatbotResponses.greeting);
    }
    
    // Despedidas
    if (mensagem.includes('tchau') || mensagem.includes('até') || mensagem.includes('adeus')) {
        return getRandomResponse(chatbotResponses.farewell);
    }
    
    // Serviços
    if (mensagem.includes('serviço') || mensagem.includes('servico') || mensagem.includes('trabalho')) {
        return chatbotResponses.servicos;
    }
    
    // Pagamentos
    if (mensagem.includes('pagamento') || mensagem.includes('pagar') || mensagem.includes('preço') || mensagem.includes('valor')) {
        return chatbotResponses.pagamento;
    }
    
    // Horários
    if (mensagem.includes('horário') || mensagem.includes('horario') || mensagem.includes('atendimento') || mensagem.includes('funcionamento')) {
        return chatbotResponses.horario;
    }
    
    // Contato
    if (mensagem.includes('contato') || mensagem.includes('falar') || mensagem.includes('telefone') || mensagem.includes('email')) {
        return chatbotResponses.contato;
    }
    
    // Emergência
    if (mensagem.includes('emergência') || mensagem.includes('emergencia') || mensagem.includes('urgente') || mensagem.includes('urgência')) {
        return chatbotResponses.emergencia;
    }
    
    // Cadastro
    if (mensagem.includes('cadastr') || mensagem.includes('registr') || mensagem.includes('conta')) {
        return chatbotResponses.cadastro;
    }
    
    return chatbotResponses.default;
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Adicione após a inicialização do chatbot
function initializeQuickContact() {
    const contactTrigger = document.getElementById('contact-trigger');
    const contactOptions = document.querySelector('.contact-options');
    
    if (!contactTrigger || !contactOptions) return;

    contactTrigger.addEventListener('click', () => {
        contactOptions.classList.toggle('active');
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!contactTrigger.contains(e.target) && !contactOptions.contains(e.target)) {
            contactOptions.classList.remove('active');
        }
    });

    // Adicionar analytics aos cliques (opcional)
    const contactLinks = contactOptions.querySelectorAll('.contact-option');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            const type = link.classList[1]; // phone, whatsapp, ou email
            console.log(`Contato via ${type}`);
            // Aqui você pode adicionar analytics
        });
    });
} 