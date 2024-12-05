<template>
    <div class="lg:mx-40 2xl:mx-52">
       
        <div class="bg-[#FFFAF3] pt-14 rounded-[30px]">
             <div class="">
            <p class="text-2xl 2xl:text-4xl font-medium text-center 2xl:py-4 py-2">Rejoignez le monde des privilèges</p>
            <p class="text-3xl md:text-5xl 2xl:text-7xl font-extrabold text-center md:w-1/2 2xl:w-2/3 mx-auto text-black w-2/3 2xl:mb-5">Obtenez votre carte VEEP maintenant !</p>
            <div class="flex justify-center 2xl:py-10 2xl:pb-12 py-7">
                <button class="bg-[#FF6B00] text-white py-3 2xl:py-3 px-4 2xl:px-6 text-xl 2xl:text-2xl 2xl:font-semibold justify-center items-center rounded-xl flex gap-6">
                    Obtenir la carte VEEP <iconFlecheLeft class="bg-white w-7 2xl:w-10 h-7 2xl:h-10 p-2 rounded-full"/>
                </button>
            </div>
        </div>
            <div class="hidden md:flex items-end -space-x-20 justify-center">
                <img :src="IMGCard1" alt="IMGCard1" class="w-1/4 h-1/2">
                <img :src="IMGCard2" alt="IMGCard2" class="w-1/4 h-1/2">
                <img :src="IMGCard3" alt="IMGCard3" class="w-1/4 h-1/2">
            </div>
            <div class="flex md:hidden w-full -space-x-14 items-end justify-center">
                <img :src="IMGSmallCard1" alt="IMGSmallCard1" class="w-1/2 h-[216.58px] sm:h-[300px]">
                <img :src="IMGSmallCard2" alt="IMGSmallCard2" class="w-1/2 h-[300px] sm:h-[350px]">
                <img :src="IMGSmallCard3" alt="IMGSmallCard3" class="w-1/2 h-[216.58px] sm:h-[300px]">
            </div>
        </div>
    </div>
</template>

<script>
import IMGCard1 from '@/assets/images/IMGCard1.webp'
import IMGCard2 from '@/assets/images/IMGCard2.webp'
import IMGCard3 from '@/assets/images/IMGCard3.webp'
import IMGSmallCard1 from '@/assets/images/IMGSmallCard1.webp'
import IMGSmallCard2 from '@/assets/images/IMGSmallCard2.webp'
import IMGSmallCard3 from '@/assets/images/IMGSmallCard3.webp'
import iconFlecheLeft from '@/assets/icons/iconFlecheLeft.vue'

export default{
    name:'the-Join',
    components: { iconFlecheLeft },
    data(){
        return{
            IMGCard1, IMGCard2 , IMGCard3 , IMGSmallCard1 , IMGSmallCard2 , IMGSmallCard3
        }
    }
}

</script>