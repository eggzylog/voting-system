import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Hackathon from "./components/Hackathon";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/hackathon/*" element={<Hackathon />} />
    </Routes>
  );
}
