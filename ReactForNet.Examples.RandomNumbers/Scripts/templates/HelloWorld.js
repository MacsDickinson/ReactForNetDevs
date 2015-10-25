var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var numbers = [];
        for (var n = 1; n <= this.props.count; n++) {
            numbers.push(React.createElement(RandomNumber, {"refeshInterval": n}));
        }
        return React.createElement("div", null, numbers);
    };
    return App;
})(React.Component);
var mountNode = document.getElementById('app');
React.render(React.createElement(App, {"count": 1000}), mountNode);
//# sourceMappingURL=HelloWorld.js.map