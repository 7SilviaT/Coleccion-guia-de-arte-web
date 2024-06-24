# Coleccion-guia-de-arte-web

Propuesta de e-commerce para la venta de obras de arte plástica para el público general con aficción al arte y cultura.


## 1. Objetivo del proyecto

En este proyecto se desarrolló una aplicación web que permite a un usuario validar el número de una tarjeta de crédito utilizando el algoritmo de Luhn*. 
Además, se implementó la funcionalidad "maskify" para ocultar todos los dígitos de una tarjeta menos los últimos cuatro.

*El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)


## 2. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript. En este proyecto NO se usaron librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.

El _boilerplate_ contiene una estructura de archivos como punto de partida así como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── FAQ.md
├── README.md
├── package.json
├── src
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── validator.js
└── test
    ├── .eslintrc
    └── validator.spec.js
```

* Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto [VSCode](https://code.visualstudio.com/).
   
2. Para ejecutar los comandos a continuación necesitarás una :shell: [UNIX Shell](https://en.wikipedia.org/wiki/Unix_shell),que es un programita que interpreta líneas de comando (command-line interpreter) así como tener [git](https://git-scm.com/) instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git` también). 
Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

1. Clona el repositorio con el comando git clone

2. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)). El proyecto usa node versión 18

3. Para ver la interfaz de tu programa en el navegador, usa el comando`npm start` para arrancar el servidor web y dirígete a `http://localhost:5000` en tu navegador.

4. Explora la web-app 


## 3. Investigación UX:

- Quiénes son los principales usuarios de producto y objetivos de los mismos?
Público en general interesados en el Arte Peruano y deseen adquirir piezas de arte únicas.


- Cómo crees que el producto que estás creando está resolviendo sus problemas?
En la actualidad artistas peruanos buscan canales de venta atraves de Museos y Galerias de renombre,sin embargo el radio de compradores y coleccionistas es más vasto, via internet.Por lo tanto Colección Guia de Arte propone colocar en exhibición el compilado de obras de artistas peruanos y con ello ayudar la venta directa creador-comprador.

## 4. Proceso:

1. Diagramación del prototipo ![Figma] https://www.figma.com/design/bDTtl4NlkFuszfQ2J9TFVt/GAL-Art-Store-Website?node-id=0-1&t=3TPCboHv7cKoWSwy-1
   
2. Planeación y asignación de tareas en Trello ![trello] https://trello.com/b/dvn15Wmc/card-validation-gal

3. Imágenes del producto final: