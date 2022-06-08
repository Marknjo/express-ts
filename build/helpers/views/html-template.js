"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseHtmlTemplate = void 0;
const baseHtmlTemplate = (content, title) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>App ${title ? "| " + title : ""}</title>
        </head>
          <body>
            <div style="display: flex; align-items: center; flex-flow: column nowrap; ">
              ${title ? "<h1>" + title + "</h1>" : ""}
              ${content}
            </div>
          </body>
        </html>
      `;
};
exports.baseHtmlTemplate = baseHtmlTemplate;
