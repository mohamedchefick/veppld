<script setup>
import { ref, computed } from 'vue'
import iconLess from '@/assets/icons/iconLess.vue'
import iconAdd from '@/assets/icons/iconAdd.vue'
import iconTickets from '@/assets/icons/iconTickets.vue'
import iconAvantages from '@/assets/icons/iconAvantages.vue'
import iconFlecheLeft from '@/assets/icons/iconFlecheLeft.vue'
import iconPagnetTickets from '@/assets/icons/iconPagnetTickets.vue'

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

</script>

<template>
    <main>
    <!-- Section des tickets -->
      <div class="w-full sm:w-[350px] lg:w-[446px] 2xl:w-full mt-5 md:mt-0">
          <div class="bg-white w-full items-center gap-4 py-5 px-5 rounded-2xl border-[#FF6B0061] border-[3.31px] ">
              <div class="text-xl md:text-2xl 2xl:text-3xl font-bold text-black">
                  Tickets
              </div>
              <div v-for="(ticket, index) in tickets" :key="index" class="py-4 md:py-5 xl:py-6 px-4 md:px-3 2xl:px-8 flex space-x-4 md:space-x-5 border-b">
                  <div>
                      <iconTickets class="w-10 h-10 md:w-14 md:h-14 2xl:w-16 2xl:h-16"/>
                  </div>
                  <div class="w-2/3 space-y-2">
                      <h1 class="text-base md:text-lg xl:text-xl 2xl:text-xl font-medium 2xl:font-semibold text-black">{{ ticket.title }}</h1>
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
              <div class="py-5 xl:py-8 flex md:flex-row items-center justify-between">
                  <div class="flex items-center">
                      <span class="font-medium text-sm md:text-lg 2xl:font-Bold md:2xl:text-2xl pe-5">Total</span>
                      <span class="flex items-center gap-3 text-[#4E5A66] bg-[#F5F5F5] px-3 md:px-5 py-2 rounded-full text-xs md:text-sm 2xl:text-lg font-medium">
                          <iconPagnetTickets /> {{ totalTickets }} tickets
                      </span>
                  </div>
                  <div class="text-sm md:text-lg 2xl:text-2xl font-medium mt-0">{{ totalPrice }} Fr</div>
              </div>
              <button class="w-full ">
                  <div class="bg-[#FF6B00] text-center  flex justify-center items-center text-sm md:text-base xl:text-lg font-semibold 2xl:text-xl gap-3 text-white rounded-full py-3">
                      Obtenir vos tickets
                      <iconFlecheLeft class="bg-white w-6 md:w-7 xl:w-8 h-6 md:h-7 xl:h-8 p-1 md:p-2 rounded-full"/>
                  </div>
              </button>
          </div>
      </div>
    </main>
</template>
