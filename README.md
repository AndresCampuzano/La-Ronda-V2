# La Ronda 🧉 — Mate Shop

Página web simple de una sola página (single page), hecha con **HTML + CSS + un poquito de JavaScript**.
Texto bilingüe: inglés arriba, coreano abajo.

## 📁 Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Todo el contenido de la página (las secciones) |
| `style.css` | Los colores, fuentes y diseño |
| `script.js` | El menú hamburguesa 🍔 del celular |
| `images/` | Las fotos (ya optimizadas para que carguen rápido) |

## ▶️ Cómo verla en tu compu

Doble clic en **`index.html`** → se abre en el navegador. Listo.

## ✏️ Cómo cambiar textos

Abre `index.html` en Visual Studio Code. Cada texto está entre etiquetas, por ejemplo:

```html
<h2>About La Ronda</h2>
<p class="en">English text...</p>   <!-- inglés -->
<p class="kr">한국어 텍스트...</p>      <!-- coreano -->
```

Cambia lo que está **entre** las etiquetas. ¡No borres las `<p>` ni las `class`!

## 🎨 Cambiar colores

En `style.css`, arriba de todo está la paleta (`:root`). Cambia el código de color (ej. `#a6743f`) y se actualiza en toda la página.

## 📬 Formulario de pedido (FormSubmit.co)

El formulario de la sección **Order** ya está hecho y se ve con el estilo de la marca.
Envía los pedidos a tu email. **No necesita cuenta ni código de servidor.** Para activarlo:

1. En `index.html`, sección Order, busca:
   `action="https://formsubmit.co/CAMBIA-ESTO@gmail.com"`
   y reemplaza `CAMBIA-ESTO@gmail.com` por **tu email real**.
2. Sube el sitio a internet (Vercel) y **envía el formulario una vez** desde la página.
3. FormSubmit te manda un email de confirmación → haz clic en el link. ✅ Desde ahí todos los pedidos llegan a tu correo.

**🔒 Privacidad (recomendado):** ese email de confirmación incluye una *string aleatoria*
(ej. `formsubmit.co/abc123xyz`). Reemplaza tu email en el `action` por esa string para que
tu correo **no quede visible** en el código.

**Página de gracias (opcional):** ya existe `thanks.html`. Después de subir el sitio, en
`index.html` descomenta la línea `_next` y pon tu link, ej:
`<input type="hidden" name="_next" value="https://TU-SITIO.vercel.app/thanks.html">`

## 🚀 Subir a internet (Vercel)

1. Sube esta carpeta a GitHub (con Visual Studio: Source Control → publicar).
2. En https://vercel.com inicia sesión, **Add New → Project**, elige el repo.
3. Como no hay framework, deja todo por defecto (Framework Preset: **Other**) y **Deploy**.
4. Te da un link `https://...vercel.app` → ese es el que le pasas a la profe. ✅

### Sobre las imágenes
Por ahora están en la carpeta `images/` (locales). Si más adelante las mueves a otro lado (Vercel u otro storage) y te dan una URL, solo cambia el `src="images/..."` por esa URL en `index.html`. Nada más cambia.
