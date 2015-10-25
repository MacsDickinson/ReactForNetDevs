// This jsx file is compiled by the gulp-babel task in gulpfile.js
// The output javascript file is HelloWorld.js

"use strict";

var HelloWorld = React.createClass({
    displayName: "HelloWorld",

    render: function render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});

var mountNode = document.getElementById('welcomeMessage');
React.render(React.createElement(HelloWorld, { name: "World" }), mountNode);