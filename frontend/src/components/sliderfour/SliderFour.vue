<template>

    <div class="container">

        <div class="title">
            <h2>Jeudi</h2>
        </div>

        <div class="slider" v-if="getstatus ==='success'">

            <button @click="decrementcarrousselFourItems" type="button" class="btn btn-left">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
            </button> 

                <div class="container-slides">
                        <div v-if="carrousselFourItems[0]" class="content">
                            <img class="img-slider" :src="carrousselFourItems[0].Illustration" :alt="carrousselFourItems[0].name">
                        </div>
                </div>
            <button @click="incrementcarrousselFourItems" type="button" class="btn btn-right">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
            </button>

        </div>

            <div v-else class="loader">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        <div class="description">
            <div v-if="carrousselFourItems[0]" class="description-content">
                <div class="description-content-name">
                    <h3>{{carrousselFourItems[0].name}}</h3>
                </div>
                <div class="description-content-period">
                    {{carrousselFourItems[0].Period}}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SliderFour',
    computed: {
    ...mapGetters("carrousselFour", ["carrousselFourItems"]),
    ...mapGetters("carrousselFour", ["getstatus"]),
  },
  
    methods: {
        ...mapActions("carrousselFour", ["incrementcarrousselFourItems"]),
        ...mapActions("carrousselFour", ["decrementcarrousselFourItems"]),
    }
}
</script>

<style scoped src="./SliderFour.css">

</style>