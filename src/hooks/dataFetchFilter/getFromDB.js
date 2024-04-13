import axios from "axios";
import { decryptData, encryptData } from "../../js/secure";

export async function getFromDB() {
  const storedContents = decryptData("contents", localStorage);
  const storedSvgImages = decryptData("svgImages", localStorage);

  if (storedContents && storedSvgImages) {
    return {
      contents: storedContents,
      svgs: storedSvgImages,
    };
  }

  try {
    const { data: userData } = await axios.get("/contents/svgsdata");
    const { data: contentData } = await axios.get("/contents/contents");

    const svgs = userData;
    const contents = contentData;

    encryptData(svgs[0].svgs, "svgImages", localStorage);
    encryptData(contents, "contents", localStorage);

    return { contents, svgs, storedContents };
  } catch (e) {
    const { data } = await axios.get("/json/newDummy.json");
    encryptData(data.svgs, "svgImages", localStorage);
    encryptData(data.items, "contents", localStorage);
    return { contents: data.items, svgs: data.svgs };
  }
}
