import React ,{Component} from "react";
import {NavP} from "./Nav"
import axios  from 'axios';
import { Fragment } from "react";
import {Res} from "./result"



export class Con extends Component
{
  
    state={        
        product : null,
        t:null        
    }
    async componentDidMount(){
        const   promis= await  axios.get("https://my-json-server.typicode.com/Abdallah0115/json-server/posts")
        this.setState({product:promis.data}) 
        
    }
    x=[];
    
    sea=(ele)=>
    {
        let arr=[];
        let flag=true; 
        let num=ele.length ;
        let numP=this.state.product.length;
        if(ele==="all")
        {
            for(var z=0;z<numP;z++){
               arr.push(this.state.product[z])
            }
            return arr
                
        }else{
            ele.toLowerCase();
        for(var i=0;i<numP;i++)
        {
            for(var j=0;j<num&&flag;j++)
            {               
                if(ele[j]!==this.state.product[i].sort[j])
                    flag=false
            }
            if(flag)
            {
                arr.push(this.state.product[i])
                flag=true;
            }else{flag=true}
        }       
        return arr;
    }
    }
    ap=()=>
    {
        let z=document.getElementsByClassName("s")        
        if(z[0].value==="")
        {
            return []
        }else{
        return this.sea(z[0].value);
        }
    }
    async append(ele)
    {
        let y= this.state.t
        y=ele
        this.setState({t:y})        
    }    

     search=()=>{        
        let  y= this.ap();  
       
        if(this.x.length===0){
        y.map(ele=>this.x.push(ele));
        }else{
           while(this.x.length!==0)
           {
            this.x.shift()
           }
           y.map(ele=>this.x.push(ele))
        }      
       
        this.append(y)                     
    }
    
    render()
    {
        return(
        <Fragment>       
             <NavP handle={this.search}/>
             <hr></hr>             
             <div className="contain">             
                <Res arr={this.x}/>                                        
             </div>
        </Fragment>                                 
        )

    }
}
