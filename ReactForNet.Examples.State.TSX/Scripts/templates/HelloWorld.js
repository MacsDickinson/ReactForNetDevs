var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        _super.call(this);
        this.state = { name: props.name };
    }
    HelloWorld.prototype.handleChange = function (e) {
        e.preventDefault();
        var nameNode = React.findDOMNode(this.refs["name"]);
        var name = nameNode.value.trim();
        this.setState({ name: name });
    };
    HelloWorld.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null, React.createElement("h1", {"style": { color: this.state.name }}, "Hello ", this.state.name), React.createElement("input", {"type": "text", "ref": "name", "onChange": function (e) { return _this.handleChange(e); }, "value": this.state.name}));
    };
    return HelloWorld;
})(React.Component);
var mountNode = document.getElementById('welcomeMessage');
React.render(React.createElement(HelloWorld, {"name": "World"}), mountNode);
//# sourceMappingURL=HelloWorld.js.map