# Atualizações

## **1.0.1 :** 
O valor total mostrado na aba Habilidade, não estava sendo calculado com o -7 para habilidades, igual a 0, agora ela mostra o valor final a ser lançado menos o valor de penalidade e bônus geral no topo da ficha da aba habilidade (lembre-se, sempre que ao criar um personagem novo ou passar de nível deve ser aberto cada item de habilidade para que seja atualizada, colocando valor ou não no nível! Clique fora da caixa e feche em seguida assim os dados serão atualizados). OBS.: Os valores de rolagens estavam corretos, são mudanças visuais somente, nada no compêndio de criaturas mudou basta usar a habilidade que os cálculos estarão corretos mesmo mostrando um número diferente, caso queira mudar isso basta abrir e fechar o item habilidade.

 
## **1.0.2 :** 
Colocamos 22 Imagens para personalizar as fichas, basta entrar nas Configurações de jogo, alterar configurações, Configurações de Sistema e na "lista" selecionar o tema e Salvar mudanças.


## **1.0.3 :** 
Descobrimos um erro, na ficha de personagem ou npc, na parte de caracterização ou descrição, quando inserido texto com quebra de linha, qualquer outro campo alterado na ficha acaba acrescentando espaços no texto e impossibilitava a rolagem de testes de resistência. O problema em torno dos testes foi contornado, mas ainda deve-se tomar cuidado quando inserir caracterização ou descrição com quebra de linha nas fichas de personagem ou npc. Sugestão para uso das fichas do compêndio: sempre duplicar as criaturas que for usar.

 
## **1.0.4 :** 
Agora os ícones das Armaduras e Técnicas de combates, podem ser ativados clicando no título da primeira coluna. Erro 1.0.3 das caixas de texto foi remediado, colocamos um botão para travar e destravar as caixas de Texto, assim quando o texto usar quebra de linha nas caixas de texto dos NPCs e Personagens e alguns itens, não mais ocorrera o distanciamento das frases em quebra de linha, porem ainda recomendamos que evitem as quebras de linhas nas caixas de texto.


## **1.0.5 :** 
Otimização do Código das Fichas dos atores, agora os totais das habilidades são calculados automaticamente, sem a nescidade de abrir e fechar as fichas de itens para habilidades, é claro que ainda deve-se abrir para colocar os níveis nas habilidades.


