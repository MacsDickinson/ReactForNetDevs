var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        _super.apply(this, arguments);
    }
    MenuItem.prototype.render = function () {
        return React.createElement("li", null, React.createElement("a", {"href": this.props.Location}, this.props.Title));
    };
    return MenuItem;
})(React.Component);
//# sourceMappingURL=MenuItem.js.map