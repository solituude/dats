import './App.css';
import {Game} from "./components/game/Game";
import data1 from './components/testData/test2.json';
// import {useState} from "react";

// const Info = () => {
//     return(
//         <div>
//
//         </div>
//     )
// }

// const request = async () => {
//     const response = await fetch('https://games-test.datsteam.dev/play/snake3d/player/move', {
//         method: "POST",
//         headers: {
//             "X-Auth-Token": "3953bfda-e660-4575-a3bb-30c42cf2e7bb",
//         },
//         body: JSON.stringify({})
//     });
//     return await response.json();
// }

function App() {
    // const [data, setData] = useState(data1);

    // const handleUpd = () => {
    //     request().then(r => setData(r));
    // }
    //
    // useEffect(() => {
    //
    //     const intervalId = setInterval(handleUpd, 2000);
    //
    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div className="App">
            <Game gameData={data1}/>
        </div>
    );
}

export default App;
