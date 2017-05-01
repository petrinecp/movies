<template>
  <div class="movie-list">
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">Čoskoro v kinách</h2>
      </div>
      <grid></grid>
    </div>
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">Populárne</h2>
      </div>
      <grid></grid>
    </div>
  </div>
</template>

<script>
import Grid from './Grid.vue'
import { mapState } from 'vuex'

export default {
  name: 'movies',
  components: {
    Grid
  }
}
</script>

<style scoped>
.section-header {
  height: 60px;
  line-height: 60px;
  background-color: #f0f0f0;
  padding-left: 20px;
  margin-bottom: 15px;
}

.section-title {
  float: left;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: normal;
  margin: 0;
  font-family: 'Oswald', sans-serif;
}
</style>