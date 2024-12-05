
<script setup>
import { ref, computed } from 'vue'
import iconTickets from '@/assets/icons/iconTickets.vue'
import iconAvantages from '@/assets/icons/iconAvantages.vue'
import iconLess from '@/assets/icons/iconLess.vue'
import iconAdd from '@/assets/icons/iconAdd.vue'
import iconClubAffairiste from '@/assets/icons/IconClubAffairiste.vue'
import iconReadMore from '@/assets/icons/iconReadMore.vue'
import iconCalendarBlack from '@/assets/icons/IconCalendarBlack.vue'
import iconLocation from '@/assets/icons/iconLocation.vue'
import interestingEvents from '../home/interestingEvents.vue'
import Footer from '@/components/helper/footer/index.vue'
import iconPagnetTickets from '@/assets/icons/iconPagnetTickets.vue'
import iconFlecheLeft from '@/assets/icons/iconFlecheLeft.vue'

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
const limitedText = limitCharacters(longText, 255);

// Variable réactive pour afficher le texte complet ou limité
const showFullText = ref(false)

// Fonction pour basculer l'affichage du texte
function toggleText() {
  showFullText.value = !showFullText.value
}

// Liste des tickets, rendue réactive
const tickets = ref([
  { title: 'Ticket bonheur', unitPrice: 1000, quantity: 0 },
  { title: 'Ticket aventure', unitPrice: 1500, quantity: 0 },
  { title: 'Ticket découverte', unitPrice: 5000, quantity: 0 },
])

// Méthode pour augmenter la quantité
function increaseQuantity(index) {
  tickets.value[index].quantity++
}

// Méthode pour diminuer la quantité
function decreaseQuantity(index) {
  if (tickets.value[index].quantity > 0) {
    tickets.value[index].quantity--
  }
}
// Calcul du nombre total de tickets
const totalTickets = computed(() => {
  return tickets.value.reduce((sum, ticket) => sum + ticket.quantity, 0)
})

