<template>

    <div class="container">

        <div class="title">
            <h2>Mercredi</h2>
        </div>

        <div class="slider" v-if="getstatus ==='success'">

            <button @click="decrementcarrousselThreeItems" type="button" class="btn btn-left">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
            </button> 

                <div class="container-slides">
                        <div v-if="carrousselThreeItems[0]" class="content">
                            <img class="img-slider" :src="carrousselThreeItems[0].Illustration" :alt="carrousselThreeItems[0].name">
                        </div>
                </div>
            <button @click="incrementcarrousselThreeItems" type="button" class="btn btn-right">
                <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
            </button>

        </div>

            <div v-else class="loader">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        <div class="description">
            <div v-if="carrousselThreeItems[0]" class="description-content">
                <div class="description-content-name">
                    <h3>{{carrousselThreeItems[0].name}}</h3>
                </div>
                <div class="description-content-period">
                    {{carrousselThreeItems[0].Period}}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SliderThree',
    computed: {
    ...mapGetters("carrousselThree", ["carrousselThreeItems"]),
    ...mapGetters("carrousselThree", ["getstatus"]),
  },
  
    methods: {
        ...mapActions("carrousselThree", ["incrementcarrousselThreeItems"]),
        ...mapActions("carrousselThree", ["decrementcarrousselThreeItems"]),
    }
}
</script>

<style scoped src="./SliderThree.css">

</style>