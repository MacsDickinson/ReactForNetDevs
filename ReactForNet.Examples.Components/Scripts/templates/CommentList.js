/// <reference path='..\definitions\react-global.d.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommentList = (function (_super) {
    __extends(CommentList, _super);
    function CommentList() {
        _super.apply(this, arguments);
    }
    CommentList.prototype.render = function () {
        var commentNodes = this.props.Comments.map(function (comment) {
            return (React.createElement(CommentLine, {"Author": comment.Author, "Message": comment.Message}));
        });
        return React.createElement("ul", null, commentNodes);
    };
    return CommentList;
})(React.Component);
//# sourceMappingURL=CommentList.js.map