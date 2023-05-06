import { Link, Typography, Button } from "@mui/material";
import { FooterComponent } from "../components/Footer.component";
import { green } from '@mui/material/colors';

interface InitialProps {
    loadData: () => void,
}

export function DefaultView(props: InitialProps) {
    return(
        <>
            <div className="center-view">
                <img className="avatar-image" src={'./medium.png'} width={60} alt={'iMedium'}/>
                <Typography variant="h2" component="h2" style={{fontWeight: "bold" }}>
                    iMedium
                </Typography>
                <br />
                <Typography style={{ width: "400px", fontWeight: "light" }}>
                    Visit any <Link color="inherit" target="_blank" href="https://medium.com/@tamaghna">
                    author's profile page</Link> on
                    Medium and click a button to see their detailed statistics
                </Typography>
                <div style={{ marginTop: "20px" }} >
                    <Button size="large" variant="contained"
                            sx={{ backgroundColor: green['500'], shadow: "0" }}
                            onClick={ props.loadData }>
                        Load profile data
                    </Button>
                </div>
            </div>
            <div style={{ marginTop: "-30px" }} >
                <FooterComponent />
            </div>
        </>
    )
}
