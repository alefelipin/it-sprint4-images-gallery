# Images Gallery

Galería interactiva de imágenes desarrollada con **React** y **TypeScript** como parte del Sprint 4 del curso de programación de IT Academy.

El proyecto está orientado a practicar conceptos fundamentales de React mediante una galería de fauna chilena, trabajando con componentes reutilizables, props, estado, eventos y actualización inmutable de datos.

## Características

- Galería de imágenes de fauna chilena.
- Diseño responsive mediante clases de Tailwind CSS.
- Primera imagen de la colección mostrada como imagen destacada.
- Componentes reutilizables para cada elemento de la galería.
- Eliminación de imágenes desde la interfaz.
- Confirmación antes de eliminar una imagen mediante `window.confirm()`.
- Actualización inmutable del estado con `filter()`.
- Uso de `event.stopPropagation()` para controlar la propagación de eventos.
- Botón de eliminación con ícono de papelera.
- Tipado de datos y props con TypeScript.
- Texto alternativo (`alt`) para las imágenes.

## Tecnologías

- React
- TypeScript
- Tailwind CSS
- Base UI
- HTML
- CSS
- Git / GitHub

## Estructura principal

```text
image-gallery/
└── src/
    ├── assets/
    │   ├── icons/
    │   │   └── trash-icon.png
    │   └── images/
    │       └── ...
    ├── components/
    │   ├── Gallery.tsx
    │   ├── Gallery.css
    │   └── ImageItem.tsx
    └── types/
        └── image.ts
```

## Modelo de datos

Cada imagen de la galería utiliza la interfaz `GalleryImage`:

```ts
export interface GalleryImage {
  id: string;
  src: string;
  name: string;
}
```

De esta forma, TypeScript garantiza que cada elemento tenga un identificador, una ruta de imagen y un nombre.

## Componentes principales

### `Gallery`

Es el componente encargado de almacenar y gestionar el estado principal de la galería.

Entre sus responsabilidades se encuentran:

- Mantener el array de imágenes mediante `useState`.
- Renderizar los elementos con `map()`.
- Determinar qué imagen aparece como destacada.
- Gestionar la eliminación de imágenes.
- Actualizar el estado de manera inmutable.

La primera posición del array determina la imagen destacada:

```tsx
isFeatured={index === 0}
```

### `ImageItem`

Representa individualmente cada elemento de la galería.

Recibe mediante props la información necesaria para mostrar la imagen y ejecutar las acciones correspondientes.

Entre sus responsabilidades se encuentran:

- Mostrar la imagen.
- Aplicar estilos diferentes cuando la imagen es destacada.
- Mostrar el botón de eliminación.
- Ejecutar el evento de eliminación.
- Evitar la propagación no deseada del evento mediante `event.stopPropagation()`.

## Eliminación de imágenes

La eliminación se gestiona desde el componente que posee el estado.

Ejemplo de actualización inmutable:

```tsx

function handleDelete(id: string) {
    if (window.confirm("¿Eliminar esta imagen?")) {
    setImages(images.filter((image) => image.id !== id));
    }
  };
```

`filter()` crea un nuevo array en lugar de modificar directamente el estado existente.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/alefelipin/it-sprint4-images-gallery.git
```

Entra al proyecto:

```bash
cd it-sprint4-images-gallery/image-gallery
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Después abre en el navegador la dirección que indique la terminal.

## Flujo de trabajo con Git

El proyecto se desarrolla utilizando ramas por funcionalidad.

Ejemplos:

```text
feature/styles
feature/event-handlers
```

Los cambios se integran posteriormente mediante Pull Request.

## Objetivos de aprendizaje

Este proyecto permite practicar:

- Creación y composición de componentes React.
- Props tipadas con TypeScript.
- Estado con `useState`.
- Renderizado de listas con `map()`.
- Manejo de eventos.
- Comunicación entre componentes padre e hijo.
- Actualizaciones inmutables del estado.
- Diseño responsive.
- Gestión de ramas y Pull Requests con Git y GitHub.

## Autor

Proyecto desarrollado como ejercicio práctico del Sprint 4 de IT Academy.