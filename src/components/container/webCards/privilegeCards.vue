<script>
import IMGLife from '@/assets/images/IMGLife.webp'
import IMGFace2 from '@/assets/images/IMGFace2.webp'
import iconpriv1 from '@/assets/icons/iconpriv1.vue'
import iconpriv2 from '@/assets/icons/iconPriv2.vue'
import iconPaid from '@/assets/icons/iconPaid.vue'
import iconAchat from '@/assets/icons/iconAchat.vue'
import iconGdirection from '@/assets/icons/iconGdirection.vue'
import iconLeedsv from '@/assets/icons/iconLeedsv.vue'

export default {
  name: 'the-lifeCard',
  components: { iconpriv1, iconGdirection, iconpriv2, iconAchat, iconPaid, iconLeedsv },
  data() {
    return {
      IMGLife,
      IMGFace2,
      cards: [
        {
          icon: 'iconpriv1',
          title: 'Accès exclusif aux événements',
          description:
            "Utilisez votre carte VEEP pour accéder à une multitude d'événements de tous types: concerts, festivals, conférences, expositions et plus encore.",
          backgroundColor: '#FEF9F2'
        },
        {
          icon: 'iconpriv2',
          title: 'Invitations spéciales',
          description:
            'Recevez des invitations exclusives à des événements spéciaux, soigneusement sélectionnés et réservés uniquement aux membres de la carte VEEP.',
          backgroundColor: '#FAFAFA'
        },
        {
          icon: 'iconPaid',
          title: 'Payer avec facilité',
          description:
            'Utilisez votre carte VEEP pour régler vos achats dans nos points de vente partenaires.',
          backgroundColor: '#FAFAFA'
        },
        {
          icon: 'iconAchat',
          title: 'Promotions exclusives',
          description:
            'Bénéficiez de promotions spéciales, de réductions et d’autres cadeaux chez nos milliers de partenaires.',
          backgroundColor: '#FEF9F2'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="py-5 px-5 sm:px-16 md:px-28 lg:px-44 xl:px-48 2xl:px-64 pt-24 oneDiv">
    <div class="flex justify-center">
      <div
        class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full xl:w-[597.75px] lg:w-[597.75px] xl:h-[156px] text-[#303030] font-Baloo text-center"
      >
        Avec des
        <span class="text-[#FF6B00] font-bold font-Baloo">privilèges exclusifs</span> de votre carte
        VEEP
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <iconLeedsv />
    </div>

    <!-- Responsive Section with v-for for the Cards -->
    <div class="flex flex-wrap justify-center  pt-10 gap-4 md:gap-8 lg:gap-12">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="w-full md:w-[45%] lg:w-[45%] 2xl:w-[45%] h-auto bg-cover rounded-[18px] p-8 flex flex-col justify-between"
        :style="{ backgroundColor: card.backgroundColor }"
      >
        <div class="space-y-5">
          <div>
            <component :is="card.icon" />
          </div>
          <div class="font-Baloo font-bold text-[#000000] text-xl md:text-2xl lg:text-3xl">
            {{ card.title }}
          </div>
          <div class="text-base font-normal text-justify">
            {{ card.description }}
          </div>
        </div>
        <div class="flex items-center gap-3 mt-4">
          <div class="text-[#E15F00] font-medium text-sm"> {{ $t('commandVeep') }}</div>
          <iconGdirection />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
