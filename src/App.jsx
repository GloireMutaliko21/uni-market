import { lazy, Suspense } from "react";

import './App.css'
const WelcomePage = lazy(() => import('./components/WelcomePage'));
// import WelcomePage from './components/WelcomePage'
import { useStateContext } from "./context/ContextProvider";
import Login from './components/Login';
import PageLoader from "./components/PageLoader";

function App() {
  const { start } = useStateContext();

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
          <Login />
        </Suspense>
      }

    </div>
  )
}

export default App
