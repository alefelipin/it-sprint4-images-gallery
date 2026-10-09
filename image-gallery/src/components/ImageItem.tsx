

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
      tabIndex={0}
      className={
        isFeatured 
        ? "gallery-image gallery-image--featured lg:col-span-2 lg:row-span-2" 
        : "gallery-image"}
    />   
  )
}

export default ImageItem;