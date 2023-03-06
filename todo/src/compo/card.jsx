import React ,{Component} from "react";
import "./card.css"
//import x from "%PUBLIC_URL%/logo192.png"



export class Card extends Component
{    
    
    render() {
       
        return (
             <div className="card">
                <img src={this.props.poto} alt="loading"/>
                <span>                
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                </span>
             </div>
        );
    }
}
