export default {
  computed: {
    phraseWithComma() {
      const newValue = this.phrase.replace(/ /g, ",");
      return newValue;
    },

    phraseCounted() {
      const array = this.phrase.split(" ");
      const counted = array.map(word => `${word} (${word.length}) `);

      return counted.join("");
    }
  }
};
