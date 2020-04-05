'use strict';

var asyncFn = function (foo) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve(foo !== null && foo !== void 0 ? foo : "foo")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
asyncFn(new B());
