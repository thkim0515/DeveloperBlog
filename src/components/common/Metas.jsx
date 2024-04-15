import { Helmet } from "react-helmet-async";

export const Metas = ({ title, url, description }) => {
  return (
    <Helmet>
      <title>{`${title} - StarBlog`}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};
