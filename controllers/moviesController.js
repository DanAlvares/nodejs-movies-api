const connect = require('../connect').connect;
const ignoreCase = (str) => new RegExp(["^", str, "$"].join(""), "i");

module.exports = {
  searchTitles: (req, res) => {
      let title = decodeURIComponent(req.params.title);
      let query = {};

      connect("movies", query, res);
  },
  searchByTitle: (req, res) => {
      let title = decodeURIComponent(req.params.title);
      let query = {title: ignoreCase(title)};

      connect("movieDetails", query, res);
  },
  searchByYear: (req, res) => {
      let query = {year: parseInt(req.params.year)};

      connect("movieDetails", query, res);
  },
  searchByActor: (req, res) => {
      let query = {actors: ignoreCase(req.params.actor)};

      connect("movieDetails", query, res);
  },
  searchByGenre: (req, res) => {
      let query = {genres: ignoreCase(req.params.genre)};

      connect("movieDetails", query, res);
  },
  searchByDirector: (req, res) => {
      let query = {director: ignoreCase(req.params.director)};

      connect("movieDetails", query, res);
  }
}
