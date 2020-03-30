"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fakeDataStorage_1 = require("./entities/data/fakeDataStorage");
var FakeApp = /** @class */ (function (_super) {
    __extends(FakeApp, _super);
    function FakeApp(fakeDataStorage, fakeValidator) {
        var _this = _super.call(this) || this;
        _this.fakeDataStorage = fakeDataStorage;
        _this.fakeValidator = fakeValidator;
        return _this;
    }
    FakeApp.prototype.create = function (data) {
        var _a;
        var validation = (_a = this.fakeValidator) === null || _a === void 0 ? void 0 : _a.validate(data);
        if (!validation || validation.isValid) {
            return this.fakeDataStorage.create(data);
        }
        else {
            return Promise.resolve({
                success: false,
                message: "Fake could not be registered. Check errors to see why",
                errors: validation.errors
            });
        }
    };
    FakeApp.prototype.getOne = function (id) {
        return this.fakeDataStorage.getOne(id);
    };
    FakeApp.prototype.getMany = function (filter) {
        return this.fakeDataStorage.getMany(filter);
    };
    FakeApp.prototype.update = function (item) {
        return this.fakeDataStorage.update(item);
    };
    FakeApp.prototype.delete = function (id) {
        return this.fakeDataStorage.delete(id);
    };
    return FakeApp;
}(fakeDataStorage_1.FakeDataStorage));
exports.FakeApp = FakeApp;
