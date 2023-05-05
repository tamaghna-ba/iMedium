import { Alert, AlertTitle } from "@mui/material";
import { ContactLinkComponent } from "../components/ContactLink.component";

export function NoPostsView() {
    return (
        <div className="center-view">
            <div style={{textAlign: "center"}}>
                <Alert severity="warning" variant="filled">
                    <AlertTitle>User is not an author - he has no posts yet.</AlertTitle>
                    Do you want to see partial data for users with no posts?
                    <ContactLinkComponent />
                </Alert>
            </div>
        </div>
    );
}
