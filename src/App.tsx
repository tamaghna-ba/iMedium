import { useState } from 'react';
import { DefaultView } from './views/Default.view';
import { LoaderView } from "./views/Loader.view";
import { NoPostsView } from "./views/NoPosts.view";
import { ErrorView } from "./views/Error.view";
import { ContentView } from "./views/Content.view";
import { AuthorModel } from "./models/Author.model";
import './App.css';
import { AuthorDataService } from "./services/AuthorData.service";

enum View { Initial, Loading, NoPost, Error, Content }

function App() {

    const [author, setAuthor] = useState<AuthorModel>();
    const [view, setView] = useState<View>(View.Initial);
    const [postsLoaded, setPostsLoaded] = useState<number>(0);

    const service = new AuthorDataService();

    const loadData = async (userName: String = '') => {
        setView(View.Loading);
        try {
            const authorData = await service.fetchAuthorData(setPostsLoaded, userName);
            if (!authorData) {
                setView(View.NoPost);
                return;
            }

            setAuthor(authorData);
            setView(View.Content);

        } catch(e) {
            console.log(e);
            setView(View.Error);
        }
    }

    const renderView = () => {
        switch(view) {
            case View.Content:
                return <ContentView author={author!} />
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
