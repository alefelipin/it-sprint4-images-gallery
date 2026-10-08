import carpintero from "../assets/images/carpintero.png";
import chucao from "../assets/images/chucao.png";
import chungungo from "../assets/images/chungungo.png";
import cisne from "../assets/images/cisne.png";
import condor from "../assets/images/condor.png";
import flamenco from "../assets/images/flamenco.png";
import guanaco from "../assets/images/guanaco.png";
import huemul from "../assets/images/huemul.png";
import loro from "../assets/images/loro.png";
import pinguino from "../assets/images/pinguino.png";
import pudu from "../assets/images/pudu.png";
import puma from "../assets/images/puma.png";
import queltehue from "../assets/images/queltehue.png";
import zorro from "../assets/images/zorro.png";
import ImageItem from "./ImageItem";
import type { GalleryImage } from "../types/image";
import { useState } from "react";
import "./Gallery.css";

function Gallery() {

  const [images] = useState<GalleryImage[]> ([
{
  id: "1",
  src: carpintero,
  name: "Carpintero negro"
},
{
  id: "2",
  src: chucao,
  name: "Chucao"
},
{
  id: "3",
  src: chungungo,
  name: "Chungungo"
},
{
  id: "4",
  src: cisne,
  name: "Cisne de cuello negro"
},
{
  id: "5",
  src: condor,
  name: "Cóndor andino"
},
{
  id: "6",
  src: flamenco,
  name: "Flamenco chileno"
},
{
  id: "7",
  src: guanaco,
  name: "Guanaco"
},
{
  id: "8",
  src: huemul,
  name: "Huemul"
},
{
  id: "9",
  src: loro,
  name: "Loro choroy"
},
{
  id: "10",
  src: pinguino,
  name: "Pingüino de Humboldt"
},
{
  id: "11",
  src: pudu,
  name: "Pudú"
},
{
  id: "12",
  src: puma,
  name: "Puma andino"
},
{
  id: "13",
  src: queltehue,
  name: "Queltehue"
},
{
  id: "14",
  src: zorro,
  name: "Zorro culpeo"
},
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md: grid-cols-4 lg: grid-cols-5 gap-4">
        {images.map((image, index) => (
        <ImageItem
          key={image.id}
          src={image.src}
          alt={image.name}
          isFeatured={index === 0}
        />
      ))}
      </div>  
    </div>
  )
}

export default Gallery;