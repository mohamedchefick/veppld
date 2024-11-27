<script>
import iconWarn from '@/assets/icons/iconWarning.vue'
import IMGDetail1 from '@/assets/images/img_detail1.webp'
import iconDown from '@/assets/icons/iconDown.vue'
import iconDetail2 from '@/assets/icons/iconDetail2.vue'

export default {
  name: 'the-webTicket',
  components: { iconWarn, iconDown, iconDetail2 },
  data() {
    return { IMGDetail1 }
  }
}
</script>

<template>
  <!-- Titre principal et barre de recherche -->
  <div class="flex justify-center h-auto bg-[#F8F8F8] md:pb-32">
    <div>
      <div
        class="w-[560.25px] h-[88.5px] rounded-xl bg-[#FFF1DE] md:mt-20 flex p-3 gap-2 border border-[#FF6B0040]"
      >
        <div class="w-3">
          <iconWarn icon-name="iconSearch" class="mt-1" />
        </div>
        <div class="w-[515.25px] h-16">
          <div class="w-48 2xl:w-52 h-4 font-bold text-[15px] 2xl:text-base">
            Bénéficiaires de vos tickets
          </div>
          <div class="w-[477px] h-10 text-xs font-normal mt-3">
            Par défaut, vos tickets sont configurés en votre nom. Cliquez sur chaque ticket pour
            définir un autre bénéficiaire.
          </div>
        </div>
      </div>
      <div class="w-[560.25px] h-[250px] rounded-xl bg-white md:mt-5">
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <img class="w-[34.06px] h-[21.52px]" :src="IMGDetail1" alt="IMGgirls" />
            <div class="font-medium text-xs">Ticket bonheur</div>
          </div>
          <div class="flex items-center justify-end">
            <iconDown icon-name="iconDown" class="" />
          </div>
        </div>
        <div class="w-full h-0.5 bg-[#F2F2F2]"></div>
        <div class="w-full h-16 flex justify-between p-4 items-center">
          <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
            Ticket <iconDetail2 icon-name="iconSearch" class="" />
          </div>
          <div class=" w-36 h-10">
            <div class="w-full h-4">

            </div>
          </div>
          <div class="flex justify-end w-[82.5px] h-[18px]"></div>
        </div>

        <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>
        <!-- <div class="w-full h-16 flex justify-between p-4"></div>
        <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>
        <div class="w-full h-16 flex justify-between p-4"></div> -->
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
