# Sabor&Arte

Landing gastronómica premium construida con Angular standalone.

## Ejecutar

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

El proyecto incluye un registro alternativo en `.npmrc` porque la red actual devuelve 403 para los paquetes `@angular` desde npmjs.org.

## Personalización rápida

- WhatsApp: cambia `whatsappNumber` en `src/app/app.component.ts`.
- Datos de contacto y horarios: `src/app/app.component.html`.
- Platos, precios, galería y testimonios: `src/app/app.component.ts`.
- Colores globales: variables al inicio de `src/styles.css`.

Las imágenes se sirven optimizadas desde Unsplash; para producción pueden reemplazarse por fotografías propias del restaurante conservando las mismas proporciones.
