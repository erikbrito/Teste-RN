# Por favor leia (Please Read)

## Available Scripts

Para rodar o projeto execute os seguintes passos:

1 - Baixe (clone) o projeto do github

2 - Instale todas as dependencias do projeto executando:

### `yarn` (O projeto foi contruido com yarn)

ou se preferir execute:

### `npm install`

3 - Execute o emulador do celular de sua preferencia na sua maquina ou conecte via usb o seu celular para prosseguir para o proximo passo. (Esse último requer que ative a depuração do dispositivo)

4 - E para rodar e testar o projeto execute:

### `react-native run-android`

ou se estiver usando ios:

### `react-native run-ios`

5 - Aguarde o processo terminado e logo será aberto o projeto no seu celular


# Explicando o código (Please Read):

O projeto se baseia basicamente 4 componentes: Routes, Login, Register, Splashscreen (ou só splash)

O Login e o register básicamente tem o mesmo o código. Neles você encontrará inputs, texto, um botão (os botões colocados nos dois componentes não executa nada), e um icone.

Afim de mostrar melhor o meu conhecimento foi adicionado 2 hooks e uma condição ternária no componente de registro, o useState (para manter o estado, no caso foi usado para saber o estado de carregamento da tela) e o useEffect (para executar um trecho do código apenas uma vez, no caso foi usado para mudar o estado após alguns segundos) e a condição ternária é para alternar entre um spinner de carregamento enquanto o estado for verdadeiro e quando ele muda para falso após alguns segundos a tela que desejamos aparecerá.

No componente de rotas (Routes.js) é onde estão as rotas para cada tela. Nela eu utilizo o NavigationContainer que é o responsável por gerenciar o estado do aplicativo e vincular o navegador de nível superior ao ambiente do aplicativo, como é dito na documentação do React Navigation. Ele é o responsavel por nos permitir navegar pelo aplicativo.

E Também no componente de rotas temos o createBottomTabNavigator que é o responsavel por criar a guia de navegação que vemos no final da tela. No projeto teremos apenas duas.

No componente de rotas foi adicionado um codigo de condição ternária para podermos simular um aplicativo que está iniciando e carregando os seus componentes, ele executa igual como foi feito no componente de registro (Register.js). Nele podemos ver que enquanto o valor for verdadeiro o componente Splashscreen será executado e mostrado na tela (mostrando apenas um texto de carregamento) e após alguns segundos o estado é mudado para falso e assim executando a parte principal do projeto e aparecendo na tela do dispositivo a tela de login e as guias para nevegar pelo aplicativo.
