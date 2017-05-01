<template>
  <div class="grid">
    <div v-for="m in movies.slice(0,6)">
			<a :href="m.url" target="_blank"><img :src="m.poster_path" />
        <div class="tooltip">{{m.title}}</div>
      </a>
      <span data-title="IMDB Rating">★ 6.5</span>
		</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'drid',
  computed: mapState([
    'movies'
  ]),
  mounted: function () {
    this.$store.dispatch('LOAD_MOVIE_LIST')
  }
}
</script>

<style scoped>
div.grid{
	width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

div.grid a:hover div {
  visibility: visible;
}

div.grid div{
	padding: 2px;
  width: 185px;
  position: relative;
	/*float:left;*/
}

div.grid div img{
	/*width:280px;*/
	/*height:280px;*/
	border:none;
}

.grid span {
    position: absolute;
    top: 10px;
    right: 0px;
    z-index: 100;
    display: inline-block;
    background-color: #fccd3d;
    color: #000;
    padding: 1px 6px 2px 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}

.tooltip {
  visibility: hidden;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  top: -40px;
  background-color: rgba(255,255,255,0.9);
}
</style>