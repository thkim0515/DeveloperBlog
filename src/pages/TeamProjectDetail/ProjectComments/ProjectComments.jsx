export const ProjectComments = () => {
  return (
    <div>
      <input type="text" />
      <button>댓글 등록</button>
      <div>
        <div>
          <img alt="user" width={20} />
          <span>닉네임</span>
        </div>
        <p>
          안녕하세요. 오픈톡이 계속 로딩 화면에만 머물러서 댓글로 문의드립니다.
          오픈톡 외 연락을 드릴 수 있는 방법이 있을까요?
        </p>
      </div>
      <div>
        <div>
          <img alt="user" width={20} />
          <span>닉네임</span>
        </div>
        <p>
          개굴님 열린 URL에서 https://open.kakao.com/o/s54KHtkg 이 부분만
          남기시면 오픈챗 확인하실 수 있어요.
        </p>
      </div>
    </div>
  );
};
