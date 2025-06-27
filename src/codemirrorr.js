import {EditorView, basicSetup } from "codemirror"
import {tags} from "@lezer/highlight"
import {HighlightStyle , syntaxHighlighting} from "@codemirror/language"
import { createHtmlEditor, createCssEditor, createJsEditor } from './editors.js';

  

const htmlEditor = createHtmlEditor(document.querySelector('#html-editor'));
const cssEditor = createCssEditor(document.querySelector('#css-editor'));
const jsEditor = createJsEditor(document.querySelector('#js-editor'));

  

  window.updatePreview = function () {
    const html = htmlEditor.state.doc.toString();
    const css = cssEditor.state.doc.toString();
    const js = jsEditor.state.doc.toString();
  
    const combined = `
      <html>
        <head>
          <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
  
    const iframe = document.getElementById("preview-window");
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(combined);
    iframeDoc.close();
  };


  updatePreview();


 