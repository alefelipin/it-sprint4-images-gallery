import { Button } from "@/components/ui/button"

interface ImageItemProps {
  src: string;
  alt: string;
  isFeatured: boolean;
}

function ImageItem({ src, alt, isFeatured }: ImageItemProps) {
  return (
    <Button
      type="button"
      variant="ghost" 
      className={
        isFeatured 
          ? "p-0 h-auto hover:bg-transparent lg:col-span-2 lg:row-span-2"
          : "p-0 h-auto hover:bg-transparent"
      }
    >
      <img 
        src={src}
        alt={alt}
        className={
          isFeatured 
          ? "gallery-image gallery-image--featured" 
          : "gallery-image"}
      />
    </Button>
  )
}

export default ImageItem;