// import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main />}
          errorElement={
            <>
              <h1>Bruh</h1>
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={Login} /> */}
        {/* <Route path="/logout" element={Logout} /> */}
      </Routes>
    </>
  );
}

export default App;
