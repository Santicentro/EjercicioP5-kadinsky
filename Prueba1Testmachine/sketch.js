// Variable del clasificador
let classifier;
// URL del modelo de Teachable Machine
let imageModelURL = "https://teachablemachine.withgoogle.com/models/yQrQqDKsx/";

// Video
let video;
// Etiqueta de clasificación
let label = "Cargando modelo...";

// Imágenes
let freelife, botellaDeAgua, SB1, iPhone;

// Precarga de modelo e imágenes
function preload() {
  console.log("Cargando modelo...");
  classifier = ml5.imageClassifier(imageModelURL + "model.json", modelLoaded);

  // Cargar imágenes (asegúrate de que están en la carpeta "imagenes/")
  freelife = loadImage("imagenes/Freelife.jpg");
  botellaDeAgua = loadImage("imagenes/Botella.jpg");
  SB1 = loadImage("imagenes/Santiago.png");
  iPhone = loadImage("imagenes/iPhone.jpeg");
}

// Confirmación de que el modelo ha sido cargado
function modelLoaded() {
  console.log("Modelo cargado exitosamente!");
}

function setup() {
  createCanvas(640, 480);
  background(255);

  // Captura de video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Esperar a que el video esté listo antes de clasificar
  video.elt.onloadeddata = () => {
    console.log("Video listo, iniciando clasificación...");
    classifyVideo();
  };
}

function draw() {
  background(0);
  
  // Dibujar el video
  image(video, 0, 0, width, height);

  // Dibujar la etiqueta de clasificación en pantalla
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 10);

  // Máquina de estados basada en la clasificación
  if (label === "Freelife") {
    image(freelife, 500, 100, 100, 100);
    print("Detectado: Freelife");

  } else if (label === "Botella de agua") {
    image(botellaDeAgua, 500, 100, 100, 100);
    fill(255, 0, 0, 100);
    rect(0, 0, 640, 480);
    print("Detectado: Botella de agua");

  } else if (label === "Santiago") {
    image(SB1, 500, 100, 100, 100);
    fill(0, 255, 0, 100);
    rect(0, 0, 640, 480);
    print("Detectado: Santiago");

  } else if (label === "iPhone") {
    image(iPhone, 500, 100, 100, 100);
    fill(0, 0, 255, 100);
    rect(0, 0, 640, 480);
    print("Detectado: iPhone");

  } else {
    print("Esperando detección...");
  }
}

// Función para clasificar el video
function classifyVideo() {
  classifier.classify(video, gotResult);
}

// Callback cuando se obtiene una clasificación
function gotResult(error, results) {
  if (error) {
    console.error("Error en la clasificación:", error);
    return;
  }

  // Mostrar resultados en consola
  console.log("Resultados de clasificación:", results);

  // Si hay resultados, actualizar la etiqueta y continuar clasificando
  if (results && results.length > 0) {
    label = results[0].label;
    classifyVideo();
  } else {
    console.warn("No se recibieron resultados.");
  }
}

