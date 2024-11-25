<script>
import iconSearch from '@/assets/icons/iconSearch.vue'
import iconSearchwhite from '@/assets/icons/iconSearchwhite.vue'
import iconTicketsucces from '@/assets/icons/iconTicketsucces.vue'
import iconValid from '@/assets/icons/iconValid.vue'
import iconBad from '@/assets/icons/iconBad.vue'
import iconAlerte from '@/assets/icons/iconAlerte.vue'

import iconWarn from '@/assets/icons/iconWarn.vue'
import iconCheck3 from '@/assets/icons/iconCheck3.vue'
import iconCheck4 from '@/assets/icons/iconCheck4.vue'

import IMGcheck1 from '@/assets/images/img_check1.webp'

export default {
  name: 'the-webTicket',
  components: {
    iconSearch,
    iconSearchwhite,
    iconTicketsucces,
    iconValid,
    iconWarn,
    iconCheck3,
    iconCheck4,
    iconBad,
    iconAlerte
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
  <div
    class="max-w-[867px] w-full h-[234px] mt-10 m-auto rounded-2xl border border-[#F2F2F2] shadow-lg flex flex-wrap md:flex-nowrap justify-between hidden md:flex"
  >
    <div class="w-full md:max-w-[618.75px]">
      <div class="w-full h-1/3 flex flex-wrap items-center gap-5 ml-4">
        <div>
          <img class="w-[60.95px] h-[51px]" :src="IMGcheck1" alt="IMGgirls" />
        </div>
        <div class="w-56">
          <div class="w-full h-5 font-Baloo font-bold text-[28px] -mt-2">Festi Chill 2023</div>
          <div class="w-full mt-6 font-medium text-xs flex gap-1">
            <iconValid icon-name="iconSearch" class="" />
            Cotonou, Canal Olympia, Gbèjromèdé
          </div>
        </div>
        <div class="w-14 h-9">
          <div class="flex gap-2 w-full h-4 font-bold text-xs">
            11 Oct.
            <iconWarn icon-name="iconSearch" class="" />
          </div>
          <div class="w-[59.71px] h-[18px] font-medium text-[9.95px]">18h00-19h00</div>
        </div>
      </div>
      <div class="w-full h-0.5 bg-[#F2F2F2]"></div>
      <!-- Trait de séparation -->
      <div class="w-full h-2/3 flex flex-wrap justify-center items-center">
        <div class="w-full md:max-w-[476.25px] h-11 flex flex-wrap">
          <div class="w-1/2 flex gap-2">
            <iconCheck3 icon-name="iconSearch" class="" />
            <div>
              <div class="w-24 h-4 text-sm font-normal text-[#909090]">Nom du ticket</div>
              <div class="w-[106px] h-5 text-lg font-medium">Ticket Guest</div>
            </div>
          </div>
          <div class="w-1/2 flex gap-2 mt-4 md:mt-0">
            <iconCheck4 icon-name="iconSearch" class="" />
            <div>
              <div class="w-24 h-4 text-sm font-normal text-[#909090]">Client</div>
              <div class="w-[106px] h-5 text-lg font-medium">Bernard COVI</div>
            </div>
          </div>
        </div>
        <div class="flex items-center w-[589.5px] h-8 bg-[#FEF3F3] rounded-lg gap-2">
          <iconAlerte icon-name="iconAlerte" class="ml-2" />
          <div class="w-[468.75px] h-5 font-normal text-xs flex items-center">
            Cet événément est déjà expiré, vous ne pouvez plus utiliser cet ticket
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-[230.25px] flex justify-center items-center my-4 md:my-2">
      <div
        class="max-w-[230.25px] lg:w-[230.25px] w-full h-[213.75px] bg-[#FEF3F3] mr-0 md:mr-2 flex justify-center items-center rounded-r-xl"
      >
        <div>
          <iconBad icon-name="iconSuccess" class="m-auto" />
          <div class="font-Baloo w-full h-[30px] text-[#FF6060] font-bold text-lg text-center">
            Ticket expiré
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- affichage mobile  -->
  <div class="h-[498px] bg-[#FFFFFF] border w-[90%] m-auto block md:hidden rounded-2xl">
    <div class="h-[15%] flex items-center ml-4 gap-3">
      <div>
        <img class="w-[60.95px] h-[51px]" :src="IMGcheck1" alt="IMGgirls" />
      </div>
      <div class="w-56">
        <div class="w-full h-5 font-Baloo font-bold text-[28px] -mt-2">Festi Chill 2023</div>
        <div class="w-full mt-6 font-medium text-xs flex gap-1">
          <iconValid icon-name="iconSearch" class="" />
          Cotonou, Canal Olympia, Gbèjromèdé
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-[#F2F2F2]"></div>

    <div class="h-[85%] p-4 mt-">
      <div class="w-1/2 flex gap-2">
        <iconCheck3 icon-name="iconSearch" class="" />
        <div>
          <div class="w-24 h-4 text-sm font-normal text-[#909090]">Nom du ticket</div>
          <div class="w-[106px] h-5 text-lg font-medium">Ticket Guest</div>
        </div>
      </div>
      <div class="w-1/2 flex gap-2 mt-4 md:mt-0">
        <iconCheck4 icon-name="iconSearch" class="" />
        <div>
          <div class="w-24 h-4 text-sm font-normal text-[#909090]">Client</div>
          <div class="w-[106px] h-5 text-lg font-medium">Bernard COVI</div>
        </div>
      </div>
      <div class="w-full flex items-center mt-3">
        <div class="w-full h-52 bg-[#FEF3F3] flex justify-center items-center rounded-xl">
          <div>
            <iconBad icon-name="iconSuccess" class="m-auto" />
            <div class="font-Baloo w-full h-[30px] text-[#FF6060] font-bold text-lg text-center">
              Ticket expiré
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center h-10 bg-[#FEF3F3] rounded-lg gap-2 px-4 w-full mt-5">
        <iconAlerte icon-name="iconAlerte" class="ml-2" />
        <div class="flex-grow h-5 font-extralight text-xs flex items-center">
          Cet événement est déjà expiré, vous ne pouvez plus utiliser cet ticket.
        </div>
      </div>
    </div>
  </div>
  <!-- texte du footer -->
  <div
    class="w-full max-w-[704.25px] h-auto m-auto text-center mt-20 font-normal text-base md:text-lg p-5 md:p-0"
  >
    Si vous pensez qu'il s'agit d'une erreur, veuillez vérifier avec le participant ou consulter un
    superviseur pour résoudre ce problème. <span class="souligner">Contacter le support</span>
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
