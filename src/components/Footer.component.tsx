import { Chip, Grid, Link, Typography } from "@mui/material";
import { EmailLinkComponent } from "./EmailLink.component";

export function FooterComponent() {
    return (
        <Grid container item justifyContent={"space-around"}>
            <Chip variant="outlined" label={
                <Typography fontSize={12} >Enjoy?
                    <Link href="https://medium.com/@tamaghna91/membership" target="_blank" color="inherit">
                        Buy medium mebership from referal</Link> to support!</Typography>
            } />
            <Chip variant="outlined" label={
                <Typography fontSize={12}><EmailLinkComponent /></Typography>
            } />
            <Chip variant="outlined" label={
                <Typography fontSize={12} >Made by Tamaghna Banerjee
                    (
                        <Link href="https://medium.com/@tamaghna/c35433ec43ac" target="_blank" color="inherit">
                            check out my article
                        </Link>
                    )
                </Typography>
            } />
        </Grid>
    )
}
