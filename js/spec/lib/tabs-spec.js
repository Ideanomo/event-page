"use strict";

var tabs = require('../../js/src/lib/ui/tabs.js');

describe("SelectTab", function () {
    it("adds class to clicked tab", function () {
        expect(Tabs.prototype.updateUI().toEqual('tabSelected'))
    });
});