import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <ol key="relativeList">
                <li key="relativeListItem1">Akash</li>
                <li key="relativeListItem2">Musharraf</li>
                <li key="relativeListItem3">Salman</li>
               </ol>
            </div>
        )
    }
}


export default App;
