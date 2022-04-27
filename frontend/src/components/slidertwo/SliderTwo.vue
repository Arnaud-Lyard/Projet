<template>

    <div class="container">

        <div class="title">
            <h2>Mardi</h2>
        </div>

        <div class="slider" v-if="getstatus ==='success'">

            <button @click="decrementcarrousselTwoItems" type="button" class="btn btn-left">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
            </button> 

                <div class="container-slides">
                        <div v-if="carrousselTwoItems[0]" class="content">
                            <img class="img-slider" :src="carrousselTwoItems[0].Illustration" :alt="carrousselTwoItems[0].name">
                        </div>
                </div>
            <button @click="incrementcarrousselTwoItems" type="button" class="btn btn-right">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
            </button>

        </div>

            <div v-else class="loader">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        <div class="description">
            <div v-if="carrousselTwoItems[0]" class="description-content">
                <div class="description-content-name">
                    <h3>{{carrousselTwoItems[0].name}}</h3>
                </div>
                <div class="description-content-period">
                    {{carrousselTwoItems[0].Period}}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SliderTwo',
    computed: {
    ...mapGetters("carrousselTwo", ["carrousselTwoItems"]),
    ...mapGetters("carrousselTwo", ["getstatus"]),
  },
  
    methods: {
        ...mapActions("carrousselTwo", ["incrementcarrousselTwoItems"]),
        ...mapActions("carrousselTwo", ["decrementcarrousselTwoItems"]),
    }
}
</script>

<style scoped src="./SliderTwo.css">

</style>