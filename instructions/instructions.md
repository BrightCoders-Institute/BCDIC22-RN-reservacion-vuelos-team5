![BrightCoders Logo](../img/logo.png)

- [App reservación de vuelos](#app-reservación-de-vuelos)
  - [Objetivos](#objetivos)
  - [Instrucciones](#instrucciones)
  - [Entregables](#entregables)
  - [Puntos](#puntos)
  - [Tecnologías](#tecnologías)
  - [Requerimientos funcionales](#requerimientos-funcionales)
  - [Requerimientos no funcionales](#requerimientos-no-funcionales)
  - [Diseño](#diseño)
  
# App reservación de vuelos

  Atributo |  Valor
 --- | --- |
 Tipo | Colaborativo
 Estrategia | Mob Programming
 Modo | Síncrono
 Dedicación | 60 - 80 horas
 Duración | 4 Sprints (20 días)

## Objetivos

- Introducir en la programación con react native:
  - Manejo de estados
  - Conexión a bases de datos
  - Autenticación de usuarios
  - Operaciones CRUD

## Instrucciones

Utilizando react native desarrollar la aplicación móvil de reservación de vuelos. Antes de iniciar a codificar debes:

- Crear y configurar el proyecto de GitHub [(ver instrucciones)](project-planner.md)
- Para el modelado de la base de datos puedes utilizar herramientas como [dbdiagram.io](https://dbdiagram.io/home) ó similares.
  
Para codificar el proyecto deberás seguir el  [flujo de desarrollo ágil que se detalla aquí](workflow.md)

## Entregables

- Código fuente en este repositorio
- Archivo README.md actualizado
- La versión final del código debe estar en la rama master
- Planner SCRUM

## Puntos

- Número de commits como primer autor
- Número de commits como co-author
- Frecuencia de los commits (# de commits realizados en días diferentes)
- Tamaño de los commits (líneas de código agregadas)

## Tecnologías

- Javascript ó Typescript
- React Native
- ESLint
- Redux
- Firebase
- Jest
- Codacy, CodeClimate, CodeCov

## Requerimientos funcionales

La empresa ABC Corp requiere una App para que sus clientes puedan registrar las reservaciones de sus vuelos. 
  
La aplicación deberá:
  
- Permitir a los nuevos usuarios registrarse:
  - El usuario podrá registrarse utilizando nombre, correo y clave ó una cuenta de Google
  - Los datos de registro deben guardarse en firebase
  - El formulario de registro debe contar con validaciones
  - El diseño del formulario debe apegarse al proporcionado
  
- Permitir a los usuarios registrados iniciar sesión:
  - El usuario podrá iniciar sesión utilizando correo y clave o su cuenta de Google, dependiendo de la forma en la que realizó su registro.
  - El inicio de sesión debe realizarse accediendo o verificando los datos almacenados en firebase.
  - El formulario de inicio de sesión debe contar con validaciones
  - El diseño del formulario debe apegarse al proporcionado
  
- Permitir a los usuarios ver las reservaciones de sus vuelos:
  - El usuario podrá ver un listado con la información de sus reservaciones de vuelos
  - La información debe recuperarse desde firebase
  - El diseño del listado debe apegarse al proporcionado
  
- Permitir agregar nuevas reservaciones
  - El usuario deberá indiciar el origen, destino, fecha y número de pasajeros
  - La información debe guardarse en firebase
  - El diseño para la nueva reservación debe apegarse al proporcionado
  
 Algunos de los requerimientos sun un tanto genéricos, es decir no brindan el suficiente detalle, el tratamiento que se debe dar al proyecto es el de un MVP, es decir no es necesario que el funcionamiento o el cumplimiento a los requerimientos sea el más complejo, que cumpla con lo mínimo necesario para que cumpla su función

## Requerimientos no funcionales

- Base de datos
  - información se guardará en firebase ó similar
- Calidad
  - Utilizar un estilo de código estandarizado (revisado por Eslint)
  - Incluir pruebas unitarias
  - Puntuación **A** obtenida en CodeClimate ó equivalente
- Ejecución 
  - Puede ejecutarse en Android o iOs
- Diseño
  - Debe ser lo más cercano posible al proporcionado
- Código fuente
  - Orientado a Objetos
  - Métodos pequeños
  - Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)
- Manejo del estado
  - Redux para el manejo del estado de la App

## Diseño

En la carpeta [design](/design) de este repositorio se encuentra el diseño solicitado en formato PNG e [InVision](https://www.invisionapp.com/)
