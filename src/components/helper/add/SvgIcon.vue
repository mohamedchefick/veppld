<template>
  <span v-html="modifiedIconSvg" class="icon" />
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '1em'
  },
  height: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor' // Utilise la couleur courante par défaut
  }
})

// Variables réactives
const iconSvg = ref('')
const modifiedIconSvg = ref('')

// Fonction pour charger et modifier le fichier SVG
const loadSvgIcon = async (name) => {
  try {
    const svg = await import(`@/assets/icons/${name}.svg?raw`)
    iconSvg.value = svg.default

    // Modifier les attributs du SVG directement
    const parser = new DOMParser()
    const doc = parser.parseFromString(iconSvg.value, 'image/svg+xml')
    const svgElement = doc.querySelector('svg')

    if (svgElement) {
      svgElement.setAttribute('width', props.width)
      svgElement.setAttribute('height', props.height)
      svgElement.setAttribute('fill', props.color) // Appliquer la couleur
      modifiedIconSvg.value = svgElement.outerHTML
    } else {
      console.error('Élément <svg> non trouvé dans le fichier.')
      modifiedIconSvg.value = '<!-- Icône non trouvée -->'
    }
  } catch (error) {
    console.error(`Erreur lors du chargement de l'icône: ${name}`, error)
    modifiedIconSvg.value = '<!-- Icône non trouvée -->'
  }
}

// Recharger l'icône si les props changent
watch(
  () => [props.iconName, props.width, props.height, props.color],
  () => {
    loadSvgIcon(props.iconName)
  },
  { immediate: true }
)
</script>

<style scoped>
.icon {
  display: inline-block;
}
</style>
