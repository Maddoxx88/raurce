<template>
  <div id="app" class="bg-white w-full h-full">
      <form>
        <label for="length" class="text-xl font-sans font-normal p-3 text-orange-500">Enter length of string: </label>
          <input
            v-model.trim="length"
            class="font-mono text-2xl font-semibold border-b-4 transition duration-300 text-orange-500 text-center shadow focus:outline-none focus:border-orange-500 appearance-none border rounded p-2 w-20 text-gray-700 leading-tight"
            v-model.number="length"
            type="number"
            id="length"
          />
          <select
            v-model="selected"
            class="font-sans text-lg center border-none text-white bg-orange-500 border border-gray-500 m-5 py-3 px-4 rounded leading-tight focus:outline-none"
          >
            <option
              v-for="k in Object.keys(languages)"
              :key="k.id"
              :value="k"
              class="text-white focus:outline-none"
            >{{ languages[k].name }}</option>
          </select>
        <!-- <span class="text-xl font-sans text-orange-500">Selected: {{ selected }}</span> -->
      </form>
      <!-- <p>Code is: {{ length }}</p> -->
      <Languages v-bind:selected="selected" v-bind:length="length" />
  </div>
</template>

<script>
import Languages from "./components/SelectLang";

export default {
  name: "App",
  components: {
    Languages,
  },
  data() {
    return {
      code: "",
      length: "",
      selected: "py",
      languages: {
        py: {
          id: 1,
          name: "Python",
          extension: "py",
        },
        js: {
          id: 2,
          name: "Javascript",
          extension: "js",
        },
        php: {
          id: 3,
          name: "PHP",
          extension: "php",
        },
        dart: {
          id: 4,
          name: "Dart",
          extension: "dart",
        },
      },
    };
  },
  computed: {
    selected1() {
      return this.selected;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>
