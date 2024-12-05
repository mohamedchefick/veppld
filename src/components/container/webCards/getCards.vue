<script>
import iconApl1 from '@/assets/icons/iconApl1.vue'
import iconApl2 from '@/assets/icons/iconApl2.vue'
import iconApl3 from '@/assets/icons/iconApl3.vue'

export default {
  name: 'the-heroCards',
  components: { iconApl1, iconApl2, iconApl3 },
  data() {
    return {
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
  <div class="text-black overflow-hidden">
    <!-- Titre principal et barre de recherche -->
    <div>
      <div
        class="md:text-5xl text-4xl mx-auto text-center py-6 2xl:pt-24 sm:pt-16 font-bold text-black w-[353px] h-[90px] md:w-[597.75px] md:h-[90px]"
      >
        {{ $t('getCards') }}
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center xl:mt-10">
      <!-- Conteneur à droite-->
      <div class="hidden md:flex items-center md:relative 2xl:-mt-40 mr-40">
        <iconApl1 class="w-full" />
      </div>
      <!-- Conteneur du milieu-->
      <div
        class="flex justify-center items-center w-full md:w-[80%] 2xl:mt-20 mr-40 hidden md:flex"
      >
        <div class="">
          <div class="flex md:justify-between items-center justify-start gap-10">
            <div
              class="bg-[#FCF5EB] w-[342px] h-[163.5px] rounded-3xl rounded-r-none rounded-b-3xl flex justify-center items-center mb-5"
            >
              <div>
                <div class="w-64 h-11 font-Baloo font-bold text-2xl">{{ $t('downLoad') }}</div>
                <div class="w-64 h-12 font-normal text-base">
                  {{ $t('downloadApp') }}
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center -mt-8">
              <div
                class="w-14 h-14 rounded-full bg-[#38B4B4] font-Baloo font-bold text-2xl flex justify-center items-center text-white mb-5"
              >
                1
              </div>
              <div class="border-l h-36 bg-[#38B4B4] w-1"></div>
            </div>

            <div class="w-[342px] h-[163.5px]"></div>
          </div>

          <div class="flex justify-between items-center gap-2 mt-5">
            <div
              class="w-[342px] h-[163.5px] rounded-3xl rounded-r-none flex justify-center items-center"
            ></div>

            <div class="-mt-8 flex flex-col items-center">
              <div
                class="w-14 h-14 rounded-full bg-[#F6F6F6] font-Baloo font-bold text-2xl flex justify-center items-center text-[#9E9E9E]"
              >
                2
              </div>
              <div class="border-l h-44 bg-[#F6F6F6] w-[2px]"></div>
            </div>

            <div
              class="bg-[#FCF5EB] w-[342px] h-[163.5px] rounded-3xl rounded-b-3xl rounded-l-none flex justify-center items-center mb-8"
            >
              <div>
                <div class="w-72 h-11 font-Baloo font-bold text-2xl">{{ $t('commandCard') }}</div>
                <div class="w-64 h-12 font-normal text-base">
                  {{ $t('launchCommand') }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center gap-2 mt-5">
            <div
              class="bg-[#FCF5EB] w-[342px] h-[163.5px] rounded-3xl rounded-b-3xl rounded-r-none flex justify-center items-center mb-10"
            >
              <div>
                <div class="w-72 h-11 font-Baloo font-bold text-2xl">
                  {{ $t('bindApp') }}
                </div>
                <div class="w-64 h-12 font-normal text-base">
                  {{ $t('bindCard') }}
                </div>
              </div>
            </div>

            <div class="-mt-8 flex flex-col items-center">
              <div
                class="w-14 h-14 rounded-full bg-[#F6F6F6] font-Baloo font-bold text-2xl flex justify-center items-center text-[#9E9E9E]"
              >
                3
              </div>
              <div class="border-l h-44 bg-[#F6F6F6] w-[2px]"></div>
            </div>

            <div class="w-[342px] h-[163.5px]"></div>
          </div>

          <div class="flex justify-between items-center gap-2">
            <div
              class="w-[342px] h-[163.5px] rounded-3xl rounded-r-none flex justify-center items-center"
            ></div>

            <div class="mb-28 flex flex-col items-center">
              <div
                class="w-14 h-14 rounded-full bg-[#F6F6F6] font-Baloo font-bold text-2xl flex justify-center items-center text-[#9E9E9E]"
              >
                4
              </div>
            </div>

            <div
              class="bg-[#FCF5EB] w-[342px] h-[163.5px] rounded-3xl rounded-b-3xl rounded-l-none flex justify-center items-center"
            >
              <div>
                <div class="h-11 font-Baloo font-bold text-2xl">{{ $t('enjoyCard') }}</div>
                <div class="w-64 h-20 font-normal text-base">
                  {{ $t('useCard') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Affichage mobile -->
      <div class="block md:hidden justify-center mt-20 px-2 mx-auto">
        <div class="flex flex-col gap-6">
          <!-- Étape 1 -->
          <div class="flex gap-3">
            <div class="flex flex-col items-center -mt-8">
              <div
                class="w-9 h-9 rounded-full bg-[#38B4B4] font-Baloo font-bold text-lg flex justify-center items-center text-white mb-2"
              >
                1
              </div>
              <div class="border-l h-[89.68px] bg-[#38B4B4] w-1"></div>
            </div>
            <div
              class="bg-[#FCF5EB] w-[308px] h-[145px] rounded-3xl rounded-l-none rounded-b-3xl flex justify-center items-center py-3 px-4 -mt-7"
            >
              <div>
                <div class="w-64 h-8 font-Baloo font-bold text-lg">{{ $t('downLoad') }}</div>
                <!-- Réduction de la taille -->
                <div class="w-64 h-10 font-normal text-sm">
                  {{ $t('downloadApp') }}
                </div>
                <!-- Réduction de la taille -->
              </div>
            </div>
          </div>

          <!-- Étape 2 -->
          <div class="flex gap-3 mt-10">
            <div class="flex flex-col items-center -mt-8">
              <div
                class="w-9 h-9 rounded-full bg-[#F6F6F6] font-Baloo font-bold text-lg flex justify-center items-center text-[#9E9E9E]"
              >
                2
              </div>
              <div class="border-l h-44 bg-[#F6F6F6] w-[2px]"></div>
            </div>
            <div
              class="bg-[#FCF5EB] w-[308px] h-[145px] rounded-3xl rounded-l-none rounded-b-3xl flex justify-center items-center py-3 px-4 -mt-7"
            >
              <!-- Ajout de padding -->
              <div>
                <div class="w-64 h-8 font-Baloo font-bold text-lg">{{ $t('commandCard') }}</div>
                <!-- Réduction de la taille -->
                <div class="w-64 h-10 font-normal text-sm">
                  {{ $t('launchCommand') }}
                </div>
                <!-- Réduction de la taille -->
              </div>
            </div>
          </div>

          <!-- Étape 3 -->
          <div class="flex gap-3">
            <div class="flex flex-col items-center -mt-8">
              <div
                class="w-9 h-9 rounded-full bg-[#F6F6F6] font-Baloo font-bold text-lg flex justify-center items-center text-[#9E9E9E]"
              >
                3
              </div>
              <div class="border-l h-44 bg-[#F6F6F6] w-[2px]"></div>
            </div>
            <div
              class="bg-[#FCF5EB] w-[308px] h-[145px] rounded-3xl rounded-l-none rounded-b-3xl flex justify-center items-center py-3 px-4 -mt-7"
            >
              <!-- Ajout de padding -->
              <div>
                <div class="w-64 h-8 font-Baloo font-bold text-lg">{{ $t('bindApp') }}</div>
                <!-- Réduction de la taille -->
                <div class="w-64 h-10 font-normal text-sm">
                  {{ $t('bindCard') }}
                </div>
                <!-- Réduction de la taille -->
              </div>
            </div>
          </div>

          <!-- Étape 4 -->
          <div class="flex gap-3">
            <div class="flex flex-col items-center -mt-8">
              <div
                class="w-9 h-9 rounded-full bg-[#F6F6F6] font-Baloo font-bold text-lg flex justify-center items-center text-[#9E9E9E]"
              >
                4
              </div>
            </div>
            <div
              class="bg-[#FCF5EB] w-[308px] h-[145px] rounded-3xl rounded-l-none rounded-b-3xl flex justify-center items-center py-3 px-4 -mt-7"
            >
              <!-- Ajout de padding -->
              <div>
                <div class="w-64 h-8 font-Baloo font-bold text-lg">{{ $t('enjoyCard') }}</div>
                <div class="w-64 h-10 font-normal text-sm">
                  {{ $t('useCard') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Conteneur à gauche-->
      <div class="hidden md:flex items-center md:relative md:-mt-40">
        <iconApl2 class="w-full -mr-36" />

        <iconApl3 class="mt-[1000px]" />
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
