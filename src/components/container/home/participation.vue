<template>
    <div class="lg:mx-40 2xl:mx-52 mb-12 ld:mb-32">
        <div class="bg-[#FFFAF3] rounded-3xl relative pt-7 lg:pt-0">
            <div class=" hidden lg:flex -mb-28">
                <iconParticipHaut/>
            </div>
            <div class="lg:p-8 flex flex-col lg:flex-row items-center lg:gap-10">
                <!-- Titre et boutons de navigation -->
                <div class="w-full lg:w-1/3 2xl:w-2/5  2xl:ps-10 font-bold mb-4 md:mb-0 flex flex-col items-center text-center">
                    <div class=" text-4xl md:text-6xl 2xl:text-8xl font-extrabold lg:text-left ">
                        Participez aux <span class="text-[#FF6B00] text-4xl md:text-6xl 2xl:text-8xl font-extrabold">events tendances</span>
                    </div>
                    <div class="mt-4 gap-3 lg:flex hidden lg:w-full">
                        <button @click="prevImage" class="rounded-full">
                            <iconLeft class="w-16 h-16"/>
                        </button>
                        <button @click="nextImage" class="rounded-full">
                            <iconright class="w-16 h-16" />
                        </button>
                    </div>
                </div>
                <!-- Image du carousel -->
                <div class="w-full md:w-2/3">
                    <div class="lg:flex hidden">
                        <iconFete class="-mb-20 -ml-20"/>
                    </div>
                    <div class="relative">
                        <!-- Image principale -->
                        <div>
                            <img :src="images[currentImageIndex]" alt="" class="rounded-2xl transition duration-500 w-full h-auto object-cover">
                        </div>

                        <div class="bgtransp">
                                <!-- Texte en bas au centre -->
                        <div class="absolute bottom-20 left-2 md:left-10 2xl:left-20 w-1/3 xl:w-1/2  2xl:text-6xl font-bold text-white text-2xl xl:text-5xl px-3 py-1 rounded">
                                Lancement du Parc de Jeux
                        </div>

                        <div class="absolute bottom-2 flex items-center left-2 2xl:py-3 md:left-10 2xl:left-20 2xl:bottom-6 bg-[#0000005E] text-white text-sm xl:text-xl 2xl:text-2xl gap-2 font- 2xl:font-semibold px-3 py-2 rounded-full">
                        <iconCalendar/>
                            10 Mars, 21h - 23h00
                        </div>

                        <!-- Étiquette "Gratuit" en bas à droite -->
                        <div class="absolute flex items-center bottom-2 right-2 text-white text-sm xl:text-xl font-bold gap-2 2xl:right-20 2xl:bottom-6">
                            <iconWorld/>
                            Sponsorisé
                        </div>                    
                        </div>
                    </div>
                    <!-- Indicateurs de position en bas -->
                    <div class=" hidden lg:flex justify-center space-x-2 mt-4 pb-4">
                        <span 
                            v-for="(image, index) in images" 
                            :key="index"
                            :class="{'bg-[#38B4B4] px-4': index === currentImageIndex, 'bg-gray-300': index !== currentImageIndex}"
                            class="w-3 h-2 px-2 rounded-full cursor-pointer transition-colors duration-300"
                            @click="currentImageIndex = index"
                        ></span>
                    </div>
                </div>
                <div class="mt-4 gap-3 flex lg:hidden py-8 lg:py-0 pb-20">
                    <button @click="prevImage" class=" rounded-full hover:bg-gray-300">
                        <iconLeft />
                    </button>
                    <button @click="nextImage" class=" rounded-full hover:bg-gray-300">
                        <iconright />
                    </button>
                </div>
                
            </div>
            
            <div class="-mt-20 hidden lg:flex justify-center items-end w-1/2 ps-6 ">
                <iconSmile class="w-36 z-0 h-32 -mb-3"/>
            </div>
            <div class="flex justify-end -mt-20">
                <iconParticipBas/>
            </div>
        </div>
    </div>
</template>

<script>
import IMGLancementgirl from '@/assets/images/IMGLancementgirl.webp'
import IMGFestivalAfro from '@/assets/images/IMGFestivalAfro.webp'
import IMGConferenceTech from '@/assets/images/IMGConferenceTech.webp'
import IMGGalaCreatifs from '@/assets/images/IMGGalaCreatifs.webp'
import iconLeft from '@/assets/icons/iconLeft.vue'
import iconWorld from '@/assets/icons/iconWorld.vue'
import iconCalendar from '@/assets/icons/iconCalendar.vue'
import iconright from '@/assets/icons/iconright.vue'
import iconFete from '@/assets/icons/iconFete.vue'
import iconSmile from '@/assets/icons/iconSmile.vue'
import iconParticipBas from '@/assets/icons/iconParticipBas.vue'
import iconParticipHaut from '@/assets/icons/iconParticipHaut.vue'

export default {
    name: 'the-participation',
    components: { iconLeft, iconright , iconParticipHaut ,iconFete , iconSmile , iconParticipBas , iconCalendar , iconWorld },
    data() {
        return {
            images: [IMGLancementgirl, IMGFestivalAfro, IMGConferenceTech, IMGGalaCreatifs],
            currentImageIndex: 0,
        }
    },
    mounted() {
        this.startCarousel();
    },
    methods: {
        startCarousel() {
            this.carouselInterval = setInterval(() => {
                this.nextImage();
            }, 4000); // Change d'image toutes les 3 secondes
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        },
    },
    // beforeDestroy() {
    //     clearInterval(this.carouselInterval);
    // }
}
</script>

<style scoped>
/* Styles additionnels pour la responsivité */
@media (max-width: 768px) {
    .text-4xl {
        font-size: 1.875rem; /* 30px */
    }
    .text-6xl {
        /* color: rgba(0, 0, 0, 0.073); */
        font-size: 2.25rem; /* 36px */
    }
    .bgtransp{background:rgba(0, 0, 0, 0.516) ;}
}
</style>
