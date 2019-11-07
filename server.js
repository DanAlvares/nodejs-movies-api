const express = require('express');
const moviesCtrl = require('./controllers/moviesController');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3030;

require('dotenv').config({ path: '.env' });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);

    next();
});

// Routes
router.route('/movies/').get(moviesCtrl.searchAll);
router.route('/movies/details').get(moviesCtrl.searchDetails);
router.route('/movies/:id').get(moviesCtrl.searchById);
router.route('/movies/title/:title').get(moviesCtrl.searchByTitle);
router.route('/movies/year/:year').get(moviesCtrl.searchByYear);
router.route('/movies/actor/:actor').get(moviesCtrl.searchByActor);
router.route('/movies/genre/:genre').get(moviesCtrl.searchByGenre);
router.route('/movies/director/:director').get(moviesCtrl.searchByDirector);

app.use('/api', router)

app.listen(PORT, () => console.log('Running on port', PORT));
