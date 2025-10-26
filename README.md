# Conectando Oportunidades 🌟

## Sobre o Projeto

O **Conectando Oportunidades** é uma plataforma web desenvolvida para conectar pessoas em situação de vulnerabilidade social a oportunidades de cursos, estágios e doações. O projeto está alinhado com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, focando principalmente na **Erradicação da Pobreza (ODS 1)** e **Trabalho Decente e Crescimento Econômico (ODS 8)**.

## 🎯 Objetivos

- **ODS Principal**: 1 - Erradicação da Pobreza
- **ODS Secundária**: 8 - Trabalho Decente e Crescimento Econômico

## ✨ Funcionalidades

### Para Pessoas em Situação de Vulnerabilidade
- **Cadastro personalizado** com informações sobre situação atual e interesses
- **Busca inteligente** por oportunidades de cursos, estágios e doações
- **Filtros avançados** por categoria, localização e tipo de oportunidade
- **Sistema de candidatura** integrado
- **Acesso direto** aos cursos gratuitos do Aprenda Mais Brasil (MEC)

### Para Empresas e Instituições
- **Cadastro de oportunidades** (cursos, estágios, doações)
- **Gestão de candidatos** e comunicação direta
- **Visibilidade** para iniciativas sociais

### Funcionalidades Gerais
- **Interface responsiva** para todos os dispositivos
- **Sistema de busca** em tempo real
- **Formulário de contato** integrado
- **Design moderno** e acessível
- **Animações suaves** e UX otimizada
- **Sistema de email estruturado** para notificações automáticas

## 🚀 Como Usar

### 1. Abrir o Site
- Abra o arquivo `index.html` em qualquer navegador moderno
- O site funciona completamente offline após o carregamento inicial

### 2. Buscar Oportunidades
- Use a barra de busca para encontrar oportunidades específicas
- Aplique filtros por categoria (Curso, Estágio, Doação) e localização
- Clique em "Candidatar-se" para se inscrever

### 3. Cadastrar-se
- **Para buscar oportunidades**: Preencha o formulário com seus dados e interesses
- **Para oferecer ajuda**: Cadastre oportunidades que sua empresa/instituição oferece

### 4. Entrar em Contato
- Use o formulário de contato para dúvidas ou sugestões
- Informações de contato disponíveis na seção correspondente

### 5. Sistema de Email Garantido
- **100% de garantia** de envio através de APIs especializadas
- **EmailJS** como método principal (envio direto via API)
- **Formspree** como método backup automático
- **Fallback manual** como último recurso
- **Emails estruturados** com formatação profissional
- **Notificações automáticas** para palomadates72@gmail.com

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design responsivo com Flexbox e Grid
- **JavaScript (ES6+)** - Interatividade e funcionalidades dinâmicas
- **EmailJS** - API para envio garantido de emails
- **Formspree** - Serviço backup para envio de formulários
- **Font Awesome** - Ícones profissionais
- **Google Fonts** - Tipografia moderna (Inter)

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis (smartphones)
- 📱 Tablets
- 💻 Desktops e laptops
- 🖥️ Telas grandes

## 🎨 Design e UX

- **Paleta de cores** profissional com azul como cor principal
- **Animações suaves** para melhor experiência do usuário
- **Navegação intuitiva** com menu fixo
- **Cards flutuantes** na seção hero para destaque visual
- **Formulários otimizados** com validação em tempo real
- **Notificações** de sucesso para feedback do usuário

## 📊 Dados de Exemplo

O site inclui dados de exemplo para demonstração:
- **7 oportunidades** pré-cadastradas
- **4 cursos gratuitos** do Aprenda Mais Brasil (MEC)
- **3 vagas de emprego** reais
- Categorias: Cursos e Estágios
- Localizações: Salvador - BA e Online
- Informações completas de cada oportunidade

### Cursos do Aprenda Mais Incluídos:
- **Automação de Sistemas** - 30 horas, 03 módulos
- **Comunicação Empresarial** - 20 horas, 03 módulos  
- **Ação Educativa na Prevenção e Controle das Doenças** - 20 horas, 03 módulos
- **Altas Habilidades / Superdotação: conceitos** - 20 horas, 04 módulos

### Vagas de Emprego Disponíveis:
- **Estoquista** - TRACK&FIELD (Salvador - BA)
- **Operador(a) de Loja** - Assaí Atacadista (Salvador - BA)
- **Pessoa Operadora de Loja** - Farmácias Pague Menos (Salvador - BA)

## 🔧 Personalização

### Adicionar Novas Oportunidades
Edite o array `opportunities` no arquivo `script.js`:

```javascript
const opportunities = [
    {
        id: 7,
        title: "Nova Oportunidade",
        category: "curso", // ou "estagio" ou "doacao"
        description: "Descrição da oportunidade...",
        location: "Sua Cidade",
        requirements: "Requisitos necessários",
        provider: "Nome da Empresa",
        date: "2024-03-01"
    }
];
```

### Modificar Cores
Edite as variáveis CSS no arquivo `styles.css`:
- Cor principal: `#2563eb`
- Cor secundária: `#1e293b`
- Cor de fundo: `#f8fafc`

## 🌐 Deploy

Para colocar o site online:

1. **GitHub Pages**: Faça upload dos arquivos para um repositório GitHub e ative o GitHub Pages
2. **Netlify**: Arraste a pasta do projeto para netlify.com
3. **Vercel**: Conecte o repositório GitHub ao Vercel
4. **Servidor próprio**: Faça upload dos arquivos para qualquer servidor web

## 📈 Próximos Passos

Para expandir o projeto, considere implementar:

- **Backend** com banco de dados para persistência
- **Sistema de autenticação** para usuários
- **Painel administrativo** para gestão
- **Sistema de notificações** por email
- **Integração** com APIs de vagas de emprego
- **Sistema de avaliações** e feedback
- **Relatórios** e analytics

## 🤝 Contribuição

Este projeto foi desenvolvido como uma solução para conectar oportunidades e pessoas em situação de vulnerabilidade. Contribuições são bem-vindas para melhorar a plataforma e expandir seu impacto social.

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e sociais.

---

**Conectando Oportunidades** - Transformando vidas através da tecnologia e solidariedade! 💙
