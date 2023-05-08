import { Alert, AlertTitle, CircularProgress, Typography } from "@mui/material";
import * as React from "react";

interface LoadingProps {
    postsLoaded: number
}

export function LoaderView({postsLoaded} : LoadingProps) {
    return (
        <div className="center-view">
            <CircularProgress color={'warning'} size={60} thickness={4.5}/>
            <Typography mt={4} mb={2} fontSize={16} fontWeight={'bold'} color={'#fff'}>
                Processing {postsLoaded} posts via Medium...</Typography>
            <Alert severity="info" >
                <AlertTitle>We don't know how many posts are posted by author in total, until we load them all.</AlertTitle>
            </Alert>
        </div>
    );
}
