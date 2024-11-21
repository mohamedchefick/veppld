<script>
import IMGAfter1 from '@/assets/images/img_after1.webp'
import IMGAfter2 from '@/assets/images/img_after2.webp'
import IMGAfter3 from '@/assets/images/img_after3.webp'
import IMGAfter4 from '@/assets/images/img_after4.webp'

import IMGManage2 from '@/assets/images/img_manage2.webp'
import iconLdirection from '@/assets/icons/iconLdirection.vue'
import iconManage1 from '@/assets/icons/iconManage1.vue'
import iconManageleeds from '@/assets/icons/iconManageleeds.vue'
import iconAfteloil from '@/assets/icons/iconAfetoil.vue'

export default {
  name: 'the-heroCards',
  components: { iconLdirection, iconManage1, iconManageleeds, iconAfteloil },
  data() {
    return { IMGManage2, IMGAfter2, IMGAfter1, IMGAfter3, IMGAfter4 }
  }
}
</script>
<template>
  <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
    <div
      class="w-full md:h-[513.75px] h-[755px] rounded-3xl bg-[#FEF9F2] mt-8 relative overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-14 mt-5 top">
        <!-- Left Section -->
        <div
          class="p-5 md:p-8 flex flex-col items-center md:items-start justify-center hidden md:block"
        >
          <div class="w-[662.5px] h-[388.5px] relative after">
            <iconManageleeds class="ml-20" />

            <div class="flex">
              <div class="">
                <iconManage1 class="mt-10" />
              </div>
              <img :src="IMGAfter2" alt="IMGcard" class="absolute w-[565.22px] after2" />
            </div>
            <div class="flex">
              <img
                :src="IMGAfter1"
                alt="IMGcard"
                class="absolute w-[655.22px] mt-3 -ml-14 after1"
              />
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="text-center md:text-left px-5 md:px-8 md:mt-14 mt-16">
          <button
            class="px-4 py-2 text-[#38B4B4] font-medium text-sm md:text-base bg-[#38B4B412] rounded-full"
          >
            Pendant l’évènement
          </button>
          <h2 class="text-3xl md:text-2xl lg:text-3xl font-bold mt-3 md:mt-4">
            Gestion de tickets d’évènements
          </h2>
          <p class="text-sm md:text-base mt-2 md:mt-3 max-w-md mx-auto md:mx-0">
            Pas besoin d’être un expert en billetterie ! Configurez votre événement et commencez à
            vendre des tickets en quelques minutes.
          </p>
          <div class="mt-4 flex justify-center md:justify-start">
            <button
              class="bg-[#FF6B00] flex items-center justify-between gap-3 w-[235.25px] md:w-auto max-w-xs py-3 px-6 rounded-full text-white font-medium"
            >
              <span>Accéder à l’espace</span>
              <div
                class="flex justify-center bg-white w-6 h-6 md:w-8 md:h-8 rounded-full items-center"
              >
                <iconLdirection class="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </button>
          </div>
          <div class="mt-10 hidden md:block">
            <iconManageleeds class="-ml-14" />
          </div>
        </div>

        <div class="block md:hidden mt-4">
          <img :src="IMGAfter4" alt="IMGcard" class="absolute w-[562.5px] h-[388.5px]" />
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
@media (min-width: 768px) and (max-width: 1350px) {
  .after1 {
    margin-top: -20px; /* Applique un margin-top négatif */
  }
  .after2 {
    width: 357.22px; /* Définit la largeur de .after2 */
  }
  .after {
    width: 436.5px; /* Définit la largeur de .after */
  }
  .top {
    margin-top: 64px;
  }
}
</style>
