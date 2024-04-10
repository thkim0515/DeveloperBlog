import axios from "axios";

export async function getFromDB() {
  const storedContents = localStorage.getItem("contents");
  const storedSvgImages = localStorage.getItem("svgImages");

  if (storedContents && storedSvgImages) {
    return {
      contents: JSON.parse(storedContents),
      svgs: JSON.parse(storedSvgImages),
    };
  }

  try {
    const { data: userData } = await axios.get("/contents/svgsdata");
    const { data: contentData } = await axios.get("/contents/contents");

    const svgs = userData;
    const contents = contentData;

    localStorage.setItem("svgImages", JSON.stringify(svgs[0].svgs));
    localStorage.setItem("contents", JSON.stringify(contents));

    return { contents, svgs, storedContents };
  } catch (e) {
    const { data } = await axios.get("/json/dummy.json");
    localStorage.setItem("svgImages", JSON.stringify(data.svgs));
    localStorage.setItem("contents", JSON.stringify(data.items));
    return { contents: data.items, svgs: data.svgs };
  }
}
