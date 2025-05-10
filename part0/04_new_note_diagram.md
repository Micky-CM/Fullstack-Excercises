sequenceDiagram
    participant navegador
    participant servidor

    Note over navegador: El usuario escribe una palabra\ny hace clic en "Save"

    navegador->>servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate servidor
    Note over servidor: El servidor guarda la palabra como un\nelemento de lista y redirige al cliente
    servidor-->>navegador: HTTP 302 Redirección a '/notes'
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate servidor
    servidor-->>navegador: Documento HTML con los elementos actualizados
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate servidor
    servidor-->>navegador: main.css
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate servidor
    servidor-->>navegador: main.js
    Note over navegador: El navegador ejecuta código JS que\nsolicita datos JSON al servidor
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate servidor
    servidor-->>navegador: Datos JSON actualizados con la nuevo elemento
    deactivate servidor

    Note over navegador: El navegador renderiza 'notes' \nincluyendo el nuevo elemento