
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
|:---|:---|
|tipo && titulo| Deben de ser únicos en el contenido|

- Errores
|Código|Mensaje|Http|
|:---|:---|:---|
|InvalidBodyException|El título y el tipo deben de ser unicos|422|

- respuesta: HTTP status 200 & message: 'Correcto'
- respuesta con error:  HTTP status 422 & message 'incorrecto'
## Secction API 2
