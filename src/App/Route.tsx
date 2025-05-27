import { createBrowserRouter } from "react-router-dom";
import Profile from '../Pages/Profile';
import EditProfile from '../Pages/EditProfile';
import ChooseEmotion from '../Pages/ChooseEmotion';

export const router = createBrowserRouter([
    // 여기에 라우트 정보를 추가하세요
    {
        path: "/emotions",
        element: <ChooseEmotion />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/profile/edit",
        element: <EditProfile />,
    }   
]); 