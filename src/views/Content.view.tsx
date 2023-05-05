import { Card, CardContent, Grid } from "@mui/material";
import { FooterComponent } from "../components/Footer.component";
import { AuthorModel } from "../models/Author.model";
import { BasicInfoComponent } from "../components/BasicInfo.component";

interface ContentProps {
    author: AuthorModel
}

export function ContentView({ author }: ContentProps) {
    return(
        <Grid container spacing={0.5} direction="column">
            <Grid container item>
                <Grid container spacing={0.5}>
                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{height: "100%"}}>
                            <CardContent>
                                <BasicInfoComponent author={author} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <FooterComponent />
        </Grid>
    )
}
