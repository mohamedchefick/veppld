<template>
  <div class="overflow-x-auto xl:flex justify-center mx-3">
    <div class="flex gap-3 md:gap-6 2xl:gap-6 justify-start items-center mx-1 2xl:py-7">
      <button 
        v-for="(activity, index) in activities" 
        :key="index" 
        class="border-[#E3E6F2] border-2 flex flex-col justify-center items-center w-[91.5px] h-[96.49px] md:w-[91.5px] md:h-[84px] rounded-[13.5px] 2xl:rounded-[19px] 2xl:h-[110px] 2xl:w-[128px] hover:bg-[#38B4B4] duration-300 hover:border-[#38B4B4] hover:text-white"
      >
        <component :is="activity.icon" class="mx-auto icon-hover mb-2" />
        <div class="text-center text-xs 2xl:text-sm font-semibold w-[91.5px] md:max-w-full md:overflow-visible md:whitespace-normal md:text-clip ps-1">
          {{ activity.name }}
        </div>
      </button>
      <button 
        class="border-[#E3E6F2] border-2 flex flex-col justify-center items-center p-4 w-full h-[96.49px] md:w-[91.5px] md:h-[84px] rounded-xl 2xl:h-[100px] 2xl:w-[128px] text-center" 
        @click="openPopup"
      >
        +12 autres activités
      </button>
    </div>

<!-- Popup -->
<div v-if="showPopup" class="fixed h-screen inset-0 bg-white flex justify-center items-center z-50">
  <div class="bg-white rounded-lg p-5 max-w-full h-auto overflow-auto flex flex-col justify-center items-center mb-20">
    <div class="mb-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-black cursor-pointer bg-[#38B4B41A] rounded-full p-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        @click="closePopup"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div class="w-full">
      <h2 class="text-2xl font-bold mb-7 text-center lg:text-left">Les catégories populaires</h2>
    </div>
    <div class="grid grid-cols-3 gap-10 md:grid-cols-3 lg:grid-cols-6">
      <button 
        v-for="(activity, index) in activities" 
        :key="index" 
        class="border-[#E3E6F2] border-2 flex flex-col justify-center items-center w-full h-[96.49px] md:w-[91.5px] md:h-[84px] rounded-xl 2xl:h-[100px] hover:bg-[#38B4B4] duration-300 hover:border-[#38B4B4] hover:text-white"
      >
        <component :is="activity.icon" class="mx-auto icon-hover" />
        <div class="text-center text-xs font-semibold w-full md:max-w-[91.5px] md:overflow-visible md:whitespace-normal md:text-clip ps-1">
          {{ activity.name }}
        </div>
      </button>
    </div>
  </div>
</div>


  </div>
</template>

<script>
import iconConcerts from '@/assets/icons/iconConcerts.vue'
import iconSport from '@/assets/icons/iconSport.vue'
import iconTheatre from '@/assets/icons/iconTheatre.vue'
import iconCinema from '@/assets/icons/iconCinema.vue'
import iconConference from '@/assets/icons/iconConference.vue'
import iconExposition from '@/assets/icons/iconExposition.vue'
import iconFamille from '@/assets/icons/iconFamille.vue'
import iconSoiree from '@/assets/icons/iconSoiree.vue'
import iconBienetre from '@/assets/icons/iconBienetre.vue'

export default {
  name: 'the-activity',
  components: { 
    iconConcerts,
    iconSport,
    iconTheatre,
    iconCinema,
    iconConference,
    iconExposition,
    iconFamille,
    iconSoiree,
    iconBienetre
  },
  data() {
    return {
      showPopup: false,  // Pour contrôler l'affichage de la popup
      activities: [
        { name: 'Concerts et Festivals', icon: 'iconConcerts' },
        { name: 'Sports', icon: 'iconSport' },
        { name: 'Théâtre et Spectacles', icon: 'iconTheatre' },
        { name: 'Cinéma et Projections', icon: 'iconCinema' },
        { name: 'Conférences Séminaires', icon: 'iconConference' },
        { name: 'Expositions et Salons', icon: 'iconExposition' },
        { name: 'Famille et Enfants', icon: 'iconFamille' },
        { name: 'Soirées et Fêtes', icon: 'iconSoiree' },
        { name: 'Bien-être et Santé', icon: 'iconBienetre' },
        // { name: 'Expositions et Salons', icon: 'iconExposition' },
      ]
    }
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
.icon-hover:hover svg {
  fill: white;
}
</style>
