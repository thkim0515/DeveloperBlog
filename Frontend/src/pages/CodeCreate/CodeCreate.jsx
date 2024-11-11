import { Metas } from "../../components/common/Metas";
import { PostingComp } from "../../components/codePosting/PostingComp";

export const CodeCreate = () => {

  return (
    <div>
      <Metas title="게시글 작성" none />
      <PostingComp/>
    </div>
  );
};
