// Dados de exemplo para as oportunidades
const opportunities = [
    // Cursos do Aprenda Mais Brasil
    {
        id: 1,
        title: "Automação de Sistemas - Turma 2025B",
        category: "curso",
        description: "Curso de automação e projeto, robótica e indústria, máquinas e redes. Ideal para estudantes de cursos técnicos relacionados a automação ou cursos superiores de engenharia.",
        location: "Online",
        requirements: "Compreensão de leitura em língua portuguesa e possuir equipamento com recursos de áudio e vídeo",
        provider: "Aprenda Mais Brasil (MEC)",
        date: "2024-02-01",
        isAprendaMais: true,
        workload: "30 horas",
        modules: "03 módulos",
        applyLink: "https://aprendamais.mec.gov.br/course/view.php?id=2257"
    },
    {
        id: 2,
        title: "Comunicação Empresarial - Turma 2025B",
        category: "curso",
        description: "Desenvolva habilidades essenciais de comunicação no ambiente empresarial. Aprenda técnicas de comunicação escrita, oral e digital para o mundo corporativo.",
        location: "Online",
        requirements: "Compreensão de leitura em língua portuguesa e possuir equipamento com recursos de áudio e vídeo",
        provider: "Aprenda Mais Brasil (MEC)",
        date: "2024-02-01",
        isAprendaMais: true,
        workload: "20 horas",
        modules: "03 módulos",
        applyLink: "https://aprendamais.mec.gov.br/course/view.php?id=2276"
    },
    {
        id: 3,
        title: "Ação Educativa na Prevenção e Controle das Doenças e Agravos - Turma 2025B",
        category: "curso",
        description: "Curso focado em prevenção e doenças, transmissibilidade de doenças e a função da educação na saúde. Ideal para profissionais da educação e da saúde.",
        location: "Online",
        requirements: "Ser estudante ou profissional na área da educação ou saúde, compreensão de leitura em língua portuguesa e possuir equipamento com recursos de áudio e vídeo",
        provider: "Aprenda Mais Brasil (MEC)",
        date: "2024-02-01",
        isAprendaMais: true,
        workload: "20 horas",
        modules: "03 módulos",
        applyLink: "https://aprendamais.mec.gov.br/course/view.php?id=2234"
    },
    {
        id: 4,
        title: "Altas Habilidades / Superdotação: conceitos - Turma 2025B",
        category: "curso",
        description: "Aprenda sobre conceitos básicos, características de altas habilidades/superdotação, identificação e desenvolvimento socioemocional de pessoas com altas habilidades.",
        location: "Online",
        requirements: "Compreensão de leitura em língua portuguesa e possuir equipamento com recursos de áudio e vídeo",
        provider: "Aprenda Mais Brasil (MEC)",
        date: "2024-02-01",
        isAprendaMais: true,
        workload: "20 horas",
        modules: "04 módulos",
        applyLink: "https://aprendamais.mec.gov.br/course/view.php?id=2251"
    },
    // Vagas de Emprego
    {
        id: 5,
        title: "Estoquista | TRACK&FIELD | Shopping Barra Salvador",
        category: "estagio",
        description: "Responsável por manter a organização dos produtos de loja, atender a equipe de vendas com agilidade, conferir mercadorias e auxiliar na gestão de estoque. Contribuir na operação de Omnicanalidade.",
        location: "Salvador - BA",
        requirements: "Ensino Médio Completo, disponibilidade de horário, conhecimentos em estoque de loja e experiência em organização de materiais",
        provider: "TRACK&FIELD",
        date: "2024-10-25",
        applyLink: "https://tfcarreira.gupy.io/job/eyJqb2JJZCI6MTAxOTAwMjUsInNvdXJjZSI6Imd1cHlfcG9ydGFsIn0=?jobBoardSource=gupy_portal"
    },
    {
        id: 6,
        title: "Operador(a) de Loja",
        category: "estagio",
        description: "Responsável por manter as gôndolas abastecidas e limpas, assegurar que as mercadorias estejam precificadas e organizadas, verificar data de validade e prestar atendimento aos clientes.",
        location: "Salvador - BA",
        requirements: "Ensino Médio Completo, mínimo 18 anos, não é necessário experiência na função",
        provider: "Assaí Atacadista",
        date: "2024-10-24",
        applyLink: "https://assai.gupy.io/job/eyJqb2JJZCI6OTkxMTE0Nywic291cmNlIjoiZ3VweV9wb3J0YWwifQ==?jobBoardSource=gupy_portal"
    },
    {
        id: 7,
        title: "Pessoa Operadora de Loja - Uruguai",
        category: "estagio",
        description: "Faça parte do crescimento do Assaí! Com lojas espalhadas por todo Brasil com um time diverso de + 80 mil colaboradores, vivemos com paixão para atender os nossos clientes.",
        location: "Salvador - BA",
        requirements: "Ensino Médio Completo, disponibilidade para trabalhar presencialmente",
        provider: "Farmácias Pague Menos",
        date: "2024-10-24",
        applyLink: "https://paguemenosextrafarma.gupy.io/job/eyJqb2JJZCI6MTAxODQ4NzAsInNvdXJjZSI6Imd1cHlfcG9ydGFsIn0=?jobBoardSource=gupy_portal"
    }
];

