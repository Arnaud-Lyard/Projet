<template>
    <div class="slider">
        <button @click="prev" type="button" class="btn btn-left">
            <font-awesome-icon class="icone" :icon="['fas', 'chevron-left']" />
        </button> 
        <div class="container-slides" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
            <img src="../../assets/1.jpg" class="img-slider">
            <img src="../../assets/2.jpg" class="img-slider">
            <img src="../../assets/3.jpg" class="img-slider">
        </div>
         <button @click="next" type="button" class="btn btn-right">
            <font-awesome-icon class="icone" :icon="['fas', 'chevron-right']" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data: function(){
        return {
            index: 0,
            transition: "transform 0.3s ease"
        }
    },
    methods: {
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
        }
    }
}

</script>

<style scoped src="./Slider.css">

</style>