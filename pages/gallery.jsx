import Layout from "../components/layout";
import Gallery from "react-photo-gallery";
import SelectedImage from "../components/SelectedImage";
import React, {useCallback} from "react";
import excavator from "../public/images/gallery/excavator.webp";
import grader from "../public/images/gallery/grader.webp";
import harmer_nrg from "../public/images/gallery/harmer-nrg.webp";
import harmer_nrg_tree from "../public/images/gallery/harmer-nrg-tree.webp";
import josh_milling_keyway from "../public/images/gallery/josh-milling-keyway.webp";
import laser_alignment from "../public/images/gallery/laser-alignment.webp";
import machines from "../public/images/gallery/machines.webp";
import rob_lincoln_craning_sfm from "../public/images/gallery/rob-lincoln-craning-sfm.webp";
import sb_on_connie_walking from "../public/images/gallery/sb-on-connie-walking-wave-hill-steers.webp";
import thegang from "../public/images/gallery/thegang.webp";
import call_to_action from "../public/images/tib photos/shutterstock_747391873.jpg";
import CallToAction from "../components/calltoaction";
import SEO from "../components/SEO";

const gallery = [
  {
    id: 0,
    src: excavator,
    width: 4000,
    height: 3000,
    alt: "excavator",
  },
  {
    id: 1,
    src: grader,
    width: 4608,
    height: 3456,
    alt: "grader",
  },
  {
    id: 2,
    src: harmer_nrg,
    width: 720,
    height: 960,
    alt: "harmer nrg",
  },
  {
    id: 3,
    src: harmer_nrg_tree,
    width: 720,
    height: 960,
    alt: "harmer nrg tree",
  },
  {
    id: 4,
    src: josh_milling_keyway,
    width: 1800,
    height: 1350,
    alt: "josh milling keyway",
  },
  {
    id: 5,
    src: laser_alignment,
    width: 3264,
    height: 1840,
    alt: "laser alignment",
  },
  {
    id: 6,
    src: machines,
    width: 1920,
    height: 1080,
    alt: "machines",
  },
  {
    id: 7,
    src: rob_lincoln_craning_sfm,
    width: 1600,
    height: 1200,
    alt: "rob lincoln craning sfm",
  },
  {
    id: 8,
    src: sb_on_connie_walking,
    width: 4032,
    height: 3024,
    alt: "horse rider",
  },
  {
    id: 9,
    src: thegang,
    width: 320,
    height: 240,
    alt: "team photo",
  },
];

const ImageGallery = () => {
  const imageRenderer = useCallback(
    ({ index, left, top, photo }) => (
      <SelectedImage
        key={index}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    []
  );
  return (
    <div>
      <SEO title={"Territory Insurance Brokers - Gallery"}
           description={`Here are a collection of our client photos, if you would like to add yours please contact us.`}
           url={"https://territoryinsurancebrokers.com.au/gallery"}/>
      <Layout>
        <h1
          className={
            "text-2xl text-center xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 my-8 md:mt-16 xl:mt-24 "
          }
        >
          Image Gallery
        </h1>
        <div className={"my-16 xl:my-24 xl:mb-20"}>
          <Gallery photos={gallery} renderImage={imageRenderer} />
        </div>
        <CallToAction
          link={"/insurance-products"}
          image={call_to_action}
          color={"bg-gray-400"}
          title={"Insurance Products"}
          text={
            "Have a look at our range of insurance products. From Management Liablity and Trade Insurance to Home & Contents, Motor Vehicle, and many more.  Whether it's your home or business, we've got you covered."
          }
          buttonTitle={"Explore"}
          alt={"two workers welding"}
        />
      </Layout>
    </div>
  );
};

export default ImageGallery;
