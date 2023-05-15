import "../Style/style.css";
import { Container } from "@mui/material";
import CardList from "./CardList";

export default function CardContainer() {
  return (
    <Container sx={{ display: "flex", flexFlow: 'row', alignItems: 'center', justifyContent: 'space-around' }} className='card-list-container'>
      <CardList/>
      <CardList/>
      <CardList/>
      <CardList/>
      <CardList/>
    </Container>
  );
}
