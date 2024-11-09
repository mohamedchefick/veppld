<script setup>
import Header from '@/components/helper/header/index.vue'
import Footer from '@/components/helper/footer/index.vue'
import HeroCards from '@/components/container/webCards/heroCards.vue'
import LifeCards from '@/components/container/webCards/lifeCards.vue'
import PrivilegeCards from '@/components/container/webCards/privilegeCards.vue'
import interestingEvents from '../home/interestingEvents.vue'

import { ref } from 'vue'

const ex = ref('')
ex.value = 0
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
          <HeroCards />
        </div>
        <div class="">
          <LifeCards />
        </div>
        <div class="">
          <PrivilegeCards />
        </div>
        <div class="">
          <interestingEvents />
        </div>
        <div class="">
          <Footer />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
