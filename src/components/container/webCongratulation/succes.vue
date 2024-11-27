<script>
import IMGcheck1 from '@/assets/images/img_check1.webp'
import IMGsucces1 from '@/assets/images/img_succes1.webp'
import IMGsucces2 from '@/assets/images/img_succes2.webp'
import IMGsucces3 from '@/assets/images/img_succes3.webp'
import IMGsucces4 from '@/assets/images/img_succes4.webp'
import iconReturn from '@/assets/icons/iconReturn.vue'
import iconCoins from '@/assets/icons/iconCoins.vue'

import gift from '@/assets/images/succes.gif'
import iconBenef from '@/assets/icons/iconBenef.vue'

export default {
  name: 'the-webTicket',
  components: { iconReturn, iconBenef, iconCoins },
  data() {
    return { IMGcheck1, IMGsucces1, IMGsucces2, IMGsucces3, IMGsucces4, gift }
  }
}
</script>

<template>
  <!-- Titre principal et barre de recherche -->
  <div class="flex justify-center h-auto bg-[#F8F8F8] md:pb-32">
    <div class="w-[639px] h-[548.25px] rounded-xl bg-white md:mt-20 flex justify-between relative">
      <div class="mx-auto relative mt-7">
        <div class="flex">
          <!-- Image de succès -->
          <img :src="IMGsucces4" alt="IMGcard" class="w-[356.36px] h-[223.72px]" />
          <!-- Image gif superposée, ajustée pour être plus grande -->
          <img
            :src="gift"
            alt="GIF card"
            class="absolute left-0 w-[500px] h-[300px] object-cover -mt-28"
          />
        </div>
        <div class="w-60 h-10 font-Baloo font-bold text-4xl mx-auto">Félicitations !</div>
        <div class="w-80 h-[87.36px] flex justify-center items-center ml-2 mt-3">
          <div>
            <div class="w-32 h-6 font-normal text-[#515151] mx-auto">Vous bénéficiez de</div>
            <iconBenef class="mx-auto" />
            <div class="w-full h-6 font-normal text-sm mx-auto mt-2">
              pour l’événement <span class="font-bold">FestiChill 2023</span>
            </div>
          </div>
        </div>
        <div class="w-80 h-[83.25px] mt-5 md:ml-2 mx-auto bg-[#FCF5EB] flex justify-between p-4 rounded-xl ">
          <div class="w-36 h-14">
            <div class="w-full h-5 font-semibold text-sm">Vous gagnez</div>
            <div class="w-full h-8 flex">
              <div class="w-24 text-[#FF6B00] font-Baloo font-bold text-3xl">12 000</div>
              <div class="w-10 h-4 font-medium text-sm mt-2 -ml-1">points</div>
            </div>
          </div>
          <div class="w-16 h-14">
            <iconCoins />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div>
          <button class="absolute -ml-16 mt-4">
            <iconReturn />
          </button>
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
