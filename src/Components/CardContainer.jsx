import "../Style/style.css";
import { Container } from "@mui/material";
import CardList from "./CardList";
import movieList from "../Database/movieList";

export default function CardContainer() {
  const movieDb = movieList();
  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      className='card-list-container'
    >
      {movieDb.map((list) => (
        <CardList header={list.header} movies={list.movies} />
      ))}
    </Container>
  );
}
