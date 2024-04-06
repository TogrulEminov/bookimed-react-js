import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './Routes/Routes';

function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
