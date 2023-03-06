import React ,{Component, Fragment} from "react";
import {Card} from './card';

export class Res extends Component
{
   y=this.props.arr   
    
    render()
    {
        
        return(
            <Fragment>
                        
            {this.y.map(ele=><Card name={ele.sort} price={ele.price} key={ele.id} poto={ele.link}/>)}
            </Fragment>
        )
    }
}