import React from 'react'
import '../App.css'

class ClassCounter extends React.Component{
    constructor(){
        super();
        
        this.state = {
            number:0};
        }
        HandleIncrease() {
            this.setState({
                number: this.state.number + 5,
            });
        }
        HandleDecrease() {
            this.setState({
                number: this.state.number = 0,
                
        });

        
    }
    render(){
        return(
            <div>
                <div>
                <h1 className="clock">{this.state.number} </h1>
                </div>
                
                <div>
                    <button className="buts" onClick={()=> this.HandleDecrease()}>
                        Reset to 0
                    </button>
                
                    <button className="buts" onClick={()=> this.HandleIncrease()}>
                        Add 5
                    </button>
                </div>
            </div>
        )
    }
}
 export default ClassCounter;