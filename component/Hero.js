var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classname = require("classname");
var React = require("react");
var HeroBody = (function (_super) {
    __extends(HeroBody, _super);
    function HeroBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroBody.prototype.render = function () {
        return (React.createElement("div", { className: "hero-body" }, this.props.children));
    };
    return HeroBody;
}(React.Component));
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props, isDanger = _a.isDanger, isDark = _a.isDark, isFullheight = _a.isFullheight, isInfo = _a.isInfo, isLarge = _a.isLarge, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isWarning = _a.isWarning;
        var className = classname(['hero'], {
            'is-danger': isDanger,
            'is-dark': isDark,
            'is-fullheight': isFullheight,
            'is-info': isInfo,
            'is-medium': isMedium,
            'is-primary': isPrimary,
            'is-success': isSuccess,
            'is-warning': isWarning,
        });
        return (React.createElement("section", { className: className }, this.props.children));
    };
    Hero.Body = HeroBody;
    return Hero;
}(React.Component));
exports.default = Hero;