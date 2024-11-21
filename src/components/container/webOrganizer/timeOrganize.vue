<script>
import IMGgo1 from '@/assets/images/img_go1.webp'
import iconLdirection from '@/assets/icons/iconLdirectionwhite.vue'
import IMGgovector from '@/assets/images/img_govector.webp'
import iconTime1 from '@/assets/icons/iconTime1.vue'
import IMGTime6 from '@/assets/images/img_time6.webp'

import IMGTime2 from '@/assets/images/img_time2.webp'
import IMGTime3 from '@/assets/images/img_time3.webp'
import IMGTime4 from '@/assets/images/img_time4.webp'
import IMGTime5 from '@/assets/images/img_time5.webp'

export default {
  name: 'the-heroCards',
  components: { iconLdirection, iconTime1 },
  data() {
    return { IMGgo1, IMGgovector, IMGTime2, IMGTime3, IMGTime4, IMGTime5, IMGTime6 }
  }
}
</script>

<template>
  <div
    class="relative flex flex-col md:flex-row justify-between w-full h-[479px] md:h-[486.75px] bg-gradient-to-l to-[#FA8632] from-[#FFAC7E] md:gap-10"
  >
    <!-- Image dans le coin supérieur gauche -->
    <img :src="IMGTime2" alt="App Veep" class="absolute top-0 left-0 w-[743.46px]" />

    <!-- Image dans le coin supérieur droit -->
    <img
      :src="IMGTime3"
      alt="App Veep"
      class="absolute top-0 right-0 w-[443.46px] hidden md:block"
    />

    <!-- Image dans le coin inférieur gauche -->
    <img :src="IMGTime4" alt="App Veep" class="absolute bottom-0 left-0 w-[543.46px]" />

    <!-- Image dans le coin inférieur droit -->
    <img
      :src="IMGTime5"
      alt="App Veep"
      class="absolute bottom-0 right-0 w-[343.46px] hidden md:block"
    />

    <!-- Contenu principal -->
    <div class="m-auto px-5 mt-16 flex flex-col md:flex-row justify-between md:gap-16 md:mt-28">
      <!-- Icône visible uniquement sur les écrans moyens et plus -->
      <div class="mt-5 hidden md:block m-auto">
        <iconTime1 class="w-[137.95px] h-[137.95px]" />
      </div>

      <div>
        <div
          class="w-full md:w-[597.75px] h-11 font-medium text-2xl text-white flex justify-center"
        >
          On attend que vous !!!
        </div>
        <div
          class="w-full md:w-[541.5px] h-auto font-bold text-3xl md:text-5xl font-Baloo text-white mt-4 md:mt-0 text-center m-auto"
        >
          N’est t-il pas temps de créer un évènement ?
        </div>
        <div class="mt-8 md:mt-6 flex justify-center">
          <button
            class="w-[300px] h-[50px] rounded-full flex justify-center items-center gap-20 bg-white text-black font-medium text-base"
          >
            Créer un évènement
            <div class="flex justify-center bg-[#FF6B00] w-9 h-9 rounded-full items-center">
              <iconLdirection class="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </button>
        </div>
      </div>

      <!-- Icône visible uniquement sur les petits écrans -->
      <div class="mt-14 block md:hidden m-auto">
        <img :src="IMGTime6" alt="App Veep" class="w-[137.95px] h-[137.95px]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajoute des styles personnalisés si nécessaire */
.iconlove {
  z-index: 999;
}
</style>
