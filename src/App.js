import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState();
  const setup = async () => {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/MarcosMedeiros1",
      );

      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <Main data={data} />
    </div>
  );
}

export default App;
