<script>
import IMGFinance from '@/assets/images/img_finance.webp'
import IMGFinance2 from '@/assets/images/img_finance2.webp'
import iconManage1 from '@/assets/icons/iconManage1.vue'
import iconFinance from '@/assets/icons/iconFinance.vue'

import iconLdirection from '@/assets/icons/iconLdirection.vue'
import iconManageleeds from '@/assets/icons/iconManageleeds.vue'
import iconAfteloil from '@/assets/icons/iconAfetoil.vue'

export default {
  name: 'the-heroCards',
  components: { iconLdirection, iconManageleeds, iconAfteloil, iconManage1, iconFinance },
  data() {
    return { IMGFinance, IMGFinance2 }
  }
}
</script>
<template>
  <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
    <div
      class="w-full md:h-[513.75px] h-[755px] rounded-3xl bg-[#FEF9F2] mt-8 relative overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-10 top">
        <!-- Left Section -->
        <div class="flex flex-col items-center md:items-start justify-center hidden md:block">
          <div class="flex">
            <img :src="IMGFinance" alt="IMGcard" class="w-[713.4px] h-[415.78px]" />
            <div class="-ml-14 mt-32">
              <iconAfteloil class="mt-10" />
            </div>
          </div>
          <div>
            <iconManage1 class="-mt-10 ml-44" />
          </div>
        </div>

        <!-- Right Section -->
        <div class="text-center md:text-left px-5 md:px-8 md:mt-10 mt-16">
          <button
            class="px-4 py-2 text-[#38B4B4] font-medium text-sm md:text-base bg-[#38B4B412] rounded-full"
          >
            Après l’évènement
          </button>
          <h2 class="text-3xl md:text-2xl lg:text-3xl font-bold mt-3 md:mt-4">
            Point financier et données participants mis à disposition
          </h2>
          <p class="text-sm md:text-base mt-2 md:mt-3 max-w-xs mx-auto md:mx-0">
            Visualisez en temps réel sur votre tableau de bord personnel le point de vos recettes de
            ventes de tickets. Accédez également à la base de données des participants à votre
            évenement.
          </p>
          <div class="mt-4 flex justify-center md:justify-start">
            <button
              class="bg-[#FF6B00] flex items-center justify-between gap-3 w-[235.25px] h-[50px] md:w-auto max-w-xs py-3 px-6 rounded-full text-white font-medium"
            >
              <span>Accéder à l’espace</span>
              <div
                class="flex justify-center bg-white w-6 h-6 md:w-8 md:h-8 rounded-full items-center"
              >
                <iconLdirection class="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </button>
          </div>
        </div>

        <div class="block md:hidden">
          <img :src="IMGFinance2" alt="IMGcard" class="absolute w-[713.4px] h-[385.78px]" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Ajoute des styles personnalisés si nécessaire */
.iconlove {
  z-index: 999;
}
.bg-image {
  background-image: url('@/assets/images/img_after3.webp');
  background-size: cover; /* Pour couvrir totalement la div */
  background-position: center;
}
/* Styles pour les écrans de 1350px et moins */
</style>
