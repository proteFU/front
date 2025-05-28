import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import styled from "@emotion/styled";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </QueryClientProvider>
  );
};

export default App;