// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import PageLogin from "./components/PageLogin/PageLogin";
import Reservation from "./components/Reservation/Reservation";
import AboutPage from "./pages/AboutPage";
import AirportMapPage from "./pages/AirportMapPage";
import CabinesPage from "./pages/CabinesPage";
import CgvPage from "./pages/CgvPage";
import PlaneDetailPage from "./pages/PlaneDetailPage";
import PlanesPage from "./pages/PlanesPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";

import WelcomePage from "./pages/WelcomePage";

import { AuthProvider } from "./Context/AuthContext";
// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/planes",
        element: <PlanesPage />,
      },
      {
        path: "/planes/:id",
        element: <PlaneDetailPage />,
      },
      {
        path: "/cabines",
        element: <CabinesPage />,
      },
      {
        path: "/AirportMap",
        element: <AirportMapPage />,
      },
      {
        path: "/login",
        element: <PageLogin />,
      },
      {
        path: "/login/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/cgv",
        element: <CgvPage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/profile/edit-account",
        element: <ProfilePage />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
