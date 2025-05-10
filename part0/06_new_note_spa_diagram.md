sequenceDiagram
    participant navegador
    participant servidor

    Note over navegador: El usuario escribe una palabra y hace clic en "Save"

    note right of navegador: El navegador genera un objeto con la nota y usa fetch para enviarla al servidor
    navegador->>servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate servidor
    Note over servidor: El servidor guarda la nota y responde con status 201 Created
    servidor-->>navegador: Respuesta JSON con confirmación de la nota
    deactivate servidor

    Note over navegador: El navegador actualiza la interfaz dinámicamente\nsin recargar la página, mostrando la nueva nota