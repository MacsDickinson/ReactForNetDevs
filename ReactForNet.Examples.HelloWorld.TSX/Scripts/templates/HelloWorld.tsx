/// <reference path="..\definitions\react-global.d.ts" />

// The above comment references the required React type definitions
// Get more type definitions from 
// https://github.com/borisyankov/DefinitelyTyped

// This file is compiled by Visual Studio and outputs HelloWorld.js
// You can edit the compilation options in Project Settings > TypeScript Build.
// Note: JSX compilation needs to be enabled and set to React

// Learn more about JSX support for typescript at
// https://github.com/Microsoft/TypeScript/wiki/JSX

var mountNode = document.getElementById('welcomeMessage');

interface Props {
    firstName: string;
    lastName?: string;
}

class HelloWorld extends React.Component<Props, {}> {
    render() {
        return <h1>Hello {this.props.firstName} {this.props.lastName} </h1>;
    }
}

React.render(<HelloWorld firstName="World" />, mountNode);

