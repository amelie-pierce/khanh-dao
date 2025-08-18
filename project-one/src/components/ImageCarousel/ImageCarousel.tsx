import { ArrowDown, ArrowUp } from "@/assets/icons";
import { useEffect, useState } from "react";

import { combineClassNames } from "@/utils/common";
import { nanoid } from "nanoid";
import "./ImageCarousel.scss";

const TEMP = [
  { src: "images/ferrero.png", selected: true },
  { src: "images/ferrero_2.png", selected: false },
  { src: "images/ferrero.png", selected: false },
  { src: "images/ferrero_2.png", selected: false },
  { src: "images/ferrero.png", selected: false },
  { src: "images/ferrero_2.png", selected: false },
];

const ImageCarousel = () => {
  const [imageList, setImageList] = useState<
    {
      id: string;
      src: string;
      selected: boolean;
    }[]
  >([]);

  const selectedImage = imageList.find((img) => img.selected);

  const onSelectImage = (selectedImage: string) => {
    setImageList((prev) =>
      prev.map((img) => ({ ...img, selected: img.id === selectedImage }))
    );
  };

  const onNavigateImage = (isUp: boolean) => {
    // get current selected index
    const currentIndex = imageList.findIndex((e) => e.selected);

    const newList = imageList.map((img, index) => {
      let newSelectedIndex = currentIndex + (isUp ? -1 : +1);

      // Validate the new index is
      if (newSelectedIndex < 0) {
        newSelectedIndex = imageList.length - 1;
      }
      if (newSelectedIndex === imageList.length) {
        newSelectedIndex = 0;
      }

      if (index === newSelectedIndex) {
        return { ...img, selected: true };
      }
      return { ...img, selected: false };
    });

    setImageList(newList);
  };

  useEffect(() => {
    const newImageList = TEMP.map((img) => ({
      ...img,
      id: nanoid(),
    }));

    setImageList(newImageList);
  }, []);

  const renderImageList = () => {
    return imageList.map((img) => (
      <div
        key={img.id}
        className={combineClassNames(
          "image-swiper",
          `__image-wrapper image-swiper__image-wrapper${
            img.selected ? "--selected" : ""
          }`
        )}
        onClick={() => onSelectImage(img.id)}
      >
        <img src={img.src} />
      </div>
    ));
  };

  return (
    <div className="carousel-wrapper">
      <div className="image-swiper">
        <div onClick={() => onNavigateImage(true)}>
          <ArrowUp size={32} />
        </div>
        <div className={"image-swiper__container"}>{renderImageList()}</div>
        <div
          onClick={() => {
            onNavigateImage(false);
          }}
        >
          <ArrowDown size={32} />
        </div>
      </div>
      <div className="carousel-image">
        <img src={selectedImage?.src} />
      </div>
    </div>
  );
};

export default ImageCarousel;
