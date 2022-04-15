<template>
    <div class="image-box">
        <div class="image-container">
          <h1>{{imageItem.name}}</h1>
            <article class="image-card">
                    <img class="image-illustration" :src="imageItem.Illustration" :alt="imageItem.name"/>
            </article>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "ImageDetail",
  props: ["imageItem"],
//   methods: {
//     ...mapActions(["addCartItem"]),
//   },
};
</script>

<style scoped src="./ImageDetail.css">
</style>