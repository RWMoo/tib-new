import React from "react";
import Image from "next/image";
import SimpleReactLightbox, {SRLWrapper} from "simple-react-lightbox";

const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
};

const SelectedImage = ({ photo, margin, direction, top, left }) => {
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const options = {
    buttons: {
      showDownloadButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
    caption: {
      showCaption: false
    }
  };
  return (
    <div
      key={photo.id}
      style={{
        margin,
        height: photo.height,
        width: photo.width,
        ...cont,
      }}
    >
      <SimpleReactLightbox >
        <SRLWrapper options={options}>
          <div
            style={{ height: photo.height, width: photo.width }}
            className={"relative"}
          >
            <Image
              src={photo.src}
              layout={"fill"}
              objectPosition={"center"}
              objectFit={"cover"}
              alt={photo.alt}
            />
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
};

export default SelectedImage;
