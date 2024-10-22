<script setup>
import IconLogoWhite from '@/assets/icons/IconLogoWhite.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()
function scrollTo(val) {
  if (route.currentRoute.value.path !== '/') {
    router.push({ path: '/', hash: `#${val}` }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(val)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    })
  } else {
    const element = document.getElementById(val)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const router = useRouter()
function openLink(val) {
  window.open(val, '_blank')
  router.push('/' + val)
}
</script>

<template>
  <main>
    <div
      class="bg-blue-900 mx-3 px-5 md:px-20 lg:px-20 2xl:px-32 pt-16 pb-10 rounded-t-3xl lg:rounded-t-[3.8rem]"
    >
      <!-- SECTION LIENS -->
      <div class="lg:flex gap-40 2xl:gap-72 space-y-6 lg:space-y-0">
        <div class="cursor-pointer" @click="openHome">
          <IconLogoWhite />
        </div>
      </div>

      <!-- SECTION TOUS DROITS -->
      <div
        class="w-full flex items-center justify-center mt-10 pt-6 gap-1 md:gap-8 border-t border-[#255571]"
      >
        <div class="w-full lg:flex items-center justify-between space-y-6 lg:space-y-0">
          <div class="font-medium text-sm text-[#ECFDFF]">
            {{ '© ' + new Date().getFullYear() + ' 41devs. ' + $t('allRightReserved') }}
          </div>

          <div class="lg:flex items-center gap-4 2xl:gap-10 text-[#EBF4F6] space-y-3 lg:space-y-0">
            <div @click="openLink('cagnottes')" class="font-semibold text-sm cursor-pointer">
              {{ $t('confidentiality') }}
            </div>
            <div class="font-semibold text-sm hidden lg:flex">.</div>
            <div @click="openLink('cagnottes')" class="font-semibold text-sm cursor-pointer">
              {{ $t('cgu') }}
            </div>
            <div class="font-semibold text-sm hidden lg:flex">.</div>
            <div @click="openLink('cagnottes')" class="font-semibold text-sm cursor-pointer">
              {{ $t('mentions') }}
            </div>
            <div class="font-semibold text-sm hidden lg:flex">.</div>
            <div @click="openLink('cagnottes')" class="font-semibold text-sm cursor-pointer">
              {{ $t('theCompany') }}
            </div>
          </div>

          <div
            class="w-32 flex items-center gap-1.5 px-3 py-2 font-semibold text-sm text-black bg-white rounded-full border border-[#CBD1D7A6] cursor-pointer"
          >
            <IconWorld />
            Français
            <IconChevronDown />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.devs {
  background-color: rgba(2, 105, 173, 0.08);
}
</style>
