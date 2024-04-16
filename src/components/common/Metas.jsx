import { Helmet } from "react-helmet-async";

const MAIN = {
  title: "우리의 지식이 별이 되는 공간 - StarBlog",
  description:
    "똑 소리 나는 코드 기록, 코드에 주석을 자동으로 달아 코드를 해석하고 공부하자, KOSTA, 코드 기록, 코드 공유",
};

export const Metas = ({ main, none, title, url, description }) => {
  return (
    <Helmet>
      <title>{main ? MAIN.title : `${title} - StarBlog`}</title>
      {!none ? (
        <meta property="og:title" content={main ? MAIN.title : title} />
      ) : (
        ""
      )}

      {!none ? <meta property="og:url" content={url} /> : ""}
      {!none ? (
        <meta
          property="og:description"
          content={main ? MAIN.description : description}
        />
      ) : (
        ""
      )}
    </Helmet>
  );
};
