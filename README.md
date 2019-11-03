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

Ejetamos el comando:

```bash
yo learnfe
```

![image](/img/09.png)

Tras ejecutarlo se van a crear algunos directorios y ficheros que usaremos luego.

![image](/img/11.png)

##

---

## Bibliografía

- https://git-scm.com/book/es/v1/Empezando-Instalando-Git
- https://github.com/LearnFrontEnd/generator-learnfe
- https://gulpjs.com/
- https://code.visualstudio.com/
