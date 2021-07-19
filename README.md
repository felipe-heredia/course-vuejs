

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


### Módulo 7 - Introdução aos componentes

**Aula 102 - Registrar componente global e local**

Nesta aula, aprendemos a forma de registrar componente global ou local.

Utilizando o Vue.component, o componente será registrado em todas as instâncias do Vue
naquele contexto, caso queiramos registrar apenas na instância marcada basta passar um
atributo que é _components_, semelhante a _methods_ e _data_.

```html
<script>
new Vue({
  el: '#app1',
  components: {
    counter1: counter,
  }
})
</script>
```

**Aula 107 - Hora de Praticar: Organizar Projeto em Componentes**

Neste desafio, tenho que organizar os itens e transformá-los em componentes, dessa forma
organizando melhor o código.

[Você pode ver o código aqui.](/componentes/componente-desafio)

### Módulo 07 - Comunicação Entre Componentes

**Aula 115 - Comunicação Direta com Props**

A comunicação entre componente pai e filho se dá através das propriedades, semelhante a forma
que é no React.

No nosso script no arquivo _.vue_ passamos um objeto _props_ com as propriedades que iremos
receber

```js
export default {
  props: ['name']
}
```

Já lá no componente pai, passamos a propriedade, desta forma:

```html
<!-- Passando de forma estática -->
<componente name="Felipe"></componente>

<!-- Passando como um data, para que conversem entre si -->

<componente :name="Felipe"></componente>
```

**Aula 119 - Validando Props #01**

Se quisermos validar as propriedades, é algo simples:

```js
export default {
  props: {
    name: {
      type: String,
      default: 'Anônimo',
      required: true,
    }
  },
}
```

Neste caso, a propriedade _name_ é uma string e é obrigatória, mas caso não seja passada,
será impresso o valor padrão.

**Aula 121 - Comunicação indireta com eventos personalizados**

Caso queiramos monitonar no componente pai as mudanças feitas no filho, podemos fazer da
seguinte forma:

```html title='Componente Filho'
<script>
export default {
  methods: {
    resetName() {
      this.name = 'Pedro'
      this.$emit('changeName', this.name)
    }
  }
}
</script>
```

A primeira propriedade da função emit é o nome que será dado e na segunda prop é o dado que
é modificado.

```html title='Componente Pai'
<componente :name="name" @changeName="name = $event" />
```

Como propriedade do componente pai, podemos chamar aquele nome dado na função $emit, nele
nós recebemos o evento, que pode retornar diversas coisas, mas nesse caso está retornando
apenas a string que queremos.

**Aula 122 - Comunicação indireta com Callback**

Para conversarmos entre o componente Filho e Pai, podemos passar uma função Callback,
da seguinte forma:

```html title='Componente Filho'
<script>
export default {
  props: { resetFn: Function }
}
</script>
```

```html title='Componente Pai'
<template>
  <componente :resetFn="resetName" />
</template>

<script>
export default {
  methods: {
    resetName() {
      this.name = 'Pedro'
    }
  }
}
</script>
```

Desta forma, no componente filho em um botão, podemos passar a função resetFn que funcionará
e transformará o nome novamente em Pedro.

**Aula 126 - Usando Event Bus para Comunicação entre Componentes Irmãos**

Podemos criar um outro arquivo no nosso projeto com o nome de barramento,
ele será chamado em ambos os componentes filhos para podermos modificar os valores que
desejamos.

```js title=Barramento.js
import Vue from 'vue'
export default new Vue()
```

Então, importaremos ele no nosso script e faremos da seguinte forma no emissor da função:

```js
import barramento from '@/Barramento'

export default {
  ...,
  methods: {
    modifyAge() {
      this.age = 33
      barramento.$emit('changedAge', this.age)
    }
  }
}
```

Já no outro componente onde vamos receber os dados, faremos o seguinte:

```js
import barramento from '@/Barramento'

export default {
  ...,
  created() {
    barramento.$on('changedAge', age => {
      this.age = age
    })
  }
}
```

