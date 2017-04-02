import styles from './app.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

var app = new Vue({
  el: '#main',
  data: {
    // The layout mode, possible values are "grid" or "list".
    layout: 'grid',
    movies: [],
    articles: [{
      "title": "What You Need To Know About CSS Variables",
      "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5z4Bj0zUupF7z4VW0REAdso1uxz.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-150x150.jpg"
      }
    },
    {
      "title": "Freebie: 4 Great Looking Pricing Tables",
      "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gri0DDxsERr6B2sOR1fGLxLpSLx.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
      "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
      }
    },
    {
      "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
      "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
      "image": {
        "large": "https://image.tmdb.org/t/p/w185_and_h278_bestv2/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
        "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-150x150.png"
      }
    }]
  },
  created: function () {
    Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=6368ed4f05d7b22eb9ad63bc1c559b63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {
      let results = response.body.results;
      results.forEach((movie) => {
        movie.poster_path = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path;
      });
      // get body data
      this.movies = results;

    }, response => {
      // error callback
    });
  }
});