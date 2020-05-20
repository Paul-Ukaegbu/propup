import React, { Component } from 'react'

class PersonCard extends Component{
    render(){
        return(
            <div className = "card col-sm-6">
                <div className = "card-body">
                    <h1 className = "card-title">{this.props.firstName}, {this.props.lastName}</h1>
                    <p className = "card-text">Age: {this.props.age}</p>
                    <p className = "card-text">Hair Color: {this.props.hairColor}</p>
                </div> 
            </div>     
        )
    }
}

export default PersonCard