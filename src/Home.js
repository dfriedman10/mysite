import NavBar from "./NavBar";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

const Home = ({ db }) => {
  async function countVisit() {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      const date = mm + "/" + dd + "/" + yyyy;
      const docRef = await addDoc(collection(db, "homeVisits"), {
        date: date,
        time: `${today.getHours() % 12} ${today.getHours() < 12 ? "am" : "pm"}`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    countVisit();
  }, []);
  return (
    <div className="homePage">
      <img className="homeImg" src={require("./selfie.jpg")} alt="homeImg" />
      <div className="homeText">
        <h1 style={{ fontSize: "6vmin" }}>Hi, I'm David</h1>
        <h2 style={{ fontSize: "4vmin" }}>
          I'm an engineer, teacher, and coach.
        </h2>
      </div>
    </div>
  );
};

export default Home;
