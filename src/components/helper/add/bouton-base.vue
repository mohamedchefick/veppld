<script setup>
import { ref } from 'vue'
// import { SpringSpinner } from 'epic-spinners'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  weight: {
    type: String,
    default: '700'
  },
  size: {
    type: String,
    default: '24px'
  },
  color: {
    type: String,
    default: '#fff'
  },
  background: {
    type: String,
    default: '#3D7ED1'
  },
  backgroundHover: {
    type: String,
    default: '#014b7b'
  },
  radius: {
    type: String,
    default: '8px'
  },
  charge: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['oga', 'info'])

function continuer() {
  if (!props.charge) {
    emit('oga', true)
    emit('info', props.label)
  } else {
    this.$toast.warning('Veuillez patienter')
  }
}

const isHovered = ref(false)
function handleMouseOver() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
}
</script>

<template>
  <main>
    <div class="index-bouton">
      <div
        class="bouton w-full flex items-center text-center justify-center px-2 2xl:px-4 py-3 xl:py-4 cursor-pointer"
        :style="{
          'background-color': isHovered ? backgroundHover : background,
          'border-radius': radius
        }"
        @click.stop="continuer"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      >
        <span
          v-if="!charge"
          :style="{ 'font-weight': weight, 'font-size': size, color: color }"
          class="text font-urbanist text-lg lg:text-lg 2xl:text-2xl text-center"
          >{{ label }}</span
        >
        <!-- <spring-spinner v-if="charge" :animation-duration="3000" :size="30" :color="spinColor" /> -->
        
      </div>
    </div>
  </main>
</template>

<style scoped>
.bouton .IconArrowLeft {
  transition: transform 0.5s ease-in-out;
}

.bouton:hover .IconArrowLeft {
  transform: translateX(0);
  opacity: 1;
  display: flex;
}

.IconArrowLeft {
  transform: translateX(15px);
  opacity: 0;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  display: none;
}

.bouton:hover .text {
  transform: translateX(-10px);
  /* opacity: 0; */
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
</style>
