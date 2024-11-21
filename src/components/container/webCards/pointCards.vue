<script>
import iconJaune from '@/assets/icons/iconJaune.vue'
import IMGpoint1 from '@/assets/images/img_point1.webp'
import IMGpoint2 from '@/assets/images/img_point2.webp'
import iconLdirection from '@/assets/icons/iconLdirection.vue'


export default {
  name: 'the-heroCards',
  components: { iconJaune,iconLdirection },
  data() {
    return { IMGpoint1, IMGpoint2 }
  }
}
</script>

<template>
  <div class="bg-[#131623] md:h-[803.75px] pb-5">
    <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
      <!-- Header Section -->
      <div
        class="mt-20 h-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
      >
        <div
          class="w-full md:w-[597.75px] text-white font-Baloo font-extrabold text-3xl md:text-5xl 2xl:mx-0 text-center md:text-start"
        >
          Des
          <span class="text-[#FF6B00] font-extrabold">points qui</span> vous feront
          <span class="text-[#FF6B00] font-extrabold">tourner la tête</span>
          <div class="w-full flex justify-end">
            <iconJaune class="mt-3 mr-0 md:mr-20 " />
          </div>
        </div>

        <div
          class="text-[#E6E6E6] font-normal text-base w-full md:w-[498px] mt-5 md:mt-0 2xl:mr-20 text-center md:text-start"
        >
          Grâce à la carte VEEP, chaque achat ou participation à un événement vous permet
          d'accumuler des points rapidement et facilement. Profitez ensuite de récompenses
          exclusives chez nos partenaires.
        </div>
      </div>
      <div class="block md:hidden flex justify-center mt-5">
        <button
          class="bg-[#FF6B00] flex items-center justify-center gap-3 w-[252.5px] h-12 rounded-full"
        >
          <h1 class="text-white font-medium text-base">Obtenir ma carte VEEP</h1>
          <div class="flex justify-center bg-white w-8 h-8 lg:w-9 lg:h-9 rounded-full items-center">
            <iconLdirection class="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
        </button>
      </div>

      <!-- Points Section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 h-auto mt-14 gap-10"
      >
        <!-- Card 1 -->
        <div class="w-full md:w-[498px]">
          <img :src="IMGpoint1" alt="IMG Point1" class="mx-auto md:mx-0" />
          <div
            class="font-extrabold text-2xl md:text-3xl font-Baloo text-white mt-8 text-center md:text-left"
          >
            Dans les
            <span class="text-[#FFE4BF] font-extrabold">restaurants</span> partenaires
          </div>
          <div
            class="font-normal text-base font-Baloo text-white mt-4 md:mt-8 text-center md:text-left"
          >
            Accumulez des points chaque fois que vous payez dans nos restaurants et commerces
            partenaires. Chaque achat vous rapporte des points que vous pouvez échanger contre des
            récompenses.
          </div>
        </div>

        <!-- Card 2 -->
        <div class="w-full md:w-[498px] mx-auto">
          <img :src="IMGpoint2" alt="IMG Point2" class="mx-auto md:mx-0" />
          <div
            class="font-extrabold text-2xl md:text-3xl font-Baloo text-white mt-8 text-center md:text-left"
          >
            En participant aux
            <span class="text-[#FFE4BF] font-extrabold">évenements</span>
          </div>
          <div
            class="font-normal text-base font-Baloo text-white mt-4 md:mt-8 text-center md:text-left"
          >
            Profitez de votre événement préféré tout en gagnant des points. Plus vous gagnez des
            points, plus vous bénéficiez de gros avantages.
          </div>
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
</style>
