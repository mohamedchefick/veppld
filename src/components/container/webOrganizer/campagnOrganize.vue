<script>
import IMGcampagn2 from '@/assets/images/img_campagn2.webp'
import IMGcampagn1 from '@/assets/images/img_campagn1.webp'
import iconLdirection from '@/assets/icons/iconLdirection.vue'

export default {
  name: 'the-heroCards',
  components: { iconLdirection },
  data() {
    return { IMGcampagn2, IMGcampagn1 }
  }
}
</script>
<template>
  <div class="">
    <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
      <div
        class="w-full h-auto md:h-[513.75px] rounded-3xl bg-blue-300 mt-16 relative overflow-hidden m-auto bg-image"
      >
        <div class="flex flex-col md:flex-row justify-between items-center md:gap-10 mt-8">
          <div class="w-full md:w-1/2 p-5 md:p-16">
            <div class="w-full md:w-48 h-10 flex justify-center md:justify-start">
              <button
                class="bg-gradient-to-r from-[#999999] to-[#FFFFFF] rounded-full w-48 h-10 font-normal text-sm md:text-base text-white border border-white"
              >
                Pendant l’évènement
              </button>
            </div>
            <div
              class="w-full md:w-[375px] h-auto md:h-[75px] font-bold text-2xl md:text-3xl font-Baloo text-white mt-5 text-center md:text-start"
            >
              Gestion de campagne marketing
            </div>
            <div
              class="w-full md:w-[362.25px] h-auto md:h-[99px] font-normal text-sm md:text-base text-white mt-5 text-center md:text-start"
            >
              Boostez la visibilité autour de votre événement et attirez davantage de participants
              avec nos outils marketing inbound efficaces et percutantes.
            </div>
            <div class="w-[235.25px] h-auto mt-3 md:mt-4 m-auto md:m-0">
              <button
                class="bg-[#FF6B00] flex items-center justify-center gap-4 md:gap-10 w-full md:w-[235.25px] h-[50.25px] rounded-full m-auto"
              >
                <h1 class="text-white font-medium text-sm md:text-base">Accéder à l’espace</h1>
                <div
                  class="flex justify-center bg-white w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full items-center"
                >
                  <iconLdirection class="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
              </button>
            </div>
          </div>
          <div class="w-full md:w-auto flex justify-center md:justify-end relative mt-16">
            <img
              :src="IMGcampagn1"
              alt="IMGcampagn1"
              class="h-auto w-[215.66px] md:h-[366.71px] md:w-[455.66px] absolute -mt-10 ml-44  "
            />
            <img
              :src="IMGcampagn2"
              alt="IMGcampagn2"
              class="h-auto w-[515.66px] md:h-[339.14px] md:w-[763.83px] relative md:mt-16"
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
  background-image: url('@/assets/images/img_campagn3.webp');
  background-size: cover; /* Pour couvrir totalement la div */
  background-position: center;
}
</style>
