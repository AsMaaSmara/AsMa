import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const repoName = import.meta.env.VITE_REPO_NAME || "";
const isProd = import.meta.env.MODE === "production";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          index: true, // ✅ بدال path:"/"
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: isProd ? `/${repoName}` : "/", // ✅
  }
);