## **1.0.6 :** 
Achamos um bug para macros de ataques e técnicas de combate que já foi resolvido! Agora os itens mesmo com acento são colocados em ordem alfabética. Você pode realçar os Itens usando a caixa de Pesquisa isso facilita encontrar uma habilidade, ataque, técnica de combate, magias e pertences!

 
## **1.0.7 :** 
Adicionamos Itens de Efeito, com isso você pode alterar valores de forma rápida para efeitos mágicos e outros, que antes não estavam liberados para alteração de forma manual, somente na ficha do personagem. Para usar basta criar um item de efeito e escolher INT, CAR, AUR, FOR, FÍS, AGI, PER, ENERGIA FÍSICA, ABSORÇÃO, DEFESA, KARMA, VELOCIDADE BASE, RESISTÊNCIA FÍSICA e RESISTÊNCIA MAGIA Podendo ser Somado, Subtraído, Dividido e Multiplicado pelo valor que desejar, você ainda pode ativar ou desativar a qualquer momento, nos atributos físicos e ajuste leva um pequeno tempo de atualização maior de 15 segundo aproximadamente, aguarde atualização com paciência!

 
## **1.0.8 :** 
Agora Sempre que um NPC, Personagem e Inventario não estiver vinculado o próprio sistema fará uma cópia vinculada para evitar o problema de travar o sistema caso esqueça. os que já estiverem vinculados como personagens dos jogadores e outras criaturas que você já vinculou não será duplicado.

 
## **1.0.9 :** 
Para Melhorar o sistema Marcão melhorou alguns cálculos Agrupando-os diminuindo o tempo de espera para qualquer calculo nas Fichas de NPCs e Personagens. Exemplo: uma passagem de nível ou ao usar um efeito que modifique um atributo no ajuste.

 
## **1.1.0 :** 
Agora o Mestre de jogo pode escolher nas Configurações de Sistema, se quer que ao colocar um npc ou personagem na Cena, que ele venha com todas as barras necessária para Tagmar, usando o Modulo [Bar Brawl](https://foundryvtt.com/packages/barbrawl). Obs: Pode-se escolher entre as seguintes opções, Não Criar Barras automaticamente, Criar Barras para tokens de Personagem, Criar Barras para tokens de NPCs, Criar Barras para tokens de Personagem e NPCs

 
## **1.1.1 :** 
Agora Alguns elementos Visuais na ficha Foram mudados para ajudar na visualização:

1. Ao tentar usar Resistência a magia ou Resistência Física sem ter uma Força de Ataque colocada na caixa respectiva será dada uma mensagem na parte superior da tela e a caixa firaca amarela realçando onde se deve colocar a Força de ataque. 
2. Caixa para calculo de EH só aparecerá do nível 2 por diante evitando problemas, e o escrito 1d10 foi substituído por uma imagem de dado, Sem a menor nescidade. mas ficou bonito. 
3. Agora ao colocar o muse em cima das características sorteadas ele muda para 7 dados, Também, Sem a menor necessidade. mas ficou bonito.
 

## **1.1.2 :** 
Agora Itens de Efeito pode ser mandados para o chat clicando no Balão dentro do item como nos pertences.

 
## **1.1.3 :** 
Agora nas fichas de personagem e NPCs os valores de L M P das armas estão com valores finais. Os Danos são mostrados até 125% se os ícones estiveram recolhidos, assim como nas técnicas de combate, fazendo o mesmo pode se ver os ícones das categorias que elas perteces.


## **1.1.4 :** 
Adicionado opção para pegar as informações da defesa ao marcar o target em um token, sendo desnecessário o uso de macros (essa opção pode ser desativada na página de configurações do sistema). Para o mestre de jogo, existe também uma nova opção para usar um atalho de teclado para marcar o target (o padrão é a tecla "t", mas pode ser mudado na página de configurações do sistema). Ao usar o módulo [Drag Ruler](https://foundryvtt.com/packages/drag-ruler), a configuração de cores utilizando a Velocidade Base da ficha já está programada no sistema. O item de efeito agora támbem pode modificar os valores dos pontos de aquisição de: Magias, Técnicas de Combate, Grupos de Armas e Habilidades.


## **1.1.5 :** 
Arrumado rolagens de Combate abaixo da coluna -7. Adicionado total de peso(Kg) para cada pertence na lista da ficha de personagem, e arrumado numeros com casa decimal em alguns campos referente a carga total dos pertences.


## **1.1.6 :** 
Ajustada a integração do módulo [Drag Ruler](https://foundryvtt.com/packages/drag-ruler), agora todos os jogadores podem ver as cores de velocidade de todos Personagens e NPC's. Na aba de Combate na ficha de NPC agora é mostrado a imagem dos itens.


## **1.1.7 :** 
Adicionado opção nas configurações do sistema para mudar o tamanho da fonte nos textos do chat, essa configuração é pessoal pra cada usuário e funciona por porcentagem, onde 100% é o tamanho original. Adicionado verificação no sistema de target para não apresentar erro ao tentar pegar as informações de defesa de uma ficha de Inventário. Adicionado Hooks nas rolagens retornando o item rolado e o usuário que fez a rolagem. 
~~~javascript Hooks.on('tagmar_itemRoll', function (itemRolado, usuario) {});~~~


## **1.1.8 :** 
Com a última atualização do [Bar Brawl](https://foundryvtt.com/packages/barbrawl) agora é possível ignorar valores limites, quando ativada opção de criar barras automaticamente, a barra de **EH** tem o limite máximo ignorado, já a barra de **EF** tem seus limites máximo e mínimo ignorados, podendo somar além do valor máximo ou subtrair abaixo de zero. Otimização dos cálculos de características finais na ficha de Personagem, alguns campos que são calculados automaticamente foram setados como readonly, impossibilitando a tentativa de modificá-los. Nas tabelas de Magia, Pertences e Efeitos da ficha de Personagem, as imagens podem ser ocultadas como nas tabelas da aba Combate.


## **1.1.9 :** 
Nova opção nas configurações do sistema, **Modificar ajuste manualmente**, quando ativado permite que se altere manualmente os valores de ajuste(INT, AUR, CAR, FOR, FIS, AGI, PER) na ficha de Personagem, deixando de calcular automaticamente através das Características Sorteadas. Efeitos não calcularão atributos de ajuste quando esta opção está ativada. Recomendável o uso apenas quando não lhe agradar a definição dos atributos por sorteio.