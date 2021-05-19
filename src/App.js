import React from "react";
import Routes from "./routes";
import "./assets/reset.css";
import firebase, { FirebaseContext } from "./firebase";
import userAuth from "./hooks/useAuth";
function App() {
  const user = userAuth();
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user,
      }}
    >
      <Routes />
    </FirebaseContext.Provider>
  );
}

export default App;
