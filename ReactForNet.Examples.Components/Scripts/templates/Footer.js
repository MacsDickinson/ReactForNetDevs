var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        _super.apply(this, arguments);
    }
    Footer.prototype.render = function () {
        var footerLinks = this.props.FooterLinks.map(function (link) {
            return React.createElement(MenuItem, {"Title": link.Title, "Location": link.Location});
        });
        return React.createElement("footer", null, React.createElement("ul", null, React.createElement("li", null, " © ", new Date().getFullYear(), " ACME Corp"), footerLinks));
    };
    return Footer;
})(React.Component);
//# sourceMappingURL=Footer.js.map