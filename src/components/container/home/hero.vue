<script>
import SvgIcon from '@/components/helper/add/SvgIcon.vue';
import IMGgirl from "@/assets/images/IMGgirl.webp";
import IMGgirls from "@/assets/images/IMGgirls.webp";
import IMGcard from "@/assets/images/IMGcardHero.webp";
import IMGBG from "@/assets/images/IMGBG.webp";
import ICLove from '@/assets/icons/Iconlove.vue';
import iconlike from '@/assets/icons/iconLike.vue';
import iconticket from '@/assets/icons/iconticket.vue';
import iconFire from '@/assets/icons/iconFire.vue';
import iconSearchwhite from '@/assets/icons/iconSearchwhite.vue'
import iconSearch from '@/assets/icons/iconSearch.vue'

export default {
  name: 'the-hero',
  components: { SvgIcon, ICLove, iconlike, iconticket, iconFire , iconSearchwhite , iconSearch },
  data() {
    return {
      IMGgirl,
      IMGgirls,
      IMGcard,
      IMGBG,
      showModal: false,  // Pour contrôler l'affichage de la modal
      searchText: '',
      selectedLocation: 'Cotonou', // Exemple de lieu choisi
    };
  },
  computed: {
    // Vérifie si l’utilisateur est sur un appareil mobile
    isMobile() {
      return window.innerWidth <= 640;
    },
  },
  methods: {
    openModal() {
      // Ouvre la modal uniquement sur mobile
      if (this.isMobile) {
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<template>
  <div class=" bg-[#FEF9F2] text-black">
    <!-- Titre principal et barre de recherche -->
    <div>
      <div class="text-5xl sm:text-6xl md:text-5xl lg:text-7xl 2xl:text-8xl mx-auto text-center py-6 2xl:pt-24 sm:pt-16 font-extrabold text-black w-11/12 md:w-4/6">
        Des <span class="text-[#FF6B00] font-extrabold">expériences inoubliables</span> près de chez vous 
      </div> 
    </div>

    <div class="bg-cover bg-center" :style="{ backgroundImage: `url(${IMGBG})`}">
      <div class="flex justify-center items-center md:px-40 2xl:mx-16 pt-8  mx-7">
        <div class="md:w-2/5 w-full ">
          <!-- Input de recherche -->
          <div class="relative w-full">
            <iconSearch icon-name="iconSearch" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 2xl:w-6 2xl:h-6 text-gray-500 2xl:ms-3" />
            <input
              type="text"
              class="w-full pl-10 2xl:pl-14 border-[#F4D2BC] border-2 rounded-l-lg h-12 2xl:h-16 text-xl"
              placeholder="Rechercher un événement"
              @focus="openModal" 
            />
          </div>

          <!-- Modal de recherche plein écran (affiché uniquement sur mobile) -->
          <div v-if="showModal && isMobile" class="fixed space-y-4 inset-0 bg-white z-50 flex flex-col items-center p-4">
            <!-- Bouton pour fermer le menu -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-black cursor-pointer bg-[#38B4B41A] rounded-full p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              @click="closeModal"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <p class="text-3xl">Rechercher</p>

            <!-- Input dans le popup -->
            <div class="relative w-full lg:w-1/2 justify-center flex">
              <SvgIcon icon-name="iconSearch" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 text-gray-500" />
              <input
                type="text"
                v-model="searchText"
                class="w-full pl-10 border-[#F4D2BC] border-2 p-2 rounded-lg h-12 "
                placeholder="Rechercher un événement"
              />
            </div>

            <!-- Lieu choisi -->
            <div class="mt-4 text-gray-700 border border-[#F4D2BC] w-full lg:w-1/2 py-3 rounded-lg px-3">
              Lieu choisi : {{ selectedLocation || 'Aucun lieu sélectionné' }}
            </div>

            <!-- Bouton de recherche en bas à droite -->
            <button
              class="fixed bottom-4 right-4 flex items-center gap-5 px-6 py-3 bg-[#FF6B00] text-white rounded-full shadow-lg"
              @click="performSearch"
            >
              Rechercher
              <SvgIcon icon-name="iconSearch" class="w-5 text-white" />
            </button>
          </div>
        </div>
        <div class="bg-[#FFFFFF] hidden md:flex border-[#F4D2BC] border-l-0 font-medium border-2 px-3 py-2 items-center gap-2 text-sm sm:text-base h-12 2xl:h-16 2xl:w-64 md:w-44 2xl:text-xl">
          <span class="text-[#919191]">à</span> Cotonou, Bénin
        </div>
        
        <button class="items-center flex">
          <div class="border-[#FF6B00] bg-[#FF6B00] border-2 px-6 py-3 flex items-center gap-2 rounded-r-lg h-12 2xl:h-16 ">
            <iconSearchwhite icon-name="iconSearch" class="w-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
          </div>
        </button>
      </div>
      
      <div class="flex justify-between 2xl:-mt-9">
        <div class="hidden md:flex w-2/5 items-center -ml-24 2xl:-ml-40 -mb-24 2xl:-mb-40">
          <div>
            <div class="absolute md:ml-20 lg:ml-36 -mt-7 iconlove">
              <!-- <ICLove class="md:w-14 lg:w-20"/> -->
            </div>
            <img class="z-10 p-5" :src="IMGgirls" alt="IMGgirls"> 
          </div>
          <div class="md:-ml-10 lg:-ml-16 iconlove">
            <!-- <iconlike class="md:w-14 lg:w-20" />  -->
          </div>
        </div>

        <div class="md:w-1/5 mt-10 md:mt-0 mx-4 md:mx-0 md:-mb-28 -mb-10 flex items-end">
          <div>
            <div class="flex bottom-40 sm:bottom-20 absolute -left-4 iconlove">
              <!-- <iconFire class="md:w-10 lg:w-20" /> -->
            </div>
            <img :src="IMGcard" alt="IMGcard" class="shadow-2xl">
          </div>
          <div class="flex absolute bottom-72 sm:top-96 right-1 iconlove">
            <!-- <iconticket class="w-14" />  -->
          </div>
        </div>

        <div class="hidden md:flex w-2/5 items-center relative -mr-20 2xl:-mr-24 -mb-24 2xl:-mb-40">
          <div class="absolute -top-7 left-0 md:ml-20 lg:ml-44 mt-4 hidden">
            <!-- <iconticket class="md:w-14 lg:w-20" /> -->
          </div>
          <div class="-left-4 hidden">
            <!-- <iconFire class="md:w-10 lg:w-20" /> -->
          </div>
          <img class="w-full z-10" :src="IMGgirl" alt="IMGgirls">
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
</style>
