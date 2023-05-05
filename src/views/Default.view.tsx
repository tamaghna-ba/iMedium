import { Link, Typography, Button } from "@mui/material";
import { FooterComponent } from "../components/Footer.component";
import SendIcon from '@mui/icons-material/Send';
import { green } from '@mui/material/colors';

interface InitialProps {
    loadData: () => void,
}

export function DefaultView(props: InitialProps) {
    return(
        <>
            <div className="center-view">
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
                            sx={{ backgroundColor: green['A700'] }}
                            onClick={ props.loadData } endIcon={<SendIcon />}>
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
