import { Alert, AlertTitle } from "@mui/material";
import { ContactLinkComponent } from "../components/ContactLink.component";

export function ErrorView() {
    return (
        <div className="center-view">
            <Alert severity="error" variant="filled">
                <AlertTitle>Error occured while loading data</AlertTitle>
                Try to:
                <ul>
                    <li>Make sure you are running the script on medium user page. (eg. https://medium.com/@tamaghna91)</li>
                    <li>Reload website.</li>
                    <li>Reopen addon popup</li>
                    <li>Reinstall extension.</li>
                </ul>
                <br />
                Still getting an error? <ContactLinkComponent />
            </Alert>
        </div>
    );
}
