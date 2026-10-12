import { Button } from "@base-ui/react";
import type { GalleryImage } from "../types/image";

interface ImageItemProps {
  image: GalleryImage;
  isFeatured: boolean;
  onDelete: (id: string) => void;
}

function ImageItem({ image, isFeatured = false, onDelete }: ImageItemProps) {
  return (
    <article>
      <img 
        src={image.src}
        alt={image.name}
        tabIndex={0}
        className={
          isFeatured 
          ? "gallery-image gallery-image--featured lg:col-span-2 lg:row-span-2" 
          : "gallery-image"}
      /> 

      <Button 
        className="bg-red-500 text-white px-2 py-0.5 text-xs rounded hover:bg-red-700"
        onClick={(event) => {
        event.stopPropagation();
        onDelete(image.id)}
        }
      >
        Delete
      </Button>
    </article>
  )
}

export default ImageItem;