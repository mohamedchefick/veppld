<script setup>
import Header from '@/components/helper/header/index.vue'
import Hero from '@/components/container/home/hero.vue'
import Activity from './activity.vue';
import SearchApproximity from './searchApproximity.vue';
import Approximity from './approximity.vue';
import Participation from './participation.vue';
import Join from './Join.vue';
import interestingEvents from './interestingEvents.vue';
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
      <!-- Header fixe en haut -->
      <div class="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <!-- Contenu principal avec un décalage en haut pour compenser la hauteur du header -->
      <div class="pt-20 text-black">
        <div>
          <Hero/>
        </div>
        <div class="py-10 relative z-10 bg-white">
          <Activity />
        </div>
        <div class="">
          <SearchApproximity/>
        </div>
        <div class="">
          <Approximity/>
        </div>
        <div class="">
          <Participation/>
        </div>
        <div class="">
          <Approximity/>
        </div>
        <div class="">
          <Join/>
        </div>
        <div class="">
          <interestingEvents/>
        </div>
        <div class="">
          <Footer/>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped></style>
