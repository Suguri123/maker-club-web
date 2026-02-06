const Home = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <div className="bg-dark rounded-3" style={{ height: '300px' }}></div>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">제주 메이커 클럽</h1>
          <p className="lead">
            만들고, 배우고, 공유하는 제주 지역 메이커들의 커뮤니티.
            저희는 최신 기술과 전통적인 제작 방식을 넘나들며 창의적인 아이디어를 현실로 만듭니다.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              매뉴얼 보기
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              동아리 소개
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
