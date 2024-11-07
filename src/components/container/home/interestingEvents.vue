<template>
    <div class="lg:mx-40 2xl:mx-52 py-5 2xl:mt-24">
        <p class="text-center text-5xl py-10 font-extrabold lg:w-4/6 mx-auto 2xl:w-1/2 2xl:text-6xl">
            Ces <span class="text-[#FF6B00] font-extrabold text-center mx-auto">évenements</span> peuvent vous intéresser
        </p>
    </div>
    <!-- Défilement horizontal -->
    <div class="overflow-x-auto -mb-20 ps-16 md:ps-20 xl:ps-40 2xl:ps-52 ">
        <div class="flex gap-4">
            <div 
              v-for="(image, index) in images" 
              :key="index" 
              class="relative w-96 2xl:w-[550px] flex-shrink-0 overflow-hidden group">
                
                <!-- Image -->
                <div class="relative">
                    <!-- Image principale -->
                    <div>
                        <img :src="image.src" class="w-full h-[235.5px] 2xl:h-[300px] object-cover rounded-xl" alt="Image événement">
                    </div>

                    <!-- Texte en haut à gauche -->
                    <div class="absolute top-2 left-2 2xl:left-5 2xl:top-5 2xl:py-2 2xl:rounded-full 2xl:text-lg bg-[#0000005E] text-white text-sm font-semibold px-3 py-1 rounded-xl flex gap-2 items-center">
                       <iconCalendar/>10 Mars, 21h - 23h00
                    </div>

                    <!-- Texte en bas au centre -->
                    <div class="absolute bottom-2 2xl:bottom-5 2xl:text-lg text-white text-sm font-semibold px-3 py-1 rounded">
                        Lancement du Parc de Jeux
                    </div>

                    <!-- Étiquette "Gratuit" en bas à droite -->
                    <div class="absolute bottom-2 right-2 2xl:right-5 2xl:bottom-5 2xl:text-lg text-white text-sm font-semibold px-2 py-1 rounded">
                        Bamboo numerik
                    </div>
                </div>
                <!-- Overlay avec Bouton -->
                <div class="absolute inset-0 rounded-xl bg-gray-700 bg-opacity-60 flex items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button class="bg-white 2xl:text-2xl items-center text-lg flex gap-2 text-black font-semibold 2xl:py-4 2xl:px-5 py-2 px-4 rounded-full opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-150">
                        Découvrir <iconDecouvrir class="bg-white w-10 h-10 rounded-full"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IMGLancementgirl from '@/assets/images/IMGLancementgirl.webp';
import IMGConferenceTech from '@/assets/images/IMGConferenceTech.webp'
import IMGFestivalAfro from '@/assets/images/IMGFestivalAfro.webp'
import IMGGalaCreatifs from '@/assets/images/IMGGalaCreatifs.webp'
import IMGSalonArt from '@/assets/images/IMGSalonArt.webp'
import IMGSeminairedevperso from '@/assets/images/IMGSeminairedevperso.webp'
import IMGSpectacledanse from '@/assets/images/IMGSpectacledanse.webp'
import IMGAtelier2cuisine from '@/assets/images/IMGAtelier2cuisine.webp'
import iconCalendar from '@/assets/icons/iconCalendar.vue'
import iconDecouvrir from '@/assets/icons/iconDecouvrir.vue'


// 
export default {
    components:{iconCalendar , iconDecouvrir },
    data() {
        return {
            images: [
                { src: IMGLancementgirl },
                { src: IMGConferenceTech },
                { src: IMGFestivalAfro },
                { src: IMGGalaCreatifs },
                { src: IMGSalonArt },
                { src: IMGSeminairedevperso },
                { src: IMGSpectacledanse },
                { src: IMGAtelier2cuisine}
                // Ajoutez autant d'images que nécessaire
            ],
        };
    },
};
</script>
