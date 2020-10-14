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
otplen=${this.length}
otpnum=1
otpchar=1
otpspc=1
otp=""
while len(otp)!=otplen:
    z=random.randint(1,3)
    if(z==1 and otpspc==1):
        s=random.randint(35,37)
        otp+=chr(s)
    elif(z==2 and otpchar==1):
        c=random.randint(65,90)
        otp+=chr(c)
    elif(z==3 and otpnum==1):
        n=random.randint(0,9)
        otp+=str(n)
print(otp)`;
    },
  },
};
</script>