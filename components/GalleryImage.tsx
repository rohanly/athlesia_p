import React from "react";

interface galleryItemProps {
  imageData: {
    img?: string;
    title?: string | undefined;
  };
}

const GalleryImage: React.FC<galleryItemProps> = ({ imageData }) => (
  <div key={imageData.title} className="relative">
    <img src={imageData.img} alt="" />
    <h3 className="absolute bottom-0 w-full text-center text-[#fff] text-xs md:text-2xl leading-10">
      {imageData.title}
    </h3>
  </div>
);

export default GalleryImage;
