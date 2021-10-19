const canvas = document.getElementById('canvas');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const gl2 = canvas.getContext('experimental-webgl');

gl2.clearColor(0.18, 0.31, 0.31, 1);

const vsSource = 'attribute vec2 pos;'
  + 'void main(){gl_Position = vec4(pos, 0, 1); }';
const vs = gl2.createShader(gl2.VERTEX_SHADER);
gl2.shaderSource(vs, vsSource);
gl2.compileShader(vs);

let fsSouce = 'void main() { gl_FragColor = vec4(1, 1, 1, 1); }';
const fs = gl2.createShader(gl2.FRAGMENT_SHADER);
gl2.shaderSource(fs, fsSouce);
gl2.compileShader(fs);

const prog = gl2.createProgram();
gl2.attachShader(prog, vs);
gl2.attachShader(prog, fs);
gl2.linkProgram(prog);
gl2.useProgram(prog);

const vertices2 = new Float32Array([
  0, -0.55, // katze zunge mitte
  0, -0.7,
  -0.25, -0.1, // katze auge links innen
  -0.15, -0.2,
  -0.25, -0.1, // katze auge links außen
  -0.35, -0.2,
  0.25, -0.1, // katze auge rechts innen
  0.15, -0.2,
  0.25, -0.1, // katze auge rechts außen
  0.35, -0.2,
  0.1, -0.35, // katze nase rechts
  0, -0.45,
  -0.1, -0.35, // katze nase links
  0, -0.45,
  -0.2, 0, // katze oberseite
  0.2, 0,
  -0.5, -0.9, // katze unterseite
  0.5, -0.9,
  -0.5, -0.9, // katze linke seite
  -0.5, 0.9,
  .5, -0.9, // katze rechte seite
  .5, .9,
  -0.5, .9, // katze ohr links
  -0.2, 0,
  0.5, .9, // katze ohr rechts
  0.2, 0,
  -0.15, -0.5, // katze mundwinkel links
  -0.15, -0.55,
  0.15, -0.5, // katze mundwinkel rechts
  0.15, -0.55,
  -0.1, -0.55, // katze zunge links
  -0.1, -0.6,
  0.1, -0.55, // katze zunge rechts
  0.1, -0.6,
  0.1, -0.6, // katze zunge schräg rechts
  0, -0.7,
  -0.1, -0.6, // katze zunge schräg links
  0, -0.7,
  0.25, -0.45, // katze schnurrharr rechts oben
  0.4, -0.4,
  0.25, -0.55, // katze schnurrharr rechts mitte
  0.4, -0.55,
  0.25, -0.65, // katze schnurrharr rechts unten
  0.4, -0.7,
  -0.25, -0.45, // katze schnurrharr links oben
  -0.4, -0.4,
  -0.25, -0.55, // katze schnurrharr links mitte
  -0.4, -0.55,
  -0.25, -0.65, // katze schnurrharr links unten
  -0.4, -0.7,
  0.15, -0.55, // katze mund mitte
  -0.15, -0.55,
  0.1, -0.35, // katze nase oben
  -0.1, -0.35,
  0, -0.45, // katze nase strich
  0, -0.55,
]);

const vbo = gl2.createBuffer();
gl2.bindBuffer(gl2.ARRAY_BUFFER, vbo);
gl2.bufferData(gl2.ARRAY_BUFFER, vertices2, gl2.STATIC_DRAW);

const posAttrib = gl2.getAttribLocation(prog, 'pos');
gl2.vertexAttribPointer(posAttrib, 2, gl2.FLOAT, false, 0, 0);
gl2.enableVertexAttribArray(posAttrib);

gl2.clear(gl2.COLOR_BUFFER_BIT);
gl2.drawArrays(gl2.LINES, 0, vertices2.length / 2);