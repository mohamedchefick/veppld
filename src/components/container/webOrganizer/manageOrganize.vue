<script>
import iconManage1 from '@/assets/icons/iconManage1.vue'
import iconManageleeds from '@/assets/icons/iconManageleeds.vue'
import IMGManage2 from '@/assets/images/img_manage2.webp'
import iconLdirection from '@/assets/icons/iconLdirection.vue'

export default {
  name: 'the-heroCards',
  components: { iconManage1, iconManageleeds, iconLdirection },
  data() {
    return { IMGManage2 }
  }
}
</script>

<template>
  <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
    <div class="w-full md:h-[513.75px] 2xl:h-[650px] rounded-3xl bg-[#FEF9F2] mt-8 relative overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-10">
        <!-- Right Section mobile -->
        <div class="block md:hidden text-center">
          <button
            class="px-6 py-2 text-[#38B4B4] font-medium text-sm md:text-base bg-[#38B4B412] rounded-full"
          >
            Avant l’évènement
          </button>
          <h2 class="text-2xl md:text-3xl font-bold mt-4">Gestion d’équipes</h2>
          <p class="text-sm md:text-base mt-3 max-w-sm mx-auto md:mx-0 p-2">
            Fini le casse-tête des recrutements, de l’édition des plannings et de l’affectation des
            équipes. Veep prend en charge toute cette organisation en quelques clics seulement, vous
            assurant sérénité et gain de temps.
          </p>
          <div class="mt-6 flex justify-center md:justify-start">
            <button
              class="bg-[#FF6B00] flex items-center justify-center gap-4 px-6 py-3 rounded-full text-white font-medium"
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
        <!-- Left Section -->
        <div class="p-5 md:p-8 flex flex-col items-center md:items-start justify-center">
          <div class="flex flex-wrap gap-2 2xl:gap-5 mt-4 justify-center md:ml-5 2xl:ml-12">
            <div class="px-4 py-1 bg-white rounded-full font-normal text-sm md:text-base">
              Staff
            </div>
            <div class="px-4 py-1 bg-white rounded-full font-normal text-sm md:text-base">
              Marketing
            </div>
            <div class="px-4 py-1 bg-white rounded-full font-normal text-sm md:text-base">
              Gérant
            </div>
            <div class="px-4 py-1 bg-white rounded-full font-normal text-sm md:text-base">
              Manager
            </div>
            <div class="">
              <iconManage1 class="w-5 h-5 mt-1 ml-3 hidden md:block" />
            </div>
          </div>
            <img :src="IMGManage2" alt="IMGcard" class="rounded-lg w-[441.75px] h-[299.04px] 2xl:w-full 2xl:h-auto" />
          <iconManageleeds class="mt-1 md:mr-80 mr-64" />
        </div>
        <!-- Right Section -->
        <div class="text-center md:text-left hidden md:block mt-5">
          <button
            class="px-6 py-2 text-[#38B4B4] font-medium text-sm md:text-base bg-[#38B4B412] rounded-full"
          >
            Avant l’évènement
          </button>
          <h2 class="text-2xl md:text-3xl font-bold mt-2">Gestion d’équipes</h2>
          <p class="text-sm md:text-base mt-1 max-w-sm mx-auto md:mx-0">
            Fini le casse-tête des recrutements, de l’édition des plannings et de l’affectation des
            équipes. Veep prend en charge toute cette organisation en quelques clics seulement, vous
            assurant sérénité et gain de temps.
          </p>
          <div class="mt-3 flex justify-center md:justify-start">
            <button
              class="bg-[#FF6B00] flex items-center justify-center gap-4 px-6 py-3 rounded-full text-white font-medium "
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
