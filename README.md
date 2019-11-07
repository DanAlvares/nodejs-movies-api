# NodeJS public-movies-api
A very simple REST API with several endpoints that provides movie details for over 3000 movies. Built with NodeJS, as a resource for test applications.

## Endpoints

#### GET /movies/
  Returns all 3365 movies from the database  
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/ ```

#### GET /movies/{MOVIE_ID}
  Returns movie details by id 
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/56918f5e24de1e0ce2dfccc3 ```
  
#### GET /movies/title/{MOVIE_TITLE}
  Returns a list of movies containing the {MOVIE_TITLE} specified.  
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/title/star wars ```

#### GET /movies/genre/{GENRE}
  Returns a list of {GENRE} movies.  
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/genre/comedy ```

#### GET /movies/year/{RELEASE_YEAR}
  Returns a list of movies released in {RELEASE_YEAR}.  
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/year/1985 ```

#### GET /movies/actor/{ACTOR_NAME}
  Returns a list of movies starring {ACTOR_NAME}.  
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/actor/tom cruise ```

#### GET /movies/director/{DIRECTOR_NAME}
  Returns a list of movies directed by {DIRECTOR_NAME}.  
  *Example:* ``` https://nodejs-movies.herokuapp.com/api/movies/director/james cameron ```
