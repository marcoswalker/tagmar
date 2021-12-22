# Atualizações

## **1.0.1 :** 
O valor total mostrado na aba Habilidade, não estava sendo calculado com o -7 para habilidades, igual a 0, agora ela mostra o valor final a ser lançado menos o valor de penalidade e bônus geral no topo da ficha da aba habilidade (lembre-se, sempre que ao criar um personagem novo ou passar de nível deve ser aberto cada item de habilidade para que seja atualizada, colocando valor ou não no nível! Clique fora da caixa e feche em seguida assim os dados serão atualizados). OBS.: Os valores de rolagens estavam corretos, são mudanças visuais somente, nada no compêndio de criaturas mudou basta usar a habilidade que os cálculos estarão corretos mesmo mostrando um número diferente, caso queira mudar isso basta abrir e fechar o item habilidade.

 
## **1.0.2 :** 
Colocamos 22 Imagens para personalizar as fichas, basta entrar nas Configurações de jogo, alterar configurações, Configurações de Sistema e na "lista" selecionar o tema e Salvar mudanças.


## **1.0.3 :** 
Descobrimos um erro, na ficha de personagem ou npc, na parte de caracterização ou descrição, quando inserido texto com quebra de linha, qualquer outro campo alterado na ficha acaba acrescentando espaços no texto e impossibilitava a rolagem de testes de resistência. O problema em torno dos testes foi contornado, mas ainda deve-se tomar cuidado quando inserir caracterização ou descrição com quebra de linha nas fichas de personagem ou npc. Sugestão para uso das fichas do compêndio: sempre duplicar as criaturas que for usar.

 
## **1.0.4 :** 
1. Agora os ícones das Armaduras e Técnicas de combates, podem ser ativados clicando no título da primeira coluna. 
2. Erro 1.0.3 das caixas de texto foi remediado, colocamos um botão para travar e destravar as caixas de Texto, assim quando o texto usar quebra de linha nas caixas de texto dos NPCs e Personagens e alguns itens, não mais ocorrera o distanciamento das frases em quebra de linha, porem ainda recomendamos que evitem as quebras de linhas nas caixas de texto.


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
1. Adicionado opção para pegar as informações da defesa ao marcar o target em um token, sendo desnecessário o uso de macros (essa opção pode ser desativada na página de configurações do sistema). Para o mestre de jogo, existe também uma nova opção para usar um atalho de teclado para marcar o target (o padrão é a tecla "t", mas pode ser mudado na página de configurações do sistema). 
2. Ao usar o módulo [Drag Ruler](https://foundryvtt.com/packages/drag-ruler), a configuração de cores utilizando a Velocidade Base da ficha já está programada no sistema. 
3. O item de efeito agora támbem pode modificar os valores dos pontos de aquisição de: Magias, Técnicas de Combate, Grupos de Armas e Habilidades.


## **1.1.5 :** 
Arrumado rolagens de Combate abaixo da coluna -7. Adicionado total de peso(Kg) para cada pertence na lista da ficha de personagem, e arrumado numeros com casa decimal em alguns campos referente a carga total dos pertences.


## **1.1.6 :** 
Ajustada a integração do módulo [Drag Ruler](https://foundryvtt.com/packages/drag-ruler), agora todos os jogadores podem ver as cores de velocidade de todos Personagens e NPC's. Na aba de Combate na ficha de NPC agora é mostrado a imagem dos itens.


## **1.1.7 :** 
1. Adicionado opção nas configurações do sistema para mudar o tamanho da fonte nos textos do chat, essa configuração é pessoal pra cada usuário e funciona por porcentagem, onde 100% é o tamanho original. 
2. Adicionado verificação no sistema de target para não apresentar erro ao tentar pegar as informações de defesa de uma ficha de Inventário. 
3. Adicionado Hooks nas rolagens retornando o item rolado e o usuário que fez a rolagem. 
~~~javascript 
Hooks.on('tagmar_itemRoll', function (itemRolado, usuario) {});
~~~


## **1.1.8 :** 
1. Com a última atualização do [Bar Brawl](https://foundryvtt.com/packages/barbrawl) agora é possível ignorar valores limites, quando ativada opção de criar barras automaticamente, a barra de **EH** tem o limite máximo ignorado, já a barra de **EF** tem seus limites máximo e mínimo ignorados, podendo somar além do valor máximo ou subtrair abaixo de zero. 
2. Otimização dos cálculos de características finais na ficha de Personagem, alguns campos que são calculados automaticamente foram setados como readonly, impossibilitando a tentativa de modificá-los. 
3. Nas tabelas de Magia, Pertences e Efeitos da ficha de Personagem, as imagens podem ser ocultadas como nas tabelas da aba Combate.


## **1.1.9 :** 
Nova opção nas configurações do sistema, **Modificar ajuste manualmente**, quando ativado permite que se altere manualmente os valores de ajuste(INT, AUR, CAR, FOR, FIS, AGI, PER) na ficha de Personagem, deixando de calcular automaticamente através das Características Sorteadas. Efeitos não calcularão atributos de ajuste quando esta opção está ativada. __Recomendável o uso apenas quando não lhe agradar a definição dos atributos por sorteio.__


## **1.2.0 :**
1. Removido a opção de marcar o target por atalho de teclado, agora o Mestre de Jogo deve usar o botão do meio do mouse. 
2. Quando uma rolagem de ataque resulta em **verde** ou **cinza** uma segunda rolagem é executada mostrando o resultado do crítico no chat. 
3. Na ficha do item de **Combate**, o antigo **B.Magico** se tornou **Coluna+** que agora soma apenas na coluna da arma, uma nova caixa chamada **Dano+** soma apenas no dano da arma.


## **1.2.1 :**
Na tela do Mestre de Jogo, em **Basic Controls** na esquerda, agora tem um novo ícone de dado em baixo da ferramenta de medição de distância. Ao clicar, uma janela se abrirá, nela o Mestre pode fazer dois tipos de rolagens avulsas, __Teste de Resistência__ ou __Rolagem direto na tabela__, basta preencher os campos e clicar no ícone de dado ao lado dos campos referentes.   


## **1.2.2 :**
Reescrito toda programação de rolagem de itens(Combate, Habilidade, Magia, Técnicas de Combate), agora essas são controladas apenas pela classe tagmarItem, com o resultado agora a rolagem de crítico aparece no chat após a rolagem do ataque. Novo Hooks adicionado:
~~~javascript
Hooks.on('tagmar_Critico', function (coluna_rolada, tabela_resol, user, actor) {});
~~~

## **1.2.3 :**
1. As armas agora podem ser duplicadas na ficha de Personagem.
2. Quando clicar para deletar algum item das fichas, uma janela aparecerá para confirmar a ação. Evitando deletar "sem querer" o item.
3. Mudança nas fontes usadas.
4. Novo compêndio de Journals chamado **Registros** com Datas Sagradas e Datas Profanadas do mundo Tagmar. 


## **1.2.4 :** 
Nova ficha alternativa, é exatamente igual a outra, porém utiliza o sistema de compra de atributos por pontos. Para quem gosta de fazer a ficha no excel vai gostar ainda mais dessa atualização. Ao abrir a ficha de um Personagem, clique em "Sheet" uma pequena engrenagem no topo da ficha, ao lado de "Prototype Token", escolha tagmar.tagmarAltSheet, recomendável utilizar individualmente por ficha, mas se quiser deixar como default não tem problema.


## **1.2.5 :** 
Magias agora podem ser arrastadas para a hotkey.


## **1.2.6 :**
1. Adicionado novo tipo "Magia" nos itens de **Combate**, quando atacar com um item **Combate** do tipo "Magia" ou nenhum tipo, o ataque vai rolar na L0. No tipo "Magia", será removido do karma o valor igual ao nível do ataque. Ao não escolher nenhum tipo, o consumo da munição será igual ao nível, pode ser usado para ataques mágicos provenientes de items com karma próprio.
2. Técnicas de Combate são ordenadas por Categoria.

## **1.2.7 :**
Resolvido problema nas rolagens de Moral acima da coluna 20.

## **1.2.8 :**
Resolvida incompatibilidade com o módulo Forien's Quest Log.

## **1.2.9 :**
Preparação para Foundry Vtt versão 0.8.x, trocadas funções em depreciação: getOwnedItem, createOwnedItem e deleteOwnedItem.

## **1.3.0 :**
Rolagem de Habilidades agora tem as dificuldades: Falha, Rotineiro, Fácil, Médio, Difícil, Muito Difícil, Absurdo e Impossível.

## **1.3.1 :**
Rolagem de Crítico mais completa.

## **1.3.2 :**
Arrumado bug nos cálculos de pontos de aquisição na ficha de Personagem padrão.

## **1.3.3 :**
Nas rolagens de crítico nos Combates, é inserido uma tabela com os danos da arma (25%,50%,75%,100%) no lugar que apareceria o Dano.

## **1.3.4 :** 
Ajustado resultado nas rolagens de Testes de Resistência.

## **1.3.5 :**
Arrumado código que bugava o DragRuler.

## **1.3.6 :**
Atualização para versão 0.8.6 do Foundry Vtt, essa versão do sistema deixa de funcionar nas versões mais antigas que 0.8.6 do Foundry Vtt.

## **1.3.7 :**
Correção de erros referente atualização 0.8.6 do Foundry Vtt.

## **1.3.8 :**
Ajuste na fonte nas fichas de cadastro.

## **1.3.9 :**
Revisão e melhorias nos códigos das fichas.

## **1.4.0 :**
Problemas com o BarBrawl, apresenta erro no console mas cria as barras normalmente.

## **1.4.1 :**
Melhorias visuais e extermínio de alguns bugs malditos.

## **1.4.2 :**
Testes de resistência com valores dentro do range da tabela usam a tabela de resolução.

## **1.4.3 :**
Arrumado problemas de cálculo da ficha quando ativa efeitos.

## **1.4.4 :**
Jogadores podem criar itens de efeito na própria ficha, botão adicionado ao lado da caixa de busca na aba Efeitos.

## **1.4.5 :**
Ao clicar com o botão **direito** do mouse sobre items roláveis (Combate, Habilidade, Técnica de Combate, Magia) é possível ler a descrição do item sem efetuar a rolagem para o chat.

## **1.4.6 :**
Na ficha de edição das Técnicas de Combate foi adicionado o campo **Bônus/Penalidade** onde o valor é somado ao total da técnica.

## **1.4.7 :**
Todos os items incluindo Raça e Profissão podem ser criados direto na ficha de Personagem.

## **1.4.8 :**
Adicionado botão na turn order para somar iniciativa em vários combatentes ao mesmo tempo.

## **1.4.9 :**
Na tela de configuração do Jogador, apenas Personagens estarão disponível para selecionar. Na aba de atores, os atores do tipo "Inventario" estão escondidos dos Jogadores mesmo tendo permissão de observador ou dono.

## **1.5.0 :**
Melhorias na disposição das informações nas fichas.

## **1.5.1 :**
Atributos básicos não vão mais aparecer em efeitos usando a ficha de compra de atributos por pontos.

## **1.5.2 :**
1. Adicionado botão nas fichas de NPC para gerar um Journal com imagem e descrição do mesmo.
2. Adicionado sistema de descanso nas fichas de Personagem, "Descanso Completo" restaura EF,EH e Karma ao valor maxímo, "Descanso Curto" restaura apenas a metade.

## **1.5.3 :**
Mudança na forma de chamar testes de atributos, resistência e moral.

## **1.5.4 :**
Bugs do programador.

## **1.5.5 :**
1. Espaço para descrição nas fichas de personagens e npc's movidos para aba Biografia, edição agora é igual ao Journal. Mudança também nos campos de descrição dos itens.
2. Adicionado suporte para módulo [Polyglot](https://foundryvtt.com/packages/polyglot), idiomas podem ser selecionados na área de Habilidades da ficha.

## **1.5.6 :**
1. Utilizando módulo Dice-so-nice, foi adicionado uma opção para que a cor do dado rolado represente o resultado das tabelas de resolução. Pode ser desativado nas opções do sistema.
2. Adicionado botões para aplicar dano (ou cura) diretamente no chat das rolagens de Combate. Para rolagens críticas deve se escolher entre as opções a mais adequada (opções apenas para aplicar dano), na ausência de equipamento de Defesa com absorção mágica, o dano é aplicado diretamente na **EF**. Indicação de absorção mágica deve ser selecionado na edição do equipamento de Defesa.
3. Adicionado um campo onde é somado o valor dos danos (não críticos), esse valor pode ser enviado ao chat.

## **1.5.7 :**
Corrigido bug para aplicar danos automaticos nos NPC's.

## **1.5.8 :**
Algumas correções para versão 9 do Foundry Vtt.