import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import PageLoader from './components/PageLoader';

const App = lazy(() => import('./App'));
import { ContextProvider } from "./context/ContextProvider";
import './index.css'

ReactDOM.render
  (
    <React.StrictMode>
      <ContextProvider>
        <Suspense fallback={<PageLoader />}>
          <App />
        </Suspense>
      </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
