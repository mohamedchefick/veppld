<template>
    <div class="xl:px-40 2xl:px-56 text-black">
        <div class="flex xl:mt-12 2xl:mt-20 items-center justify-between gap-7">
            <div class="2xl:w-2/3 xl:w-2/3">
                <h1 class="text-4xl 2xl:text-5xl truncate font-bold">Conférence des hommes d’affaires de FAUPAJEB</h1>
            </div>
            <div class="flex gap-4">
                <button class="text-2xl font-semibold border px-8 2xl:px-12 py-3 rounded-xl 2xl:rounded-2xl flex items-center gap-3">Partager <iconPartage/> </button>
                <button class="text-2xl font-semibold border px-8 py-3 rounded-xl 2xl:rounded-2xl bg-[#FF6B00] text-white flex items-center gap-3">Participer <iconFlecheLeft class="bg-white w-9 h-9 p-2 rounded-full"/> </button>
            </div>
        </div>
    </div>
</template>

<script>
import iconFlecheLeft from '@/assets/icons/iconFlecheLeft.vue';
import iconPartage from '@/assets/icons/iconPartage.vue';
export default {
    name:'the-details',
    components:{ iconFlecheLeft , iconPartage },
    data(){
        return{

        }
    }
}
</script>