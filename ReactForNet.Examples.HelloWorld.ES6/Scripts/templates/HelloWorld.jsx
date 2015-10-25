// This jsx file is compiled by the gulp-babel task in gulpfile.js
// The output javascript file is HelloWorld.js

class HelloWorld extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

var mountNode = document.getElementById('welcomeMessage');
React.render(<HelloWorld name="World" />, mountNode);