import { Helmet } from "react-helmet-async";

const DEFAULT_TAG = {
  title: "우리의 지식이 별이 되는 공간 - StarBlog",
  description:
    "똑 소리 나는 코드 기록, 코드에 주석을 자동으로 달아 코드를 해석하고 공부하자, KOSTA, 코드 기록, 코드 공유",
};

export const Metas = ({ main, none, title, url, description }) => {
  return (
    <Helmet>
      <meta property="og:type" content="website"></meta>
      {/* Naver 블로그, 카카오톡 미리보기 설정 */}
      <title>{main ? DEFAULT_TAG.title : `${title} - StarBlog`}</title>
      <meta
        property="og:StarBlog"
        content="우리의 지식이 별이 되는 공간"
      ></meta>
      <meta property="og:locale" content="ko"></meta>
      {!none ? (
        <meta property="og:title" content={main ? DEFAULT_TAG.title : title} />
      ) : (
        ""
      )}
      {!none ? <meta property="og:url" content={url} /> : ""}
      {!none ? <meta property="og:image" content="표시되는 이미지" /> : ""}
      {!none ? (
        <meta
          property="og:description"
          content={main ? DEFAULT_TAG.description : description}
        />
      ) : (
        ""
      )}

      {/* 트위터 미리보기 설정 */}
      <meta
        name="twitter:card"
        content="트위터 카드 타입(요약정보, 사진, 비디오)"
      />
      <meta
        name="twitter:title"
        content={main ? DEFAULT_TAG.title : `${title} - StarBlog`}
      />
      <meta
        name="twitter:description"
        content="똑 소리 나는 코드 기록, 코드에 주석을 자동으로 달아 코드를 해석하고 공부하자, KOSTA, 코드 기록, 코드 공유"
      />
      <meta name="twitter:image" content="표시되는 이미지 " />
    </Helmet>
  );
};