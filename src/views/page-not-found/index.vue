<script setup>
// import { ref, onMounted } from 'vue'
import Header from '@/components/helper/header/index.vue'
// import notFound from '@/assets/images/img_notFound.webp'
import buttonBase from '@/components/helper/add/bouton-base.vue'

const props = defineProps({
  driverData: {
    type: Object,
    default: null
  }
})

function openHome() {
  window.open('/', '_self')
}
</script>

<template>
  <main>
    <Header class="w-full fixed z-50" :isEstimate="false" />
    <div class="flex items-center justify-center bg-white min-h-screen pt-20">
      <div class="w-11/12 md:w-[30%]">
        <div class="flex justify-center">
          <img
            :src="notFound"
            class="w-48 md:w-80 2xl:w-96"
            alt="page not found"
            width="417"
            height="308"
            original
          />
        </div>
        <div class="font-bold text-2xl lg:text-4xl 2xl:text-5xl text-center text-[#0A0B11] my-8">
          {{ $t('pageNotFound') }}
        </div>
        <div class="font-normal text-lg 2xl:text-2xl text-center text-[#787878]">
          {{ $t('thisPageIsNotFound') }}
        </div>
        <div class="button flex justify-center mt-10">
          <button-base
            :label="$t('backHome')"
            background="#3D7ED1"
            color="#fff"
            weight="700"
            size="24px"
            radius="20px"
            height="68px"
            @oga="openHome"
            class="w-11/12 md:w-3/5 2xl:w-1/2"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
