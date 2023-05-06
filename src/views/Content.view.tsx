import { Card, CardContent, FormGroup, FormControlLabel, Checkbox, Typography, Grid } from "@mui/material";
import { FooterComponent } from "../components/Footer.component";
import { AuthorModel } from "../models/Author.model";
import { BasicInfoComponent } from "../components/BasicInfo.component";
import { DataChartComponent } from "../components/DataChart.component";
import { useState } from "react";
import { DataStatsComponent } from "../components/DataStats.component";

interface ContentProps {
    author: AuthorModel
}

export function ContentView({ author }: ContentProps) {

    const [showResponses, setShowResponses] = useState<boolean>(true);
    const [showClaps, setShowClaps] = useState<boolean>(true);
    const [showClappers, setShowClappers] = useState<boolean>(true);

    return(
        <Grid container spacing={0.5} direction="column">
            <Grid container item>
                <Grid container spacing={0.5}>
                    <Grid item xs={5}>
                        <Card variant="outlined" sx={{height: "100%"}}>
                            <CardContent>
                                <BasicInfoComponent author={author} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={7}>
                        <Card variant="outlined" sx={{height: "100%"}}>
                            <CardContent>
                                <DataStatsComponent author={author} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Card variant="outlined">
                    <CardContent >
                        <Grid container>
                            <Grid item xs={9}>
                                <DataChartComponent posts={author.posts} showResponses={showResponses} showClaps={showClaps} showClappers={showClappers} />
                            </Grid>
                            <Grid item alignSelf={"center"} xs={3} pl={4}>
                                <FormGroup>
                                    <FormControlLabel control={
                                        <Checkbox defaultChecked onClick={() => setShowClaps(!showClaps)} />}
                                                  label={<Typography fontSize={14}>Claps 👏</Typography>} />
                                    <FormControlLabel control={
                                        <Checkbox defaultChecked
                                                  onClick={() => setShowResponses(!showResponses)} />}
                                                  label={<Typography fontSize={14}>Responses 💬</Typography>} />
                                    <FormControlLabel control={
                                        <Checkbox defaultChecked onClick={() => setShowClappers(!showClappers)} />}
                                                  label={<Typography fontSize={14}>Clappers 👤</Typography>} />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <FooterComponent />
        </Grid>
    )
}
