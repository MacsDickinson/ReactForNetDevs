/// <reference path='..\definitions\react-global.d.ts' />
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
        return React.createElement("div", null, React.createElement(Header, {"MenuItems": this.props.MenuItems}), React.createElement(CommentList, {"Comments": this.props.Comments}), React.createElement(Footer, {"FooterLinks": this.props.FooterLinks}));
    };
    return App;
})(React.Component);
//# sourceMappingURL=App.js.map