<template>
    <div class="text-black">
        <div class="fixed top-0 left-0 w-full z-50">
        <Heade />
    </div>
    <div class="bg-slate-50 pt-16">
        <detail/>
        <detailsMore/>
        </div>
    </div>
</template>

<script>
import Heade from '@/components/helper/header/index.vue'
import detail from './details.vue';
import detailsMore from './datailsMore.vue'
export default{ 
    name:'details-Enevnts',
    components:{ Heade , detail , detailsMore },
    data(){
        return{

        }
    }
}
</script>