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

Este foi o código feito na primeira aula, neste caso, o el significa o elemento que estamos puxando, que é a div _#app_, e o objeto data informa os dados que queremos passar, no caso a string que o _title_ recebe.

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

**Aula 27 - Código JS no Template**

Expressões JS simples, expressões de uma linha funcionam dentro do HTML, porém coisas com um if, for, while e etc, isso não devem ser colocados no HTML e sim externamente, com um método por exemplo.

**Aula 28 - Usando Two-Way-Binding**

Para modificarmos o valor de um _data_ na instância do Vue através de um input por exemplo, não precisamos utilizar v-bind e v-on, podemos utilizar uma única propriedade (a _v-model_) passando a variável que queremos manipular.

```html
<input  type="text"  v-model="title">
```

**Aula 29 - Propriedades computadas**

No conceito de methods dentro do Vue, sempre que qualquer coisa mudar na instância, esse método será executado novamente. Já dentro da propriedade _computed_, ele é executado apenas quando é chamado. Isso pode ajudar bastante na performance da aplicação.

```html
<div  id="app">
  <p>Resultado: {{ result }}</p>
</div>

<script>
new Vue({
  el: '#app',
  computed: {
    result() {
      return  this.counter >=  5  ?  'Maior ou igual a 5'  :  'Menor que 5'
    }
  },
})
</script>
```

Neste caso, como podemos ver, mesmo o _computed_ sendo uma função, ele é chamado de forma normal, sem as parenteses.

Em propriedades computadas, você obrigatóriamente precisa retornar o valor.

**Aula 30 - Monitorando Mudanças**

Mais uma propriedade da instância do Vue, o _watch_, neste caso, podemos duplicar os nomes, na verdade, devemos, pois ele irá assistir um determinado _data_.

```js
watch: {
 counter(newValue, oldValue) {
    setTimeout(() => {
      this.counter =  0
    }, 2000)
 }
}
```

Neste caso, o nome da função deve ser o nome da variável que queremos assistir, e como podemos ver, recebemos o valor antigo e o novo como propriedades.

Utilizamos uma Arrow Function, pois o this não funcionaria, poderíamos abistrair o this no escopo acima, porém, é possível utilizar o this como uma arrow function, vai da sua escolha com qual deseja utilizar.

**Aula 31 - Sintaxe Reduzida (Shorthands)**

Existe uma forma mais fácil de chamar o _v-bind_ e o _v-on_.

```html
<div  id="app">
  <p>{{ counter }}</p>
  <button @click="add">+1</button>
  <hr/>
  <input  type="text" :value="counter">
</div>
```

Assim, o **@** significa que estamos chamando o _v-on_ e os **:** significa que estamos chamando o _v-bind_

**Desafio 03 - Propriedades reativas**

Neste desafio, devemos fazer os seguintes passos:

