import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age:props.initialAge,
            status:0
        }
    }

    onMakeOlder() {
       this.setState({
           age: this.state.age + 3
       });
    }


    render() {
        return (
            <div>
                <p>New component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older! </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};