import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
const WelcomePage = lazy(() => import('./components/WelcomePage'));
// import WelcomePage from './components/WelcomePage'
import { useStateContext } from "./context/ContextProvider";
import Login from './components/Login';
import PageLoader from "./components/PageLoader";
import Dashboard from "./components/Dashboard";
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
                  {/* <div className="flex justify-between w-screen"> */}
                  <Sidebar />
                  <div className="ml-64">
                    <Routes>
                      {routesData.map((route, index) =>
                        <Route key={index} path={route.path} element={
                          <Suspense>
                            {route.element}
                          </Suspense>} />
                      )}
                    </Routes>
                  </div>

                  {/* </div> */}

                </BrowserRouter>
            }

          </Suspense>
      }
    </div>
  )
}

export default App
