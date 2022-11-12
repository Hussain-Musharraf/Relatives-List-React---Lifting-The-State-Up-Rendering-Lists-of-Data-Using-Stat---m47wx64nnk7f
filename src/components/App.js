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

// {this.state.list && this.state.list.length>0 && <ol>
//     {
//         this.state.list.map((obj,index)=>{
//             return (<li key={index}>{obj.fullName}</li>)
//         })
//     }
// </ol>}
