import * as React from "react";
import './App.css'
function App() {
  //@ts-ignore
  const Registreringsform = React.lazy(() => import("remote/remote-app"));

  return (
    <>
      <h1>I am host</h1>
      <React.Suspense>
        <Registreringsform></Registreringsform>
      </React.Suspense>
      
    </>
  )
}

export default App
