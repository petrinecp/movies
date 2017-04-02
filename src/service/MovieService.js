import Vue from 'vue';
import VueResource from 'vue-resource';

export default class {

  constructor() {

  }

  getMovies() {
    Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=6368ed4f05d7b22eb9ad63bc1c559b63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {

      // get body data
      this.movies = response.body.results;

    }, response => {
      // error callback
    });
  }
}