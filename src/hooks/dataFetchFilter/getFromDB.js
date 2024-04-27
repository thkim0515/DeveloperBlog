import { decryptData, encryptData } from "../../js/secure";
import axios from "axios";

export async function getFromDB() {
  const storedContents = await decryptData("contents", localStorage);
  const storedSvgImages = await decryptData("svgImages", localStorage);

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

    return { svgs, contents };
    // await encryptData(svgs[0].svgs, "svgImages", localStorage);
    // await encryptData(contents, "contents", localStorage);

    // return { contents, svgs, storedContents };
  } catch (e) {
    const { data } = await axios.get("/json/newDummy.json");
    await encryptData(data.svgs, "svgImages", localStorage);
    await encryptData(data.items, "contents", localStorage);
    return { contents: data.items, svgs: data.svgs };
  }
}
