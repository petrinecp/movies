<template>
  <div class="grid">
    <div class="grid-item" v-for="i in items.slice(0,6)">
			<a :href="i.url" target="_blank"><img :src="i.poster_path" />
        <div class="tooltip">
          <h3 class="grid-item-title">{{i.title}}</h3>
        </div>
      </a>
      <div class="rating imdb">
        <span data-title="IMDB Rating">★ 6.5</span>
        <img src="../assets/imdb.png" />
      </div>
      <div class="rating csfd">
        <img src="../assets/imdb.png" />
        <span data-title="CSFD Rating">73 %</span>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  props: ['items']
}
</script>

<style scoped>
.grid {
	width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

div.grid a:hover div {
  visibility: visible;
}

.grid-item {
	margin: 0 10px 0 2px;
  width: 185px;
  height: 278px;
  overflow: hidden;
  position: relative;
}

.grid-item:hover .tooltip {
  transform: translate3d(0, 0, 0);
}

.grid-item:hover .grid-item-title {
  transform: translate3d(0, 0, 0);
}

.grid-item-title {
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  transition-delay: 0.05s;
  transition: transform 0.35s;
  transform: translate3d(0, 200%, 0);
}

div.grid div img{
	border:none;
}

.rating {
    position: absolute;
    top: 10px;
    right: -46px;
    z-index: 100;
    display: inline-block;
    background-color: #fccd3d;
    color: #000;
    padding: 1px 6px 2px 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease;
}

.rating.csfd {
  right: inherit;
  left: -46px;
}

.rating.imdb:hover {
  right: 0;
}

.rating.csfd:hover {
  right: inherit;
  left: 0px;
}

.rating img {
  vertical-align: bottom;
}

.tooltip {
  top: auto;
  bottom: 0;
  padding: 1em;
  height: auto;
  width: 100%;
  background: #252d31;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  position: absolute;
  color: #fff;
  /*visibility: hidden;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  top: -40px;
  background-color: rgba(255,255,255,0.9);
  transition: transform 0.35s;
  transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 0, 0);*/
}
</style>