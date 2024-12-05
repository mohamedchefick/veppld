<script>
// import IconLogo from '@/assets/icons/IconLogo.vue';
import IconGoUp from '@/assets/icons/IconGoUp.vue';
import iconOrganiz from '@/assets/icons/iconOrganiz.vue';
import iconVerificat from '@/assets/icons/iconVerificat.vue';
import iconCarte from '@/assets/icons/iconCarte.vue';
import SvgIcon from '../add/SvgIcon.vue';
import IMGLogo from '@/assets/images/IMGveepLogo.webp'

export default {
  name: 'TheHeader', // Le nom du composant doit être en PascalCase
  components: {
    IconGoUp,
    SvgIcon,
    iconOrganiz,
    iconVerificat,
    iconCarte,
  },
  data() {
    return {
      isMenu: false, // État pour contrôler l'affichage du menu mobile
      images:{IMGLogo}
    };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu; // Alterne l'affichage du menu mobile
    },
  },
};
</script>


<template>
  <main>
    <!-- Barre de navigation principale -->
    <div
      v-if="!isMenu"
      class="bg-white/70 backdrop-blur-lg flex justify-between items-center lg:py- px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
      <!-- Logo (gauche) -->
        <div class="cursor-pointer" @click="openHome">
          <router-link to="/">
        <img :src="images.IMGLogo" class="w-24" alt="">
      </router-link>

      </div>

      <!-- Icône Burger (visible uniquement sur petits écrans) -->
      <div class="block md:hidden cursor-pointer" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <!-- Liens de navigation (cachés sur petits écrans) -->
      <div
        class="hidden md:flex items-center font-medium gap-3 xl:text-base 2xl:text-xl text-black"
      >
        <div
          class="font-normal text-sm sm:text-base  2xl:text-2xl cursor-pointer flex items-center gap-2  hover:bg-[#FBE4D680] lg:py-2 lg:px-4 rounded-lg"
          @click="scrollTo('faq')"
        >
          <iconCarte icon-name="iconCarte" class="w-4 sm:w-5" />
          {{ $t('La Carte VEEP') }}
        </div>
        <div
          class="font-normal text-sm sm:text-base  2xl:text-2xl cursor-pointer flex items-center gap-2 hover:bg-[#FBE4D680] lg:py-2 lg:px-4 rounded-lg"
          @click="contact"
        >
          <iconVerificat icon-name="iconCarte" class="w-4 sm:w-5" />
          {{ $t('Vérifier un billet') }}
        </div>
        <div
          class="font-normal text-sm sm:text-base  2xl:text-2xl cursor-pointer flex items-center gap-2 hover:bg-[#FBE4D680] lg:py-2 lg:px-4 rounded-lg"
          @click="contact"
        >
          <iconOrganiz icon-name="iconCarte" class="w-4 sm:w-5" />
          {{ $t('Organisateurs') }}
        </div>
      </div>
    </div>

    <!-- Menu Mobile (visible uniquement lorsque isMenu est true) -->
    <div v-if="isMenu" class="absolute w-full h-screen bg-white z-50 pt-32">
      <div class="flex justify-center items-center p-5">
        <SvgIcon icon-name="IconMenu" class="w-4 text-black" color=""  @click="openHome" />
        <!-- Bouton pour fermer le menu -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-black cursor-pointer bg-[#38B4B41A] rounded-full p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="toggleMenu"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <!-- Liens de navigation pour mobile -->
      <div class="flex flex-col justify-center items-center p-5 space-y-5 text-black text-xl">
        <div @click="scrollTo('faq')" class="cursor-pointer flex items-center gap-3">
          <iconCarte icon-name="iconCarte" class="w-4 sm:w-5" />
          {{ $t('La Carte VEEP') }}
        </div>
        <div @click="contact" class="cursor-pointer flex items-center gap-3">
          <iconVerificat icon-name="iconCarte" class="w-4 sm:w-5" />
          {{ $t('Vérifier un billet') }}
        </div>
        <div @click="contact" class="cursor-pointer flex items-center gap-3">
          <iconOrganiz icon-name="iconCarte" class="w-4 sm:w-5" />
          {{ $t('Organisateurs') }}
        </div>
      </div>
    </div>

    <!-- Bouton "Go to Top" (visible à partir de sm) -->
    <!-- <div
      class="goTop hidden sm:block bottom-14 md:bottom-24 right-8 md:right-16 fixed shadow-xl rounded-full"
      @click.stop="scrollTo('header')"
    >
      <IconGoUp alt="IconGoUp" class="rounded-full" />
    </div> -->
  </main>
</template>

<style scoped>
/* Ajoutez ici les styles spécifiques à ce composant si nécessaire */
</style>
