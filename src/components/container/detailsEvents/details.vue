<template>
    <div class="px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-52 text-black">
        <div class="flex flex-col xl:flex-row pt-6 xl:pt-12 2xl:pt-20 items-center justify-between gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <div class="w-full xl:w-2/3 2xl:w-2/3 text-center xl:text-left flex items-center gap-3">
                <!-- Titre avec limitation de caractères sur petits écrans -->
                <h1 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold truncate ">
                    {{ truncatedTitle }}
                </h1>
                <iconPartage class="md:hidden w-7 h-7"/>
            </div>
            <div class="hidden md:flex flex-col md:flex-row gap-4 mt-4 xl:mt-0">
                <button class="text-lg md:text-xl xl:text-lg 2xl:text-2xl font-semibold border px-6 md:px-8 xl:px-5 2xl:px-10 py-2 md:py-3 xl:py-2 rounded-lg md:rounded-xl 2xl:rounded-2xl flex items-center gap-2 md:gap-3 2xl:gap-5">
                    Partager <iconPartage />
                </button>
                <button class="text-lg md:text-xl xl:text-lg 2xl:text-2xl 2xl:py-3 font-semibold border px-6 md:px-8 xl:px-5 py-2 md:py-3 xl:py-0 rounded-lg md:rounded-xl 2xl:rounded-2xl bg-[#FF6B00] text-white flex items-center gap-2 md:gap-3 2xl:gap-5">
                    Participer <iconFlecheLeft class="bg-white w-7 md:w-8 xl:w-9 h-7 md:h-8 xl:h-9 p-1 md:p-2 rounded-full"/>
                </button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-2 2xl:gap-4 mt-7 me-16 w-full xl:pe-24">
            <img :src="images.IMGConferenceTech2" alt="IMGConferenceTech" class="w-full md:w-1/2 xl:h-[420px] lg:w-2/5 2xl:h-auto"/>
            <img :src="images.IMGConferenceTech3" alt="IMGConferenceTech" class="w-full md:w-1/2 xl:h-[420px] lg:w-2/5 2xl:h-auto"/>
            <div class="w-full md:w-1/5 gap-4">
                <img :src="images.IMGMakerSpace" alt="IMGConferenceTech" class="h-40 md:h-48 xl:h-[200px] 2xl:h-[290px] mb-4 w-full"/>
                <div class="relative h-40 md:h-48 xl:h-[200px] 2xl:h-[290px] w-full">
                    <img :src="images.IMGSeminairedevperso2" alt="IMGSeminairedevperso2" class="h-full w-full object-cover rounded-lg 2xl:rounded-3xl"/>
                    <div class="absolute inset-0 flex items-center justify-center 2xl:bg-black 2xl:bg-opacity-50 text-white text-lg 2xl:text-5xl font-semibold rounded-lg 2xl:rounded-3xl">
                        +14
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import iconFlecheLeft from '@/assets/icons/iconFlecheLeft.vue';
import iconPartage from '@/assets/icons/iconPartage.vue';
import IMGConferenceTech2 from '@/assets/images/IMGConferenceTech2.webp';
import IMGConferenceTech3 from '@/assets/images/IMGConferenceTech3.webp';
import IMGMakerSpace from '@/assets/images/IMGMakerSpace.webp';
import IMGSeminairedevperso2 from '@/assets/images/IMGSeminairedevperso2.webp';

const title = "Conférence des hommes d’affaires de FAUPAJEB";
const truncatedTitle = ref(title);

// Limite le texte à 70 caractères sur les petits écrans
const updateTitleLength = () => {
  truncatedTitle.value = window.innerWidth < 768 && title.length > 70
    ? `${title.slice(0, 70)}...`
    : title;
};

// Initialise la limite de caractères et ajoute un écouteur d'événements pour la mise à jour
onMounted(() => {
  updateTitleLength();
  window.addEventListener('resize', updateTitleLength);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateTitleLength);
});

// Import des images pour le template
const images = {
  IMGConferenceTech2,
  IMGConferenceTech3,
  IMGMakerSpace,
  IMGSeminairedevperso2,
};
</script>

<style scoped>
/* Ajoutez ici des styles si nécessaire */
</style>
