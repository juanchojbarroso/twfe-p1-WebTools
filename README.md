Por: Juan Barroso

# Practica 1: WebTools

## Objetivos

El objetivo de esta practica sera crear un proyecto web de prueba para experimentar con las herramientas antes instaladas. Este debe incluir como mínimo un fichero "index.html", 2 ficheros ".css" y finalmente un fichero de scripts ".js".

En lo siguiente debemos crear un repositorio para versionar el código de la práctica usando _GitHub_.

> Nota: debemos tener en cuenta los ficheros que deben ser ignorados.

Crear la estructura del proyecto de forma automática haciendo uso de **Yeoman**. y por ultimo crear un fichero de **automatización de tareas**.

## Tareas

- Concatenar los dos ficheros css.
- Minificar css.
- Hacer sourcesmaps del css.
- Lance BrowserSync.
- Investigar sobre paquetes para minificar imágenes y js. (Automatizarlo)
- Investigar la creación de un proyecto Yeoman para Jekyl.

## Preparando entorno de desarrollo

Para esta practica vamos a necesitar ciertas herramentas para poder acometer las tareas que nos hemos puesto como meta.

### VSCode

**Instalando VSCode**

Vamos a la web official de Visual studio code [VScode](https://code.visualstudio.com)

![image](/img/01.png)

En mi caso descargaré la version para macOS.

> Nota: Como recomendación siempre es interesante leer los _**Primeros pasos**_ de cualquier aplicación que vayamos a usar porque nos dan una manera rápida de comenzar a usar la misma

![image](/img/02.png)

Ya descargado e instalado VScode esta sera la interface que veremos. En el [Apéndice](#references) pondré algunos enlaces en los que de forma resumida podremos aprender sobre la interface.

![image](/img/03.png)

### Git

Instalar git en macOs es super fácil, solo tenemos que ejecutar el comando:

```bash
$ brew install git
```

### npm (Node)

`npm` viene "integrado" en Node.js. Por lo que necesitamos contar con Node para poder acceder a los paquetes que `npm` nos brinde.

En esta oportunidad vamos a usar un manejador de versiones para Node llamado NVM.

**Instalar nvm antes de instalar nodejs**

    NVM es un manejador/“manager” de las versiones de node.
    Por lo que nos soportaremos en este para controlar
    las versiones de node que vamos a usar en nuestra máquina.

> Nota: https://github.com/nvm-sh/nvm#installation-and-update

Por lo que solo tenemos que ejecutar el siguiente comando:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash
```

Ahora podríamos ver con que versiones de node cuenta nuestra máquina:

![image](/img/04.png)

Para usar la última versión de node (12.12.0) vamos a ejecutar:

```bash
nvm use 12
```

Verificando que tenemos node instalado.

![image](/img/05.png)

### Yeoman

Para instalar de forma global Yeoman vamos a ejecutar el siguiente comando:

```bash
npm install -g yo
```

![image](/img/06.png)

Adicional mente vamos a instalar un generador de proyecto llamado [generator-learnfe](https://github.com/LearnFrontEnd/generator-learnfe)

![image](/img/07.png)

### Gulp

Para instalar el cliente de gulp de forma global ejecutaremos el comando:

```bash
npm install gulp-cli -g
```

![image](/img/08.png)

Para instalar gulp de forma global ejecutaremos el comando:

```bash
npm install gulp -D
```

![image](/img/09.png)

## Generando un proyecto base (scaffold)

Para comenzar vamos a general nuestro "scaffold" con el que seguiremos trabajando a lo largo de esta practica. Para esto nos vamos a apoyar en el generador **learnfe**.

Ejecutamos el comando:

```bash
yo learnfe
```

![image](/img/09.png)

Tras ejecutarlo se van a crear algunos directorios y ficheros que usaremos luego.

![image](/img/11.png)

## Automatizando tareas con gulp

### Gulp init

Gulp es un paquete Node por lo que puede ser manejado a traves de `npm`. Para esto debemos iniciar nuestro proyecto con:

```bash
npm init
```

Para generar un fichero llamado `package.json` en el cual esta contenida toda la información de nuestro proyecto para node. Tal como este:

```json
{
  "name": "twfe-p1-webtools",
  "version": "1.0.0",
  "description": "Por: Juan Barroso",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/juanchojer/twfe-p1-WebTools.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/juanchojer/twfe-p1-WebTools/issues"
  },
  "homepage": "https://github.com/juanchojer/twfe-p1-WebTools#readme"
}
```

### Instalando gulp en nuestro proyecto

Para instalar gulp en nuestro proyecto debemos usar el siguiente comando:

```bash
npm install --save-dev gulp
```

> NOTA: Gulp lo tenemos que instalar como una **devDependencies** porque de esta manera nos aseguramos que al generar la "aplicación" final estas dependencias no se instalaran en producción. Solo queremos que esten disponibles en tiempo de desarrollo.

Después de la instalación de Gulp el árbol de nuestro proyecto se vera de esta manera:

![image](/img/12.png)

### Añadiendo gulp file en nuestro proyecto

Para configurar las tareas de gulp debemos crear un modulo/fichero llamado `gulpfile.js` en el que vamos a escribir las tareas/rutinas que queremos automatizar.

### 1. Concatenar los dos ficheros css (gulp)

Para concatenar dos ficheros css tenemos que instalar un paquete llamado [gulp-concat-css](https://www.npmjs.com/package/gulp-concat-css)

```bash
npm install --save-dev gulp-concat-css
```

Lo siguiente sera añadir la tarea "**concatCss**" a Gulp para automatizarlo.

```javascript
var concatCss = require('gulp-concat-css');

gulp.task('concatCss', function() {
  return gulp
    .src('src/styles/**/*.css')
    .pipe(concatCss('super.css'))
    .pipe(gulp.dest('dist'));
});
```

Para probar vamos a añadir `minor.css`

![image](/img/14.png)

y vamos a concatenar con `main.css`

![image](/img/13.png)

Ejecutamos el comando `$ gulp concatCss`:

![image](/img/15.png)

Y tendremos como resultado en `dist > super.css`

![image](/img/16.png)

> NOTA: al final del fichero super.css podemos ver en la linea 103 a la 105 la prueba que la tarea ha funcionado exitosamente.

### 2. Minificar css.

### 3. Hacer sourcesmaps del css.

### Lance BrowserSync.

### Investigar sobre paquetes para minificar imágenes y js. (Automatizarlo)

### Investigar la creación de un proyecto Yeoman para Jekyl.

## Bibliografía

- https://git-scm.com/book/es/v1/Empezando-Instalando-Git
- https://github.com/LearnFrontEnd/generator-learnfe
- https://gulpjs.com/
- https://code.visualstudio.com/
