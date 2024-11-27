<template>
  <div class="popup-overlay" v-if="isVisible">
    <div class="popup-content flex flex-col lg:flex-row">
      <!-- Bouton de fermeture -->
      <div>
        <button
          @click="$emit('close')"
          class="flex justify-start ml-5 md:ml-14 mt-10 absolute cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-black cursor-pointer bg-[#38B4B41A] rounded-full p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-1 flex-col lg:flex-row justify-between mx-auto">
        <!-- Section gauche -->
        <div
          class="text-center lg:text-left w-full lg:w-[749px] h-auto lg:h-full flex flex-col justify-center p-6 lg:ml-12 mt-10"
        >
          <h1 class="font-Baloo font-extrabold text-4xl lg:text-6xl leading-tight">
            Téléchargez l’application
          </h1>
          <p class="text-lg lg:text-xl text-[#515151] mt-0 md:mt-4">
            Obtenez votre carte VEEP en téléchargeant l’application.
          </p>
          <div class="flex gap-4 justify-center lg:justify-start mt-1 md:mt-6">
            <iconGoogleplay class="w-36 md:w-40 lg:w-52 h-12 md:h-16" />
            <iconAppstore class="w-36 md:w-40 lg:w-52 h-12 md:h-16" />
          </div>
        </div>

        <!-- Section droite -->
        <div class="w-full lg:w-[486px] flex items-end px -5 md:p-0">
          <img :src="IMGpop" alt="App Veep" class="w-full lg:w-[486px] h-auto object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IMGpoint1 from '@/assets/images/img_point1.webp'
import IMGapp1 from '@/assets/images/img_app1.webp'
import IMGapp3 from '@/assets/images/img_app3.webp'
import IMGpop from '@/assets/images/img_pop.webp'

import iconGoogleplay from '@/assets/icons/iconGooplay.vue'
import iconAppstore from '@/assets/icons/iconAppstore.vue'

export default {
  name: 'Popup-webcards',
  components: { iconGoogleplay, iconAppstore },
  data() {
    return { IMGpoint1, IMGapp1, IMGapp3, IMGpop }
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.popup-content {  
  background: linear-gradient(to bottom, #F1F8FC, #FFFFFF 25%); /* Dégradé du haut au bas avec le premier couleur à 20% */  
  border-radius: 41px;  
  width: 92%;  
  height: 90%;  
  max-height: 800px; /* Limiter la hauteur max */  
  display: flex;  
  flex-direction: column;  
  overflow: hidden;  
}
img {
  object-fit: contain; /* S'assurer que l'image garde son aspect */
}
.flex-1 {
  flex: 1;
}
@media (max-width: 1024px) {
  .popup-content {
    flex-direction: column; /* Passer en colonne pour les petits écrans */
  }
}
</style>
