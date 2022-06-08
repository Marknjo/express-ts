"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseHtmlTemplate = void 0;
var baseHtmlTemplate = function (content, title) {
    return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>App ".concat(title ? "| " + title : "", "</title>\n        </head>\n          <body>\n            <div style=\"display: flex; align-items: center; flex-flow: column nowrap; \">\n              ").concat(title ? "<h1>" + title + "</h1>" : "", "\n              ").concat(content, "\n            </div>\n          </body>\n        </html>\n      ");
};
exports.baseHtmlTemplate = baseHtmlTemplate;
