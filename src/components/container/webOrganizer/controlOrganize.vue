<script>
import IMGcontrol2 from '@/assets/images/img_control2.webp'
import iconControl1 from '@/assets/icons/iconControl1.vue'
import iconLdirection from '@/assets/icons/iconLdirection.vue'

export default {
  name: 'the-heroCards',
  components: { iconControl1, iconLdirection },
  data() {
    return { IMGcontrol2 }
  }
}
</script>
<template>
  <div class="">
    <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
      <div
        class="w-full h-auto md:h-[513.75px] rounded-3xl bg-blue-300 mt-16 relative overflow-hidden m-auto bg-image"
      >
        <div class="flex flex-col md:flex-row justify-between items-center md:gap-32 mt-8">
          <div class="w-full md:w-1/2 p-5 md:p-16">
            <div class="w-full md:w-48 h-10 flex justify-center md:justify-start">
              <button
                class="bg-gradient-to-r from-[#999999] to-[#FFFFFF] rounded-full w-48 h-10 font-normal text-sm md:text-base text-white border border-white"
              >
                {{ $t('duringEvenement') }}
              </button>
            </div>
            <div
              class="w-full md:w-[375px] h-auto md:h-[75px] 2xl:w-full font-bold text-2xl md:text-3xl font-Baloo text-white mt-5 text-center md:text-start"
            >
              {{ $t('controlEvenement') }}
            </div>
            <div
              class="w-full md:w-[362.25px] h-auto md:h-[99px] 2xl:w-full font-normal text-sm md:text-base text-white mt-5 text-center md:text-start"
            >
              {{ $t('veepEvenement') }}
            </div>
            <div class="w-[235.25px] h-auto mt-3 md:mt-4 m-auto md:m-0">
              <button
                class="bg-[#FF6B00] flex items-center justify-center gap-4 md:gap-10 w-full md:w-[235.25px] h-[50.25px] rounded-full m-auto"
              >
                <h1 class="text-white font-medium text-sm md:text-base"> {{ $t('access') }}</h1>
                <div
                  class="flex justify-center bg-white w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full items-center"
                >
                  <iconLdirection class="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
              </button>
            </div>
          </div>
          <div class="w-full md:w-auto flex justify-center md:justify-end relative">
            <iconControl1 class="md:mr-[22rem] md:mt-44 mr-[14rem] mt-[8rem] w-16 absolute" />
            <img
              :src="IMGcontrol2"
              alt="IMGcard"
              class="h-auto w-full md:h-[336.35px] md:max-w-[500px] lg:max-w-[600px] relative"
            />
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
.bg-image {
  background-image: url('@/assets/images/img_control1.webp');
  background-size: cover; /* Pour couvrir totalement la div */
  background-position: center;
}
</style>
