
# Back-end

Actividad de back-end equipo 2 clase LuJu
## API

### CRUD CONTENIDO
#### Create contenido 
Servicio para ingresar un libro o una canción a la base de datos.

- Endpoint `/agregarContenido`
- Método `POST`
- body 
```javascript
{
    "tipo": "cancion",
    "titulo": "calladita",
    "autor": "Bad Bunny",
    "año": 2019,
    "genero": "reggaeton",
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|tipo && titulo| Deben de ser únicos en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de ser unicos|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'

#### Read contenido 
Servicio para obtener todo el contenido en la base de datos

- Endpoint `/obtenerContenido`
- Método `POST`
- body 
```javascript
{
    "tipo": "cancion",
    "titulo": "calladita",
    "autor": "Bad Bunny",
    "año": 2019,
    "genero": "reggaeton",
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|tipo && titulo| Deben de ser únicos en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de ser unicos|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'

#### Create contenido 
Servicio para ingresar un libro o una canción a la base de datos.

- Endpoint `/agregarContenido`
- Método `POST`
- body 
```javascript
{
    "tipo": "cancion",
    "titulo": "calladita",
    "autor": "Bad Bunny",
    "año": 2019,
    "genero": "reggaeton",
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|tipo && titulo| Deben de ser únicos en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de ser unicos|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'

#### Create contenido 
Servicio para ingresar un libro o una canción a la base de datos.

- Endpoint `/agregarContenido`
- Método `POST`
- body 
```javascript
{
    "tipo": "cancion",
    "titulo": "calladita",
    "autor": "Bad Bunny",
    "año": 2019,
    "genero": "reggaeton",
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|tipo && titulo| Deben de ser únicos en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de ser unicos|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'

### CRUD PARA MANEJAR EL CONTENIDO A UNA PLAYLIST ESPECIFICA

#### Create playlist
Servicio para ingresar un libro o una canción a una playlist nueva.

- Endpoint `/agregaraLaPlaylist`
- Método `POST`
- body 
```javascript
{
    "tipo": "libro",
    "titulo": "Los juegos del hambre",
    "playlist": "prueba"
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|tipo && titulo| Deben existir en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de existir dentro del contenido|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'

#### Read playlist 
Servicio para ingresar un libro o una canción a la base de datos.

- Endpoint `/Playlist/:playlist`
- Método `GET`
- body 
```javascript
{
    
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|playlist| Deben de existir la playlist|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|La playlist debe existir|422|

- respuesta: HTTP status 200 && muestra los elementos de la playlist
- respuesta con error:  HTTP status 422 & message 'incorrecto'

#### Update playlist 
Servicio para ingresar un libro o una canción a la base de datos.

- Endpoint `/actualizarPlaylist`
- Método `POST`
- body 
```javascript
{
    "playlist": "prueba",
    "titulo" : "harry potter"
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|playlist && titulo| Deben de ser existir en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|La playlist debe de existir dentor de nuestro contenido y el titulo debe existir dentro de la playlist|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'

#### Delete playlist 
Servicio para ingresar un libro o una canción a la base de datos.

- Endpoint `/agregarContenido`
- Método `POST`
- body 
```javascript
{
    "tipo": "cancion",
    "titulo": "calladita",
    "autor": "Bad Bunny",
    "año": 2019,
    "genero": "reggaeton",
}
```

- Validación

|campo|Validación|
|:--------|:---------|
|tipo && titulo| Deben de ser únicos en el contenido|

- Errores

|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de ser unicos|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'
