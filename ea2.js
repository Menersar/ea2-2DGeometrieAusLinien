fragmentShaderCode =
'void main(void) {' +
'  gl_FragColor = vec4(0.0, 0.0, 0.0,0.0);' +
'}';

vertexShaderCode =
'attribute vec3 ppos;' +
'uniform mat4 mvp;' +
'void main(void) {' +
'  gl_Position = mvp * vec4(ppos.x, ppos.y, ppos.z, 1.0);' +
'}';

var vorneLinksUnten = [-0.5, -0.5, -0.5];
var vorneRechtsUnten = [0.1, -0.5, -0.5];
var hintenLinksUnten = [-0.5, -0.5, 0.3];
var hintenRechtsUnten = [0.1, -0.5, 0.3];

var vorneLinksOben = [-0.5, 0.1, -0.5];
var vorneRechtsOben = [0.1, 0.1, -0.5];
var hintenLinksOben = [-0.5, 0.1, 0.3];
var hintenRechtsOben = [0.1, 0.1, 0.3];

var dachSpitzeVorne = [-0.2, 0.4, -0.5];
var dachSpitzeHinten = [-0.2, 0.4, 0.3];

var mitteDachVorneLinks = [-0.3, 0.3, -0.5];
var mitteDachVorneRechts = [-0.1, 0.3, -0.5];


var winkelYSetter = -45;

var kontinuierlichDrehen = false;






var pointArray = [];
pointArray = [
// Haus unten
vorneLinksUnten[0], vorneLinksUnten[1], vorneLinksUnten[2],
vorneRechtsUnten[0], vorneRechtsUnten[1], vorneRechtsUnten[2],
hintenRechtsUnten[0], hintenRechtsUnten[1], hintenRechtsUnten[2],
hintenLinksUnten[0], hintenLinksUnten[1], hintenLinksUnten[2],
vorneLinksUnten[0], vorneLinksUnten[1], vorneLinksUnten[2],
//kreuz
hintenRechtsUnten[0], hintenRechtsUnten[1], hintenRechtsUnten[2],
hintenLinksUnten[0], hintenLinksUnten[1], hintenLinksUnten[2],
vorneRechtsUnten[0], vorneRechtsUnten[1], vorneRechtsUnten[2],
vorneLinksUnten[0], vorneLinksUnten[1], vorneLinksUnten[2],
//

// Haus vorne
vorneLinksOben[0], vorneLinksOben[1], vorneLinksOben[2],
dachSpitzeVorne[0], dachSpitzeVorne[1], dachSpitzeVorne[2],
vorneRechtsOben[0], vorneRechtsOben[1], vorneRechtsOben[2],
vorneLinksOben[0], vorneLinksOben[1], vorneLinksOben[2],
vorneRechtsUnten[0], vorneRechtsUnten[1], vorneRechtsUnten[2],
vorneLinksUnten[0], vorneLinksUnten[1], vorneLinksUnten[2],
vorneRechtsOben[0], vorneRechtsOben[1], vorneRechtsOben[2],

// Haus Seite Rechts
hintenRechtsUnten[0], hintenRechtsUnten[1], hintenRechtsUnten[2],
hintenRechtsOben[0], hintenRechtsOben[1], hintenRechtsOben[2],
vorneRechtsUnten[0], vorneRechtsUnten[1], vorneRechtsUnten[2],
vorneRechtsOben[0], vorneRechtsOben[1], vorneRechtsOben[2],
hintenRechtsOben[0], hintenRechtsOben[1], hintenRechtsOben[2],


// Haus Hinten
hintenRechtsUnten[0], hintenRechtsUnten[1], hintenRechtsUnten[2],
hintenLinksUnten[0], hintenLinksUnten[1], hintenLinksUnten[2],
hintenLinksOben[0], hintenLinksOben[1], hintenLinksOben[2],
dachSpitzeHinten[0], dachSpitzeHinten[1], dachSpitzeHinten[2],
hintenRechtsOben[0], hintenRechtsOben[1], hintenRechtsOben[2],
hintenLinksOben[0], hintenLinksOben[1], hintenLinksOben[2],
// kreuz
hintenRechtsUnten[0], hintenRechtsUnten[1], hintenRechtsUnten[2],
hintenRechtsOben[0], hintenRechtsOben[1], hintenRechtsOben[2],
hintenLinksUnten[0], hintenLinksUnten[1], hintenLinksUnten[2],
hintenLinksOben[0], hintenLinksOben[1], hintenLinksOben[2],
//


// Haus Seite Links
vorneLinksOben[0], vorneLinksOben[1], vorneLinksOben[2],
hintenLinksUnten[0], hintenLinksUnten[1], hintenLinksUnten[2],
vorneLinksUnten[0], vorneLinksUnten[1], vorneLinksUnten[2],
hintenLinksOben[0], hintenLinksOben[1], hintenLinksOben[2],
vorneLinksOben[0], vorneLinksOben[1], vorneLinksOben[2],


// Haus Dach Links
dachSpitzeVorne[0], dachSpitzeVorne[1], dachSpitzeVorne[2],
dachSpitzeHinten[0], dachSpitzeHinten[1], dachSpitzeHinten[2],
//kreuz
vorneLinksOben[0], vorneLinksOben[1], vorneLinksOben[2],
dachSpitzeVorne[0], dachSpitzeVorne[1], dachSpitzeVorne[2],
hintenLinksOben[0], hintenLinksOben[1], hintenLinksOben[2],
dachSpitzeHinten[0], dachSpitzeHinten[1], dachSpitzeHinten[2],
//



// Haus Dach Rechts
vorneRechtsOben[0], vorneRechtsOben[1], vorneRechtsOben[2],
hintenRechtsOben[0], hintenRechtsOben[1], hintenRechtsOben[2],
dachSpitzeVorne[0], dachSpitzeVorne[1], dachSpitzeVorne[2],

// Haus Dach Vorne kreuz
//mitteDachVorneLinks[0],     mitteDachVorneLinks[1],     mitteDachVorneLinks[2],
//vorneRechtsOben[0],     vorneRechtsOben[1],     vorneRechtsOben[2],

//mitteDachVorneRechts[0],     mitteDachVorneRechts[1],     mitteDachVorneRechts[2],
//vorneLinksOben[0],     vorneLinksOben[1],     vorneLinksOben[2],


];


