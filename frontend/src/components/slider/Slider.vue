<template>
    <div class="slider">

        <button @click="decrementImageItems" type="button" class="btn btn-left">
            <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
        </button> 

            <div class="container-slides" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">

                <div v-if="imageItems[0]" class="content">
                <img class="img-slider" :src="imageItems[0].Illustration" :alt="imageItems[0].name">
                </div>

            </div>
        <button @click="incrementImageItems" type="button" class="btn btn-right">
            <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
        </button>
                              


        <!-- <button @click="prev" type="button" class="btn btn-left">
            <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
        </button> 
        <div class="container-slides" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
                <img class="img-slider" src="../../assets/1.jpg" alt="">
                <img class="img-slider" src="../../assets/2.jpg" alt="">
                <img class="img-slider" src="../../assets/3.jpg" alt="">
        </div>
         <button @click="next" type="button" class="btn btn-right">
            <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
        </button> -->
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name: 'Slider',
    data(){
        return {
            index: 0,
            transition: "transform 0.3s ease"
        }
    },
    computed: {
    ...mapGetters(['imageItems']),
  },
  mounted() {
    this.$store.dispatch('getImageItems');
  },
  created() {
  },
    methods: {
        ...mapActions(['incrementImageItems']),
        ...mapActions(['decrementImageItems']),
        next() {
            if(this.index === -1000) {
                this.transition = "none";
                this.index = 0;
            }else {
                this.transition = "transform 0.3s ease"
                this.index-= 500;
            }
        },
        prev() {
            if(this.index === 0){
                this.transition = "none";
                this.index = -1000;
            }else {
                this.transition = "transform 0.3s ease";
                this.index += 500;
            }
        },
    },
}

</script>

<style scoped src="./Slider.css">

</style>