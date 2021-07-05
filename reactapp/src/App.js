import "./App.css";
import { Movie } from "./components/Movie";

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import { useEffect, useState } from "react";

function App() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [moviesWishList, setMoviesWishList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const loadWishList = async () => {
      const moviesWLRaw = await fetch('/wishlist-movie');
      const moviesWL = await moviesWLRaw.json();
      setMoviesWishList(moviesWL.map(movie => ({ movieName: movie.movieName, movieImg: movie.movieImg })));
    }
    loadWishList();
  }, [])

  useEffect(() => {
    const loadFilms = async () => {
      const moviesRaw = await fetch("/new-movies");
      const movies = await moviesRaw.json();
      setMoviesList(
        movies.results.map((movie) => (
          <Movie
            movieName={movie.original_title}
            movieDesc={movie.overview.length > 80 ? movie.overview.slice(0,80) + '...' : movie.overview}
            movieImg={movie.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path : 'badboy3.jpg'}
            globalRating={movie.vote_avarage}
            globalCountRating={movie.vote_count}
            handleClickAddMovieParent={handleClickAddMovie}
            handleClickDeleteMovieParent={handleClickDeleteMovie}
            isLiked={moviesWishList
              .map((film) => film.movieName)
              .includes(movie.original_title)}
          />
        ))
      );
    };
    loadFilms();
  }, [moviesWishList]);

  const handleClickAddMovie = async (movieName, movieImg) => {
    setMoviesWishList([...moviesWishList, { movieName, movieImg }]);
    await fetch('/wishlist-movie', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `movieName=${movieName.replace('&', '%26')}&movieImg=${movieImg}`
    });
  };

  const handleClickDeleteMovie = async (movieName) => {
    setMoviesWishList(
      moviesWishList.filter((movie) => movie.movieName !== movieName)
    );
    await fetch('/wishlist-movie/' + movieName, {
      method: 'DELETE'
    });
  };

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <Container className="d-flex flex-column">
      <Row className="mt-3 mb-3">
        <Col>
          <Nav className="text-white gap-3">
            <NavItem>
              <img src="logo.png" alt="" />
            </NavItem>
            <NavItem>Last Releases</NavItem>
            <NavItem>
              <Button id="Popover1" type="button">
                {moviesWishList.length} films
              </Button>
              <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={toggle}
              >
                <PopoverHeader>Wish List</PopoverHeader>
                <PopoverBody>
                  <ListGroup>
                    {moviesWishList.map((movie) => (
                      <ListGroupItem
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClickDeleteMovie(movie.movieName)}
                      >
                        <img src={movie.movieImg} className="w-25" alt="" />
                        {movie.movieName}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </PopoverBody>
              </Popover>
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <Row>{moviesList}</Row>
    </Container>
  );
}

export default App;
