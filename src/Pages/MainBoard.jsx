import '../Style/style.css'
import { Box, Container } from "@mui/material";

export default function MainBoard() {
  return (
    <Container sx={{padding: '0px', margin: '0px', display: 'flex', flexFlow: 'column', width: '100vw'}}>
      <Box className="banner" sx={{backgroundColor: 'orange', width: '100vw', height: '26vh'}} />
    </Container>
  );
}
