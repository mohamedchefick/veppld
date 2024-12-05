<script>
import IMGgirl from '@/assets/images/IMGgirl.webp'
import IMGgirls from '@/assets/images/IMGgirls.webp'
import IMGcard from '@/assets/images/IMGcardHero.webp'
import IMGface1 from '@/assets/images/img_face1.webp'
import IMGface2 from '@/assets/images/img_face2.webp'
import IMGBG from '@/assets/images/IMGBG.webp'
import iconLeeds from '@/assets/icons/IconLeeds.vue'
import iconheroCard1 from '@/assets/icons/iconheroCard1.vue'
import iconheroCard2 from '@/assets/icons/iconheroCard2.vue'
import iconBas from '@/assets/icons/iconBas.vue'

export default {
  name: 'the-heroCards',
  components: { iconLeeds, iconheroCard1, iconheroCard2, iconBas },
  data() {
    return {
      IMGgirl,
      IMGgirls,
      IMGcard,
      IMGBG,
      IMGface1,
      IMGface2,
      showModal: false, // Pour contrôler l'affichage de la modal
      searchText: '',
      selectedLocation: 'Cotonou' // Exemple de lieu choisi
    }
  },
  computed: {
    // Vérifie si l’utilisateur est sur un appareil mobile
    isMobile() {
      return window.innerWidth <= 640
    }
  },
  methods: {
    openModal() {
      // Ouvre la modal uniquement sur mobile
      if (this.isMobile) {
        this.showModal = true
      }
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<template>
  <div class="bg-[#FEF9F2] text-black overflow-hidden">
    <!-- Titre principal et barre de recherche -->
    <div>
      <div
        class="text-5xl sm:text-6xl lg:text-[69px] 2xl:text-[69px] mx-auto text-center xl:w-[684px] xl:h-[196px] font-extrabold md:mt-20"
      >
        Votre Passeport pour des
        <span class="text-[#FF6B00] font-extrabold">Expériences Inoubliables</span>
      </div>

      <div
        class="text-lg mx-auto text-center font-normal w-11/12 md:w-5/12 py-5 pt-10 md:pt-1 text-[#515151]"
      >
        {{ $t('joinVeep') }}
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between 2xl:-mt-9">
      <div class="hidden md:flex w-2/5  items-center -ml-24 2xl:-ml-40 -mb-24 2xl:-mb-40">
        <div>
          <div class="absolute md:ml-20 lg:ml-36 -mt-7 iconlove">
            <!-- <ICLove class="md:w-14 lg:w-20"/> -->
          </div>
        </div>
        <div class="md:-ml-10 lg:-ml-16 iconlove">
          <!-- <iconlike class="md:w-14 lg:w-20" />  -->
        </div>
      </div>
      <!-- Conteneur avec overflow-hidden pour cacher les parties qui dépassent -->
      <div class="lg:mr-20 2xl:mr-40 overflow-hidden mx-auto">
        <div class="absolute md:ml-20 lg:-ml-16 lg:mt-8 ml-10">
          <iconheroCard1 class="md:w-44 lg:w-72 w-32" />
        </div>

        <div class="absolute md:ml-20 lg:ml-96 lg:mt-16 hidden md:flex">
          <iconheroCard2 class="md:w-44 lg:w-72 w-32" />
        </div>

        <div class="relative flex mt-5 md:relative">
          <!-- Image 2 -->
          <img
            :src="IMGface2"
            alt="IMGcard"
            class="w-[300px] md:w-[647.97px] h-[250px] md:h-[409.34px] absolute md:mr-40 -mt-1"
          />

          <!-- Image 1 with Button Overlay -->
          <div class="">
            <img
              :src="IMGface1"
              alt="IMGcard"
              class="w-[180px] md:w-[420px] h-[200px] md:h-[309.34px] mr-10 md:mr-52 ml-20 md:ml-60 mt-10 md:mt-[75px]"
            />

            <!-- Bouton positionné de façon fixe sur IMGface1 -->
            <div
              class="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-44 h-10 md:w-64 md:h-12 bg-white flex items-center justify-center text-black font-semibold shadow-md rounded-full md:mb-20 md:-ml-32 -ml-5 mb-10 gap-2 md:gap-5"
            >
              <button class="font-medium text-xs md:text-base text-[#000000]">
                {{ $t('advantage') }}
              </button>
              <div
                class="bg-[#FF6B00] rounded-full h-6 w-6 md:h-9 md:w-9 flex items-center justify-center"
              >
                <iconBas class="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex md:w-1/6 items-center md:relative md:-mr-24 2xl:-mr-24 2xl:-mt-40">
        <div class="absolute -top-7 left-0 md:ml-20 lg:ml-44 mt-4 hidden">
          <!-- <iconticket class="md:w-14 lg:w-20" /> -->
        </div>
        <div class="-left-4 hidden">
          <!-- <iconFire class="md:w-10 lg:w-20" /> -->
        </div>
        <iconLeeds class="w-full xl:-ml-10 2xl:-ml-0 mb-56" />
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
