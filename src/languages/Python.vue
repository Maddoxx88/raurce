<template>
  <div>
    <CopyBtn :code = 'code' />
    <vue-code-highlight language="python" class="text-xl p-10">{{code}}</vue-code-highlight>
  </div>
</template>

<script>
import CopyBtn from "../components/CopyButton";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "prism-es6/components/prism-markup-templating";
import "prism-es6/components/prism-python";

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
      return `import random
import string

letters = string.ascii_uppercase + string.digits
result_str = ''.join((random.choice(letters) for i in range(${this.length})))
print(result_str)`;
    },
  },
};
</script>