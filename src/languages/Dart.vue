<template>
  <div>
    <vue-code-highlight language="dart" class="px-10 py-10">{{code}}</vue-code-highlight>
    <CopyBtn :code = 'code' />
  </div>
</template>

<script>
import CopyBtn from "../components/CopyButton";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "prism-es6/components/prism-markup-templating";
import "prism-es6/components/prism-dart";



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
      return `import 'dart:math';

const _mix = 'ABCDEFGHIJJKLMNOPQRSTUVWXYZ1234567890';
Random _rnd = Random();


void main() {
    var result = String .fromCharCodes(Iterable.generate(${this.length}, (_) => _mix.codeUnitAt(_rnd.nextInt(_mix.length))));
  print(result);
}`;
    },
  },
};
</script>