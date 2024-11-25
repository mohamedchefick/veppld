<script>
import iconSearch from '@/assets/icons/iconSearch.vue'
import iconSearchwhite from '@/assets/icons/iconSearchwhite.vue'
import iconInvalid from '@/assets/icons/iconInvalid.vue'

import IMGcheck1 from '@/assets/images/img_check1.webp'

export default {
  name: 'the-webTicket',
  components: {
    iconSearch,
    iconSearchwhite,
    iconInvalid
  },
  data() {
    return { IMGcheck1 }
  }
}
</script>

<template>
  <!-- Titre principal et barre de recherche -->
  <div class="flex justify-center h-auto mt-20">
    <div>
      <div
        class="text-5xl md:text-7xl text-center font-extrabold text-black w-full h-auto mt-10 p-4"
      >
        Vérifiez votre Ticket
      </div>
      <div class="flex justify-center items-center mt-10 p-5 md:p-0">
        <div class="w-full">
          <!-- Input de recherche -->
          <div class="relative w-full">
            <iconSearch
              icon-name="iconSearch"
              class="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 2xl:w-6 2xl:h-6 text-gray-500 2xl:ms-3"
            />
            <input
              type="text"
              class="w-full pl-10 2xl:pl-14 border-[#F4D2BC] border-2 rounded-l-lg h-12 2xl:h-16 text-xl"
              placeholder="Mettez le code du ticket"
            />
          </div>
        </div>
        <button class="items-center flex w-[57px] h-[52.5px]">
          <div
            class="border-[#FF6B00] bg-[#FF6B00] border-2 px-6 py-3 flex items-center gap-2 rounded-r-lg h-12 2xl:h-16"
          >
            <iconSearchwhite icon-name="iconSearch" class="w-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
          </div>
        </button>
      </div>
    </div>
  </div>
  <div class="m-auto w-56 h-44 mt-20">
    <iconInvalid icon-name="iconInvalid" class="m-auto" />
    <div class="w-full font-Baloo font-bold text-[#FF6060] text-xl mt-5">
      Ticket #2938100 Invalide
    </div>
  </div>
  <!-- texte du footer -->
  <div
    class="w-full max-w-[704.25px] h-auto m-auto text-center mt-5 font-normal text-md md:text-base p-5 md:p-0"
  >
    Ce ticket <span class="font-bold text-[#FF6060]">#2938100</span> n'a pas pu être identifié. Si
    vous pensez qu'il s'agit d'une erreur, veuillez vérifier les informations avec le participant ou
    contacter un superviseur pour obtenir de l'aide.
  </div>

  <div
    class="w-full max-w-[704.25px] h-auto m-auto text-center mt-5 font-bold text-md md:text-base p-5 md:p-0 souligner"
  >
    Contacter le support
  </div>
</template>

<style scoped>
/* Ajoute des styles personnalisés si nécessaire */
.iconlove {
  z-index: 999;
}

.souligner {
  text-decoration: underline;
  font-weight: bold; /* Pour le mettre en gras */
}
</style>