// Calcul du prix total
const totalPrice = computed(() => {
  return tickets.value.reduce((sum, ticket) => sum + ticket.quantity * ticket.unitPrice, 0)
})

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
  <div class="px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-52 text-black 2xl:me-24 xl:mt-10 mt-8">
  <div class="flex flex-col md:flex-row gap-5 xl:mt-3 2xl:mt-5">
      <!-- Contenu principal -->
      <div class="w-full md:w-[648.75px] xl:w-[640px] 2xl:w-3/5 space-y-5">
          <div class="bg-white w-full flex items-center gap-4 py-5 px-5 rounded-2xl">
              <iconClubAffairiste class=""/>
              <div>
                  <h1 class="text-xl md:text-2xl 2xl:text-3xl font-medium">Club des affairiste</h1>
                  <h1 class="text-base 2xl:text-xl text-[#515151] font-normal">Organisateur de l’évènement</h1>
              </div>
          </div>
          <div class="bg-white w-full flex items-center gap-4 py-5 md:py-7 px-5 rounded-2xl">
              <div class="space-y-2 md:space-y-4 2xl:space-y-5">
                  <h1 class="text-xl md:text-2xl 2xl:text-3xl font-bold">Date et lieu</h1>
                  <h1 class="text-lg md:text-xl 2xl:text-2xl flex gap-2 items-center text-[#515151] font-normal">
                      <iconCalendarBlack class="w-6 md:w-8"/> 25 Déc 2024, 17h00-19h00
                  </h1>
                  <h1 class="text-lg md:text-xl 2xl:text-2xl flex gap-2 items-center text-[#515151] font-normal">
                      <iconLocation class="w-6 md:w-8"/>Canal Olympia, Hipster ipsum tattooed
                  </h1>
              </div>
          </div>
          <div class="bg-white w-full flex items-center gap-4 py-5 md:py-6 2xl:py-7 px-5 rounded-2xl">
              <div class="space-y-4 md:space-y-5">
                  <h1 class="text-xl md:text-2xl 2xl:text-3xl font-bold">Détails de l’évènement</h1>
                  <h1 class="text-sm md:text-lg 2xl:text-xl text-[#515151] leading-6 2xl:leading-9 font-normal">
                      {{ showFullText ? longText : limitedText }}
                  </h1>
                  <!-- Bouton Lire la suite -->
                  <h1 @click="toggleText" class="text-base md:text-lg 2xl:text-xl flex gap-3 items-center cursor-pointer">
                      <span class="border-b-2 flex gap-2 border-black font-medium">
                          {{ showFullText ? 'Réduire' : 'Lire la suite' }}
                          <iconReadMore class="w-6 md:w-8 h-6 md:h-8" />
                      </span>
                  </h1>
              </div>
          </div>
      <!-- Boutons d'événements -->
      <div class=" flex-wrap md:flex-wrap md:flex hidden py-5 gap-3 font-normal text-xs md:text-sm 2xl:text-lg text-[#606060]">
          <button v-for="(event, index) in events" :key="index" class="bg-white px-4 md:px-5 py-2 md:py-3 rounded-full">
              {{ event }}
          </button>
      </div>
      </div>

      <!-- Section des tickets -->
      <div class="w-full md:w-[399.75px] 2xl:w-2/5 mt-5 md:mt-0">
          <div class="bg-white w-full items-center gap-4 py-5 px-5 rounded-2xl border-[#FF6B0061] border-2">
              <div class="text-xl md:text-2xl 2xl:text-3xl font-bold">
                  Tickets
              </div>
              <div v-for="(ticket, index) in tickets" :key="index" class="py-4 md:py-5 px-4 md:px-3 2xl:px-8 flex space-x-4 md:space-x-5 border-b">
                  <div>
                      <iconTickets class="w-10 h-10 md:w-14 md:h-14 2xl:w-16 2xl:h-16"/>
                  </div>
                  <div class="w-2/3">
                      <h1 class="text-base md:text-lg 2xl:text-xl font-medium 2xl:font-semibold">{{ ticket.title }}</h1>
                      <h1 class="text-[#717171] text-xs md:text-sm 2xl:text-lg font-normal">Unit: {{ ticket.unitPrice }} Fr</h1>
                      <h1 class="flex gap-2 items-center text-[#176EF0] text-xs md:text-sm 2xl:text-lg">
                          <span class="border-b-2 border-[#176EF0] text-xs 2xl:text-sm">
                              Voir les avantages
                          </span>
                          <iconAvantages />
                      </h1>
                  </div>
                  <div class="w-1/3 flex gap-2 md:gap-3 items-center">
                      <button @click="decreaseQuantity(index)">
                          <iconLess />
                      </button>
                      <span class="font-medium text-sm md:text-base 2xl:text-xl">{{ ticket.quantity }}</span>
                      <button @click="increaseQuantity(index)">
                          <iconAdd />
                      </button>
                  </div>
              </div>
              <div class="py-5 hidden md:flex flex-col md:flex-row items-center justify-between">
                  <div class="flex items-center gap-2 md:gap-3">
                      <span class="font-medium text-sm md:text-lg 2xl:font-Bold md:2xl:text-2xl px-5">Total</span>
                      <span class="flex items-center gap-3 text-[#4E5A66] bg-[#F5F5F5] px-3 md:px-5 py-2 rounded-full text-xs md:text-sm 2xl:text-lg font-medium">
                          <iconPagnetTickets /> {{ totalTickets }} tickets
                      </span>
                  </div>
                  <div class="text-sm md:text-lg 2xl:text-2xl font-medium mt-4 md:mt-0">{{ totalPrice }} Fr</div>
              </div>
              <button class="w-full ">
                  <div class="bg-[#FF6B00] text-center hidden md:flex justify-center items-center text-sm md:text-base 2xl:text-xl gap-3 text-white rounded-full py-3">
                      Obtenir vos tickets
                      <iconFlecheLeft class="bg-white w-6 md:w-7 xl:w-8 h-6 md:h-7 xl:h-8 p-1 md:p-2 rounded-full"/>
                  </div>
              </button>
          </div>
      </div>
      <div class="flex-wrap md:hidden py-5 gap-4 md:gap-6 space-x-2 md:space-x-5 font-normal text-xs md:text-sm 2xl:text-lg text-[#606060]">
          <button v-for="(event, index) in events" :key="index" class="bg-white px-4 md:px-5 py-2 md:py-3 rounded-full">
              {{ event }}
          </button>
      </div>
      <!--  -->
  </div>    
  </div>
  <div class="bg-white px-5">
      <div class="py-5  flex md:hidden md:flex-row items-center justify-between">
                  <div class="flex items-center gap-2 md:gap-3">
                      <span class="font-medium text-sm md:text-lg 2xl:font-Bold md:2xl:text-2xl px-5">Total</span>
                      <span class="flex items-center gap-3 text-[#4E5A66] bg-[#F5F5F5] px-3 md:px-5 py-2 rounded-full text-xs md:text-sm 2xl:text-lg font-medium">
                          <iconPagnetTickets /> {{ totalTickets }} tickets
                      </span>
                  </div>
                  <div class="text-sm md:text-lg 2xl:text-2xl font-medium mt-4 md:mt-0">{{ totalPrice }} Fr</div>
              </div>
              <button class="w-full md:hidden ">
                  <div class="bg-[#FF6B00] text-center flex md:hidden justify-center items-center text-sm md:text-base 2xl:text-xl gap-3 text-white rounded-full py-3">
                      Obtenir vos tickets
                      <iconFlecheLeft class="bg-white w-6 md:w-7 xl:w-8 h-6 md:h-7 xl:h-8 p-1 md:p-2 rounded-full"/>
                  </div>
              </button>
              <!--  -->
            </div>
  <interestingEvents/>
  <Footer/>
</template>

<style></style>