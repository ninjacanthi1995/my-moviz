import { Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, Button, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export function Movie(props) {
  const [watchMovie, setWatchMovie] = useState(false);
  const [countWatchMovie, setCountWatchMovie] = useState(0);
  const [myRatingMovie, setMyRatingMovie] = useState(0);
  const [globalRating, setGlobalRating] = useState(props.globalRating);
  const [countVote, setCountVote] = useState(props.globalCountRating);
  const [isRated, setIsRated] = useState(false);

  const handleLikeClick = () => {
    !props.isLiked
      ? props.handleClickAddMovieParent(props.movieName, props.movieImg)
      : props.handleClickDeleteMovieParent(props.movieName);
  };

  const handleWatchClick = () => {
    setWatchMovie(true);
    setCountWatchMovie(countWatchMovie + 1);
  };

  const handlePlus1Click = () => {
    if (myRatingMovie !== 10) {
      setMyRatingMovie(myRatingMovie + 1);
      if (!isRated) {
        setGlobalRating((globalRating * countVote + 1) / (countVote + 1));
        setCountVote(countVote + 1);
      } else {
        setGlobalRating((globalRating * countVote + 1) / countVote);
      }
      setIsRated(true);
    }
  };

  const handleMinus1Click = () => {
    if (myRatingMovie !== 0) {
      setMyRatingMovie(myRatingMovie - 1);
      if (!isRated) {
        setGlobalRating((globalRating * countVote - 1) / (countVote + 1));
        setCountVote(countVote + 1);
      } else {
        setGlobalRating((globalRating * countVote - 1) / countVote);
      }
      setIsRated(true);
    }
  };

  const handleStarClick = (index) => {
    if (!isRated) {
      setGlobalRating(
        (globalRating * countVote - myRatingMovie + index) / (countVote + 1)
      );
      setCountVote(countVote + 1);
    } else {
      setGlobalRating(
        (globalRating * countVote - myRatingMovie + index) / countVote
      );
    }
    setIsRated(true);
    setMyRatingMovie(index);
  };

  let monAvisStars = Array(10)
    .fill(0)
    .map((elem, index) => (
      <FontAwesomeIcon
        onClick={() => handleStarClick(index + 1)}
        icon={faStar}
      />
    ));
  for (let i = 0; i < myRatingMovie; i++) {
    monAvisStars[i] = (
      <FontAwesomeIcon
        onClick={() => handleStarClick(i + 1)}
        style={{ color: "#f1c40f" }}
        icon={faStar}
      />
    );
  }

  let globalAvisStars = Array(10)
    .fill(
      <FontAwesomeIcon style={{ color: "#f1c40f" }} icon={faStar} />,
      0,
      Math.round(globalRating) - 1
    )
    .fill(<FontAwesomeIcon icon={faStar} />, Math.round(globalRating));

  return (
    <Col xs="12" lg="6" xl="4" className="mb-4">
      <Card>
        <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
        <CardBody>
          <CardText>
            Like{" "}
            <FontAwesomeIcon
              onClick={handleLikeClick}
              icon={faHeart}
              style={{
                cursor: "pointer",
                color: props.isLiked ? "#e74c3c" : "",
              }}
            />
          </CardText>
          <CardText>
            Nombre de vues{" "}
            <FontAwesomeIcon
              onClick={handleWatchClick}
              icon={faVideo}
              style={{ cursor: "pointer", color: watchMovie ? "#e74c3c" : "" }}
            />{" "}
            <Badge color="primary" style={{ backgroundColor: "gray" }}>
              {countWatchMovie}
            </Badge>
          </CardText>
          <CardText>
            Mon avis {monAvisStars}
            <Button onClick={handleMinus1Click}>-1</Button>
            <Button onClick={handlePlus1Click}>+1</Button>
          </CardText>
          <CardText>
            Avis Global {globalAvisStars} ({countVote})
          </CardText>
          <CardText>{props.movieName}</CardText>
          <CardText>{props.movieDesc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
