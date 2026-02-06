const manuals = [
  {
    id: 1,
    title: '3D 프린터 사용법',
    description: '기본적인 3D 프린터 설정부터 첫 출력까지의 과정을 안내합니다.',
    category: '장비',
  },
  {
    id: 2,
    title: '레이저 커터 안전 수칙',
    description: '레이저 커터 사용 시 반드시 알아야 할 안전 수칙 목록입니다.',
    category: '장비',
  },
  {
    id: 3,
    title: 'Fusion 360 기본 모델링',
    description: 'CAD 소프트웨어인 Fusion 360을 이용한 기본 모델링 방법을 배웁니다.',
    category: '소프트웨어',
  },
  {
    id: 4,
    title: '아두이노 시작하기',
    description: '피지컬 컴퓨팅을 위한 아두이노 보드 첫걸음 가이드입니다.',
    category: '소프트웨어',
  },
];

const Manuals = () => {
  return (
    <div className="container py-5">
      <h2 className="pb-2 border-bottom">매뉴얼</h2>

      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
        {manuals.map((manual) => (
          <div className="col" key={manual.id}>
            <div className="card h-100">
              <div className="card-body">
                <span className="badge bg-primary mb-2">{manual.category}</span>
                <h5 className="card-title">{manual.title}</h5>
                <p className="card-text">{manual.description}</p>
                <a href="#" className="btn btn-outline-primary">
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manuals;
