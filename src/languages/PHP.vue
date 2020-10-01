<template>
  <div>
    <CopyBtn :code = 'code' />
    <vue-code-highlight language="php" class="text-xl p-10" >
      {{code}}
    </vue-code-highlight>
  </div>
</template>

<script>
import CopyBtn from "../components/CopyButton";
import { component as VueCodeHighlight} from "vue-code-highlight";
import "prism-es6/components/prism-markup-templating";
import "prism-es6/components/prism-php";

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
      return `<?php
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';

  for ($i = 0; $i < ${this.length}; $i++) {
    $randomString .= $characters[rand(0, $charactersLength - 1)];
  }

  echo strtoupper($randomString);
?>`;
    },
  },
};
</script>