"use strict";

var HelloWorld = React.createClass({
    displayName: "HelloWorld",

    // Set the intial state of the component by calling this function
    getInitialState: function getInitialState() {
        return { name: this.props.name };
    },
    // Handle the onChange event on the input - bound below
    handleChange: function handleChange(e) {
        e.preventDefault();

        var name = this.refs.name.getDOMNode().value;
        this.setState({ name: name });
    },

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                { style: { color: this.state.name } },
                "Hello ",
                this.state.name
            ),
            React.createElement("input", { type: "text", ref: "name", onChange: this.handleChange, value: this.state.name })
        );
    }
});

var mountNode = document.getElementById('welcomeMessage');
React.render(React.createElement(HelloWorld, { name: "World" }), mountNode);