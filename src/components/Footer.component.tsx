import { Chip, Grid, Link, Typography } from "@mui/material";
import { ContactLinkComponent } from "./ContactLink.component";

export function FooterComponent() {
    return (
        <Grid container item justifyContent={"space-around"}>
            <Chip variant="outlined" label={
                <Typography fontSize={12} style={{fontWeight: "bold", color: "#fff" }}>
                    <ContactLinkComponent />
                </Typography>
            } />
            <Chip label={
                <Typography fontSize={12} color={'#fff'}>
                    Crafted with ❤️ in iMerit
                </Typography>
            } />
            <Chip variant="outlined" label={
                <Typography style={{fontWeight: "bold", color: "#fff" }} fontSize={12}>
                    <Link href="https://medium.com/@tamaghna/c35433ec43ac" target="_blank" color="inherit">
                        View Credits
                    </Link>
                </Typography>
            } />
        </Grid>
    )
}
