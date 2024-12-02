<script>
import IMGLife from '@/assets/images/IMGLife.webp'
import IMGFace2 from '@/assets/images/IMGFace2.webp'
import iconheroCard1 from '@/assets/icons/iconheroCard1.vue'
import iconLdirection from '@/assets/icons/iconLdirection.vue'
import iconEtoile from '@/assets/icons/iconEtoile.vue'
import iconEtoile2 from '@/assets/icons/iconEtoile2.vue'

export default {
  name: 'the-lifeCard',
  components: { iconheroCard1, iconLdirection, iconEtoile, iconEtoile2 },
  data() {
    return {
      IMGLife,
      IMGFace2
    }
  },

  methods: {}
}
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center py-5 px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-48 pt-24 oneDiv relative md:gap-16 lg:gap-32"
  >
    <div class="md:w-1/2 relative mb-8 md:mb-0 justify-center md:justify-start">
      <!-- titre visible uniquement sur mobile -->
      <div
        class="block md:hidden font-bold text-xl sm:text-2xl w-[254px] text-[#303030] font-Baloo mb-10 -mt-10 text-center"
      >
        Vivez des Expériences
        <span class="text-[#FF6B00] font-bold font-Baloo">Inoubliables</span>
      </div>
      <iconEtoile2 class="ml-32 block md:hidden" />

      <!-- -->

      <div class="flex relative">
        <img
          :src="IMGLife"
          alt="IMGcard"
          class="w-72 ml- md:ml-4 h-48 sm:w-56 sm:h-56 lg:w-[400px] xl:w-[558.5px] lg:h-[400px] xl:h-[478.5px]"
        />
        <iconEtoile class="md:ml-3 md:mt-4 hidden sm:block" />
        <iconEtoile2 class="md:mt-2 hidden sm:block" />

        <div class="-ml-12 mt-20 sm:-ml-16 sm:mt-24 md:-ml-24 lg:-ml-32 lg:mt-48 xl:mt-60">
          <img
            :src="IMGFace2"
            alt="IMGcard"
            class="w-16 h-16 sm:w-20 sm:h-20 lg:w-36 lg:h-36 xl:w-52 xl:h-52 md:-ml-20 absolute"
          />
        </div>
      </div>
      <iconheroCard1 class="w-12 mt-2 sm:w-20 md:w-32 lg:w-48 xl:w-72 hidden sm:block" />
    </div>

    <div class="text-center md:text-left md:m-auto 2xl:-ml-16 md:ml-0">
      <div
        class="hidden sm:block font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[400px] lg:w-[514.5px] text-[#303030] font-Baloo"
      >
        Vivez des Expériences
        <span class="text-[#FF6B00] font-bold font-Baloo">Inoubliables</span>
      </div>
      <div
        class="w-[254px] sm:w-[320px] md:w-[400px] lg:w-[498px] text-[#515151] font-normal text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 md:mt-5"
      >
       {{ $t('imagineCard') }}
      </div>
      <div class="w-full sm:w-56 md:w-64 lg:w-72 h-12 mt-5 md:mt-8">
        <button
          class="bg-[#FF6B00] flex items-center justify-center gap-3 w-full h-12 rounded-full"
        >
          <h1 class="text-white font-medium text-base">{{ $t('get') }}</h1>
          <div class="flex justify-center bg-white w-8 h-8 lg:w-9 lg:h-9 rounded-full items-center">
            <iconLdirection class="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
