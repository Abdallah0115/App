import React,{Component} from "react";
import  './nav.css'; 
export class NavP extends Component

{
    render()
    {
        return(<div className="nav">
            <h1>Resturant App</h1>
            <span className="fg">Get  food</span>
            <input onInput={this.props.handle} type="text" className="s"></input>                        
        </div>)
    }
}