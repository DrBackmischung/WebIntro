import { Button, Container, Grid } from "@mui/material"
import FahrradCard from "../components/fahrrad-karte"

function Ausleihe() {

  return (
    <>
        <Container>
            <Grid container spacing={2} xs={12}>
                <Grid item xs={12} md={6} lg={4}>
                    <FahrradCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FahrradCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FahrradCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FahrradCard />
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default Ausleihe
