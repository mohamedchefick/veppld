<script setup>
import Header from '@/components/helper/header/index.vue'
import Footer from '@/components/helper/footer/index.vue'
import HerOrganize from '@/components/container/webOrganizer/herOrganize.vue'
import AdoptOrganize from '@/components/container/webOrganizer/adoptOrganize.vue'
import SolutionOrganize from '@/components/container/webOrganizer/solutionOrganize.vue'
import ManageOrganize from '@/components/container/webOrganizer/manageOrganize.vue'
import ControlOrganize from '@/components/container/webOrganizer/controlOrganize.vue'
import AfterOrganize from '@/components/container/webOrganizer/afterOrganize.vue'
import CampagnOrganize from '@/components/container/webOrganizer/campagnOrganize.vue'
import FinanceOrganize from '@/components/container/webOrganizer/financeOrganize.vue'
import TimeOrganize from '@/components/container/webOrganizer/timeOrganize.vue'
import AppOrganize from '@/components/container/webOrganizer/appOrganize.vue'

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
          <HerOrganize />
        </div>
        <div>
          <AdoptOrganize class="mt-10" />
        </div>
        <div>
          <SolutionOrganize class="md:mt-10" />
        </div>
        <div>
          <ManageOrganize class="-mt-5" />
        </div>
        <div>
          <ControlOrganize class="-mt-5" />
        </div>
        <div>
          <AfterOrganize class="-mt-5" />
        </div>
        <div>
          <CampagnOrganize class="-mt-5" />
        </div>
        <div>
          <FinanceOrganize class="-mt-5" />
        </div>
        <div>
          <TimeOrganize class="mt-10" />
        </div>
        <div>
          <AppOrganize class="" />
        </div>

        <div class="">
          <Footer />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
