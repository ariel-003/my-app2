import ".styles.css";

import NavBar from "./components/NavBar";

const name = "Cristian";

const blueColor = "blue";

const App = () => {
    return (
        <>
          <NavBar myColor={blueColor} />
          <h1> Hello user : {name} </h1>
        </>
    )
}

export default App;