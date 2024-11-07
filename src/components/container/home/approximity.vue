<template>
    <div class="my-4 mx-3 lg:mx-40 2xl:mx-52">
        <div class="text-2xl md:text-3xl 2xl:text-5xl font-extrabold w-1/2 md:flex items-center text-black pb-5 pt-2">
            À proximité de <span class="text-[#FF6B00] text-3xl 2xl:text-5xl font-extrabold md:ms-1">Cotonou</span>
            <button class="ms-1">
                <iconFlecheDawn />
            </button>
        </div>
        
        <!-- Grille de 4 colonnes et 4 lignes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 2xl:gap-12 my-5">
            <router-link to="/detailsevents"
                v-for="(event, index) in events" 
                :key="index"
                class="hover:bg-white hover:shadow-2xl duration-200 pb-8 2xl:pb-12 rounded-xl mx-2 lg:mx-0"
            >
                <div class="relative">
                    <img :src="event.image" alt="" class="rounded-xl w-full h-40 2xl:h-52 object-cover drop-shadow-2xl">
                    <!-- Texte "Gratuit" en bas à droite de l'image -->
                    <div class="absolute flex items-center gap-1 bottom-2 right-2 bg-[#3E3E3E87] text-white text-xs font-semibold px-2 2xl:text-lg 2xl:font-light 2xl:rounded-xl py-1 rounded">
                        <iconGratuit/>
                        Gratuit
                    </div>
                </div>
                <div class="mx-2 2xl:ps-3 ps-2">
                   <div class="text-start mt-2 2xl:text-2xl font-semibold truncate">{{ event.title }}</div>
                <div class="text-[#EF7E40] flex items-center gap-2 2xl:text-2xl">
                    <iconCalendar /> {{ event.date }}
                </div>
                <div class="truncate text-[#989799] 2xl:text-xl" style="max-width: 100%; ">
                    {{ event.description }}
                </div>
            </div>
            </router-link >
        </div>
        <div class="flex justify-center mb-14">
        <button class="text-[#38B4B4] border-[#38B4B4] border 2xl:border-2 py-2 px-6 2xl:px-10 2xl:rounded-[15px] text-sm 2xl:text-lg rounded-lg hover:bg-[#38B4B4] hover:text-white duration-200">
            Plus d’événements
        </button>
    </div>
    </div>
</template>

<script>
import iconFlecheDawn from '@/assets/icons/iconFlecheDawn.vue'
import iconCalendar from '@/assets/icons/iconCalendar.vue'
import iconGratuit from '@/assets/icons/iconGratuit.vue'
import IMGFestivalAfro from '@/assets/images/IMGFestivalAfro.webp'
import IMGConferenceTech from '@/assets/images/IMGConferenceTech.webp'
import IMGGalaCreatifs from '@/assets/images/IMGGalaCreatifs.webp'
import IMGSalonArt from '@/assets/images/IMGSalonArt.webp'
import IMGAtelier2cuisine from '@/assets/images/IMGAtelier2cuisine.webp'
import IMGFestivalindependant from '@/assets/images/IMGFestivalindependant.webp'
import IMGSpectacledanse from '@/assets/images/IMGSpectacledanse.webp'
import IMGSeminairedevperso from '@/assets/images/IMGSeminairedevperso.webp'

export default {
    name: 'the-approximity',
    components: { iconFlecheDawn, iconCalendar ,iconGratuit },
    data() {
        return {
            events: [
                {
                    title: 'Festival de Musique Afro',
                    date: '10 Mars, 21 - 23h00',
                    description: 'Lancement du Parc de Jeux Delta Game, un événement exceptionnel pour les amateurs de jeux et d\'activités familiales.',
                    image: IMGFestivalAfro
                },
                {
                    title: 'Conférence Tech Innovate',
                    date: '12 Mars, 15 - 18h00',
                    description: 'Découvrez les œuvres des artistes locaux dans cette exposition unique.',
                    image: IMGConferenceTech
                },
                {
                    title: 'Gala des créatifs',
                    date: '15 Mars, 19 - 22h00',
                    description: 'Une soirée de jazz avec des artistes internationaux.',
                    image: IMGGalaCreatifs
                },
                {
                    title: 'Salon de l\'Art Contemporain',
                    date: '18 Mars, 09 - 17h00',
                    description: 'Un rassemblement pour les passionnés de technologie et d\'innovation.',
                    image: IMGSalonArt
                },
                {
                    title: 'Atelier de cuisine gastronomique',
                    date: '18 Mars, 09 - 17h00',
                    description: 'Un atelier exclusif pour les amateurs de cuisine.',
                    image: IMGAtelier2cuisine
                },
                {
                    title: 'Festival du film indépendant de Ouidah',
                    date: '18 Mars, 09 - 17h00',
                    description: 'Un festival célébrant les talents cinématographiques locaux.',
                    image: IMGFestivalindependant
                },
                {
                    title: 'Spectacle de danse traditionnelle',
                    date: '18 Mars, 09 - 17h00',
                    description: 'Découvrez la richesse des danses traditionnelles.',
                    image: IMGSpectacledanse
                },
                {
                    title: 'Séminaire de développement personnel',
                    date: '18 Mars, 09 - 17h00',
                    description: 'Un séminaire pour améliorer vos compétences personnelles.',
                    image: IMGSeminairedevperso
                },

                {
                    title: 'Salon de l\'Art Contemporain',
                    date: '18 Mars, 09 - 17h00',
                    description: 'Un rassemblement pour les passionnés de technologie et d\'innovation.',
                    image: IMGSalonArt
                },
                {
                    title: 'Conférence Tech Innovate',
                    date: '12 Mars, 15 - 18h00',
                    description: 'Découvrez les œuvres des artistes locaux dans cette exposition unique.',
                    image: IMGConferenceTech
                },
                {
                    title: 'Festival de Musique Afro',
                    date: '10 Mars, 21 - 23h00',
                    description: 'Lancement du Parc de Jeux Delta Game, un événement exceptionnel pour les amateurs de jeux et d\'activités familiales.',
                    image: IMGFestivalAfro
                },
                {
                    title: 'Atelier de cuisine gastronomique',
                    date: '18 Mars, 09 - 17h00',
                    description:'Un atelier exclusif pour les amateurs de cuisine.',
                    image: IMGAtelier2cuisine
                },
            ]
        }
    }
}
</script>
