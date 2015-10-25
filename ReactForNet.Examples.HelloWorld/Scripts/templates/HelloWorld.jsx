// This jsx file is compiled by the gulp-babel task in gulpfile.js
// The output javascript file is HelloWorld.js

var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

var mountNode = document.getElementById('welcomeMessage');
React.render(<HelloWorld name="World" />, mountNode);