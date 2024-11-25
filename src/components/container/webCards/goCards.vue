<script>
import IMGgo1 from '@/assets/images/img_go1.webp'
import iconLdirection from '@/assets/icons/iconLdirectionwhite.vue'
import IMGgovector from '@/assets/images/img_govector.webp'
import Popup from '@/components/helper/add/popup-webCards.vue'

export default {
  name: 'the-heroCards',
  components: { iconLdirection, Popup },
  data() {
    return {
      IMGgo1,
      IMGgovector,
      isPopupVisible: false
    }
  },
  methods: {
    openPopup() {
      this.isPopupVisible = true // Show the popup
    },
    closePopup() {
      console.log('Popup is closing')
      this.isPopupVisible = false // Hide the popup
    }
  }
}
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-between w-full h-auto md:h-[486.75px] bg-gradient-to-l to-[#FA8632] from-[#FFAC7E] md:gap-10"
  >
    <div class="block md:hidden m-auto px-5 mt-10">
      <div class="w-full md:w-[597.75px] h-11 font-medium text-2xl text-white flex justify-center">
        Let’s go !!!
      </div>
      <div
        class="w-full md:w-[541.5px] h-auto font-bold text-3xl md:text-5xl font-Baloo text-white mt-4 md:mt-0 text-center"
      >
        Obtenez votre carte VEEP maintenant !
      </div>
      <div class="mt-8 md:mt-16 flex justify-center">
        <button
          @click="openPopup"
          class="w-[316.5px] h-[50px] rounded-full flex justify-center items-center gap-5 bg-white text-black font-medium text-base"
        >
          Commander votre carte VEEP
          <div class="flex justify-center bg-[#FF6B00] w-9 h-9 rounded-full items-center">
            <iconLdirection class="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </button>
      </div>
    </div>
    <!-- Image de gauche -->
    <div class="w-full md:w-[683.25px] h-auto md:h-[486.75px] md:mt-0 mt-20 imgauche">
      <img :src="IMGgo1" alt="App Veep" class="w-full h-auto md:w-[683.25px] md:h-[486.75px]" />
    </div>

    <!-- Contenu du milieu -->
    <div class="m-auto mx-auto text-center md:text-left hidden md:flex go">
      <div class="">
        <div class="w-full md:w-[597.75px] h-11 font-medium text-2xl text-white">Let’s go !!!</div>
        <div
          class="w-full md:w-[541.5px] h-auto font-bold text-3xl md:text-5xl font-Baloo text-white mt-4 md:mt-0"
        >
          Obtenez votre carte VEEP maintenant !
        </div>
        <div class="mt-8 md:mt-16">
          <button
            @click="openPopup"
            class="w-60 md:w-72 h-[50px] rounded-full flex justify-center items-center gap-5 bg-white text-black font-medium text-base"
          >
            Commander votre carte VEEP
            <div class="flex justify-center bg-[#FF6B00] w-9 h-9 rounded-full items-center">
              <iconLdirection class="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Image de droite -->
    <div class="justify-center md:justify-end items-end mt-10 md:mt-0 hidden md:flex">
      <img :src="IMGgovector" alt="App Veep" class="w-40 md:w-60 mb-10" />
    </div>
    <!-- Popup Component -->
    <Popup :isVisible="isPopupVisible" @close="closePopup" />
  </div>
</template>

<style scoped>
/* Ajoute des styles personnalisés si nécessaire */
.iconlove {
  z-index: 999;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .go {
    width: 300px;
  }

  .imgauche {
    width: 50%;
  }
}
</style>
