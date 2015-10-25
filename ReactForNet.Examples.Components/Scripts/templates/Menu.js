var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.apply(this, arguments);
    }
    Menu.prototype.render = function () {
        var menuItems = this.props.Items.map(function (item) {
            return React.createElement(MenuItem, {"Title": item.Title, "Location": item.Location});
        });
        return React.createElement("ul", null, " ", menuItems, " ");
    };
    return Menu;
})(React.Component);
//# sourceMappingURL=Menu.js.map