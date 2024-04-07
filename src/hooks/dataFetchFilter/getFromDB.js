import axios from "axios";

export async function getFromDB() {
  const storedImages = localStorage.getItem("images");
  const storedSvgImages = localStorage.getItem("svgImages");

  if (storedImages && storedSvgImages) {
    return {
      images: JSON.parse(storedImages),
      svgs: JSON.parse(storedSvgImages),
    };
  }

  try {
    const { data: userData } = await axios.get("/contents/svgsdata");
    const { data: contentData } = await axios.get("/contents/contents");

    const svgs = userData;
    const images = contentData;

    localStorage.setItem("svgImages", JSON.stringify(svgs[0].svgs));
    localStorage.setItem("images", JSON.stringify(images));

    return { images, svgs, storedImages };
  } catch (e) {
    const { data } = await axios.get("/json/dummy.json");
    localStorage.setItem("svgImages", JSON.stringify(data.svgs));
    localStorage.setItem("images", JSON.stringify(data.items));
    return { images: data.items, svgs: data.svgs };
  }
}
