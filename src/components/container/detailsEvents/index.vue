<template>
    <div class="">
        <Heade/>
        <detail/>
    </div>
</template>

<script>
import Heade from '@/components/helper/header/index.vue'
import detail from './details.vue';
export default{
    name:'details-Enevnts',
    components:{ Heade , detail },
    data(){
        return{

        }
    }
}
</script>