Dessa forma, conseguimos mudar os dados sem precisar passar do filho para o pai e do pai
para o outro filho.

**Desafio 06 - Comunicação entre componentes**

Este desafio foi relativamente simples com os conceitos aprendidos no módulo.

[Você pode ver o código aqui.](/componentes-comunicacao/comunicacao-desafio)

### Módulo 9 - Uso avançado de componentes

**Aula 136 - Passando Conteúdo com Slots**

Para passarmos para o componente algo semelhante ao children do React, basta passarmos o
que queremos, por exemplo uma tag _p_ e lá no componente que queremos que isso esteja dentro
basta colocar uma tag _slot_:

```html
<template>
  <Pai>
    <p>Curso de Vue.js</p>
  </Pai>
</template>
```

```html title="Componente Pai"
<template>
  <div>
    <h1>Qual é o curso dessa vez?</h1>
    <slot></slot>
  </div>
</template>
```

Desta form o Vue irá subistituir a tag slot pelo que está no corpo do componente Pai.

**Aula 138 - Usando múltiplos slots**

Podemos passar diversos slots e nomear cada um para que cada um recebe um item X e não
para que todos que forem passados sejam impressos.

```html title="Componente Pai"
</template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
<template>
```

```html
<template>
  <Pai>
    <h1 slot="autor">{{ citacoes[index].autor }}</h1>
    <p slot="texto">{{ citacoes[index].texto }}</p>
    <h6 slot="fonte">{{ citacoes[index].fonte }}</h6>
  </Pai>
</template>
```


**Aula 141 - Alternando entre múltiplos componentes**

Podemos utilizar componentes dinâmicos no Vue, assim mostrando um componente ou outro.

```html
<template>
  <component :is="componente" />
</template>

<script>
export default {
  components: { Citacoes, Sobre },
  data() {
    return { componente: 'Citacoes' }
  }
}
</script>
```

Desta forma o Vue interpretará a variável componente e irá nos devolver o componente que
está sendo chamado pelo nome.

**Aula 143 - Mantendo o componente dinâmico vivo**

Caso você queira manter o componente sempre vivo, ou seja, não quer com que ele seja
destruído sempre que você mudar a variável, basta passar uma tag por volta da tagc
component que irá funcionar.

```html
<template>
  <keep-alive>
    <component :is="Citacoes"/>
  </keep-alive>
</template>
```

Desta forma, caso a variável que chama o componente seja modificada, o componente não será
destruído e assim o "histórico" será mantido.

**Desafio 07 - Slots e componentes dinâmicos**

Desafio bem simples utilizando os conceitos aprendidos anteriormente.

[Você pode ver o código do desafio aqui.](/componentes-avancado/comp-avancado-desafio)

### Módulo 10 - Projeto #02 - Tarefas

Projeto tarefas desenvolvido, [você pode ver o código aqui](/projeto-02-tarefas)

### Módulo 11 - Formulários

**Desafio 08 - Formulários**

Desafio simples utilizando os conceitos aprendidos no módulo 11.

[Você pode ver o código do desafio aqui.](/formulario/desafio)

### Módulo 12 - Usando e criando diretivas

Uma diretiva *v-text* vai fazer com que o texto seja inserido dentro com componente. Ou seja será o conteúdo do exemplo abaixo.

```html
<template>
	<p v-text="'Usando uma diretiva'"></p>
</template>
```

**Como criar uma diretiva personalizada:**

```js
Vue.directive('destaque', {})
```

Um objeto de definição de diretiva pode prover algumas funções de gatilhos (todas opcionais):

- `bind`: chamada apenas uma vez, quando a directiva é  interligada pela primeira vez ao elemento. Aí é onde você pode fazer o  trabalho de configuração inicial.
- `inserted`: chamada quando o elemento for inserido no nó pai (garante a presença no nó pai, mas não necessariamente no documento).
- `update`: chamada após a atualização do VNode que contém o componente, **mas possivelmente antes da atualização de seus filhos**. O valor da diretiva pode ou não ter mudado, mas você pode evitar  atualizações desnecessárias comparando os valores atuais com os antigos  (veja abaixo, em argumentos dos gatilhos).
- `componentUpdated`: chamada após a atualização do Vnode que contém o componente, **inclusive de seus filhos**.]
- `unbind`: chamada somente uma vez, quando a diretiva é desvinculada do elemento.

