import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Protected from "./components/routes/Protected";
import NotFound from "./components/routes/NotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login onLogin={loginHandler} />,
    },
    {
      path: "/home",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard onLogout={logoutHandler} />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
