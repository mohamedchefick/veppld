<script setup>
import IconLogo from '@/assets/icons/IconLogo.vue'
import IconGoUp from '@/assets/icons/IconGoUp.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/index'
const store = useUserStore()
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  isHome: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  const topButton = document.querySelector('.goTop')
  gsap.from(topButton, {
    scrollTrigger: {
      trigger: topButton,
      toggleActions: 'restart reverse play reverse',
      start: 'top -200%',
      markers: false,
      scrub: 5
    },
    y: 100,
    opacity: 0,
    scale: 0,
    ease: 'elastic.out(0.4,0.15)',
    duration: 2
  })
})

const isMenu = ref(false)
function closeMenu() {
  isMenu.value = false
}
function openMenu() {
  isMenu.value = true
}

const isAllProduct = ref(false)
function closeAllProduct() {
  isAllProduct.value = false
}
function openAllProduct() {
  isAllProduct.value = true
}

function openLogin() {
  isMenu.value = false
  window.open('https://app.oremi.41devs.co/', '_blank')
}

const router = useRouter()
function openHome() {
  if (router.currentRoute.value.path === '/') {
    window.location.reload()
  } else {
    router.push('/')
  }
}

function openWhatsApp() {
  isMenu.value = false
  window.open(' https://wa.me/22963632828', '_blank')
}

const route = useRouter()
function scrollTo(val) {
  // Vérifier si on est sur une autre page
  if (route.currentRoute.value.path !== '/') {
    // Rediriger vers la page d'accueil avec l'ID en ancre
    router.push({ path: '/', hash: `#${val}` }).then(() => {
      // Après la navigation, on s'assure que l'ancre est bien scrollée
      setTimeout(() => {
        const element = document.getElementById(val)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300) // Petit délai pour s'assurer que la page est bien chargée
    })
  } else {
    // Si on est déjà sur la page d'accueil
    const element = document.getElementById(val)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <main>
    <div
      v-if="!isMenu"
      class="bg-[#FFFFFF17] flex justify-between items-center py-3.5 px-5 md:px-32 lg:px-44 2xl:px-56"
    >
      <div class="cursor-pointer" @click="openHome">
        <IconLogo />
      </div>

      <div
        class="hidden md:flex items-center font-medium xl:text-base 2xl:text-xl text-black gap-5"
      >
        <div
          class="font-normal text-xl 2xl:text-2xl text-[#584175] cursor-pointer"
          @click="scrollTo('faq')"
        >
          {{ $t('expertise') }}
        </div>
        <div
          class="font-normal text-xl 2xl:text-2xl text-[#584175] cursor-pointer"
          @click="contact"
        >
          {{ $t('industries') }}
        </div>
      </div>
      <div class="md:flex items-center gap-2.5">
        <div>
          <button
            class="font-medium text-white text-sm xl:text-base 2xl:text-lg bg-bluePrincipal px-5 py-2 lg:px-6 lg:py-2.5 2xl:px-7 2xl:py-3.5 rounded-xl"
            @click="openAllProduct"
          >
            {{ $t('contactUs') }}
          </button>
        </div>
      </div>
    </div>

    <!-- MENU -->
    <div class="absolute w-full h-screen bg-white" v-if="isMenu">
      <div class="w-full bg-white p-8 2xl:p-20">
        <div class="cursor-pointer" @click="openHome">
          <IconLogo />
        </div>
        <div class="font-medium text-xl text-black space-y-5">
          <div @click="scrollTo('faq')">
            {{ $t('help') }}
          </div>
          <div @click="contact">
            {{ $t('contacts') }}
          </div>
          <div class="flex gap-1" @click="openLogin">
            <IconUser />
            {{ $t('login') }}
          </div>
          <div class="flex w-full pt-10">
            <button
              class="font-medium text-white text-sm xl:text-base 2xl:text-lg bg-bluePrincipal px-5 py-2 lg:px-6 lg:py-2.5 2xl:px-7 2xl:py-3.5 rounded-xl"
              @click="openAllProduct"
            >
              {{ $t('contactUs') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="goTop bottom-14 md:bottom-24 right-8 md:right-16 fixed shadow-xl rounded-full"
      @click.stop="scrollTo('header')"
    >
      <IconGoUp alt="IconGoUp" class="rounded-full" />
    </div>
  </main>
</template>

<style scoped></style>
