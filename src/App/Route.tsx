import { createBrowserRouter } from "react-router-dom";
import Profile from '../Pages/Profile';
import EditProfile from '../Pages/EditProfile';
import MusicPlayer from '../Pages/MusicPlayer';
import NotFound from '../Pages/NotFound';
import MusicDetail from '../Pages/MusicDetail';
import Home from '../Pages/Home';
import ChooseEmotion from '../Pages/ChooseEmotion';
import GNB from '../Shared/UI/GNB';
import styled from "@emotion/styled";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Favorite from '../Pages/Favorite';
import playList from '../Pages/PlayList';

const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
`;

const GNBWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    margin-top: 100px;
`;

const withGNB = (Component: React.ComponentType) => {
    return (
        <>
            <PageContainer>
                <Component />
            </PageContainer>
            <GNBWrapper>
                <GNB />
            </GNBWrapper>
        </>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: withGNB(Home),
    },
    {
        path: "/profile",
        element: withGNB(Profile),
    },
    {
        path: "/profile/edit",
        element: withGNB(EditProfile),
    },
    {
        path: "/music-player",
        element: withGNB(MusicPlayer),
    },
    {
        path: "/music-detail",
        element: withGNB(MusicDetail),
    },
    {
        path: "/choose-emotion",
        element: withGNB(ChooseEmotion),
    },
    {
        path: "/favorite",
        element: withGNB(Favorite)
    },
    {
        path: "/playlist",
        element: withGNB(playList)
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router; 