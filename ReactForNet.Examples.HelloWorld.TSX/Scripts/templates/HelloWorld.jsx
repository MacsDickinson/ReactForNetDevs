/// <reference path="..\definitions\react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.apply(this, arguments);
    }
    HelloWorld.prototype.render = function () {
        return <div>Hello {this.props.name}</div>;
    };
    return HelloWorld;
})(React.Component);
var mountNode = document.getElementById('welcomeMessage');
React.render(<HelloWorld name="World"/>, mountNode);
//# sourceMappingURL=HelloWorld.jsx.map