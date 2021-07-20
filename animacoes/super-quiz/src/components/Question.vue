<template>
  <div class="question">
    <strong>{{ actualQuestion.text }}</strong>

    <ul class="answers">
      <li
        v-for="(answer, index) in actualQuestion.answers"
        :key="answer.text"
        @click="$emit('answered', answer.correct)"
      >
        <span class="number">{{ index + 1 }}</span>
        <span class="text">{{ answer.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import questions from "@/util/questions.js";

export default {
  data() {
    return {
      actualQuestion: {}
    };
  },

  mounted() {
    this.randomQuestion();
  },

  methods: {
    randomQuestion() {
      let result;
      let count = 0;
      for (let prop in questions) {
        if (Math.random() < 1 / ++count) result = prop;
      }

      this.actualQuestion = questions[result];
    }
  }
};
</script>

<style>
.question {
  height: 400px;
  color: #000;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  font-size: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

ul.answers {
  font-size: 2rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.answers li {
  margin: 20px;
  background-color: #89c454;
  border-radius: 8px;
  width: 40%;

  display: flex;
  cursor: pointer;
  transition: all 1s;
}

.answers li:hover {
  transform: translateX(-10px);
  box-shadow: 6px 4px 10px #77777759;
}

.answers .number {
  padding: 10px;
  background-color: #1e9c31;
  color: #fff;
  flex-basis: 30px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.answers .text {
  flex: 1;
  align-self: center;
}
</style>
