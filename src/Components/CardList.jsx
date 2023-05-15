import { Paper } from '@mui/material'
 
export default function CardList() {
  return (
    <Paper
    elevation={3}
    sx={{ width: "calc(90vw/6 - 12px)", height: "103%", backgroundColor: "#1a232c", border: "1px solid #2a3741" }}
  />
  )
}