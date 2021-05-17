import React from "react";
import Routes from "./routes";
import "./assets/reset.css";
import firebase, { FirebaseContext } from "./firebase";
function App() {
  console.log("desde el app ahora con firebase");
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <Routes />
    </FirebaseContext.Provider>
  );
}

export default App;