// Wirbel vorne links
var spiralValues =[];

var lastPoint = {x: dachSpitzeVorne[0], y: dachSpitzeVorne[1], z: dachSpitzeVorne[2]};
pointArray.push(lastPoint.x);
pointArray.push(lastPoint.y);
pointArray.push(lastPoint.z);
for (i = 1; i < 8; i++) {
  lastPoint.y -= Math.cos(i * 5)  / (i*5);
  lastPoint.x += Math.sin(i * 5)  / (i*5);


    pointArray.push(lastPoint.x);
    pointArray.push(lastPoint.y);
    pointArray.push(lastPoint.z);


    spiralValues[[i][0]] =  lastPoint.x;
    spiralValues[[i][1]] =  lastPoint.y;
    spiralValues[[i][2]] =  lastPoint.z;
}

for (i = 1; i < spiralValues.length; i++) {



  pointArray.push( spiralValues[9-i, 0]);
  pointArray.push( spiralValues[9-i, 1]);
  pointArray.push( spiralValues[9-i, 2]);


 
}


// Wirbel vorne rechts
spiralValues =[];
lastPoint = [];

var lastPoint = {x: dachSpitzeVorne[0], y: dachSpitzeVorne[1], z: dachSpitzeVorne[2]};
pointArray.push(lastPoint.x);
pointArray.push(lastPoint.y);
pointArray.push(lastPoint.z);
for (i = 1; i < 8; i++) {
  lastPoint.y -= Math.cos(i * 5)  / (i*5);
  lastPoint.x += Math.sin(i * 5)  / (-i*5);


    pointArray.push(lastPoint.x);
    pointArray.push(lastPoint.y);
    pointArray.push(lastPoint.z);

    spiralValues[[i][0]] =  lastPoint.x;
    spiralValues[[i][1]] =  lastPoint.y;
    spiralValues[[i][2]] =  lastPoint.z;
}
for (i = 1; i < spiralValues.length; i++) {
  pointArray.push( spiralValues[9-i, 0]);
  pointArray.push( spiralValues[9-i, 1]);
  pointArray.push( spiralValues[9-i, 2]);
}

// Wirbel hinten rechts
spiralValues =[];
lastPoint = [];

var lastPoint = {x: dachSpitzeHinten[0], y: dachSpitzeHinten[1], z: dachSpitzeHinten[2]};
pointArray.push(lastPoint.x);
pointArray.push(lastPoint.y);
pointArray.push(lastPoint.z);
for (i = 1; i < 8; i++) {
  lastPoint.y -= Math.cos(i * 5)  / (i*5);
  lastPoint.x += Math.sin(i * 5)  / (-i*5);


    pointArray.push(lastPoint.x);
    pointArray.push(lastPoint.y);
    pointArray.push(lastPoint.z);

    spiralValues[[i][0]] =  lastPoint.x;
    spiralValues[[i][1]] =  lastPoint.y;
    spiralValues[[i][2]] =  lastPoint.z;
}
for (i = 1; i < spiralValues.length; i++) {
  pointArray.push( spiralValues[9-i, 0]);
  pointArray.push( spiralValues[9-i, 1]);
  pointArray.push( spiralValues[9-i, 2]);
}

