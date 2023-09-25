import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Experience from "./Experience";
import PersonalProjects from "./PersonalProjects";
import { Route, Routes } from "react-router-dom";
import CoachingSports from "./CoachingSports";
import Footer from "./Footer";
import Experience2 from "./Experience2";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIDSzigZ2d3CJ3_mHTWmEL0PeZRHtBkVU",
  authDomain: "david-friedman.firebaseapp.com",
  projectId: "david-friedman",
  storageBucket: "david-friedman.appspot.com",
  messagingSenderId: "318101549176",
  appId: "1:318101549176:web:92bd1ca59eaf4d31097d8d",
  measurementId: "G-P25JNX1V0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home db={db} />} />
        <Route exact path="/experience" element={<Experience2 db={db} />} />
        <Route
          exact
          path="coaching-sports"
          element={<CoachingSports db={db} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
