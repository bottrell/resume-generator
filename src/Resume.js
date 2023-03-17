import React, { Component } from "react";

export default class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props.info;

        return (
            <h1>{name}</h1>
        );
    }
}