<template>
    <div class="bg-[#FFFAF3] py-4 md:py-8 2xl:py-14 lg:flex lg:flex-row lg:gap-8 flex-col justify-between items-center overflow-x-auto xl:px-40 2xl:px-52 px-1">
        <div class="flex gap-2 lg:w-2/3 lg:justify-start whitespace-nowrap overflow-x-auto ms-3">
            <button class="focus:bg-[#38B4B4] focus:border-[#38B4B4] py-1 px-7 rounded-3xl border-2 bg-white">Tous</button>
            <button class="focus:bg-[#38B4B4] focus:border-[#38B4B4] py-3 px-8 rounded-3xl border-2 bg-white">Aujourd’hui</button>
            <button class="focus:bg-[#38B4B4] focus:border-[#38B4B4] py-3 px-8 rounded-3xl border-2 bg-white">Ce weekend</button>
            <button class="focus:bg-[#38B4B4] focus:border-[#38B4B4] py-3 px-8 rounded-3xl border-2 bg-white">Cette semaine</button>
            <button class="focus:bg-[#38B4B4] focus:border-[#38B4B4] py-3 px-8 rounded-3xl border-2 bg-white">Ce mois</button>
        </div>
        
        <!-- Recherche avec icône pour les écrans larges -->
        <div class="md:w-1/4 relative py-3 hidden lg:py-0 lg:flex lg:flex-row">
            <iconSearch class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input 
                type="text" 
                class="bg-transparent w-full border-2 py-3 pl-10 pr-2 rounded-lg 2xl:rounded-xl" 
                placeholder="Rechercher"
            >
        </div>
    </div>

    <!-- Barre de recherche additionnelle pour mobile -->
    <div class="lg:w-1/3 w-full relative flex lg:hidden mt-3 px-3">
        <iconSearch class="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input 
            type="text" 
            class="bg-transparent w-full border pl-10 pr-2 py-3 rounded-lg mx-2" 
            placeholder="Rechercher"
        >
    </div>
</template>


<script>
import iconSearch from '@/assets/icons/iconSearch.vue'

export default {
    name: 'the-searchApproximity',
    components: { iconSearch }
}
</script>
