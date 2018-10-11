import React from 'react';
import './../css/playground.css';

class Playground extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        color: "green",
      };
    }
  
    OnColorChange = (e) => {
        this.setState({color : e.target.value})
    }

    render() {
 
        var style = {
            backgroundColor: this.state.color,
          };

        return (
         <div>
            <div onClick={() => document.querySelector('#colorPicker').click()} id="square" style={style}> 
            </div>
            <input onChange={(e) => this.OnColorChange(e)} id="colorPicker" type="color"></input>
         </div>
        );
      }
    }
    
    export default Playground;