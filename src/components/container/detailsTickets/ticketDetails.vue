<script>
import iconWarn from '@/assets/icons/iconWarning.vue'
import IMGDetail1 from '@/assets/images/img_detail1.webp'
import iconDown from '@/assets/icons/iconDown.vue'
import iconDetail2 from '@/assets/icons/iconDetail2.vue'
import iconMen from '@/assets/icons/iconMen.vue'
import iconTel from '@/assets/icons/iconTel.vue'
import iconLink from '@/assets/icons/iconLink.vue'
import iconSend from '@/assets/icons/iconSend.vue'
import iconUpdate from '@/assets/icons/iconUpdate.vue'
import iconRigth from '@/assets/icons/iconRigth.vue'
import iconTicket2 from '@/assets/icons/iconTicket2.vue'
import iconTicket3 from '@/assets/icons/iconTicket3.vue'

export default {
  name: 'the-webTicket',
  components: {
    iconWarn,
    iconDown,
    iconDetail2,
    iconMen,
    iconTel,
    iconLink,
    iconSend,
    iconUpdate,
    iconRigth,
    iconTicket2
  },
  data() {
    return {
      IMGDetail1, // Image pour le ticket
      isExpanded: false, // État pour gérer l'affichage
      isExpanded2: false, // État pour gérer l'affichage
      isExpanded3: false // État pour gérer l'affichage
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded // Bascule l'état d'affichage
    },
    toggleExpand2() {
      this.isExpanded2 = !this.isExpanded2 // Bascule l'état d'affichage
    },
    toggleExpand3() {
      this.isExpanded3 = !this.isExpanded3 // Bascule l'état d'affichage
    }
  }
}
</script>
<template>
  <!-- Titre principal et barre de recherche -->
  <div class="flex justify-center h-auto bg-[#F8F8F8] md:pb-32">
    <div class="md:block hidden">
      <div
        class="w-[560.25px] h-[88.5px] rounded-xl bg-[#FFF1DE] md:mt-20 flex p-3 gap-2 border border-[#FF6B0040]"
      >
        <div class="w-3">
          <iconWarn icon-name="iconSearch" class="mt-1" />
        </div>
        <div class="w-[515.25px] h-16">
          <div class="w-full h-4 font-bold text-[15px] 2xl:text-base">
            {{ $t('benefice') }}
          </div>
          <div class="w-[477px] h-10 text-xs font-normal mt-3">
            {{ $t('configure') }}
          </div>
        </div>
      </div>

      <!-- Titre du Ticket avec bouton d'expansion -->
      <div
        class="w-[560.25px] h-[50px] rounded-xl bg-white md:mt-5 cursor-pointer"
        @click="toggleExpand"
      >
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <img class="w-[34.06px] h-[21.52px]" :src="IMGDetail1" alt="IMGgirls" />
            <div class="font-medium text-xs">Ticket bonheur</div>
          </div>
          <div class="flex items-center justify-end">
            <iconDown icon-name="iconDown" :class="{ 'transform rotate-180': isExpanded }" />
          </div>
        </div>
      </div>

      <!-- Section à afficher/masquer -->
      <div class="w-[560.25px] rounded-xl bg-white md:mt-1" v-if="isExpanded">
        <div>
          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconLink icon-name="iconSearch" />
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>
        </div>
      </div>

      <!-- Titre du Ticket avec bouton d'expansion2 -->
      <div
        class="w-[560.25px] h-[50px] rounded-xl bg-white md:mt-5 cursor-pointer"
        @click="toggleExpand2"
      >
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <iconTicket2 icon-name="iconDown" />
            <div class="font-medium text-xs">Ticket surprise</div>
          </div>
          <div class="flex items-center justify-end">
            <iconRigth icon-name="iconDown" :class="{ 'transform rotate-90': isExpanded2 }" />
          </div>
        </div>
      </div>

      <!-- Section à afficher/masquer2 -->
      <div class="w-[560.25px] rounded-xl bg-white md:mt-1" v-if="isExpanded2">
        <div>
          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconLink icon-name="iconSearch" />
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>
        </div>
      </div>

      <!-- Titre du Ticket avec bouton d'expansion3 -->
      <div
        class="w-[560.25px] h-[50px] rounded-xl bg-white md:mt-5 cursor-pointer"
        @click="toggleExpand3"
      >
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <iconTicket2 icon-name="iconDown" />
            <div class="font-medium text-xs">Ticket chance</div>
          </div>
          <div class="flex items-center justify-end">
            <iconRigth icon-name="iconDown" :class="{ 'transform rotate-90': isExpanded3 }" />
          </div>
        </div>
      </div>

      <!-- Section à afficher/masquer3 -->
      <div class="w-[560.25px] rounded-xl bg-white md:mt-1" v-if="isExpanded3">
        <div>
          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconLink icon-name="iconSearch" />
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-nh-9ame="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <div class="w-full h-16 flex justify-between p-4 items-center">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="w-36 h-10 space-y-2">
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconMen icon-name="iconSearch" /> Bernard COVI<span
                  class="text-[#FF6B00] font-normal text-sm"
                >
                  (Moi)
                </span>
              </div>
              <div class="w-full h-4 font-normal text-sm flex gap-2 items-center">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="flex justify-end w-[82.5px] h-[18px] gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden block mt-1 pb-10 p-5">
      <div class="w-64 h-10 font-Baloo font-bold text-xl mx-auto">Tickets : Festi Chill 2023</div>
      <div
        class="w-full max-w-md h-auto rounded-xl bg-[#FFF1DE] mt-5 flex p-4 gap-2 border border-[#FF6B0040]"
      >
        <div class="flex-none w-5">
          <iconWarn icon-name="iconSearch" class="mt-1" />
        </div>
        <div class="flex-1 h-auto">
          <div class="font-bold text-[15px] md:text-base">Bénéficiaires de vos tickets</div>
          <div class="text-xs font-normal mt-3">
            Par défaut, vos tickets sont configurés en votre nom. Cliquez sur chaque ticket pour
            définir un autre bénéficiaire.
          </div>
        </div>
      </div>
      <!-- Accordéon Ticket bonheur -->
      <div
        class="w-full max-w-md h-auto rounded-xl bg-white mt-5 cursor-pointer"
        @click="toggleExpand"
      >
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <img class="w-8 h-5" :src="IMGDetail1" alt="IMGgirls" />
            <div class="font-medium text-xs">Ticket bonheur</div>
          </div>
          <div class="flex items-center justify-end">
            <iconDown icon-name="iconDown" :class="{ 'transform rotate-180': isExpanded }" />
          </div>
        </div>
      </div>

      <!-- Section à afficher/masquer -->
      <div class="w-full max-w-md rounded-xl bg-white md:mt-1 mt-1" v-if="isExpanded">
        <div class="">
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconLink icon-name="iconSearch" />
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <!-- Repeat Section -->
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <!-- Repeat Section -->
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconUpdate icon-name="iconSearch" />
              <iconSend icon-name="iconSearch" />
            </div>
          </div>
        </div>
      </div>

      <!-- Accordéon Ticket surprise -->
      <div
        class="w-full max-w-md h-auto rounded-xl bg-white mt-5 cursor-pointer"
        @click="toggleExpand2"
      >
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <iconTicket2 icon-name="iconDown" />
            <div class="font-medium text-xs">Ticket surprise</div>
          </div>
          <div class="flex items-center justify-end">
            <iconRigth icon-name="iconDown" :class="{ 'transform rotate-90': isExpanded2 }" />
          </div>
        </div>
      </div>

      <!-- Section à afficher/masquer -->
      <div class="w-full max-w-md rounded-xl bg-white md:mt-1 mt-1" v-if="isExpanded2">
        <div class="">
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconLink icon-name="iconSearch" />
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <!-- Repeat Section -->
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-norma 2xl:w-52l text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <!-- Repeat Section -->
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>
        </div>
      </div>

      <!-- Accordéon Ticket surprise -->
      <div
        class="w-full max-w-md h-auto rounded-xl bg-white mt-5 cursor-pointer"
        @click="toggleExpand3"
      >
        <div class="w-full h-14 flex justify-between p-4">
          <div class="flex items-center justify-start w-36 h-6 gap-2">
            <iconTicket2 icon-name="iconDown" />
            <div class="font-medium text-xs">Ticket chance</div>
          </div>
          <div class="flex items-center justify-end">
            <iconRigth icon-name="iconDown" :class="{ 'transform rotate-90': isExpanded3 }" />
          </div>
        </div>
      </div>

      <!-- Section à afficher/masquer -->
      <div class="w-full max-w-md rounded-xl bg-white md:mt-1 mt-1" v-if="isExpanded3">
        <div class="">
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconLink icon-name="iconSearch" />
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <!-- Repeat Section -->
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>

          <div class="w-[95%] h-0.5 bg-[#F2F2F2] mx-auto"></div>

          <!-- Repeat Section -->
          <div class="w-full h-16 flex justify-between p-4 items-center gap-2">
            <div class="flex justify-start w-16 h-6 text-sm font-normal gap-2">
              Ticket <iconDetail2 icon-name="iconSearch" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <iconMen icon-name="iconSearch" /> Bernard COVI
                <span class="text-[#FF6B00] font-normal text-sm">(Moi)</span>
              </div>
              <div class="flex items-center gap-2">
                <iconTel icon-name="iconSearch" /> 62 99 09 11
              </div>
            </div>
            <div class="justify-end gap-2">
              <iconUpdate icon-name="iconSearch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.iconlove {
  z-index: 999;
}

/* Styles supplémentaires pour le bouton d'expansion */
.iconDown {
  transition: transform 0.3s ease; /* Animation pour la rotation de l'icône */
}
.transform.rotate-180 {
  transform: rotate(180deg);
}
.iconRigth {
  transition: transform 0.3s ease; /* Animation pour la rotation de l'icône */
}
</style>
