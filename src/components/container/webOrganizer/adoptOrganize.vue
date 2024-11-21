<script>
import IMGpoint1 from '@/assets/images/img_point1.webp'
import IMGpoint2 from '@/assets/images/img_point2.webp'
import iconOrganize2 from '@/assets/icons/iconOrganize2.vue'
import iconOrganize3 from '@/assets/icons/iconOrganize3.vue'
import iconOrganize4 from '@/assets/icons/iconOrganize4.vue'

export default {
  name: 'the-heroCards',
  components: { iconOrganize2, iconOrganize3, iconOrganize4 },
  data() {
    return { IMGpoint1, IMGpoint2 }
  }
}
</script>
<template>
  <div class="py-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56">
    <!-- Titre -->
    <div class="w-full flex justify-center">
      <div class="h-11 font-bold text-3xl sm:text-4xl lg:text-5xl font-Baloo text-center">
        Pourquoi
        <span class="text-[#FF6B00] font-bold font-Baloo">adopter Veep ?</span>
      </div>
    </div>

    <!-- Section des cartes -->
    <div
      class="mt-10 grid md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center space-y-5"
    >
      <!-- Carte 1 -->
      <div
        class="w-full max-w-[400px] h-[337.5px] flex flex-col justify-center items-center hover:bg-[#38B4B4] duration-300 hover:border-[#38B4B4] hover:text-white hover:rounded-lg p-5 sm:p-3 mt-4"
      >
        <div
          class="w-[69px] h-[69px] rounded-full bg-[#F1FAFA] flex items-center justify-center m-auto"
        >
          <iconOrganize2 />
        </div>
        <div class="w-full h-auto font-normal text-xl lg:text-2xl text-center font-Bakbak">
          Gestion simplifiée des tickets et accès
        </div>
        <div class="w-full h-auto font-normal text-sm lg:text-base text-center mt-3 text-[#515151] mb-10">
          Fluidifiez et sécurisez vos entrées grâce aux solutions de contrôle d’accès Veep
        </div>
      </div>

      <!-- Carte 2 -->
      <div
        class="w-full max-w-[400px] h-[337.5px] flex flex-col justify-center items-center hover:bg-[#38B4B4] duration-300 hover:border-[#38B4B4] hover:text-white hover:rounded-lg p-5 sm:p-3"
      >
        <div
          class="w-[69px] h-[69px] rounded-full bg-[#F1FAFA] flex items-center justify-center m-auto"
        >
          <iconOrganize3 />
        </div>
        <div class="w-full h-auto font-normal text-xl lg:text-2xl text-center font-Bakbak ">
          Paiements par carte bancaire et Mobile Money
        </div>
        <div class="w-full h-auto font-normal text-sm lg:text-base text-center mt-3 text-[#515151]  mb-10">
          Dynamisez et suivez en temps réel vos ventes de tickets sur votre compte
        </div>
      </div>

      <!-- Carte 3 -->
      <div
        class="w-full max-w-[400px] h-[337.5px] flex flex-col justify-center items-center hover:bg-[#38B4B4] duration-300 hover:border-[#38B4B4] hover:text-white hover:rounded-lg p-5 sm:p-3"
      >
        <div
          class="w-[69px] h-[69px] rounded-full bg-[#F1FAFA] flex items-center justify-center m-auto"
        >
          <iconOrganize4 />
        </div>
        <div class="w-full h-auto font-normal text-xl lg:text-2xl text-center font-Bakbak">
          Réduction des pertes et des fraudes au ticket
        </div>
        <div class="w-full h-auto font-normal text-sm lg:text-base text-center mt-3 text-[#515151]  mb-10">
          Evitez la fraude sur vos événements grâce au contrôle d’accès sécurisé
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