1. Exibir em "resultado" o texto 'Valor Diferente' enquanto "value" for diferente de 22 - "value" é alterado pelos botões. Mostrar 'Valor Igual' quando "value" for igual a 22.
2. Monitorar as mudança de "result" e reiniciar "value" para 0 depois de 5 segundos (dica: setTimeout(..., 5000).

Resolvi esse desafio da seguinte forma:

```javascript
new  Vue({
  el:  '#challenge',
  data: {
    value:  0
  },
  computed: {
    result() {
      return  this.value ===  22  ?  'Igual á 22'  :  'Diferente 22'
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value =  0
      }, 5000)
    }
  }
});
```

Aqui, está apenas o código javascript, [você pode ver o código completo do desafio aqui.](dom/desafio-03)

**Aula 37 - Estilo dinâmico sem classe CSS**

Passar estilos como propriedades de uma tag é algo parecido como no React, veja os exemplos abaixo:

```html
<div class="demo" :style="{ backgroundColor: color }"></div>
<div class="demo" :style="[myStyle, { height: height }]"></div>

<script>
new Vue({
  el: '#app',
  data: {
    color: 'red',
    width:  100,
    height:  120
  },
  computed: {
    myStyle() {
      return { backgroundColor: this.color, width: `${this.width}px` }
    }
  }
})
</script>
```

Podemos tanto passar o estilo inline utilizando camelcase, que é o caso da primeira div.
Como também, podemos passar o estilo através da instância do Vue, como é o caso de uma instância computada.
Na segunda div mesclamos entre camelcase e através da instância, isso é bem simples.

**Desafio 04 - Estilo**

Foram feitos diversos mini-desafios baseados nas aulas anteriores de Estilos.

[Você pode ver o código feito aqui.](/dom/desafio-04)

### 3 - Usando condicionais & Renderização de listas

**Aula 42 - Renderização Condicional com v-if/v-else**

Neste momento, queremos mostrar um parágrafo quando tiver um usuário logado ou outro parágrafo se não tiver nenhum usuário logado. Agora, entra uma propriedade do Vue chamada v-if.

Vejamos o exemplo construido na aula:

```html
<p v-if="user.logged">Usuário logado: {{ user.name }}</p>
<p v-else="user.logged">Nenhum usuário logado</p>
```

Neste caso, se _user.logged_ seja verdadeiro, será adicionado o primeiro parágrafo e o segundo será removido e vice-versa;

A propriedade _v-else_ só irá funcionar caso a tag anterior tenha a propriedade _v-if_.

Citado na próxima aula, também existe a propriedade _v-else-if_, que funciona da mesma forma que o if, porém ele precisa estar depois do if, também. Porém, caso o _v-if_ seja verdadeiro, o Vue irá ignorar todos os seguintes mesmo que também sejam verdadeiros.

Caso queiramos verificar se uma variável é verdadeira e caso ela for queremos mostrar diversos itens, podemos colocar essa verificação dentro de uma tag chamado _template_, colocando essa tag, será mostrado os elementos que estão dentro dela, porém ela não será adicionada na página.

```html
<template v-if="user.logged">
  <p>Usuário logado: {{ user.name }}</p>
  <p>Perfil: Admin</p>
</template>
```

Se o usuário estiver logado, ambos os parágrafos serão adicionados ao código, porém a tag _template_ não

**Aula 46 - Esconda o elemento com v-show**

Funcionando de forma parecida com o _v-if_ temos o _v-show_, porém, se fossemos utilizar ele nos exemplos anteriores, o v-show não removeria os elementos da tela, apenas iria esconder esses elementos utilizando CSS.

O _v-show_ não possui algo como _v-show-else_, ou seja, para mostrarmos um elemento em determinado caso mas outro se não estivermos nesse determinado caso, precisaremos utilizar uma função para poder fazer a tratativa.

**Aula 47 - Rederizando listas com v-for**

Para renderizar listas, podemos utilizar a propriedade _v-for_, que iremos colocar o nome da variável que será recebida com o item e o array que queremos criar a lista, veja o exemplo:

```html
<li v-for="color in colors">{{ color }}</li>

<script>
  new Vue({
    {...}
    data: {
      colors: ['red', 'green', 'yellow', 'blue'],
    },
  })
</script>
```

O v-for precisa ser chamado no elemento que será a base da lista não no elemento pai.

Por exemplo, nesse caso chamamos na li, não na ul.

**Aula 50 - Iterando em objetos**

Podemos fazer um _v-for_ dentro de outro v-for, por exemplo:

```html
<li v-for="people in peoples">
  <template v-for="(value, key, index) in people">
    {{ key }}: {{ value }} ({{ index }})
  </template>
</li>

<script>
  new Vue({
    {...}
    data: {
      peoples: [
        { name: 'felipesuri', age: 16, peso: 50 },
        { name: 'Francyne', age: 17, peso: 65 },
        { name: 'Ana', age: 16, peso: 70 },
      ]
    }
  })
</script>
```

Assim, conseguimos acessar cada item dentro do objeto sem precisamos fazer coisas muito complexas, claro que não precisaríamos fazer isso, bastava fazer um _people.name_ para pegar o nome, mas se tivermos muitos itens e todos forem retornar de forma igual, fazer isso é mais fácil.

**Desafio 05 - Condicionais & Listas**

Desafio simples utilizando os conceitos apresentados anteriormente.

[Você pode ver o código do desafio aqui.](/condicionais-e-listas/desafio-05)

### 4 - Projeto #01 -- Matador de Monstros

Nesta sessão, obtive o desafio de construir um matador de monstros sozinho para depois,
conforme as aulas ir refinando o código.

[Você pode ver o código aqui.](/projeto-01-monstros)

### Módulo 5 - Entendendo a Instância do Vue

Neste módulo iremos pausar um pouco o desenvolvimento para entendermos como a
instância do Vue funciona.

É possível sim utilizar mais de uma instância Vue, porém não é o mais utilizado.

**Aula 74 - Meu Vue Framework**

Nesta aula desenvolvemos o nosso próprio Vue, claro que de forma bem básica,
nada muito complexo.

[Você pode ver o código aqui](/instancia-vue/meu-vue.html)

**Aula 79 - Usando Componentes**

Se quisermos utilizar um componente Vue, podemos setar usar a função Vue.component passando
como parâmetros o nome do componente e um objeto que dentro estará uma Instância do Vue
para o componente.

```html
<body>
  <div id="app">
    <comp></comp>
  </div>

  <script>
    Vue.component('comp', {
        template: `<h1>Componente</h1>`
      })
  </script>
</body>
```

Neste caso, o template seria montado dentro da tag comp, que é o nome do componente,
ele pode ser colocado diversas vezes dentro do nosso HTML, diferente de um template
dentro de uma instância do Vue que só pode ser montada uma vez.

Uma observação para se fazer é que o _data_ deve ser passado como uma função.

**Aula 80 - Limitações dos templates**

Nesta aula, foi conversado que os templates têm suas limitações e que iremos modificar
a forma que iremos desenvolver nossas aplicações utilizando Vue Client.

**Aula 83 - Ciclos de vida da Instância do Vue**

Existe uma função no Vue que é para destruir, quando ela é chamada todos os watch, methods
são limpos e não serão mais executados.

Nesta aula, brincamos com alguns métodos da Instância, que alguns são _beforeCreate_, _created_,
_beforeDestroy_, _destroyed_.

[Você pode ver o código e os métodos aqui.](/instancia-vue/instancia-vue-ciclo-vida.html)

### Módulo 6 - Fluxo de Desenvolvimento "Real" Usando Vue CLI

A partir de agora, iremos criar projetos utilizando a CLI.

Vamos seguir os passos abaixo para criar nosso primeiro projeto.

```bash
# Iremos instalar a CLI do Vue.

~$ yarn global add @vue/cli

# Agora iremos criar um projeto

~$ vue create projeto-simples
```

Assim, será criado o nosso primeiro projeto com o Vue CLI, você pode vê-lo
[aqui](/vue-cli/projeto-simples).

**Aula 92 - Entendendo arquivos .vue**

Este arquivo é cada um dos componentes da aplicação.

**Aula 95 - Adicionando plugins ao projeto**

Para adicionar plugins ao projeto Vue, basta rodar o seguinte comando:

```bash
~$ vue add <nome_do_plugin>
```
