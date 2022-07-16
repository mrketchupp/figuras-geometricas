// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
  return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Codigo del triángulo
console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo (base, altura){
    return (base * altura)/2
}

//Triangulo Isósceles
function alturaIsosceles(lado1, lado2, base) {
    //Comparando tamaño de lados
    if (lado1 === lado2) {
        const resultado = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2)/4));
        return resultado;
    }
    else {
        const resultado = "Los lados del triangulo no son iguales, verifica e intentalo de nuevo";
        return resultado;
    }
}

console.groupEnd();

//Codigo del circulo
console.group("Circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");
//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd();

// Interactuamos con html
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("Lado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Lado2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Base");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("Base1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Altura");
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

//Triangulo Isósceles
function CalcularAlturaIsosceles() {
    const input1 = document.getElementById("InputLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputLado2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);

    const altura = alturaIsosceles(value1, value2, value3);
    alert(altura);
}

// Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = perimetroCirculo(value);
    alert(area);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert(area);
}
