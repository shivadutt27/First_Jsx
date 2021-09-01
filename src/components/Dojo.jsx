import { Component } from "react";

class Dojo extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div class = "main">
                <h1>Hello Dojo</h1>
                <h3>Things I need to do:</h3>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </div>
            );
        }
    
}

export default Dojo;