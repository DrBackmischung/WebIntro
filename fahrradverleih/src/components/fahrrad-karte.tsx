import { Button, Card, CardContent, CardMedia } from "@mui/material"

function FahrradCard() {

    const url = "https://swapi.dev/api/people/1";

    const alert = () => {
        fetch(url).then((res) => {
            res.json();
            console.log(res);
        });
    }

    return (
        <>
            <Card>
                <CardContent>
                    <p>Ich bin ein Fahrrad</p>
                    <Button
                        onClick={() => {
                            alert();
                        }}
                    >Ausleihen!</Button>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{
                        padding: "2%"
                    }}
                    src={"https://www.airtracks.de/media/image/bf/f3/48/28-zoll-herren-XXL-city-fahrrad-cityrad-52-56-60-65-cm-shimano-nexus-7-gang-CI2850-front_1280x1280@2x.jpg"}
                />
            </Card>
        </>
    )
}

export default FahrradCard
