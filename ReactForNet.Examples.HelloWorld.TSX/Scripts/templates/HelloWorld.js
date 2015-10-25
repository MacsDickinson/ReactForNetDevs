/// <reference path="..\definitions\react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// The above comment references the required React type definitions
// Get more type definitions from 
// https://github.com/borisyankov/DefinitelyTyped
// This file is compiled by Visual Studio and outputs HelloWorld.js
// You can edit the compilation options in Project Settings > TypeScript Build.
// Note: JSX compilation needs to be enabled and set to React
// Learn more about JSX support for typescript at
// https://github.com/Microsoft/TypeScript/wiki/JSX
var mountNode = document.getElementById('welcomeMessage');
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.apply(this, arguments);
    }
    HelloWorld.prototype.render = function () {
        return React.createElement("h1", null, "Hello ", this.props.firstName, " ", this.props.lastName, " ");
    };
    return HelloWorld;
})(React.Component);
React.render(React.createElement(HelloWorld, {"firstName": "World"}), mountNode);
//# sourceMappingURL=HelloWorld.js.map