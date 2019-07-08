import React, {Component} from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.name = this.name.bind(this); 
    }

    name(name){
        if(name){
            return(
                <div>
                    {name}
                </div>
            );
        } else {
            return(
                <div>
                    No name Provided
                </div>
            );
        }
    }
    render(){
        return(
            this.name(this.props.match.params.name)
        );
    };
}

export default Contact;