Iremos a seguir explorar os argumentos que podem ser passados nessas funções de gatilho (`el`, `binding`, `vnode`, e `oldVnode`).

Os seguintes argumentos são esperados nas funções de gatilho das diretivas:

- `el`: O elemento a que a diretiva está vinculada. Isso pode ser usado para manipular o DOM diretamente.
- binding: Um objeto contendo as diversas propriedades.
- `vnode`: O nó virtual produzido pelo compilador do Vue.
- `oldVnode`: O nó virtual anterior, somente disponível em `update` e `componentUpdated`.

**Com excussão do el, todos os outros elementos devem ser tratados apenas como leitura.**

**Como passar valores para as diretivas:**

Os valores que virão da diretivas virá de `binding.value`, você tratará esse valor como desejar, por exemplo:

```js
bind(el, binding) {
  el.style.background = binding.value
}
```

```html
<p v-destaque="'red'">Diretiva personalizada</p>
<!-- Dessa forma, o background do parágrafo será vermelho -->
```

**Passando argumentos para a diretiva:**

Argumentos funcionam como o `:click` que é um argumento do v-on.

```html
<p v-destaque:fundo="'red'">Diretiva personalizada</p>
```

```js
bind(el, biding) {
  if (binding.arg === "fundo") {
    el.style.background = binding.value
  }

  // Dessa forma, apenas se receber o argumento fundo a cor será passada no background
}
```

**Modificando diretivas personalizadas com modificadores:**

Diferente dos argumentos que pode se passado apenas um por vez, os modificadores podem ser chamados diversos para o mesmo componente.

```html
<p v-destaque:fundo.atrasar>Diretiva personalizada</p>
```

```js
let delay = 0
if (binding.modifiers['atrasar']) delay = 3000

// Dessa forma, a string delay receberá um número de 3000
```

**Registrando diretivas localmente:**

```js
export default {
  directives: {
    'destaque-local': {
      ...
    }
  },
}
    
// Dessa forma funcionam as diretivas locais
```

**Usando múltiplos modificadores:**

Passar múltiplos modificadores não é algo complexo, basta adicionar `.modificador`:

```html
<p v-destaque:fundo.atrasar.alternar>Diretiva personalizada</p>
```

**Passando valores mais complexos para as diretivas:**

```html
<p v-destaque:fundo.alternar="{ color1: 'red', color2: 'purple' }">
  Diretiva personalizada
</p>
```

```js
destaque: {
  bind(el, binding) {
    console.log(binding.value)
    // Nesse caso sera impresso o objeto colocado nas propriedades do HTML acima.
  }
}
```

**Desafio 09 - Diretivas Personalizadas**

Desafio simples, que foi resolvido utilizando os conceitos ensinados no módulo 12.

[Você pode ver o código do desafio aqui.](/diretivas/diretivas-desafio/)

### Módulo 13 - Filtros e Mixins

Filtros são transformações que você pode fazer em alguns valores. Mixins são técnicas de reuso baseado em composição.

Como criar filtro localmente:

```
<template>
  <p>{{ user.cpf | cpf }}
</template>

<script>
export default {
  data() {
  	return {
  	  user: {
	    cpf: '94309898911'
	  },
  	},
  },
  
  filters: {
    cpf(value) {
      ...
    }
  }
}
</script>
```

No HTML, primeiro é passa a string que desejamos fazer o filtro, seguida de um `|` e o nome dos filtros que vamos passar, dessa forma o filtro será aplicado e será mostrado a string com o filtro.

Para ir adicionando mais filtros, basta adicionar mais `|`e o nome do filtro.

```html
<input type="text" :value="meuCpf | cpf" />
```

Dessa forma acima, o filtro CPF será aplicado na string do input meuCpf. Isso precisa ser feito no :value, o v-model não suporta essa estrutura.

