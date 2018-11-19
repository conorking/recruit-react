var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './App.css';
import { Row, Column } from 'react-foundation-components/lib/grid';
import MenuButton from './MenuButton';
import './TitleBar.css';
var TitleBar = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleBar.prototype.render = function () {
        return (React.createElement("div", { className: "TitleBar" },
            React.createElement(Row, { className: "display" },
                React.createElement(Column, { large: 1 },
                    React.createElement(MenuButton, null)),
                React.createElement(Column, { large: 11 },
                    React.createElement("header", { className: "App-header" }, "Title Bar")))));
    };
    return TitleBar;
}(React.Component));
export default TitleBar;
//# sourceMappingURL=TitleBar.js.map