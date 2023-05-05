import { Card, CardContent, Grid } from "@mui/material";
import { FooterComponent } from "../components/Footer.component";
import { AuthorModel } from "../models/Author.model";

interface ContentProps {
    author: AuthorModel
}

export function ContentView({ author }: ContentProps) {

    return(
        <Grid container spacing={0.5} direction="column">
            <Grid container item>
                <Grid container spacing={0.5}>
                    <Grid item xs={5}>
                        <Card variant="outlined" sx={{height: "100%"}}>
                            <CardContent>
                                Somebody help me
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <FooterComponent />
        </Grid>
    )
}
