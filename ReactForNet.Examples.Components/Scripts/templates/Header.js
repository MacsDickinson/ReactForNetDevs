var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return React.createElement("header", null, React.createElement("img", {"src": "/Styles/logo.png", "width": "200"}), React.createElement(Menu, {"Items": this.props.MenuItems}));
    };
    return Header;
})(React.Component);
//# sourceMappingURL=Header.js.map