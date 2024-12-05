<script>
import IMGsolution2 from '@/assets/images/img_solution2.webp'
import iconSolutionping from '@/assets/icons/iconSolutionping.vue'
import iconSolutionping2 from '@/assets/icons/iconSolutionping2.vue'
import iconLdirection from '@/assets/icons/iconLdirection.vue'

export default {
  name: 'the-heroCards',
  components: { iconSolutionping, iconSolutionping2, iconLdirection },
  data() {
    return { IMGsolution2 }
  }
}
</script>
<template>
  <div class="md:h-[803.75px] pb-5">
    <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
      <!-- Header Section -->
      <div
        class="mt-20 h-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
      >
        <div
          class="w-full md:w-[669.75px] text-[#303030] font-Baloo font-extrabold text-3xl md:text-5xl 2xl:mx-0 text-center md:text-start"
        >
          La solution de
          <span class="text-[#FF6B00] font-extrabold">billetterie </span> idéale pour votre
          <span class="text-[#FF6B00] font-extrabold">évemenent</span>
        </div>

        <div
          class="font-normal text-lg w-full md:w-[396px] h-auto md:h-[75px] mt-5 md:mt-0 text-center md:text-start text-[#515151]"
        >
          Nous mettons à votre disposition une suite de solutions innovantes et efficaces pour
          chaque étape de votre événement.
        </div>
      </div>
      <div
        class="w-full h-auto md:h-[513.75px] rounded-3xl bg-blue-300 mt-16 relative overflow-hidden m-auto bg-image"
      >
        <div class="flex flex-col md:flex-row justify-between items-center md:gap-10">
          <div class="w-full md:w-1/2 p-5 md:p-16">
            <div class="w-full md:w-40 h-10 flex justify-center md:justify-start">
              <button
                class="bg-gradient-to-r from-[#999999] to-[#FFFFFF] rounded-full w-40 h-10 font-normal text-sm md:text-base text-white border border-white"
              >
                {{ $t('beforeEvenement') }}
              </button>
            </div>
            <div
              class="w-full md:w-[375px] h-auto  2xl:w-full font-bold text-2xl md:text-3xl font-Baloo text-white mt-5 text-center md:text-start"
            >
              {{ $t('createEvenement') }}
            </div>
            <div
              class="w-full md:w-[362.25px] h-auto md:h-[75px] 2xl:max-w-md font-normal text-sm md:text-base text-white mt-5 text-center md:text-start"
            >
              {{ $t('send') }}
            </div>
            <div class="flex flex-col md:flex-row gap-3">
              <div
                class="w-full md:w-[423px] h-auto md:h-[72px] bg-white flex gap-3 rounded-3xl items-center mt-5 p-3 md:p-0"
              >
                <iconSolutionping class="w-[51px] h-[51px] ml-0 md:ml-3" />
                <div
                  class="w-auto md:w-[247.5px] h-auto font-normal text-sm md:text-base text-[#515151]"
                >
                  {{ $t('notify') }}
                </div>
              </div>
              <div class="flex justify-center md:justify-start mt-3 md:mt-0 hidden md:flex">
                <iconSolutionping2 class="w-[43.5px] h-[43.5px]" />
              </div>
            </div>
            <div class="w-[235.25px] h-auto mt-3 md:mt-4 m-auto md:m-0">
              <button
                class="bg-[#FF6B00] flex items-center justify-center gap-4 md:gap-10 w-full md:w-[235.25px] h-[50.25px] rounded-full m-auto"
              >
                <h1 class="text-white font-medium text-sm md:text-base">{{ $t('access') }}</h1>
                <div
                  class="flex justify-center bg-white w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full items-center"
                >
                  <iconLdirection class="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
              </button>
            </div>
          </div>
          <div class="w-full md:w-auto flex justify-center md:justify-end mt-10">
            <img
              :src="IMGsolution2"
              alt="IMGcard"
              class="h-auto w-full md:w-[611.25px] md:h-[415.6px] md:max-w-none md:ml-0 ml-10"
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
  background-image: url('@/assets/images/img_solution1.webp');
  background-size: cover; /* Pour couvrir totalement la div */
  background-position: center;
}
</style>
