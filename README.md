# ♻️ ReCicla — Educación Ambiental y Reciclaje

Sitio web educativo sobre reciclaje y cuidado del medio ambiente, creado como proyecto escolar.

## 🎯 Objetivo

Enseñar a clasificar residuos, entender el impacto ambiental de no reciclar y promover
hábitos sostenibles a través de una experiencia interactiva.

## 📁 Estructura del proyecto

```
proyecto-reciclaje/
├── index.html          # Página principal con todas las secciones
├── css/
│   └── styles.css      # Estilos y diseño responsivo
├── js/
│   └── script.js        # Buscador/filtro, quiz y formulario
└── README.md            # Este archivo
```

## ✅ Secciones incluidas

| Sección | Descripción |
|---|---|
| Inicio | Presentación del proyecto |
| Tipos de residuos | Papel, plástico, orgánico, vidrio, metal y peligrosos |
| Clasificación | Buscador/filtro en JavaScript para saber en qué contenedor va cada material |
| Impacto | Datos sobre el efecto ambiental del reciclaje |
| Las 3R | Reduce, reutiliza, recicla |
| Quiz | Autoevaluación con puntaje automático |
| Contacto | Formulario de contacto (validación en el cliente) |

## 🛠️ Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — diseño responsivo, sin frameworks
- **JavaScript (vanilla)** — buscador/filtro dinámico, lógica del quiz y validación de formulario

## 🎨 Sistema de diseño

El color de cada elemento (etiquetas, tarjetas, chips del filtro) corresponde al contenedor
de reciclaje real al que pertenece el material: azul (papel/vidrio), amarillo (plástico/metal),
verde (orgánico) y gris (peligroso/general). Esto refuerza visualmente el aprendizaje.

## 🚀 Cómo verlo localmente

1. Descarga o clona la carpeta `proyecto-reciclaje`.
2. Abre `index.html` en cualquier navegador. No requiere servidor ni instalación.

## 🌐 Publicación en GitHub Pages

```bash
git init
git add .
git commit -m "Primer commit: estructura base del sitio"
git branch -M main
git remote add origin https://github.com/tu-usuario/proyecto-reciclaje.git
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Branch: main → carpeta / (root)** y guardar.
El sitio quedará publicado en `https://tu-usuario.github.io/proyecto-reciclaje/`.

## 📌 Próximos pasos sugeridos

- Agregar más materiales a la lista del buscador
- Conectar el formulario de contacto a un servicio real (ej. Formspree)
- Añadir imágenes propias de puntos de reciclaje locales