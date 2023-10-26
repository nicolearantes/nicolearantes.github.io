import style from './App.module.scss';
import Home from './pages/Home/Home';
import React from "react";
import headerWeb from "./pages/static/header-web.png";

function App(): React.ReactElement {


    return (
        <div>
            <img className={style.homeHeader} src={headerWeb}
                 alt="girl in front of a computer doing a surprised face"></img>

            <div className={style.pageWrapper}>
                <Home/>
            </div>
        </div>
    );
}

export default App;
