import React, { Component } from "react";

export default class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, emailAddress, city, phoneNumber } = this.props.info;

        return (
            <div>
                <h1>{firstName + " " + lastName}</h1>
                <h1>{emailAddress}</h1>
                <h1>{phoneNumber}</h1>
                <h1>{city}</h1>
            </div>
        );
    }
}