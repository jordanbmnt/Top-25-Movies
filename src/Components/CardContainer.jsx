import "../Style/style.css";
import { Container } from "@mui/material";
import CardList from "./CardList";

export default function CardContainer() {
  const movieDb = [
    ["Aquaman", "Avatar", "Avengers", "AvengersI", "Beauty"],
    ["CaptainA", "CaptainM", "EndGame", "Frozen", "F7"],
    ["Incredibles2", "IronMan", "JurassicW", "JurassicWF", "StarWarsE"],
    ["TheAvengers", "FF", "LionKing", "Titanic", "Transformers"],
    ["BlackP", "HarryPotter", "StarWarsT", "Aquaman", "Avengers"],
  ];
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
        <CardList movies={list} />
      ))}
    </Container>
  );
}
