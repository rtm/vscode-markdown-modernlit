"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function activate(context) {
    return {
        extendMarkdownIt: function (md) {
            return md.use(require("markdown-it-mlfragment"));
        },
    };
}
exports.activate = activate;
