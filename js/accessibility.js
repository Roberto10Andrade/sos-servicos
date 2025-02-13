// Controles de tema e acessibilidade
function toggleTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Atualizar visual dos botões
    document.querySelectorAll('.accessibility-controls button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(theme)) {
            btn.classList.add('active');
        }
    });

    // Anunciar mudança para leitores de tela
    announceChange(`Tema alterado para ${theme}`);
}

function adjustFontSize(action) {
    const html = document.documentElement;
    const currentSize = html.getAttribute('data-font-size') || 'normal';
    
    const sizes = {
        'normal': 'large',
        'large': 'larger',
        'larger': 'normal'
    };
    
    const newSize = action === 'increase' ? sizes[currentSize] : 'normal';
    html.setAttribute('data-font-size', newSize);
    localStorage.setItem('font-size', newSize);

    // Anunciar mudança para leitores de tela
    const sizeNames = { normal: 'normal', large: 'grande', larger: 'muito grande' };
    announceChange(`Tamanho da fonte alterado para ${sizeNames[newSize]}`);
}

function toggleSpacing() {
    const html = document.documentElement;
    const currentSpacing = html.getAttribute('data-spacing');
    
    if (currentSpacing === 'increased') {
        html.removeAttribute('data-spacing');
        localStorage.removeItem('spacing');
        announceChange('Espaçamento normal');
    } else {
        html.setAttribute('data-spacing', 'increased');
        localStorage.setItem('spacing', 'increased');
        announceChange('Espaçamento aumentado');
    }
}

// Função para anunciar mudanças para leitores de tela
function announceChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.classList.add('sr-only');
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Carregar preferências salvas
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('font-size');
    const savedSpacing = localStorage.getItem('spacing');
    
    if (savedTheme) toggleTheme(savedTheme);
    if (savedFontSize) document.documentElement.setAttribute('data-font-size', savedFontSize);
    if (savedSpacing) document.documentElement.setAttribute('data-spacing', savedSpacing);

    // Melhorar acessibilidade geral
    enhanceAccessibility();
});

// Melhorar acessibilidade geral
function enhanceAccessibility() {
    // Adicionar roles e labels para elementos interativos
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        const icon = button.querySelector('i');
        if (icon) {
            const iconClass = Array.from(icon.classList)
                .find(cls => cls.startsWith('fa-'));
            if (iconClass) {
                button.setAttribute('aria-label', 
                    iconClass.replace('fa-', '').replace('-', ' '));
            }
        }
    });
    
    // Adicionar descrições para imagens
    document.querySelectorAll('img:not([alt])').forEach(img => {
        img.alt = img.src.split('/').pop().split('.')[0]
            .replace(/[_-]/g, ' ');
    });

    // Adicionar roles ARIA apropriados
    document.querySelectorAll('nav').forEach(nav => 
        nav.setAttribute('role', 'navigation'));
    document.querySelectorAll('main').forEach(main => 
        main.setAttribute('role', 'main'));
    document.querySelectorAll('footer').forEach(footer => 
        footer.setAttribute('role', 'contentinfo'));
    
    // Melhorar navegação por teclado
    document.querySelectorAll('a, button, input, select').forEach(element => {
        if (!element.getAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
    });
}

function toggleAccessibilityMenu() {
    const menu = document.querySelector('.accessibility-menu');
    menu.classList.toggle('show');

    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', function closeMenu(e) {
        const button = document.querySelector('.accessibility-btn');
        const menu = document.querySelector('.accessibility-menu');
        
        if (!button.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
            document.removeEventListener('click', closeMenu);
        }
    });
}

// Prevenir que o menu feche quando clicar dentro dele
document.querySelector('.accessibility-menu').addEventListener('click', (e) => {
    e.stopPropagation();
}); 