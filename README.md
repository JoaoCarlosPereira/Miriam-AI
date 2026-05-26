# Miriam-AI - Open-WebUI Host Service

Este repositório contém a configuração e as customizações do **Open-WebUI** instalado nativamente no servidor Ubuntu, migrado de um ambiente Docker para garantir maior performance, flexibilidade e capacidade de armazenamento.

## 🚀 O que foi feito

### 1. Migração para Host Nativo
*   **Instalação:** O Open-WebUI foi instalado em um ambiente virtual Python 3.11 dedicado em `/media/joao/Dados/open-webui-service`.
*   **Banco de Dados:** Migração completa do banco de dados SQLite (`webui.db`) e arquivos de upload do volume Docker original.
*   **Serviço Systemd:** Criação do serviço `open-webui.service` para gerenciamento automático (start/stop/restart) pelo sistema operacional.
*   **Compatibilidade SQLite:** Implementação de workaround via `pysqlite3-binary` e script `start.py` para suportar versões modernas do ChromaDB em sistemas com SQLite antigo (Ubuntu 20.04).

### 2. Kit de Ferramentas LLM (MCP)
Integração do **Model Context Protocol (MCP)** para dar ao LLM capacidades de agente autônomo:
*   **Everything Toolkit:** Permite ao LLM executar comandos **Bash**, realizar buscas web e interações lógicas.
*   **Filesystem Server:** Acesso real para leitura, escrita e edição de arquivos nos diretórios `/root` e `/media/joao/Dados`.
*   **ast-grep:** Instalação de ferramenta de análise estrutural de código compatível com o sistema para refatoração via IA.
*   **Auto_Tool_Selecter:** Função de middleware otimizada para roteamento automático e agressivo de ferramentas conforme a intenção do usuário.

### 🎨 3. Design Customizado (Pacman Tech Theme)
Transformação visual completa baseada no padrão Pacman Arcade:
*   **Fundo Animado:** Canvas 2D interativo com Pac-Man, fantasmas e elementos de código (`custom-interface/pacman-bg.js`).
*   **Estética:** Paleta de cores Azul/Rosa tecnológica com efeito de **Glassmorphism** (vidro fosco) e película de leitura para não prejudicar o foco no chat.
*   **Tipografia:** Fonte Plus Jakarta Sans aplicada globalmente.

### 🔒 4. Infraestrutura e Acesso
*   **Caddy Proxy:** Configurado para servir o domínio **https://joaocarlos.servehttp.com/** na porta 3000 com SSL automático.
*   **Samba:** Pastas do projeto expostas via rede para fácil edição e backup (usuário `rootsamba`).
*   **Versionamento:** Repositório Git configurado para rastrear mudanças na interface e lógica de inicialização.

## 🛠️ Comandos de Manutenção

### Gerenciar o Serviço
```bash
systemctl restart open-webui  # Reiniciar o App
systemctl status open-webui   # Ver status
journalctl -u open-webui -f   # Ver logs em tempo real
```

### Atualizar o Repositório
```bash
cd /media/joao/Dados/open-webui-service
git add .
git commit -m "Minha alteração"
git push
```

## 📂 Estrutura de Arquivos Importantes
*   `/start.py`: Script principal de inicialização e ambiente.
*   `/custom-interface/`: Backup dos arquivos de customização (CSS/JS/HTML).
*   `/data/`: Pasta de dados persistentes (Banco de dados e Uploads).
*   `/build/`: Arquivos estáticos servidos pelo backend.

---
**Desenvolvido para Miriam-AI - Estação de Trabalho de IA Autônoma.**
