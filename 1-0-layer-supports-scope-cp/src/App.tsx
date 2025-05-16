import {CSSProperties} from "react";
import {Album} from "./components/album";
import './_properties.css';
import './App.css';
import Carousel from "./components/carousel";

export type ExtendedCSSProperties = CSSProperties & {
    "--grid-columns"?: number;
}

function App() {

    return (
        <>
            <div className="albums">
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
            </div>

            <div className="albums">
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
            </div>

            <div className="images">
                <Carousel/>
            </div>
        </>
    )
}

export default App
