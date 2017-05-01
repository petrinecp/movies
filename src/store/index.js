import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource';

Vue.use(Vuex)
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    movies: []
  },
  actions: {
    LOAD_MOVIE_LIST: function ({ commit }) {
      Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=6368ed4f05d7b22eb9ad63bc1c559b63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {
        let results = response.body.results;
        results.forEach((movie) => {
          movie.poster_path = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path;
        });
        // get body data
        commit('SET_MOVIE_LIST', { list: results })
      }, response => {
        // error callback
      });
    }
  },
  mutations: {
    SET_MOVIE_LIST: (state, { list }) => {
      state.movies = list
    }
  },
  getters: {
    openMovies: state => {
      return state.movies.filter(project => !project.completed)
    }
  }
})

export default store