import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";


const elementStyles = {
  height: "40px",
  width: '100%', // Adjusted to fill the column
  color: "#6083a3",
  borderRadius: "8px",
  border: "2px solid #6083a3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent", // To make the button blend with the background
  cursor: "pointer", // To change cursor on hover
};

const GenreList = [
  "Math",
  "Music",
  "Science",
  "History",
  "Physics",
  "Biology",
  "Art",
  "Humanity",
  "Novel",
  "Food",
  "Culture",
  "Business",
  "Marketing",
  "Economic",

];
function GenresTable() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };


  const genreRows = [];
  for (let i = 0; i < GenreList.length; i += 2) {
    genreRows.push(
      <Row key={i} className="m-3">
        <Col xs={6} className="font-weight-bold">
          <button onClick={() => handleNavigate('/login')} style={elementStyles}>{GenreList[i]}</button>
        </Col>
        {i + 1 < GenreList.length && (
          <Col xs={6} className="font-weight-bold">
            <button onClick={() => handleNavigate('/login')} style={elementStyles}>{GenreList[i + 1]}</button>
          </Col>
        )}
      </Row>
    );
  }

  return (
    <div className="m-auto" style={{ height: '25rem' }}>
      <Container className="justify-content-center mt-2">
        {genreRows}
      </Container>
    </div>
  );
}

export default GenresTable;
