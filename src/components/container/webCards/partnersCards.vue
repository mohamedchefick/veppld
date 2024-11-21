<script>
import IMGpartners2 from '@/assets/images/img_partners2.webp'
import iconLdirection from '@/assets/icons/iconLdirection.vue'

export default {
  name: 'the-heroCards',
  components: { iconLdirection },
  data() {
    return { IMGpartners2 }
  }
}
</script>

<template>
  <div class="relative">
    <div class="lg:px-52 2xl:px-72 px-4">
      <div
        class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 md:gap-14 mt-10 md:mt-52"
      >
        <!-- Left Section -->
        <div class="w-full lg:w-[597.75px] h-auto md:my-auto">
          <div class="md:w-[657px] md:h-[120px] font-Baloo font-bold md:text-7xl text-4xl text-black  text-center md:text-start  h-[90px] ">
            Plus de
            <span class="text-[#FF6B00] font-bold">500 partenaires</span> locaux
          </div>
          <div class="font-normal text-lg lg:text-xl mt-10 lg:mt-16 md:text-start text-center">
            Accumulez des points chaque fois que vous payez dans nos restaurants et commerces
            partenaires. Chaque achat vous rapporte des points que vous pouvez échanger contre des
            récompenses et réductions.
          </div>
          <div class="h-auto mt-8 flex justify-center md:justify-start">
            <button
              class="bg-[#FF6B00] flex items-center justify-center gap-5 md:w-[343px] w-[253px] h-[66.67px] rounded-full"
            >
              <h1 class="text-white font-medium text-lg lg:text-2xl">Devenir partenaire</h1>
              <div
                class="flex justify-center bg-white w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center"
              >
                <iconLdirection class="w-4 h-4 lg:w-6 lg:h-6" />
              </div>
            </button>
          </div>
        </div>

        <!-- Right Section -->
        <div class="w-full lg:w-[523.5px] h-auto flex justify-center bg-white">
          <img
            :src="IMGpartners2"
            alt="IMGcard"
            class="w-full h-auto max-w-[523.5px] bg-slate-600"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.iconlove {
  z-index: 999;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Adjust heading font size for smaller screens */
  .font-Baloo {
    font-size: 3rem; /* Adjust as needed */
  }

  /* Adjust paragraph font size */
  .font-normal {
    font-size: 1rem; /* Adjust as needed */
  }

  /* Button font size */
  .font-medium {
    font-size: 1rem; /* Adjust as needed */
  }

  /* Add any other responsive styles */
}
</style>
