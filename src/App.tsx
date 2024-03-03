//import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
