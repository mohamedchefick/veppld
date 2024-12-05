<script setup>
import { ref } from 'vue'

import IMGConferenceTech2 from '@/assets/images/IMGConferenceTech2.webp'
import Tickets from '@/components/helper/tickets.vue';
import iconClubAffairiste from '@/assets/icons/IconClubAffairiste.vue'
import iconPartage from '@/assets/icons/iconPartage.vue';
import iconFlecheLeft from '@/assets/icons/iconFlecheLeft.vue';
import iconLocation from '@/assets/icons/iconLocation.vue'
import icon25Dec from '@/assets/icons/icon25Dec.vue'
import iconReadMore from '@/assets/icons/iconReadMore.vue'
import interestingEvents from '../home/interestingEvents.vue'
import Footer from '@/components/helper/footer/index.vue'

// Fonction pour limiter le nombre de caractères
function limitCharacters(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

// Texte à limiter
const longText = `Hipster ipsum tattooed brunch I'm baby.
 Out goth williamsburg schlitz kitsch woke tonx. Pinterest
  gastropub succulents sriracha af bulb slow-carb mood affogato.
   Banh copper dreamcatcher plz +1. Brunch snackwave praxis tousled
    raclette messenger diy I'm mustache. Tile fashion waistcoat cred
     williamsburg bushwick lyft. Flexitarian pin vaporware sold a cornhole
      intelligentsia. Try-hard blue butcher fixie axe live-edge vinyl. Sustainable
       diy ethical truck vexillologist hoodie 90's bruh mlkshk vaporware. Letterpress
        poke scenester hell flannel vinegar. Hipster cornhole mumblecore tofu hexagon
         bread umami pbr&b live-edge carry. Offal adaptogen bottle jean hot. Aesthetic
          scenester thundercats flexitarian blue tacos. Fit bodega hipster banh echo. Bruh
           williamsburg live-edge leggings pin yr marfa probably mi. Copper keytar mood toast
            live-edge batch selfies quinoa pin fanny. Fashion lyft brunch celiac kitsch messenger
             thundercats. Ugh try-hard sus health swag I'm coffee kale mood mlkshk. Marfa put juice yolo fixie gastropub coffee before fund baby.`;

// Limiter le texte à 200 caractères, par exemple
const limitedText = limitCharacters(longText, 200);

// Variable réactive pour afficher le texte complet ou limité
const showFullText = ref(false)

// Fonction pour basculer l'affichage du texte
function toggleText() {
  showFullText.value = !showFullText.value
}

// Liste des événements
const events = ref([
  'French event',
  'Evenements digital',
  'Business network',
  'Networking',
  'Réseautage',
  'Business',
  'Retaible business',
])
</script>

<template>
    <main>
        <div class="">
        <div class="flex flex-col md:flex-row gap-5 px-5 sm:px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-56 py-5">
            <div class="w-full sm:w-auto">
            <img :src="IMGConferenceTech2" class="w-full sm:w-[446px] h-auto" alt="Image de conférence tech" />
            <div class="flex gap-2 lg:justify-between">
                <img :src="IMGConferenceTech2" class="w-[50px] md:w-[60px] lg:w-[80px] py-3 h-auto" alt="Image de conférence tech" />
                <img :src="IMGConferenceTech2" class="w-[50px] md:w-[60px] lg:w-[80px] py-3 h-auto" alt="Image de conférence tech" />
                <img :src="IMGConferenceTech2" class="w-[50px] md:w-[60px] lg:w-[80px] py-3 h-auto" alt="Image de conférence tech" />
                <img :src="IMGConferenceTech2" class="w-[50px] md:w-[60px] lg:w-[80px] py-3 h-auto" alt="Image de conférence tech" />
                <img :src="IMGConferenceTech2" class="w-[50px] md:w-[60px] lg:w-[80px] py-3 h-auto" alt="Image de conférence tech" />
            </div>
            <div class="mt-5">
                <Tickets />
            </div>
            <div class="bg-white w-full flex items-center gap-4 py-5 px-5 rounded-2xl mt-5">
              <iconClubAffairiste class=""/>
              <div>
                  <h1 class="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-medium">Club des affairiste</h1>
                  <h1 class="text-sm sm:text-base 2xl:text-xl text-[#515151] font-normal">Organisateur de l’évènement</h1>
              </div>
          </div>
        </div>
        <div class="w-full sm:w-80 lg:w-auto">
            <div class="flex md:flex-row gap-4 mt-4 xl:mt-0">
                <button class="bg-white text-base sm:text-lg md:text-xl xl:text-lg 2xl:text-2xl font-semibold border px-4  lg:px-8 xl:px-5 2xl:px-10 py-2 md:py-3 xl:py-2 rounded-lg md:rounded-xl 2xl:rounded-2xl flex items-center gap-2 md:gap-3 2xl:gap-5">
                    Partager <iconPartage />
                </button>
                <button class="text-base sm:text-lg md:text-xl xl:text-lg 2xl:text-2xl 2xl:py-3 font-semibold border px-4 lg:px-8 xl:px-5 py-2 md:py-3 xl:py-0 rounded-lg md:rounded-xl 2xl:rounded-2xl bg-[#FF6B00] text-white flex items-center gap-2 md:gap-3 2xl:gap-5">
                    Participer <iconFlecheLeft class="bg-white w-6 sm:w-7 md:w-8 xl:w-9 h-6 sm:h-7 md:h-8 xl:h-9 p-1 md:p-2 rounded-full"/>
                </button>
            </div>
            <!--  -->
            <div class="mt-8">
                <h1 class="font-bold text-2xl sm:text-3xl w-full sm:w-4/5 text-[#303030]"> Conférence des hommes d’affaires de FAUPAJEB </h1>
            </div>
            <!--  -->
            <div class="bg-white w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 sm:px-7 py-5 sm:py-7 rounded-2xl mt-10">
              <div>
                  <h1 class="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-black">Date et lieu</h1>
                  <h1 class="text-sm sm:text-lg md:text-xl 2xl:text-2xl flex gap-2 items-center text-[#515151] font-normal">
                      <icon25Dec class="w-5 sm:w-6 md:w-8"/> 25 Déc 2024, 17h00-19h00
                  </h1>
                  <h1 class="text-sm sm:text-lg md:text-xl 2xl:text-2xl flex gap-2 items-center text-[#515151] font-normal">
                      <iconLocation class="w-5 sm:w-6 md:w-8"/>Canal Olympia, Hipster ipsum tattooed
                  </h1>
              </div>
          </div>
          <!--  -->
          <div class="bg-white w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 py-5 sm:py-7 px-5 rounded-2xl mt-5">
              <div class="space-y-3">
                  <h1 class="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-black">Détails de l’évènement</h1>
                  <h1 class="text-xs sm:text-sm md:text-lg 2xl:text-xl text-[#515151] leading-5 sm:leading-6 2xl:leading-9 font-normal">
                      {{ showFullText ? longText : limitedText }}
                  </h1>
                  <!-- Bouton Lire la suite -->
                  <h1 @click="toggleText" class="text-sm sm:text-base md:text-lg 2xl:text-xl flex gap-3 items-center cursor-pointer">
                      <span class="border-b-2 flex gap-2 border-black font-medium">
                          {{ showFullText ? 'Réduire' : 'Lire la suite' }}
                          <iconReadMore class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                      </span>
                  </h1>
              </div>
          </div>
          <!--  -->
          <div class="flex flex-wrap py-5 gap-2 sm:gap-4 md:gap-6 font-normal text-xs md:text-sm 2xl:text-lg text-[#606060]">
          <button v-for="(event, index) in events" :key="index" class="bg-white px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full">
              {{ event }}
          </button>
      </div>
      <!--  -->
        </div>
        </div>
        <div class="md:mt-10 xl:mt-20">
        <interestingEvents />
        <Footer />
      </div>
    </div>
    </main>
</template>
