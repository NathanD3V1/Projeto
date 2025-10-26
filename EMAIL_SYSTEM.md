# Sistema de Email Estruturado - Conectando Oportunidades

## 📧 Visão Geral

O sistema de email estruturado do "Conectando Oportunidades" foi desenvolvido para automatizar o envio de notificações para **palomadates72@gmail.com** sempre que houver interações importantes na plataforma.

## 🎯 Funcionalidades

### 1. Cadastro de Candidatos
Quando uma pessoa se cadastra para buscar oportunidades, um email estruturado é enviado automaticamente contendo:

- **Informações pessoais** (nome, email, telefone, localização)
- **Áreas de interesse** selecionadas
- **Situação atual** descrita pelo candidato
- **Data e hora** do cadastro
- **Instruções de ação** para a equipe

### 2. Oportunidades Oferecidas
Quando empresas/instituições cadastram novas oportunidades:

- **Dados da empresa** (nome, responsável, contatos)
- **Detalhes da oportunidade** (tipo, título, localização)
- **Descrição completa** da oportunidade
- **Requisitos** para participação
- **Instruções de revisão** e aprovação

### 3. Mensagens de Contato
Para dúvidas e sugestões através do formulário de contato:

- **Informações do remetente** (nome e email)
- **Assunto** da mensagem
- **Conteúdo completo** da mensagem
- **Instruções de resposta**

## 🔧 Como Funciona

### Processo Automático
1. **Usuário preenche** qualquer formulário da plataforma
2. **Sistema processa** os dados e cria email estruturado
3. **Cliente de email** abre automaticamente (Gmail, Outlook, etc.)
4. **Email pré-formatado** aparece pronto para envio
5. **Usuário confirma** o envio através do cliente de email

### Fallback Manual
Caso o cliente de email não abra automaticamente:

1. **Modal de instruções** aparece na tela
2. **Informações organizadas** são exibidas
3. **Botões de cópia** para email, assunto e corpo
4. **Usuário copia** e cola manualmente no seu cliente de email

## 📋 Formato dos Emails

### Estrutura Padrão
```
📋 [TIPO DE NOTIFICAÇÃO] - CONECTANDO OPORTUNIDADES

📅 Data/Hora: [timestamp]

[SEÇÃO DE INFORMAÇÕES ESPECÍFICAS]

---
💡 AÇÃO NECESSÁRIA: [instrução específica]

🌐 Plataforma: Conectando Oportunidades
📧 Email automático gerado pelo sistema
```

### Exemplo - Cadastro de Candidato
```
📋 CADASTRO DE CANDIDATO - CONECTANDO OPORTUNIDADES

📅 Data/Hora: 15/01/2024, 14:30:25

👤 INFORMAÇÕES PESSOAIS:
• Nome Completo: João Silva
• E-mail: joao.silva@email.com
• Telefone: (71) 99999-9999
• Localização: Salvador - BA

🎯 ÁREAS DE INTERESSE:
• Tecnologia
• Administração

📝 SITUAÇÃO ATUAL:
Estou desempregado há 6 meses e gostaria de oportunidades na área de tecnologia para me capacitar e conseguir um emprego.

---
💡 AÇÃO NECESSÁRIA: Entrar em contato com o candidato para oferecer oportunidades adequadas ao seu perfil.

🌐 Plataforma: Conectando Oportunidades
📧 Email automático gerado pelo sistema
```

## 🛠️ Implementação Técnica

### Função Principal
```javascript
function sendStructuredEmail(type, formData) {
    const email = 'palomadates72@gmail.com';
    // Lógica de formatação e envio
}
```

### Tipos Suportados
- `'candidato'` - Cadastro de pessoas buscando oportunidades
- `'fornecedor'` - Cadastro de empresas oferecendo oportunidades  
- `'contato'` - Mensagens de contato geral

### Recursos Técnicos
- **Mailto links** para abertura automática do cliente de email
- **Encoding UTF-8** para caracteres especiais e emojis
- **Fallback manual** com modal de instruções
- **Cópia para clipboard** com botões específicos
- **Responsividade** do modal de instruções

## 📱 Compatibilidade

### Clientes de Email Suportados
- ✅ **Gmail** (web e app)
- ✅ **Outlook** (web e desktop)
- ✅ **Apple Mail** (macOS/iOS)
- ✅ **Thunderbird**
- ✅ **Outros clientes** que suportam mailto links

### Navegadores Suportados
- ✅ **Chrome** (todas as versões)
- ✅ **Firefox** (todas as versões)
- ✅ **Safari** (todas as versões)
- ✅ **Edge** (todas as versões)

## 🔒 Segurança e Privacidade

### Dados Enviados
- **Apenas informações** preenchidas nos formulários
- **Nenhum dado sensível** é coletado automaticamente
- **Usuário tem controle** total sobre o que é enviado

### Processamento
- **Processamento local** no navegador do usuário
- **Nenhum servidor** intermediário
- **Dados não são armazenados** na plataforma

## 📊 Monitoramento

### Métricas Disponíveis
- **Console logs** para debugging
- **Notificações de sucesso** para o usuário
- **Fallback tracking** quando cliente de email não abre

### Logs de Debug
```javascript
console.log('Dados do candidato:', formData);
console.error('Erro ao abrir cliente de email:', error);
```

## 🚀 Melhorias Futuras

### Possíveis Expansões
1. **API de email** para envio direto sem cliente
2. **Templates personalizáveis** para diferentes tipos
3. **Histórico de envios** na plataforma
4. **Confirmação de recebimento** automática
5. **Integração com CRM** para gestão de leads

### Otimizações
- **Cache de templates** para melhor performance
- **Validação avançada** de dados antes do envio
- **Compressão de dados** para emails longos
- **Suporte a anexos** quando necessário

---

Este sistema garante que todas as interações importantes na plataforma sejam comunicadas de forma estruturada e profissional para a equipe responsável, facilitando o acompanhamento e resposta aos usuários.
