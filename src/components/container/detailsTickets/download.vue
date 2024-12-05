<script>
import iconDownload from '@/assets/icons/iconDownload.vue'

export default {
  name: 'the-webTicket',
  components: { iconDownload },
  data() {
    return {
      isExpanded: false, // État pour gérer l'affichage
      isExpanded2: false, // État pour gérer l'affichage
      isExpanded3: false // État pour gérer l'affichage
    }
  },
  methods: {}
}
</script>

<style scoped></style>

<template>
  <!-- Titre principal et barre de recherche -->
  <div class="flex w-full md:h-16 h-[84px] bg-white items-center justify-center gap-3 p-3">
    <div
      class="md:w-56 w-44 md:h-9 h-12 border-[#FF6B00] border font-meduim text-xs text-[#FF6B00] flex items-center justify-center rounded-full"
    >
      {{ $t('backHome') }}
    </div>
    <div
      class="md:w-56 w-44 md:h-9 h-12 bg-[#FF6B00] font-meduim text-sm text-white flex items-center justify-center rounded-full gap-5"
    >
      {{ $t('down') }}
      <iconDownload icon-name="iconSearch" />
    </div>
  </div>
</template>
