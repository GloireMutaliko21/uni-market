import { lazy, Suspense } from "react";

import './App.css'
const WelcomePage = lazy(() => import('./components/WelcomePage'));
// import WelcomePage from './components/WelcomePage'
import { useStateContext } from "./context/ContextProvider";
import Login from './components/Login';
import PageLoader from "./components/PageLoader";
import Dashboard from "./components/Dashboard";

function App() {
  const { start, loginStatus } = useStateContext();

  return (
    <div className='mx-24 my-1 flex items-center justify-center content-center'>
      {
        !start &&
        <Suspense fallback={<PageLoader />}>
          <WelcomePage />
        </Suspense>

      }
      {
        start &&
        <Suspense fallback={<PageLoader />}>
          {
            !localStorage.getItem("isLogged") && !loginStatus
              ? <Login />
              : <Dashboard />
          }

        </Suspense>
      }

    </div>
  )
}

export default App
