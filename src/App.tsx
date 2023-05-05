import { useState } from 'react';
import { DefaultView } from './views/Default.view';
import { LoaderView } from "./views/Loader.view";
import { NoPostsView } from "./views/NoPosts.view";
import { ErrorView } from "./views/Error.view";
import './styles/App.css';
import { AuthorDataService } from "./services/AuthorData.service";

enum View { Initial, Loading, NoPost, Error }

function App() {

    const [view, setView] = useState<View>(View.Initial);
    const [postsLoaded, setPostsLoaded] = useState<number>(0);
    const service = new AuthorDataService();

    const loadData = async () => {
        setView(View.Loading);
        try {
            const authorData = await service.fetchAuthorData(setPostsLoaded);
            if (!authorData) {
                setView(View.NoPost);
                return;
            }
        } catch(e) {
            console.log(e);
        }
    }

    const renderView = () => {
        switch(view) {
            case View.Loading:
                return <LoaderView postsLoaded={postsLoaded} />
            case View.NoPost:
                return <NoPostsView />
            case View.Error:
                return <ErrorView />
            default:
                return <DefaultView loadData={loadData} />
        }
    }

    return (
        <div className="app">
            {renderView()}
        </div>
    );
}

export default App;
