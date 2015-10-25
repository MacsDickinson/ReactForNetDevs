var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RandomNumber = (function (_super) {
    __extends(RandomNumber, _super);
    function RandomNumber(props) {
        var _this = this;
        _super.call(this);
        this.state = {
            number: this.newNumber(),
            colour: this.newColour()
        };
        window.setInterval(function () { return _this.updateState(); }, props.refeshInterval);
    }
    RandomNumber.prototype.newNumber = function () {
        return Math.random() * 10;
    };
    RandomNumber.prototype.newColour = function () {
        var colours = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "violet"
        ];
        return colours[Math.round((Math.random() * 100) % 7)];
    };
    RandomNumber.prototype.updateState = function () {
        this.setState({
            number: this.newNumber(),
            colour: this.newColour()
        });
    };
    RandomNumber.prototype.render = function () {
        return React.createElement("div", {"className": "randomNumber", "style": { color: this.state.colour }}, this.state.number);
    };
    return RandomNumber;
})(React.Component);
//# sourceMappingURL=RandomNumber.js.map