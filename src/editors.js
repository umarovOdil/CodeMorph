// editorConfig.js

import { EditorView, basicSetup } from "codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
// import { tags } from "@lezer/highlight";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";

// Theme & highlight
export const myTheme = EditorView.theme({
  "&": {
    backgroundColor: "#272822",
    color: "#dcdcdc",
    height: "100%",
    fontSize: "14px"
  },
  ".cm-content": {
    padding: "0px"
  },
  ".cm-gutters": {
    backgroundColor: "#282a36",
    color: "grey",
    border: "none"
  }
}, { dark: true });

const monokaiHighlight = HighlightStyle.define([
    { tag: tags.keyword, color: "#F92672" },       
    { tag: tags.comment, color: "#88846f", fontStyle: "italic" },
    { tag: tags.string, color: "#E6DB74" },
    { tag: tags.number, color: "#AE81FF" },
    { tag: tags.labelName, color: "#ff79c6" },
    { tag: tags.tagName, color: "#F92672" },      
    { tag: tags.attributeName, color: "#A6E22E" },
    { tag: tags.className, color: "#A6E22E" },
    { tag: tags.propertyName, color: "#66D9EF" }, 
    { tag: tags.color, color: "#FD971F" },         
    { tag: tags.variableName, color: "#F8F8F2" },
    { tag: tags.function(tags.variableName), color: "#A6E22E" },
    { tag: tags.operator, color: "#F8F8F2" },
    { tag: tags.atom, color: "#AE81FF" }
  ]);
  
  const monokaiTheme = EditorView.theme({
    "&": { backgroundColor: "#272822", color: "#f8f8f2", height: "100%" },
    ".cm-content": { caretColor: "#F8F8F2" },
    ".cm-gutters": { backgroundColor: "#272822", color: "#75715E" },
  }, { dark: true });

export function createHtmlEditor(element) {
  return new EditorView({
    parent: element,
    doc: `<div class="container">
  <h1 class="title">Welcome to CodeMorph!</h1>
  <canvas id="particles-canvas"></canvas>
</div>`,
    extensions: [basicSetup, html(), monokaiTheme,
        syntaxHighlighting(monokaiHighlight), EditorView.lineWrapping]
  });
}

export function createCssEditor(element) {
  return new EditorView({
    parent: element,
    doc: `@keyframes textAnimation{
  0%{ transform: scale(0); }
  100%{ transform: scale(1); }
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  overflow: hidden;
}
.title {
  z-index: 100;
  color: white;
  font-size: 65px;
  animation: textAnimation 500ms linear 1;
  text-align:center;
  transition: 150ms;
  cursor: pointer;
}

.title:hover{
  text-shadow: 0px 0px 20px white;
}

#particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
}`,
    extensions: [basicSetup, css(), monokaiTheme,
        syntaxHighlighting(monokaiHighlight), EditorView.lineWrapping]
  });
}

export function createJsEditor(element) {
  return new EditorView({
    parent: element,
    doc: `(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particleCount = 80;
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8
    });
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(animate);
  }
  animate();
})();`,
    extensions: [basicSetup, javascript(), monokaiTheme,
        syntaxHighlighting(monokaiHighlight), EditorView.lineWrapping]
  });
}
