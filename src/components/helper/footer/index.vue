<template>
  <div class="bg-[#141724] lg:px-28 xl:px-40 2xl:px-52 text-white pt-10 2xl:pt-28">
    <div class="py-20 xl:-mb-5 2xl:-mb-5 flex flex-col md:flex-row md:justify-between items-center space-y-10 md:space-y-0 px-2 lg:px-0">
      <div class="space-y-5 flex flex-col items-start lg:w-1/4 w-full">
        <div class="2xl:w-72 2xl:h-20">
          <IconVeep class="2xl:w-72 2xl:h-20" />
        </div>
        <div class="flex gap-3 2xl:gap-3 w-full">
          <div class="w-10 h-20">
            <iconInsta class="w-12 h-12" />
          </div>
          <div class="w-10 h-20">
            <iconFacebook class="w-12 h-12" />
          </div>
          <div class="w-10 h-20">
            <inconTweeter class="w-12 h-12" />
          </div>
        </div>
      </div>

      <div class="space-y-5 w-full lg:w-1/4 2xl:text-2xl flex-col">
        <p>Comment ça marche ?</p>
        <p>Centre d’aide</p>
        <p>À propos</p>
      </div>

      <div class="space-y-5 w-full lg:w-1/4 2xl:text-2xl">
        <p>Conditions d’utilisation</p>
        <p>Politique de confidentialité</p>
        <p>CGU et mentions légales</p>
      </div>

      <div class="flex gap-2 2xl:gap-5 items-center justify-center md:justify-start w-full lg:w-1/4 2xl:w-1/3">
        <img :src="IMGPlaystore" alt="Play Store" class="w-1/2">
        <img :src="IMGAppStore" alt="App Store" class="w-1/2">
      </div>
    </div>

    <div class=" hidden md:flex justify-center md:justify-end w-4/5 mx-auto">
      <img :src="IMGFooter" alt="IMGFooter" class="w-full md:w-auto">
    </div>
  </div>
</template>

<script>
import IconVeep from '@/assets/icons/iconVeep.vue';
import IMGFooter from '@/assets/images/IMGFooter.webp';
import iconInsta from '@/assets/icons/iconInsta.vue';
import iconFacebook from '@/assets/icons/iconFacebook.vue';
import inconTweeter from '@/assets/icons/inconTweeter.vue';
import IMGPlaystore from '@/assets/images/IMGplaystore.webp';
import IMGAppStore from '@/assets/images/IMGAppStore.webp';

export default {
  name: 'the-Footer',
  components: { IconVeep, iconInsta, iconFacebook, inconTweeter },
  data() {
    return {
      IMGFooter,
      IMGPlaystore,
      IMGAppStore,
    };
  },
};
</script>
