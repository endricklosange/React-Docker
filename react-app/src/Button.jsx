import React,{Component} from "react";

export class Button extends Component{

    constructor(props){
        super(props)
    }
    handleClick(value){
        alert(this.props.number)
    }
    render(){
        return <button onClick={this.handleClick}>{this.props.number}</button>;
    }
}