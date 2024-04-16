import { Helmet } from "react-helmet-async";

const MAIN = {
  title: "우리의 지식이 별이 되는 공간 - StarBlog",
  description:
    "똑 소리 나는 코드 기록, 코드에 주석을 자동으로 달아 코드를 해석하고 공부하자, KOSTA, 코드 기록, 코드 공유",
};

export const Metas = ({ main, title, url, description }) => {
  return (
    <Helmet>
      <title>{main === "main" ? MAIN.title : `${title} - StarBlog`}</title>
      <meta
        property="og:title"
        content={main === "main" ? MAIN.title : title}
      />
      <meta property="og:url" content={url} />
      <meta
        property="og:description"
        content={main === "main" ? MAIN.description : description}
      />
    </Helmet>
  );
};
