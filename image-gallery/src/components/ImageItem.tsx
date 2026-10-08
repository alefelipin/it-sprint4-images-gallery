
interface ImageItemProps {
  src: string;
  alt: string;
  isFeatured: boolean;
}

function ImageItem({ src, alt, isFeatured }: ImageItemProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className={
        isFeatured 
        ? "gallery-image gallery-image--featured" 
        : "gallery-image"}
    />
  )
}

export default ImageItem;