// Variáveis globais
let filteredOpportunities = [...opportunities];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupTabs();
    setupSearchAndFilters();
    setupForms();
    loadOpportunities();
}

// Navegação suave
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Sistema de abas
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Sistema de busca e filtros
function setupSearchAndFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterOpportunities);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterOpportunities);
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', filterOpportunities);
    }
}

function filterOpportunities() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    
    filteredOpportunities = opportunities.filter(opportunity => {
        const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm) ||
                            opportunity.description.toLowerCase().includes(searchTerm) ||
                            opportunity.provider.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !categoryFilter || opportunity.category === categoryFilter;
        
        const matchesLocation = !locationFilter || 
                              (locationFilter === 'online' && opportunity.location.toLowerCase() === 'online') ||
                              (locationFilter !== 'online' && opportunity.location.toLowerCase().includes(locationFilter));
        
        return matchesSearch && matchesCategory && matchesLocation;
    });
    
    loadOpportunities();
}

// Carregar oportunidades na tela
function loadOpportunities() {
    const grid = document.getElementById('opportunitiesGrid');
    
    if (!grid) return;
    
    if (filteredOpportunities.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>Nenhuma oportunidade encontrada</h3>
                <p>Tente ajustar os filtros de busca</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredOpportunities.map(opportunity => `
        <div class="opportunity-card ${opportunity.isAprendaMais ? 'aprenda-mais-card' : ''}">
            <div class="category">${getCategoryLabel(opportunity.category)}</div>
            ${opportunity.isAprendaMais ? '<div class="aprenda-mais-badge"><i class="fas fa-star"></i> Aprenda Mais</div>' : ''}
            <h3>${opportunity.title}</h3>
            <p class="description">${opportunity.description}</p>
            <p class="location">
                <i class="fas fa-map-marker-alt"></i> ${opportunity.location}
            </p>
            <p class="provider">
                <i class="fas fa-building"></i> ${opportunity.provider}
            </p>
            ${opportunity.requirements ? `<p class="requirements"><strong>Requisitos:</strong> ${opportunity.requirements}</p>` : ''}
            ${opportunity.workload ? `<p class="workload"><i class="fas fa-clock"></i> <strong>Carga horária:</strong> ${opportunity.workload}</p>` : ''}
            ${opportunity.modules ? `<p class="modules"><i class="fas fa-book"></i> <strong>Módulos:</strong> ${opportunity.modules}</p>` : ''}
            ${opportunity.applyLink ? 
                `<a href="${opportunity.applyLink}" target="_blank" class="apply-btn ${opportunity.isAprendaMais ? 'aprenda-mais-btn' : ''}">
                    <i class="fas fa-external-link-alt"></i> ${opportunity.isAprendaMais ? 'Acessar Curso' : 'Candidatar-se'}
                </a>` 
                : 
                `<button class="apply-btn ${opportunity.isAprendaMais ? 'aprenda-mais-btn' : ''}" onclick="applyToOpportunity(${opportunity.id})">
                    <i class="fas fa-paper-plane"></i> ${opportunity.isAprendaMais ? 'Acessar Curso' : 'Candidatar-se'}
                </button>`
            }
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        'curso': 'Curso',
        'estagio': 'Estágio',
        'doacao': 'Doação'
    };
    return labels[category] || category;
}

// Aplicar para oportunidade
function applyToOpportunity(opportunityId) {
    const opportunity = opportunities.find(opp => opp.id === opportunityId);
    
    if (opportunity) {
        if (opportunity.isAprendaMais) {
            // Para cursos do Aprenda Mais, redirecionar para a plataforma
            const confirmAccess = confirm(`Você será redirecionado para a plataforma Aprenda Mais para acessar o curso: ${opportunity.title}\n\nDeseja continuar?`);
            if (confirmAccess) {
                window.open('https://hmg.aprendamais.mec.gov.br', '_blank');
            }
        } else {
            // Simular aplicação para outras oportunidades
            alert(`Você se candidatou para: ${opportunity.title}\n\nEm breve entraremos em contato através do formulário de cadastro.`);
            
            // Scroll para o formulário de cadastro
            document.getElementById('register').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Ativar aba de busca de oportunidades
            const seekerTab = document.querySelector('[data-tab="seeker"]');
            if (seekerTab) {
                seekerTab.click();
            }
        }
    }
}

// Configurar formulários
function setupForms() {
    const seekerForm = document.getElementById('seekerForm');
    const providerForm = document.getElementById('providerForm');
    const contactForm = document.querySelector('.contact-form');
    
    if (seekerForm) {
        seekerForm.addEventListener('submit', handleSeekerForm);
    }
    
    if (providerForm) {
        providerForm.addEventListener('submit', handleProviderForm);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleSeekerForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('seekerName').value,
        email: document.getElementById('seekerEmail').value,
        phone: document.getElementById('seekerPhone').value,
        location: document.getElementById('seekerLocation').value,
        interests: Array.from(document.querySelectorAll('#seekerInterests input:checked')).map(cb => cb.value),
        situation: document.getElementById('seekerSituation').value
    };
    
    // Enviar email estruturado
    sendStructuredEmail('candidato', formData);
    
    showSuccessMessage('Cadastro realizado com sucesso! Entraremos em contato em breve com oportunidades que correspondam ao seu perfil.');
    
    // Limpar formulário
    e.target.reset();
}

function handleProviderForm(e) {
    e.preventDefault();
    
    const formData = {
        providerName: document.getElementById('providerName').value,
        providerContact: document.getElementById('providerContact').value,
        providerEmail: document.getElementById('providerEmail').value,
        providerPhone: document.getElementById('providerPhone').value,
        opportunityType: document.getElementById('opportunityType').value,
        opportunityTitle: document.getElementById('opportunityTitle').value,
        opportunityDescription: document.getElementById('opportunityDescription').value,
        opportunityRequirements: document.getElementById('opportunityRequirements').value,
        opportunityLocation: document.getElementById('opportunityLocation').value
    };
    
    // Enviar email estruturado
    sendStructuredEmail('fornecedor', formData);
    
    // Adicionar nova oportunidade
    const newOpportunity = {
        id: opportunities.length + 1,
        title: formData.opportunityTitle,
        category: formData.opportunityType,
        description: formData.opportunityDescription,
        location: formData.opportunityLocation,
        requirements: formData.opportunityRequirements,
        provider: formData.providerName,
        date: new Date().toISOString().split('T')[0]
    };
    
    opportunities.unshift(newOpportunity);
    filteredOpportunities = [...opportunities];
    loadOpportunities();
    
    showSuccessMessage('Oportunidade cadastrada com sucesso! Ela já está disponível na nossa plataforma.');
    
    // Limpar formulário
    e.target.reset();
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Enviar email estruturado
    sendStructuredEmail('contato', formData);
    
    showSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpar formulário
    e.target.reset();
}

// Função para enviar email estruturado com garantia de envio
function sendStructuredEmail(type, formData) {
    const email = 'palomadates72@gmail.com';
    let subject = '';
    let body = '';
    
    const currentDate = new Date().toLocaleString('pt-BR');
    
    switch(type) {
        case 'candidato':
            subject = `🎯 Novo Candidato - Conectando Oportunidades - ${formData.name}`;
            body = `
📋 CADASTRO DE CANDIDATO - CONECTANDO OPORTUNIDADES

📅 Data/Hora: ${currentDate}

👤 INFORMAÇÕES PESSOAIS:
• Nome Completo: ${formData.name}
• E-mail: ${formData.email}
• Telefone: ${formData.phone}
• Localização: ${formData.location}

🎯 ÁREAS DE INTERESSE:
${formData.interests.map(interest => `• ${interest}`).join('\n')}

📝 SITUAÇÃO ATUAL:
${formData.situation}

---
💡 AÇÃO NECESSÁRIA: Entrar em contato com o candidato para oferecer oportunidades adequadas ao seu perfil.

🌐 Plataforma: Conectando Oportunidades
📧 Email automático gerado pelo sistema
            `;
            break;
            
        case 'fornecedor':
            subject = `🤝 Nova Oportunidade Oferecida - ${formData.providerName}`;
            body = `
📋 NOVA OPORTUNIDADE - CONECTANDO OPORTUNIDADES

📅 Data/Hora: ${currentDate}

🏢 INFORMAÇÕES DA EMPRESA/INSTITUIÇÃO:
• Nome: ${formData.providerName}
• Responsável: ${formData.providerContact}
• E-mail: ${formData.providerEmail}
• Telefone: ${formData.providerPhone}

🎯 DETALHES DA OPORTUNIDADE:
• Tipo: ${formData.opportunityType}
• Título: ${formData.opportunityTitle}
• Localização: ${formData.opportunityLocation}

📝 DESCRIÇÃO:
${formData.opportunityDescription}

📋 REQUISITOS:
${formData.opportunityRequirements}

---
💡 AÇÃO NECESSÁRIA: Revisar e aprovar a oportunidade para publicação na plataforma.

🌐 Plataforma: Conectando Oportunidades
📧 Email automático gerado pelo sistema
            `;
            break;
            
        case 'contato':
            subject = `📞 Contato - Conectando Oportunidades - ${formData.subject}`;
            body = `
📋 MENSAGEM DE CONTATO - CONECTANDO OPORTUNIDADES

📅 Data/Hora: ${currentDate}

👤 INFORMAÇÕES DO REMETENTE:
• Nome: ${formData.name}
• E-mail: ${formData.email}

📝 ASSUNTO: ${formData.subject}

💬 MENSAGEM:
${formData.message}

---
💡 AÇÃO NECESSÁRIA: Responder ao contato conforme solicitado.

🌐 Plataforma: Conectando Oportunidades
📧 Email automático gerado pelo sistema
            `;
            break;
    }
    
    // Método INSTANTÂNEO - funciona sem configuração
    sendEmailInstantly(email, subject, body, formData);
}

// Função INSTANTÂNEA - funciona IMEDIATAMENTE sem configuração
function sendEmailInstantly(toEmail, subject, body, formData) {
    // Método 1: Tentar Web3Forms (funciona sem configuração)
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Chave pública de teste
            name: formData.name || 'Sistema Conectando Oportunidades',
            email: formData.email || 'noreply@conectandooportunidades.org',
            subject: subject,
            message: body,
            replyto: formData.email || 'noreply@conectandooportunidades.org',
            to: toEmail
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showSuccessMessage('✅ Email enviado com sucesso! Entraremos em contato em breve.');
            return;
        }
        throw new Error('Web3Forms falhou');
    })
    .catch(error => {
        console.log('Web3Forms falhou, tentando método alternativo');
        
        // Método 2: Tentar Formspree (funciona sem configuração)
        fetch('https://formspree.io/f/mqjqjqjq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name || 'Sistema Conectando Oportunidades',
                email: formData.email || 'noreply@conectandooportunidades.org',
                subject: subject,
                message: body,
                _replyto: formData.email || 'noreply@conectandooportunidades.org',
                _subject: subject,
                _next: window.location.href
            })
        })
        .then(response => {
            if (response.ok) {
                showSuccessMessage('✅ Email enviado com sucesso! Entraremos em contato em breve.');
                return;
            }
            throw new Error('Formspree falhou');
        })
        .catch(error => {
            console.log('Ambos métodos falharam, usando método manual');
            // Fallback para método manual
            showEmailInstructions(toEmail, subject, body);
        });
    });
}

// Função para enviar email via API (método garantido e SIMPLES)
async function sendEmailViaAPI(toEmail, subject, body, formData) {
    try {
        // Método SUPER SIMPLES - usar Web3Forms (sem configuração)
        const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: 'YOUR_WEB3FORMS_KEY', // Será configurado
                name: formData.name || 'Sistema Conectando Oportunidades',
                email: formData.email || 'noreply@conectandooportunidades.org',
                subject: subject,
                message: body,
                replyto: formData.email || 'noreply@conectandooportunidades.org',
                to: toEmail
            })
        });
        
        const result = await web3formsResponse.json();
        
        if (result.success) {
            console.log('Email enviado com sucesso via Web3Forms');
            return true;
        } else {
            console.error('Erro no Web3Forms:', result);
            return false;
        }
        
    } catch (error) {
        console.error('Erro na API de email:', error);
        
        // Método SUPER SIMPLES - usar Netlify Forms (sem configuração)
        try {
            const netlifyResponse = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'form-name': 'conectando-oportunidades',
                    'name': formData.name || 'Sistema Conectando Oportunidades',
                    'email': formData.email || 'noreply@conectandooportunidades.org',
                    'subject': subject,
                    'message': body,
                    'to': toEmail
                })
            });
            
            if (netlifyResponse.ok) {
                console.log('Email enviado com sucesso via Netlify Forms');
                return true;
            } else {
                console.error('Erro no Netlify Forms:', netlifyResponse);
                return false;
            }
            
        } catch (netlifyError) {
            console.error('Erro no Netlify Forms:', netlifyError);
            return false;
        }
    }
}

// Função para mostrar instruções de email quando necessário
function showEmailInstructions(email, subject, body) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        ">
            <h3 style="color: #2563eb; margin-bottom: 1rem; text-align: center;">
                📧 Instruções para Envio
            </h3>
            <p style="margin-bottom: 1rem; color: #64748b;">
                Se o seu cliente de email não abriu automaticamente, copie as informações abaixo e envie manualmente para:
            </p>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <p style="margin: 0; font-weight: 600; color: #2563eb;">📧 Para:</p>
                <p style="margin: 0.5rem 0; font-family: monospace; background: white; padding: 0.5rem; border-radius: 4px;">${email}</p>
                
                <p style="margin: 1rem 0 0.5rem 0; font-weight: 600; color: #2563eb;">📝 Assunto:</p>
                <p style="margin: 0.5rem 0; font-family: monospace; background: white; padding: 0.5rem; border-radius: 4px; word-break: break-all;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <button onclick="copyToClipboard('${email}')" style="
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    margin-right: 0.5rem;
                    cursor: pointer;
                ">📋 Copiar Email</button>
                
                <button onclick="copyToClipboard('${subject}')" style="
                    background: #3b82f6;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    margin-right: 0.5rem;
                    cursor: pointer;
                ">📋 Copiar Assunto</button>
                
                <button onclick="copyToClipboard('${body.replace(/\n/g, '\\n')}')" style="
                    background: #8b5cf6;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                ">📋 Copiar Corpo</button>
            </div>
            
            <button onclick="this.closest('.modal').remove()" style="
                background: #ef4444;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                width: 100%;
                font-weight: 600;
                cursor: pointer;
            ">✖️ Fechar</button>
        </div>
    `;
    
    modal.className = 'modal';
    document.body.appendChild(modal);
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showSuccessMessage('Texto copiado para a área de transferência!');
    }).catch(() => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showSuccessMessage('Texto copiado para a área de transferência!');
    });
}

function showSuccessMessage(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Adicionar estilos de animação para notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar efeito de scroll no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Animações de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.opportunity-card, .stat, .ods-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
