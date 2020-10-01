<template>
  <div>
    <!-- <div v-bind:key="lang.id" v-for="lang in langs"> -->
    <!-- {{length}} -->
    <div v-if="selected === 'py'">
      <!-- <vue-code-highlight language="python">{{py}}</vue-code-highlight> -->
      <python :length="length"/>
    </div>
    <div v-else-if="selected === 'js'">
      <js :length="length" />
    </div>
    <div v-else-if="selected === 'php'">
      <php v-bind:length="length" />
    </div>
    <div v-else-if="selected === 'dart'">
      <dart v-bind:length="length" />
    </div>
    <!-- <textarea rows="10" cols="40" v-if="lang.name == selected" v-model="lang.script"></textarea> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Python from "../languages/Python";
import PHP from "../languages/PHP";
import JavaScript from '../languages/JavaScript';
import Dart from "../languages/Dart";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "prism-es6/components/prism-markup-templating";
import "prism-es6/components/prism-python";

export default {
  name: "Languages",
  props: ["selected", "length"],
  components: {
    python: Python,
    php: PHP,
    js: JavaScript,
    dart: Dart
  },
};
</script>

<style scoped>
</style>