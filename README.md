# La Ronda 🧉 — Guía para publicar tu web

Web de una sola página hecha con **HTML + CSS + un poco de JavaScript**.
Archivos del proyecto:

| Archivo | Qué es |
|---|---|
| `index.html` | Todo el contenido de la página |
| `style.css` | Colores, fuentes y diseño |
| `script.js` | El menú hamburguesa 📱 y las animaciones |
| `thanks.html` | Página de "gracias" después de un pedido |
| `.gitignore` | (no tocar) le dice a GitHub qué ignorar |

> 💡 Las **imágenes NO están en estos archivos** (por eso el proyecto es liviano).
> Están en internet (mira la sección *"¿Dónde están las imágenes?"* abajo). Ya funcionan solas.

---

## 1) Subir el código a TU GitHub

1. Entra a https://github.com e inicia sesión (o crea tu cuenta).
2. Arriba a la derecha: **+ → New repository**. Ponle un nombre (ej: `la-ronda`), déjalo **Public** y crea.
3. En el repo nuevo: **Add file → Upload files** y arrastra los archivos
   (`index.html`, `style.css`, `script.js`, `thanks.html`, `.gitignore`, `README.md`).
4. Abajo, clic en **Commit changes**. ✅ Todos los commits quedan **a tu nombre**.

## 2) Encender la página (GitHub Pages)

1. En tu repo: **Settings → Pages**.
2. En *Source* elige **Deploy from a branch**.
3. *Branch*: **main** y carpeta **/ (root)** → **Save**.
4. Espera ~1 minuto. Tu web quedará en:
   **`https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`**

---

## 3) ✉️ Cambiar el email del formulario (¡IMPORTANTE!)

El formulario de pedidos envía los correos a un email. Ahora apunta al de Andrés — **cámbialo por el tuyo**.

1. Abre **`index.html`** (en GitHub puedes hacer clic en el archivo y el lápiz ✏️ para editar).
2. Busca esta línea (sección *Order*):
   ```html
   <form class="order-form" action="https://formsubmit.co/andres.campuzano@icloud.com" method="POST">
   ```
3. Reemplaza `andres.campuzano@icloud.com` por **TU email**.
4. (Recomendado) Unas líneas más abajo busca `name="_next"` y cambia la URL por la de **tu** página de gracias, ej:
   ```html
   <input type="hidden" name="_next" value="https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/thanks.html">
   ```
   Si no lo cambias, después de un pedido te manda a la página de gracias de Andrés (funciona, pero mejor que sea la tuya).
5. **Commit changes** para guardar.

## 4) ✅ Activar el formulario (recibir los pedidos)

1. Cuando ya esté tu email puesto y la web publicada, **abre tu web y envía el formulario UNA vez** (puedes poner datos de prueba).
2. FormSubmit te enviará un **email de confirmación** → ábrelo y haz clic en el **link de activación**.
   - ⚠️ Revisa la carpeta de **spam / correo no deseado** si no lo ves. Marca el correo como *"No es spam"* para que los próximos lleguen bien.
3. ¡Listo! Desde ahí, **todos los pedidos llegan a tu correo**.

## 5) 🧹 Limpiar el código (opcional)

Dentro de `index.html`, en la sección *Order*, hay **comentarios largos** (texto entre `<!--` y `-->` con instrucciones). No afectan la web; si quieres dejar el código más prolijo, puedes **borrarlos**.

---

## ¿Dónde están las imágenes? 🖼️

- Las imágenes están guardadas en **Vercel Blob**, dentro de **tu propia cuenta de Vercel** (`valeria012303@gmail.com`), en un almacén (store) llamado **`la-ronda-web`**.
- Sus direcciones (`https://flgwtpu6ecosr1ha.public.blob.vercel-storage.com/...`) **ya están escritas** en `index.html`, `style.css` y `thanks.html`. Son **públicas**, así que se ven solas en cualquier lado — **no tienes que hacer nada**.
- Por eso el repo de GitHub no necesita ninguna carpeta de fotos. 🎉

**Si algún día quieres cambiar una imagen:**
1. Entra a https://vercel.com → **Storage → `la-ronda-web`**.
2. Sube la nueva imagen y copia su URL ("Copy URL").
3. Reemplaza la URL vieja por la nueva en el código (`index.html` / `style.css`).

---

## ✔️ Checklist rápido

- [ ] Subir los archivos a tu repo de GitHub
- [ ] Activar GitHub Pages
- [ ] Cambiar el email del formulario por el tuyo
- [ ] (opcional) Cambiar la URL de `_next` a tu web
- [ ] Enviar el formulario una vez y **confirmar el email**
- [ ] (opcional) Borrar los comentarios largos del código
