# Images Gallery

Interactive image gallery developed with **React** and **TypeScript** as part of Sprint 4 of the IT Academy programming course.

The project is designed to practice fundamental React concepts through a Chilean wildlife gallery, working with reusable components, props, state, events, and immutable state updates.

## Preview

![Image Gallery preview](../itacademy-projects/sprint-4/it-sprint4-images-gallery/image-gallery/src/assets/images/gallery-preview.png)

## Features

- Chilean wildlife image gallery.
- Responsive design using Tailwind CSS utility classes.
- The first image in the collection is displayed as the featured image.
- Reusable components for each gallery item.
- Image deletion directly from the interface.
- Confirmation before deleting an image using `window.confirm()`.
- Immutable state updates with `filter()`.
- Use of `event.stopPropagation()` to control event propagation.
- Delete button with a trash icon.
- Type-safe data and props with TypeScript.
- Alternative text (`alt`) for images.

## Technologies

- React
- TypeScript
- Tailwind CSS
- Base UI
- HTML
- CSS
- Git / GitHub

## Main Project Structure

```text
image-gallery/
├── docs/
│   └── gallery-preview.png
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

## Data Model

Each gallery image uses the `GalleryImage` interface:

```ts
export interface GalleryImage {
  id: string;
  src: string;
  name: string;
}
```

This allows TypeScript to ensure that every gallery item has an identifier, an image source, and a name.

## Main Components

### `Gallery`

This component stores and manages the main gallery state.

Its responsibilities include:

- Keeping the images array in state using `useState`.
- Rendering gallery items with `map()`.
- Determining which image is featured.
- Managing image deletion.
- Updating state immutably.

The first position in the array determines the featured image:

```tsx
isFeatured={index === 0}
```

### `ImageItem`

This component represents an individual gallery item.

It receives the information required to display the image and execute its actions through props.

Its responsibilities include:

- Displaying the image.
- Applying different styles when the image is featured.
- Displaying the delete button.
- Executing the delete event.
- Preventing unwanted event propagation with `event.stopPropagation()`.

## Image Deletion

Image deletion is managed by the component that owns the state.

Example of an immutable update:

```tsx
function handleDelete(id: string) {
  if (window.confirm("Are you sure you want to delete this image?")) {
    setImages(images.filter((image) => image.id !== id));
  }
}
```

`filter()` creates a new array instead of directly modifying the existing state.

## Installation

Clone the repository:

```bash
git clone https://github.com/alefelipin/it-sprint4-images-gallery.git
```

Enter the project directory:

```bash
cd it-sprint4-images-gallery/image-gallery
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Git Workflow

The project is developed using feature branches.

Examples:

```text
feature/styles
feature/event-handlers
```

Changes are later integrated through Pull Requests.

## Learning Objectives

This project is used to practice:

- Creating and composing React components.
- Typing props with TypeScript.
- Managing state with `useState`.
- Rendering lists with `map()`.
- Handling events.
- Communication between parent and child components.
- Immutable state updates.
- Responsive design.
- Managing branches and Pull Requests with Git and GitHub.

## Author

Project developed as a practical exercise for Sprint 4 of IT Academy.