<script>
import IMGorganize1 from '@/assets/images/img_organize1.webp'
import IMGorganize2 from '@/assets/images/img_organize2.webp'
import iconLeedorganize1 from '@/assets/icons/iconLeedorganize1.vue'
import iconLeedorganize2 from '@/assets/icons/iconLeedorganize2.vue'
import iconLdirection from '@/assets/icons/iconLdirection.vue'

export default {
  name: 'the-heroCards',
  components: { iconLeedorganize1, iconLeedorganize2, iconLdirection },
  data() {
    return {
      IMGorganize1,
      IMGorganize2
    }
  }
}
</script>

<template>
  <div
    class="bg-image md:h-[577.5px] flex flex-col md:flex-row items-center justify-between text-white text-2xl relative overflow-hidden m-auto px-4 md:px-0 pb-5"
  >
    <!-- Icône gauche -->
    <div class="justify-start w-full md:w-96 hidden md:flex">
      <iconLeedorganize2 class="w-full md:ml-32" />
    </div>

    <!-- Contenu central -->
    <div class="flex flex-col items-center text-center mt-10 md:mb-20 md:mr-28">
      <div>
        <div class="w-full md:w-[684px] h-auto font-Baloo font-bold text-4xl md:text-6xl">
          {{ $t('transformEvenement') }}
        </div>
        <div class="w-full md:w-[575px] h-auto font-normal text-base md:text-lg mt-4 m-auto">
          {{ $t('proposition') }}
        </div>
        <div class="w-full md:w-[217px] h-auto mt-5 m-auto">
          <button
            class="bg-[#FF6B00] flex items-center justify-center gap-4 md:gap-10 w-[219px] md:w-[217px] h-12 md:h-[50.25px] rounded-full m-auto"
          >
            <h1 class="text-white font-medium text-sm md:text-base">{{ $t('contact') }}</h1>
            <div
              class="flex justify-center bg-white w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full items-center"
            >
              <iconLdirection class="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Icône droite et image -->
    <div class="w-full md:w-64 flex flex-col items-center">
      <img :src="IMGorganize2" alt="IMGcard" class="hidden md:flex" />
      <iconLeedorganize1 class="w-24 md:w-full mt-5 md:mt-10" />
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('@/assets/images/img_organize1.webp');
  background-size: cover; /* Pour couvrir totalement la div */
  background-position: center;
}
</style>
