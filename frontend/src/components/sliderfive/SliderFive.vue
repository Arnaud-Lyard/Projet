<template>

    <div class="container">

        <div class="title">
            <h2>Vendredi</h2>
        </div>

        <div class="slider">

            <button @click="decrementcarrousselFiveItems" type="button" class="btn btn-left">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
            </button> 

                <div class="container-slides">
                        <div v-if="carrousselFiveItems[0]" class="content">
                            <img class="img-slider" :src="carrousselFiveItems[0].Illustration" :alt="carrousselFiveItems[0].name">
                        </div>
                </div>
            <button @click="incrementcarrousselFiveItems" type="button" class="btn btn-right">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
            </button>

        </div>

        <div class="description">
            <div v-if="carrousselFiveItems[0]" class="description-content">
                <div class="description-content-name">
                    <h3>{{carrousselFiveItems[0].name}}</h3>
                </div>
                <div class="description-content-period">
                    {{carrousselFiveItems[0].Period}}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SliderFive',
    computed: {
    ...mapGetters("carrousselFive", ["carrousselFiveItems"]),
  },
  
    methods: {
        ...mapActions("carrousselFive", ["incrementcarrousselFiveItems"]),
        ...mapActions("carrousselFive", ["decrementcarrousselFiveItems"]),        
    }
}


</script>

<style scoped src="./SliderFive.css">

</style>