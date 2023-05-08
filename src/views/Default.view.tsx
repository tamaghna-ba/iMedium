import {Link, Typography, Button, FormControl, TextField, Alert, AlertTitle} from "@mui/material";
import { FooterComponent } from "../components/Footer.component";
import { green, pink } from '@mui/material/colors';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface InitialProps {
    loadData: (url: any) => void,
}

export function DefaultView(props: InitialProps) {

    const [url, setUrl] = useState('');
    const [error, setError] = useState<Boolean>(false);
    const handleChange = () => {
        if(url && url.search('medium.com') < 0 ||
            url.search('medium.com') > -1
            && !url?.split("/")[3].includes('@')) {
            setError(true);
        }
        else {
            props.loadData(
                url.search('medium.com') > -1
                && url?.split("/")[3].includes('@')
                && url?.split("/")[3]);
        }
    };

    return(
        <>
            <div className="center-view">
                <img className="avatar-image" src={'./medium.png'} width={60} alt={'iMedium'}/>
                <Typography variant="h2" component="h2" style={{fontWeight: "bold", color: "#fff" }}>
                    iMedium
                </Typography>
                <br />
                <Typography style={{ width: "400px", fontWeight: "light", color: "#fff" }}>
                    Visit any <Link color="inherit" target="_blank" href="https://medium.com/@tamaghna">
                    author's profile page</Link> on
                    Medium and click a button to see details or enter URL manually to check.
                </Typography>
                <FormControl style={{ width: "600px", marginTop: "20px", position: "relative"}}>
                    <TextField
                        style={{background: "#fff"}}
                        onChange={(e) => {setUrl(e.target.value); setError(false)}}
                        value={url} variant="filled"
                        label="Enter Medium URL"
                    />
                    {
                        url &&
                        <CloseIcon style={{ position: "absolute",top: 15, right: 15, cursor: "pointer" }}
                                   onClick={() => {setUrl(''); setError(false)}}
                                   sx={{ color: pink[500] }}/>
                    }
                </FormControl>
                <div style={{ marginTop: "20px" }}>
                    <Button size="large" variant="contained" sx={{ backgroundColor: green['A400'],
                        ':hover': {
                            bgcolor: '#12d476', // theme.palette.primary.main
                            color: '#000',
                        },
                        fontWeight: "bolder", borderRadius: 0, color: "#000", border: "2px solid #000" }}
                            onClick={ handleChange }>
                        {url ? 'Check URL profile' : 'Load profile data'}
                    </Button>
                </div>

                {
                    error &&
                    <Alert severity="error" variant="filled" style={{ marginTop: "20px" }}>
                        <AlertTitle style={{fontWeight: "bold"}}>The URL entered doesn't contain any matches</AlertTitle>
                    </Alert>
                }
            </div>
            <div style={{ marginTop: "-40px", }} >
                <FooterComponent />
            </div>
        </>
    )
}
