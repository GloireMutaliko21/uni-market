import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
const WelcomePage = lazy(() => import('./components/WelcomePage'));
// import WelcomePage from './components/WelcomePage'
import { useStateContext } from "./context/ContextProvider";
import Login from './components/Login';
import PageLoader from "./components/PageLoader";
import Sidebar from "./components/Sidebar";
import { routesData } from "./routes/Routes";
import Navbar from "./components/Navbar";

function App() {
  const { start, loginStatus } = useStateContext();

  return (
    <div className='mx-24 flex items-center justify-center content-center'>
      {
        !start && !localStorage.getItem("isLogged") ?
          <Suspense fallback={<PageLoader />}>
            <WelcomePage />
          </Suspense> :
          <Suspense fallback={<PageLoader />}>
            {
              !localStorage.getItem("isLogged") && !loginStatus
                ? <Login />
                :
                <BrowserRouter>
                  <Navbar />
                  <Sidebar />
                  <div className="ml-64 mt-32 h-screen">
                    <Routes>
                      {routesData.map((route, index) =>
                        <Route key={index} path={route.path} element={
                          <Suspense fallback={<PageLoader />}>
                            {route.element}
                          </Suspense>} />
                      )}
                    </Routes>
                  </div>
                </BrowserRouter>
            }
          </Suspense>
      }
    </div>
  )
}

export default App
