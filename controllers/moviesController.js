const connect = require('../connect').connect;

module.exports = {
  searchTitles: (req, res) => {
      let title = decodeURIComponent(req.params.title);
      let query = {title: {'$regex': title, $options: 'i'}};

      connect("movies", query, res);
  },
  searchByTitle: (req, res) => {
      let title = decodeURIComponent(req.params.title);
      let query = {title: {'$regex': title, $options: 'i'}};

      connect("movieDetails", query, res);
  },
  searchByYear: (req, res) => {
      let query = {year: parseInt(req.params.year)};

      connect("movieDetails", query, res);
  },
  searchByActor: (req, res) => {
      let query = {actors: {'$regex': req.params.actor, $options: 'i'}};

      connect("movieDetails", query, res);
  },
  searchByGenre: (req, res) => {
      let query = {genres: {'$regex': req.params.genre, $options: 'i'}};

      connect("movieDetails", query, res);
  },
  searchByDirector: (req, res) => {
      let query = {director: {'$regex': req.params.director, $options: 'i'}};

      connect("movieDetails", query, res);
  }
}