Podemos evitar duplicação de conteúdos utilizando um mixin reutilizável em nossa aplicação, veja abaixo:

```js
// FruitsMixin.js

export default {
  data() {
    return {
      fruit: "",
      fruits: ["Banana", "Maça", "Laranja"]
    };
  },

  methods: {
    add() {
      this.fruits.push(this.fruit);
      this.fruit = "";
    }
  }
};

```

Dessa forma, podemos reaproveitar esse código acima importando o arquivo JavaScript e colocando dentro do array "mixins", sem precisar nos preocupar com criar outra propriedade data()

```vue
// App.vue

<template>
  <div>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>

    <input type="text" v-model="fruit" @keydown.enter="add" />
  </div>
</template>

<script>
import FruitsMixin from "./FruitsMixin";

export default {
  mixins: [FruitsMixin]
};
</script>
```

Mesmo utilizando o mesmo mixin, não haverá conflito entre os dados se o mixin for utilizado em outro componente.
Porém caso existe um array fruits dentro do App.vue, a prioridade será do item dentro do componente não o que vêm do mixin.

O mixin é uma mistura com a sua instância Vue atual.

*Podemos criar um mixin global através do Vue.mixin({}).

O Desafio foi entregue de forma simples, [você pode ver o código do desafio aqui.](filtros-mixins/filtros-mixins-desafio)

### Módulo 13 - Animações e Transições

