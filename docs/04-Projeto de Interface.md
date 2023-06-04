
# Projeto de Interface

## Diagrama de Fluxo

O diagrama que define o fluxo do nosso sistema é representado a seguir:

![Legenda](img/DF-Legenda.png)
![Fluxo Geral](img/DF-Geral.png)
![Fluxo Geral Mobile](img/Diagrama%20de%20Fluxo%20-%20PlannerMobile.png)
![Fluxo de Cadastro](img/DF-Cadastro.png)
![Fluxo de Autenticação](img/DF-Autenticacao.png)
![Fluxo de Criação de Itens](img/DF-CriacaoDeItens.png)
![Fluxo de Edição de Perfil](img/DF-EditarPerfil.png)
![Fluxo de Redefinição de Senha](img/DF-EditarPerfil.png)
![Fluxo de Validação de Formulários](img/DF-Validacao.png)
![Fluxo de Ajuda](img/DF-Ajuda.png)

## Wireframes

Foram desenvolvidos wireframes na ferramenta Figma, para ajudar na definição da estrutura das soluções web e mobile e para facilitar o entendimento da relação entre as possíveis telas existentes no sistema. A seguir os wireframes de todas as telas do sistema.

### RF-001 - Tela de Cadastro
A tela de cadastro é uma tela criada para o usuário que deseja utilizar a plataforma e salvar as criações feitas no seu planner. Nela é oferecido um formulário em que o usuário preenche suas informações pessoais e cria as credenciais de acesso ao sistema. 

![Wireframe: Tela de Cadastro](img/RF-001-Cadastro.png)
![Wireframe Mobile: Tela de Cadastro](img/Mobile-Cadastro.png)

### RF-002 - Tela de Login
Quando o usuário acessa o website e não está logado na plataforma, na barra de navegação, no topo da página, haverá um botão de acesso rápido ao login do sistema. A tela contém inputs em que o usuário deverá digitar suas credenciais de acesso. Há um botão para cadastro, no caso de o usuário ainda não ser cadastrado e um botão para recuperação da senha, se o usuário a tiver esquecido. No caso do mobile, assim que o usuário já cadastrado acessar o aplicativo será redirecionado diretamente à tela de login.

![Wireframe: Tela de Login](img/RF-002-Login.png)
![Wireframe Mobile: Tela de Login](img/Mobile-Login.png)

### RF-003 - Telas de Recuperação de senha
Caso o usuário esqueça sua senha ele pode acessar a tela de recuperação de senha onde haverá um formulário para preenchimento do email e recebimento de um link para 
recuperação de senha. Ao clicar nesse link o usuário será redirecionado para a tela onde ele poderá cadastrar uma nova senha. 

![Wireframe: Tela de Recuperação de senha - Confirmação de Email](img/RF-003-EsqueciASenha-TelaDeConfirmacaoDeEmail.png)
![Wireframe: Tela de Recuperação de senha - Email Recebido](img/RF-003-EsqueciASenha-EmailRecebido.png)
![Wireframe Mobile: Tela de Recuperação de senha - Confirmação de Email](img/Mobile-EsqueciMinhaSenha.png)
![Wireframe Mobile: Tela de Recuperação de senha - Email Recebido](img/Mobile-EsqueciMinhaSenha-1.png)

### RF-004 A 012- Landing Page
Ao entrar no endereço do website, o usuário será direcionado para essa página. Nela contém um header com os links para retornar ao inicio e direcionar a página de ajuda, além de um dropbox que o permite acessar seus dados de perfil, editá-los e fazer o logout. Abaixo, há os botões de adições dos widgets que adicionam os widgets escolhidos pelo usuário ao worskpace abaixo. O usuário pode organizar os widgets na tela e utiliza-los para cadastrar lembretes, checklists, metas, habitos, humores, controle financeiros e anotações. Alguns dos widgets apresentam modais com formulários para cadastro dessas informações. É possível cadastrar vários em cada widget. Já no mobile, 
na tela principal estarão no canto direito superior os botões de acesso ao perfil, notificações e ajuda. No centro da tela estarão os botões de acesso aos widgets e o botão
para adicionar um novo widget. Cada widget tem a sua própria tela. 
![Wireframe: Landing Page](img/RF-004a012.png)
![Wireframe: Modal Widget de Controle Financeiro](img/Modal-Financas.png)
![Wireframe: Modal Widget de Habitos](img/Modal-Habitos.png)
![Wireframe: Modal Widget de Metas](img/Modal-Metas.png)
![Wireframe: Modal Widget de Lembretes](img/Modal-Lembrete.png)
![Wireframe mobile: Home Full](img/Mobile-Home.png)
![Wireframe mobile: Home Clean](img/Mobile-Home-clean.png)
![Wireframe mobile: Widgets](img/Mobile-Widgets.png)
![Wireframe mobile: Widget](img/Mobile-Widget.png)
![Wireframe mobile: ScreenSplash](img/Mobile-ScreenSplash.png)




### RF-013 e 014 - Edição de Dados e senha
A tela de edição de dados permite que o usuário visualize seus dados cadastros e edite sua senha, por meio de dois formulários.
![Wireframe: Tela de Edição de dados e senha](img/RF-013-014-EdicaoDeDadosCadastrais.png)
![Wireframe Mobile: Tela de Edição de dados e senha](img/Mobile-Perfil.png)


### RF-015-016 - Tela de Ajuda e Fale Conosco
Nessa tela o usuário pode acessar informações importantes sobre o que é a plataforma e seu funcionamento. Caso deseje enviar uma mensagem para o suporte pode utilizar o formulário de fale conosco que enviará um email com a mensagem para o email da plataforma.  No mobile ainda há a tela de efeito colateral no caso de algum erro de carregamento e o spinner para demonstrar que algo está em carregamento no aplicativo. 
![Wireframe: Tela de ajuda e Fale Conosco](img/RF-015-016-Ajuda.png)
![Wireframe Mobile: Efeito Colateral](img/Mobile-Efeito%20colateral.png)
![Wireframe Mobile: Spinner](img/Mobile-Spinner.png)
