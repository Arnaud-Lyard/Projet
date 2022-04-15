<template>
    <div class="image-box">
          <h1>Boutique</h1>
        <div class="image-container">
            <!-- <article class="image-card" v-for="imageItem in imageItems" :key="imageItem.id"> -->
              <!-- <ImageDetail :imageItem="imageItem"/> -->
            <article class="image-card">
              <Slider />
            </article>
            <div>
              
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import ImageDetail from '../imagedetail/ImageDetail'
import Slider from '../slider/Slider.vue';

export default {
  name: "Image",
  components: {
    // ImageDetail:ImageDetail,
    Slider: Slider,
  },
  computed: {
    ...mapGetters([
      'imageItems'
    ])
  },
  created() {
    this.$store.dispatch('getImageItems');
  }
};

</script>

<style>

</style>