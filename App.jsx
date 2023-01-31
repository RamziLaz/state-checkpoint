import { useState } from "react";
import reactLogo from "./assets/react.svg";
import image from "./assets/3.jpg"
import "./App.css";
const Person = {
    fullName: "lazouni ramzi",
    bio: "A software engineer with 1 years of experience.",
    img: image,
    profession: "Software Engineer",
  };
function App() {
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Show</button>
      {show && (
        <div>
          <img src={Person.img} alt={Person.fullName} />
          <h3>{Person.fullName}</h3>
          <p>{Person.bio}</p>
          <p>{Person.profession}</p>
        </div>
      )}
    </div>
  );
}

export default App;
