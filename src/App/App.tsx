import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import styled from "@emotion/styled";

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

const App = () => {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default App;