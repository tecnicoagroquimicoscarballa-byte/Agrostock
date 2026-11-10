# AgroStock 3.0 — PWA local

Aplicación de gestión agrícola para 4 técnicos (hasta 100 clientes por técnico). Control de inventarios por cliente, compras, tratamientos, fertilizantes, enmiendas, difusores, planes de abonado, visitas, pedidos y alertas de seguimiento.

## Instalación en Android y iOS

1. Publicar mediante **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
2. La dirección esperada, una vez GitHub Pages esté habilitado, es `https://tecnicoagroquimicoscarballa-byte.github.io/Agrostock/`.
3. Android: abrir en Chrome y pulsar el menú → «Instalar aplicación» o «Añadir a pantalla de inicio».
4. iPhone/iPad: abrir en Safari → Compartir → «Añadir a pantalla de inicio».
5. Abrir la app y registrar un **cliente de prueba**. Comprobar que permanece tras cerrar y volver a abrir.
6. Desde «Datos y copias» exportar una copia de seguridad, comprobar su restauración antes de introducir datos reales.

## Importante: privacidad, coste y límites

- GitHub aloja **solo el código estático**, no las fichas, albaranes ni datos de los agricultores, que la aplicación almacena en IndexedDB del dispositivo.
- **No existe sincronización automática** entre teléfonos y tablets. Exportar/importar clientes con precaución.
- Los avisos por intervalo se muestran al abrir la app; no se envían notificaciones con la app cerrada.
- El dictado por voz depende de la plataforma y puede requerir conexión.
- Las fotos se adjuntan y archivan; **no hay OCR automático fiable** en esta versión.
- La lectura del cuaderno reglamentario, el almacenamiento y la corrección de registros requieren validación antes de uso real.
- **GitHub Pages con plan GitHub Free requiere repositorio público**. No hagas público ningún dato real de clientes ni secretos en GitHub.
- Las actualizaciones del código no sincronizan los datos locales entre dispositivos. Las copias de seguridad son indispensables.
