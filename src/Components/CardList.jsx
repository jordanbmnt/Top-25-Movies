import "../Style/style.css";
import { Paper, Typography } from "@mui/material";

export default function CardList(props) {
  return (
    <Paper
      elevation={3}
      className='card-list'
      sx={{
        backgroundColor: "#1a232c",
        border: "1px solid #2a3741",
        borderLeftWidth: "3px",
      }}
    >
      <Typography className='card-list-header'>Movie</Typography>
      {props.movies.map((movie) => (
        <Paper className='movie-card' elevation={3}>
          <Paper className='movie-card-film' id={movie} elevation={1} />
          <Typography sx={{ fontSize: "11px" }} className='card-list-footer'>
            {movie}
          </Typography>
        </Paper>
      ))}
    </Paper>
  );
}
