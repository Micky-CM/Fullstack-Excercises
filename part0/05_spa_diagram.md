sequenceDiagram
    participant navegador
    participant servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate servidor
    servidor-->>navegador: Documento HTML base de la SPA
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate servidor
    servidor-->>navegador: main.css
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate servidor
    servidor-->>navegador: spa.js
    Note over navegador: El navegador ejecuta el JS de la SPA\nque solicita los datos JSON al servidor
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate servidor
    servidor-->>navegador: Datos JSON con las notas existentes
    deactivate servidor

    Note over navegador: El navegador renderiza dinámicamente las notas\nusando el contenido del JSON