// Wirbel hinten links
spiralValues =[];
lastPoint = [];

var lastPoint = {x: dachSpitzeHinten[0], y: dachSpitzeHinten[1], z: dachSpitzeHinten[2]};
pointArray.push(lastPoint.x);
pointArray.push(lastPoint.y);
pointArray.push(lastPoint.z);
for (i = 1; i < 8; i++) {
  lastPoint.y -= Math.cos(i * 5)  / (i*5);
  lastPoint.x += Math.sin(i * 5)  / (i*5);


    pointArray.push(lastPoint.x);
    pointArray.push(lastPoint.y);
    pointArray.push(lastPoint.z);

    spiralValues[[i][0]] =  lastPoint.x;
    spiralValues[[i][1]] =  lastPoint.y;
    spiralValues[[i][2]] =  lastPoint.z;
}
for (i = 1; i < spiralValues.length; i++) {
  pointArray.push( spiralValues[9-i, 0]);
  pointArray.push( spiralValues[9-i, 1]);
  pointArray.push( spiralValues[9-i, 2]);
}




var vertices = new Float32Array(pointArray);



var gl = null;
var program;


function start() {
var canvas = document.getElementById('glcanvas');

gl = canvas.getContext('experimental-webgl');

// Fragment Shader
var fshader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fshader, fragmentShaderCode);
gl.compileShader(fshader);

// Vertex Shader
var vshader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vshader, vertexShaderCode);
gl.compileShader(vshader);


program = gl.createProgram();
gl.attachShader(program, fshader);
gl.attachShader(program, vshader);
gl.linkProgram(program);


gl.validateProgram(program);
gl.useProgram(program);

var vattrib = gl.getAttribLocation(program, 'ppos');
gl.enableVertexAttribArray(vattrib);

var vbuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);






gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

gl.vertexAttribPointer(vattrib, 3, gl.FLOAT, false, 0, 0);


// neuZeichnen() wird alle 45 ms aufgerufen
setInterval("neuZeichnen();", 45);
}

function drehen() {
if (!kontinuierlichDrehen)
  winkelYSetter = winkelYSetter - 10;
}

window.onkeyup = function (evt) {
// console.log(evt);
var key = evt.which ? evt.which : evt.keyCode;
var c = String.fromCharCode(key);
switch (c) {
  case ('R'):
    kontinuierlichDrehen = !kontinuierlichDrehen;
    break;
}
};


// Funktion zeichnet die Szene neu
function neuZeichnen() {
if (!gl)
  return;


if (kontinuierlichDrehen) {
  winkelYSetter = winkelYSetter - 2;
}



var winkelX = 20;
var winkelY = winkelYSetter;
var winkelZ = 0;


// Werte in Bogenmaß umwandeln
winkelX *= 2 * Math.PI / 360; winkelY *= 2 * Math.PI / 360; winkelZ *= 2 * Math.PI / 360;

var winkelMvp = gl.getUniformLocation(program, "mvp");

var rotationsWinkelMatrix = transformationsMatrixErstellen(winkelX, winkelY, winkelZ);

gl.uniformMatrix4fv(winkelMvp, false, rotationsWinkelMatrix);

gl.clearColor(0.18, 0.31, 0.31, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.LINE_STRIP, 0, vertices.length / 3);
gl.flush();
}

// Aus Rotationen (Winkel) eine Transformationsmatrix erstellen
function transformationsMatrixErstellen(rotationX, rotationY, rotationZ) {
var cosinusX = Math.cos(rotationX);
var sinusX = Math.sin(rotationX);
var cosinusY = Math.cos(rotationY);
var sinusY = Math.sin(rotationY);
var cosinusZ = Math.cos(rotationZ);
var sinusZ = Math.sin(rotationZ);

return new Float32Array([cosinusY * cosinusZ, (sinusX * sinusY * cosinusZ - cosinusX * sinusZ), (sinusX * sinusZ + cosinusX * sinusY * cosinusZ), 0,
cosinusY * sinusZ, (sinusX * sinusY * sinusZ + cosinusX * cosinusZ), (cosinusX * sinusY * sinusZ - sinusX * cosinusZ), 0,
-sinusY, sinusX * cosinusY, cosinusX * cosinusY, 0,
  0, 0, 0, 1]);
}























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





$(document).ready(function () {
    $('.modal').modal();
});
