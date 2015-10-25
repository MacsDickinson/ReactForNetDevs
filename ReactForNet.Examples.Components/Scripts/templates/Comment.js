var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommentLine = (function (_super) {
    __extends(CommentLine, _super);
    function CommentLine() {
        _super.apply(this, arguments);
    }
    CommentLine.prototype.render = function () {
        return React.createElement("li", null, React.createElement("b", null, this.props.Author), " : ", this.props.Message, " ");
    };
    return CommentLine;
})(React.Component);
//# sourceMappingURL=Comment.js.map