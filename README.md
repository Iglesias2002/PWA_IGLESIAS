# MDTel _**Dashboard**_ with _**WebPhone**_ project

## Objetivo del proyecto:

    Crear un Panel de Administración para el usuario + un Webphone que permita establecer y recibir llamadas, así como otra serie de funcionalidades muy sencillas en esta fase 0 del proyecto.

## Instalación

### Primero: Instala node.js

En primer lugar necesitas instalar NODE en caso de que no lo tengas en tu máquina o servidor
Si tu servidor es Ubuntu: https://www.digitalocean.com/community/tutorials/como-instalar-node-js-en-ubuntu-18-04-es
Si usas otra distribución o sistema operativo puedes buscar en Internet "Cómo instalar NODE.JS", es extremadamente sencillo.

### Segundo: Instala todas las dependencias

```
npm i
```

## Lanzar

### Tercero: Para lanzar el proyecto ejecuta

```
npm start
```

### Abrir proyecto en el navegador

Puedes ir a la siguiente URL para acceder al proyecto

```
localhost:8080
```

(El puerto cambiará automáticamente si tienes ese ocupado)

## Para construir los recursos de producción

```
npm run-script build
```

Quedarán en el directorio dist, bastará con servirlos después con un servidor web.

## Configuración

Existen algunos parámetros de configuración para el proyecto, en el fichero:

```js
VivaitConfig.js
```

## WebPhone & AuthComponent

En la carpeta External están incluídas las generaciones de 2 webcomponents necesarios para el buen funcionamiento del Dashboard: WebPhone y AuthComponent,

Puedes encontrar información a adicional sobre ellos. El código fuente de los mismos se entrega aparte y en este proyecto se incluye simplemente empaquetado.

### External/WebPhoneExtend

En esta carpeta hemos incluído algunos ficheros que están en el proyecto fuente de WebPhoneExtend y que son necesarios para poder extender mejor y conectar con algunas funcionalidades del WebPhone, como por ejemplo la selección del dispositivo de entrada y salida en el Panel, o el traspaso de información entre la Agenda.

---

## Additional documentation:

### Janus

[Janus WebRTC Server](https://janus.conf.meetecho.com/) provides a [JS API](https://janus.conf.meetecho.com/docs/JS.html) (_**Janus-GateWay**_) through which we connect the users.

### Dependencies

- [React](https://reactjs.org/)
- [Janus-GateWay](https://janus.conf.meetecho.com/docs/JS.html)
- [eslint](https://eslint.org/)