import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="body w-full ">
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <Navbar />
            <div className="content borderDef border-blue-400 ">
              <Routes>
                <Route
                  path="/dialogs/*"
                  element={<DialogsContainer store={props.store} />}
                />

                <Route
                  path="/profile/*"
                  element={<Profile store={props.store} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
