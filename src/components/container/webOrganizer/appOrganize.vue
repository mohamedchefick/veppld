<script>
import IMGpoint1 from '@/assets/images/img_point1.webp'
import IMGapp1 from '@/assets/images/img_app1.webp'
import IMGapp3 from '@/assets/images/img_app3.webp'
import IMGappOrganize from '@/assets/images/img_appOrganize1.webp'
import IMGappOrganize2 from '@/assets/images/img_appOrganize2.webp'

import iconGoogleplay from '@/assets/icons/iconGooplay.vue'
import iconAppstore from '@/assets/icons/iconAppstore.vue'

export default {
  name: 'the-heroCards',
  components: { iconGoogleplay, iconAppstore },
  data() {
    return { IMGpoint1, IMGapp1, IMGapp3, IMGappOrganize, IMGappOrganize2 }
  }
}
</script>

<template>
  <div class="bg-[#FEF9F2] relative">
    <div class="md:px-16 lg:px-32 xl:px-36 2xl:px-56">
      <div
        class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 md:gap-20 lg:gap-O"
      >
        <!-- Left Section -->
        <div class="w-full lg:w-1/2 text-center lg:text-left my-auto left">
          <div
            class="font-Baloo font-extrabold text-3xl sm:text-4xl lg:text-5xl mx-auto lg:mx-0 lg:w-[495.75px] lg:h-24 mt-5 p-2 md:p-0"
          >
            {{ $t('followEvenement') }}
          </div>
          <div class="font-normal text-base lg:text-lg mx-auto lg:mx-0 lg:w-[436.5px] lg:h-14 mt-5">
            {{ $t('accesEvenement') }}
          </div>
          <div class="flex gap-3 justify-center lg:justify-start mt-5">
            <iconGoogleplay class="w-36 md:w-40 lg:w-44 h-12 md:h-14" />
            <iconAppstore class="w-36 md:w-40 lg:w-44 h-12 md:h-14" />
          </div>
        </div>

        <!-- Right Section -->
        <div class="w-full lg:w-2/3 flex justify-center lg:justify-end px-5 md:px-0">
          <img
            :src="IMGappOrganize2"
            alt="App Veep"
            class="w-[338px] md:w-[500px] lg:w-[400px] mt-10 md:h-[400px] hidden sm:block lg:mr-8"
          />
          <img :src="IMGappOrganize2" alt="App Veep" class="block md:hidden" />
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
@media (max-width: 1024px) {
  .left {
    margin-top: 50px;
  }
}
</style>
