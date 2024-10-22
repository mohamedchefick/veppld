<script setup>
import Header from '@/components/helper/header/index.vue'
import Footer from '@/components/helper/footer/index.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const ex = ref('')
ex.value = 0
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <main>
    <div>
      <div class="w-full" id="header">
        <Header class="header" is-home="true" />
      </div>
      <div class="w-full pt-5" id="footer">
        <Footer class="footer" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
