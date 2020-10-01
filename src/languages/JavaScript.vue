<template>
  <div>
    <CopyBtn :code = 'code' />
    <vue-code-highlight language="java" class="text-xl p-10">{{code}}</vue-code-highlight>
  </div>
</template>

<script>
import CopyBtn from "../components/CopyButton";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "prism-es6/components/prism-markup-templating";
import "prism-es6/components/prism-java";

export default {
  props: ["length"],
  components: {
    CopyBtn,
    "vue-code-highlight": VueCodeHighlight,
  },
  data() {
    return {};
  },
  computed: {
    code() {
      return `var result = ''; 
var arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            for (var i = ${this.length}; i > 0; i--) { 
                ans +=  
                  arr[Math.floor(Math.random() * arr.length)]; 
            } 
            console.log(result);`;
    },
  },
};
</script>
