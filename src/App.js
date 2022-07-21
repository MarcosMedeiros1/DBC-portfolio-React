import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/main/Main";

function App() {
  const [dados, setDados] = useState({});

  const setup = async () => {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/MarcosMedeiros1",
      );
      setDados(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <Main dados={dados} />
    </div>
  );
}

export default App;
