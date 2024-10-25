import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Index";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Author from "./pages/Author";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import { ThemeProvider } from "./contexts/theme";
import { useEffect, useState } from "react";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route element={<ProtectedLayout/>}>
  //         <Route path="/" element={<Layout />}>
  //           <Route path="/" element={<Homepage />} />,
  //           <Route path="/blog" element={<Blog />} />,
  //           <Route path="/single-post" element={<Post />} />,
  //           <Route path="/pages" element={<Author />} />,
  //           <Route path="/contact" element={<Contact />} />,
  //         </Route>
  //       </Route>
  //       <Route path="/login" element={<Login />} />,
  //       <Route path="/signUp" element={<SignUp />} />,
  //     </>
  //   )
  // );

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Homepage />,
            },
            {
              path: "/blog",
              element: <Blog />,
            },
            {
              path: "/single-post",
              element: <Post />,
            },
            {
              path: "/pages",
              element: <Author />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
        },
      ],
    },
  ]);

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="bg-white dark:bg-black">
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
