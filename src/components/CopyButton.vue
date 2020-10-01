<template>
  <div>
    <button
      type="button"
      v-clipboard:copy="code"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      class="bg-white hover:bg-orange-500 hover:text-white border border-orange-500 text-orange-500 text-lg m-5 py-3 px-12 rounded-full"
    >Copy</button>
  </div>
</template>

<script>
export default {
    props: ["code"],
    methods: {
        onCopy() {
            alert('Code copied!');
        },
        onError() {
            alert('There was an error while copying the code');
        },
    }
};
</script>