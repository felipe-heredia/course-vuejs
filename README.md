# Curso de Vue.js

## O que é Vue.js?

VueJS é um framework Javascript fantástico para construir aplicações Frontend! Vue.js mistura o melhor do Angular + React!

## Módulos

Nesta parte, teremos anotações de cada módulo do curso.

### 1 – Introdução

O Vue funciona de forma simples no HTML e JS, sem precisar baixar nada, basta você chamar um dos scripts abaixo que o Vue estará funcionando no arquivo ou projeto.

```html
<!-- Versão de desenvolvimento, incluindo ajuda e avisos no console -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

```html
<!-- Versão de produção, optimizado para menor tamanho e velocidade -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

**Aula 02**

Chamando um desses dois scripts, para podemos fazer com que o Vue funcione na nossa máquina local, para testes, vamos fazer o seguinte arquivo html.

```html title=introduction/primeira-appv1.html
<script  src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>  

<div  id="app">
<p>{{ title }}</p>
</div> 

<script>
  new  Vue({
    el:  '#app',
    data: {
      title:  'Usando Vue.js!'
    }
  })
</script>
```

Este foi o código feito na primeira aula, neste caso, o el significa o elemento que estamos puxando, que é a div _ #app_, e o objeto data informa os dados que queremos passar, no caso a string que o _title_ recebe.

**Aula 03**

```html title=introduction/primeira-appv2.html
<script  src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>  

<div  id="app">
  <input  type="text"  v-on:input="modifyTitle">
  <p>{{ title }}</p>
</div> 

<script>
  new  Vue({
    el:  '#app',
    data: {
      title:  'Usando Vue.js!'
    },
    methods: {
      modifyTitle(event) {
        this.title = event.target.value
      }
    }
  })
</script>
```

Neste caso acima, o objeto _methods_ receberá métodos que serão executados no momento em que um evento acontecer no HTML. Na propriedade _v-on:input_ mesmo não passando o evento, o evento é passado por padrão, embora você possa passar seus parâmetros.

Neste caso, sempre que modificarmos o input, o _title_ será modificado, assim modificando o conteúdo do nosso parágrafo.

### 2 - Usando VueJS para Interagir  com a DOM

**Aula 11 - Entendendo VueJS Templates**

O Vue é um intermediário, entre o template e o código JS. Ou seja, no caso de {{ title }}, o Vue entende isso e subistitui pela variável que setamos, caso o Vue fosse desativado, seria mostrado em tela {{ title }}.

Ou seja, ele é uma ponte que entende aquilo que colocamos e subistitui.

**Aula 12 - Sintaxe de Template e Instância VueJS trabalhando juntos**

Tudo aquilo que vai ser retornado pelo Vue, seja atributo o método, deve ser ou ter uma forma de ser string, para que seja interpretado e mostrado em tela da forma correta.

**Aula 13 - Acessando dados na instância VueJS**

Você não pode ter uma função e um dado com o mesmo nome, pois o Vue joga tudo para a instância raiz, ou seja, se tivermos um data _title_ e um method _title_, terá um conflito e não irá funcionar.

**Aula 14 - Biding de atributos**

- Uma diretiva é uma propriedade personalizada, que não é nativa do HTML e que é interpŕetada pelo Vue.

Quando formos passar propriedades nos tags html, precisamos passar diretivas, a primera forma mostrada no curso é esta forma:

```html
<a  v-bind:href="link">Blog felipesuri</a>
```

Neste caso, a variável link, está dentro do _data_ lá na nossa instância do Vue.

Após os dois pontos, nós colocamos o nome da propriedade que iremos passar, que nesse caso é o _href_.

**Aula 16 - Evitando Re-renderização com v-once**

Neste caso, como nós queremos modificar o atributo _title_ apenas no parágrafo debaixo, então no que não queremos modificar, passamos a propriedade _v-once_, assim o Vue não irá se preocupar em ficar olhando aquele atributo naquela tag para ver se ele se modificou, ele só renderizará uma vez.

**Aula 18 - Hora de praticar  – Template**

Nesta aula, foi me entregue 5 desafios, que são relativamente fáceis e que utilizam os conceitos explicados anteriormente.

[Você pode ver o código do desafio aqui.](dom/desafio-01)

**Aula 20 - Escutando Eventos**

A propriedade _v-on_ é a diretiva que vai ficar escutando o evento que vem na sequência.

**Aula 22 - Passando nossos próprios Argumentos como Eventos**

Para passar nosso parâmetro é simples, basta fazer: `add(5)`, assim o Vue irá esquecer do event e irá utilizar nosso parâmetro, mas caso queira passar o event, basta fazer: `add(5, $event)`, precisa ser _$event_, pois assim será entendido que queremos passar o evento.

**Aula 24 - Eventos de teclado**

Com a propriedade `v-on:keyup.enter`, podemos chamar uma função, sempre que uma tecla for pressionada, que nesse caso é a tecla enter.

**Aula 25 - Hora de Praticar – Eventos**

Mais um desafio, que é simples. Primeiro, quando clicar em um botão, preciso mostrar um alerta. E depois, com algumas ações feitas no teclado eu modifico uma variável X.

Sem precisar chamar uma função, também podemos modificar o valor, da seguinte forma `value = $event.target.value`, no lugar da função, vai simplesmente isso.

[Você pode ver o código aqui.](dom/desafio-01)