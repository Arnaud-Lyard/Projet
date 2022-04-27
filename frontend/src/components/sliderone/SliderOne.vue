<template>

    <div class="container">

        <div class="title">
            <h2>Lundi</h2>
        </div>

        <div class="slider" v-if="getstatus ==='success'">

            <button @click="decrementcarrousselOneItems" type="button" class="btn btn-left">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
            </button> 

                <div class="container-slides">
                        <div v-if="carrousselOneItems[0]" class="content">
                            <img class="img-slider" :src="carrousselOneItems[0].Illustration" :alt="carrousselOneItems[0].name">
                        </div>
                </div>
            <button @click="incrementcarrousselOneItems" type="button" class="btn btn-right">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
            </button>

        </div>

            <div v-else class="loader">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        <div class="description">
            <div v-if="carrousselOneItems[0]" class="description-content">
                <div class="description-content-name">
                    <h3>{{carrousselOneItems[0].name}}</h3>
                </div>
                <div class="description-content-period">
                    {{carrousselOneItems[0].Period}}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SliderOne',
    computed: {
    ...mapGetters("carrousselOne", ["carrousselOneItems"]),
    ...mapGetters("carrousselOne", ["getstatus"]),
  },
  
    methods: {
        ...mapActions("carrousselOne", ["incrementcarrousselOneItems"]),
        ...mapActions("carrousselOne", ["decrementcarrousselOneItems"]),
    }
}
</script>

<style scoped src="./SliderOne.css">

</style>