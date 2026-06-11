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

## 📋 Poner el formulario de pedido (Google Form)

1. Entra a https://forms.google.com y crea tu formulario (campos: Name/이름, Phone/연락처, Email/이메일, Product/제품, Quantity/수량, Address/배송 주소, Message/요청사항).
2. Arriba a la derecha: **Send (보내기)** → pestaña **`< >`** (Embed / 삽입).
3. Copia el `<iframe>`.
4. En `index.html` busca `===== CÓMO PONER TU GOOGLE FORM AQUÍ =====` (sección Order).
5. Borra el bloque `.form-placeholder` y pega tu `<iframe>` ahí. Ponle `class="order-iframe"` para que se vea bonito.

## 🚀 Subir a internet (Vercel)

1. Sube esta carpeta a GitHub (con Visual Studio: Source Control → publicar).
2. En https://vercel.com inicia sesión, **Add New → Project**, elige el repo.
3. Como no hay framework, deja todo por defecto (Framework Preset: **Other**) y **Deploy**.
4. Te da un link `https://...vercel.app` → ese es el que le pasas a la profe. ✅

### Sobre las imágenes
Por ahora están en la carpeta `images/` (locales). Si más adelante las mueves a otro lado (Vercel u otro storage) y te dan una URL, solo cambia el `src="images/..."` por esa URL en `index.html`. Nada más cambia.
