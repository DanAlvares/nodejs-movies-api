const connect = require('../connect').connect;
const ObjectId = require('mongodb').ObjectID;

module.exports = {
  searchAll: (req, res) => {
      connect("movies", {}, res);
  },
  searchDetails: (req, res) => {
      connect("movieDetails", {}, res);
  },
  searchById: (req, res) => {
      let id = decodeURIComponent(req.params.id);
      let query = {_id: ObjectId(id) };

      connect("movieDetails", query, res);
  },
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