Nesse módulo utilizaremos o [bootstrap-vue](https://bootstrap-vue.org/) para trabalhar com animações no nosso projeto.
Não entrarei em explicações sobre a biblioteca Bootsrtap-Vue nessa documentação, não acho uma boa biblioteca por conta dos nomes não serem tão intuitivos, me atentarei ao que for utilizado do Vue puro.

 Para trabalhar com animações do Vue, precisamos envolver o componente que desejamos animar dentro de uma tag </transition>, como no exemplo abaixo:

```
<template>
	<transition>
		<p>Mensagem animada!</p>
	</transition>
</template>
```

Dessa forma ainda não temos animação, mas essa é a base para podermos ter animações.

#### Transições com Classes CSS

Quando o objetivo é fazer uma transição ao mostrar um elemento, temos três classes CSS que podemos manipular, sendo elas:

- `*-enter`:
  Essa será o estado inicial e o padrão dela é `*-enter`, caso você não coloque nenhum nome, o nome será `v-enter`, caso o nome seja "especial" ficará: `especial-enter`.
- `*-enter-active`:
  Essa será chamada enquanto o processo de animação estiver ocorrendo. O Padrão de nome funciona da mesma forma da anterior.
- `*-enter-to`:
  Essa será chamada quando o processo de animação estiver finalizado.

Existem outras três classes para quando o elemento é retirado da tela:

- `*-leave`:
  Essa é o estado inicial de quando o item for removido da tela.
- `*-leave-active`:
  Essa será a chamada enquanto o processo de remoção do item estiver ocorrendo.
- `*-leave-to`:
  Essa classe representa o estado final do componente, ou seja, quando o processo de remoção for finalizado.

Caso eu utilize a tag `transition` sem nenhum nome,  a nomenclatura de classes será a seguinte:

```vue
<style>
.v-enter {...}
.v-leave {...}	
</style>
```

Caso utilize nome como por exemplo `fade`, será feito da seguinte forma:

```vue
<template>
	<transition name="fade">
  	<p>Mensagem de alerta!</p>
  </transition>
</template>

<style>
  .fade-enter {}
  .fade-enter-active {}
  .fade-enter-to {}
  .fade-leave {}
  .fade-leave-active {}
  .fade-leave-to {}
</style>
```

Para fazer animações usamos o que sabemos de CSS, não entrarei nesse mérito aqui.

Por padrão as classes `v-enter-to` e `v-leave` têm a opacidade 1.

Utilizando a propriedade `type` nós podemos definir quem mandará no tempo, seja *animation ou transition*, dessa forma se definirmos o *animation* como o principal, mesmo que após o *animation* cintinue uma *transition*, o elemento seguirá a animação e irá ignorar o tempo total da *transition*. O Type irá te ajudar a resolver problemas com animações e transições com tempos diferentes.

A propriedade `appear` fará com que a animação seja feita no momento em que sua aplicação for carregada. Isso serve para quando o item será mostrado mesmo sem interagir com a página.

Você pode utilizar classes diferentes em sua transição, basta usar `animação-class`, por exemplo: `enter-class=""` e colocar o nome da classe

Dentro da tag `transition` só pode ser mostrado um único elemento por vez.

Caso tenhamos dois itens que serão mostrados ou não dependendo de um v-if dentro do transition, podemos fazer o seguinte:

```vue
<template>
  <transition name="fade" mode="out-in">
    <p v-if="show" key="1">Mensagem 1</p>
		<p v-else key="2">Mensagem 2</p>
  </transition>
</template>
```

Precisamos colocar a propriedade `key` para identificar os dois itens.

*A propriedade `mode` na tag transition serve para aguardar um item sair para o outro entrar e a animação não ficar com problemas.*

#### Transições com JavaScript

O princípio é o mesmo que em transições com CSS, vejamos os métodos de entrada:

- `before-enter` como o próprio nome já diz, ocorre antes da entrada
- `enter` método chamado quando o componente está entrando.
- `after-enter` método chamado depois da entrada do componente.
- `enter-cancelled` esse método será chamado no momento em que a transição for cancelada

Métodos de saída:

- `before-leave`, método chamado antes da saída do componente.
- `leave` método chamado durante a saída do componente.
- `after-leave` método chamado após a saída do componente.
- `leave-cancelled` método chamado quando a saída é cancelada.


Todos os métodos recebem o elemento, já os métodos `enter e leave` recebem uma função (done), que será chamada quando a animação for concluída e ele precisa ser chamado.

Caso você queira excluir o CSS de sua animação e utilizar apenas JavaScript, você pode fazer o seguinte:

```vue
<template>
	<transition :css="false">
  	<p>Mensagem de aviso!</p>
  </transition>
</template>
```

Vamos fazer um exemplo que modificará a largura de uma caixa conforme clicarmos em um botão:

```vue
<template>
	<div>
    <button @click="show = !show">Alterar</button>

    <transition 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
			<div class="box" v-if="show"></div>
  	</transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      baseWidth: 0
    };
  },

  methods: {
    animate(element, done, negative) {
      let round = 1;

      const timer = setInterval(() => {
        const newWidth = this.baseWidth + (negative ? -round * 10 : round * 10);

        element.style.width = `${newWidth}px`;
        round++;

        if (round > 30) {
          clearInterval(timer);
          done();
        }
      }, 40);
    },

    beforeEnter(element) {
      this.baseWidth = 0;
      element.style.width = `${this.baseWidth}px`;
    },

    enter(element, done) {
      this.animate(element, done, false);
    },

    beforeLeave(element) {
      this.baseWidth = 300;
      element.style.width = `${this.baseWidth}px`;
    },

    leave(element, done) {
      this.animate(element, done, true);
    }
  }
};
</script>
```

Dessa forma fizemos uma animação sem precisar utilizar CSS, apenas utilizando Javascript.

#### Animações em grupos

Para fazer animações em grupos, você envolverá o seu grupo na tag `transition-group`, porém todos os componentes filhos precisam ter a propriedade `key` para que haja identificação.

```vue
<template> 
  <transition-group name="slide" tag="div">
    <b-list-group v-for="(student, index) in students" :key="student">
      <b-list-group-item @click="removeStudent(index)">
        {{ student }}
      </b-list-group-item>
    </b-list-group>
</template>

<style>
  .slide-move {
    transition: transform 1s;
  }
</style>
```

Por padrão, o transition-group cria um *span* por volta dos componentes filhos, porém você pode escolher qual será o componente pai passando a propriedade `tag`.

Para a animação ficar melhor, você precisa criar a classe css `animação-move`, no caso do *transform* o próprio Vue saberá identificar se será no eixo X ou Y.
