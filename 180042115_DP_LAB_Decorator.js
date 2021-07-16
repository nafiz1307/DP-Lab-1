var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserInput = /** @class */ (function () {
    function UserInput(userText) {
        this.userText = userText;
    }
    UserInput.prototype.modification = function () {
        return this.userText;
    };
    UserInput.prototype.textDisplay = function (x) {
        console.log(x.modification());
    };
    return UserInput;
}());
var TextModificator = /** @class */ (function () {
    function TextModificator(x) {
        this.x = x;
    }
    TextModificator.prototype.modification = function () {
        return this.x.modification();
    };
    return TextModificator;
}());
var BoldTextModificator = /** @class */ (function (_super) {
    __extends(BoldTextModificator, _super);
    function BoldTextModificator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldTextModificator.prototype.modification = function () {
        return _super.prototype.modification.call(this).bold();
    };
    return BoldTextModificator;
}(TextModificator));
var StrikeThroughModificator = /** @class */ (function (_super) {
    __extends(StrikeThroughModificator, _super);
    function StrikeThroughModificator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StrikeThroughModificator.prototype.modification = function () {
        return _super.prototype.modification.call(this).strike();
    };
    return StrikeThroughModificator;
}(TextModificator));
var ItalicsModificator = /** @class */ (function (_super) {
    __extends(ItalicsModificator, _super);
    function ItalicsModificator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicsModificator.prototype.modification = function () {
        return _super.prototype.modification.call(this).italics();
    };
    return ItalicsModificator;
}(TextModificator));
var testText = new UserInput('Hello World');
var boldModification = new BoldTextModificator(testText);
console.log("Modified to Bold : ");
testText.textDisplay(boldModification);
var strikeModification = new StrikeThroughModificator(testText);
console.log("Modified to Strike Through : ");
testText.textDisplay(strikeModification);
var italicModification = new ItalicsModificator(testText);
console.log("Modified to Italic : ");
testText.textDisplay(italicModification);
//for bold, italic and strikethrough
var boldStrike = new StrikeThroughModificator(boldModification);
console.log("Modified to Bold and Strike Through : ");
testText.textDisplay(boldStrike);
var boldItalicStrike = new ItalicsModificator(boldStrike);
console.log("Modified to Bold, Italics and Strike Through : ");
testText.textDisplay(boldItalicStrike);
