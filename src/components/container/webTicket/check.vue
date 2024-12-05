<script>
import iconSearch from '@/assets/icons/iconSearch.vue'
import iconSearchwhite from '@/assets/icons/iconSearchwhite.vue'
import IMGcheck1 from '@/assets/images/img_check1.webp'
export default {
  name: 'the-webTicket',
  components: {
    iconSearch,
    iconSearchwhite,
  },
  data() {
    return { IMGcheck1 }
  }
}
</script>

<template>
  <!-- Titre principal et barre de recherche -->
  <div class="flex justify-center h-auto mt-20 pb-20">
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
</template>

<style scoped>
/* Ajoute des styles personnalisés si nécessaire */
.iconlove {
  z-index: 999;
}
</style>
