

const manuals = [
  {
    id: 1,
    title: '팹랩제주 CNC',
    description: '[2026.01.31] 팹랩제주 CNC 장비 사용을 위한 동영상 매뉴얼입니다.',
    category: '장비 이용',
    videoUrl: 'https://www.youtube.com/embed/KW7iHRdqONQ',
  },
  {
    id: 2,
    title: '레이저 커팅 SW (RDWorks)',
    description: '레이저커팅 소프트웨어 사용연습 자료',
    category: '소프트웨어',
  },
  {
    id: 3,
    title: '레이저컷팅 파일 다운로드 사이트 모음',
    description: '레이저컷팅에 사용할 수 있는 무료 파일 다운로드 사이트 모음입니다.',
    category: '사이트',
  },
  {
    id: 4,
    title: '레이저컷팅용 파일형식 DXF 로 변환할때',
    description: '2D 도면 파일을 레이저컷팅용 DXF 파일로 변환하는 방법 안내입니다.',
    category: '소프트웨어',
  },
  {
    id: 5,
    title: '제주콘텐츠코리아랩 CNC 사용 방법_DXF파일',
    description: '[2025.01.13] 제주콘텐츠코리아랩에서 CNC 장비를 사용 방법을 안내합니다.',
    category: '장비 이용',
    videoUrl: 'https://www.youtube.com/embed/zBT0YMAW-NA',
  },
];

const Manuals = () => {
  const equipmentManuals = manuals.filter(manual => manual.category === '장비 이용');
  const otherManuals = manuals.filter(manual => manual.category === '소프트웨어' || manual.category === '사이트');

  // Helper function to render a single manual card content (without the wrapping col div)
  const renderManualCardContent = (manual: typeof manuals[0]) => (
    <div className="card h-100">
      <div className="card-body">
        <span className="badge bg-primary mb-2">{manual.category}</span>
        <h5 className="card-title">{manual.title}</h5>
        <p className="card-text">{manual.description}</p>
        {manual.id === 4 && (
          <div className="mt-3">
            <h6>1. 소프트웨어 이용</h6>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">어도비 일러스터에서 *.ai, *.dxf 파일 형식으로 내보내기</li>
                <li className="list-group-item">라이노, 오토데스크 퓨전에서 *.dxf 파일 형식으로 내보내기</li>
                <li className="list-group-item">잉크스케이프 에서 *.dxf 파일 형식으로 저장하기</li>
              </ul>
              <a href="https://www.autodesk.com/kr/products/fusion-360/personal" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block mb-2">
                👉 퓨전 개인 사용 다운로드
              </a>
              <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block mb-2">
                👉 잉크스케이프 무료 다운로드
              </a>
              <a href="https://www.rhino3d.com/download/" target="_blank" rel="noopener noreferrer" className="btn btn-sm d-block mb-3">
                👉 라이노3D 90일 사용 다운로드
              </a>

              <h6>2. SVG파일(틴커캐드, 파워포인트에서 저장가능) 이용</h6>
              <h6 className="mt-3">3. 파일 변환 사이트에서 *.dxf 파일로 변환 (구글검색)</h6>
              <a href="https://www.google.com/search?q=svg+dxf&oq=svg+dxf&aqs=chrome..69i57j0i20i263i512j0i512l3j0i30l5.2452j0j15&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block mb-2">
                Google Search: svg dxf
              </a>
              <a href="https://anyconv.com/ko/svg-to-dxf-byeonhwangi/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block">
                ex) AnyConv SVG to DXF 변환기
              </a>
            </div>
          )}
          {manual.id === 3 && (
            <div className="mt-3">
              <p className="mb-2">검색하면 많이 나와요, house, light, squid game 같은것들</p>
              <a href="https://3axis.co/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block mb-2">
                3axis.co
              </a>
              <a href="https://dxfpatterns.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block">
                dxfpatterns.com
              </a>
            </div>
          )}
          {manual.id === 2 && (
            <div className="mt-3">
              <p className="mb-1">아래 프로그램은 팹랩제주에서 사용하는 프로그램하고 구성이 거의 똑같습니다.</p>
              <p className="mb-2">제주콘텐츠코리아랩에도 동일한 레이저커터가 있어요~(RDWorks)</p>
              <a href="https://drive.google.com/drive/folders/1Q2hcxLDr0vu9K_2rbU33xidb27p8Pvsv" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block mb-2">
                RDWorksV8.01.17 설치자료 - Google Drive
              </a>
              <a href="https://www.thunderlaser.com/downloads/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary d-block">
                Downloads | THUNDER LASER
              </a>
            </div>
          )}
          {manual.videoUrl && ( // Render iframe for all video URLs that have videoUrl
            <div className="ratio ratio-16x9 mt-3">
              <iframe
                src={manual.videoUrl}
                title={manual.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          
          {(manual.id !== 1 && manual.id !== 2 && manual.id !== 3 && manual.id !== 4 && manual.id !== 5) && ( // Conditionally render for manuals other than listed ids
            <a href="https://youtu.be/KW7iHRdqONQ" className="btn btn-outline-primary mt-3">
              자세히 보기
            </a>
          )}
        </div>
      </div>
  );

  return (
    <div className="container py-5">
      <h2 className="pb-2 border-bottom">매뉴얼</h2>

      <div className="row g-4 mt-3">
        <div className="col-md-6"> {/* Left Column for 장비 매뉴얼 */}
          <h4 className="pb-2 border-bottom">장비 사용 매뉴얼</h4>
          {equipmentManuals.map((manual) => (
            <div className="col mb-4" key={manual.id}> {/* Added mb-4 for spacing between cards */}
              {renderManualCardContent(manual)}
            </div>
          ))}
        </div>
        <div className="col-md-6"> {/* Right Column for 소프트웨어 and 사이트 */}
          <h4 className="pb-2 border-bottom">소프트웨어 & 사이트</h4>
          {otherManuals.map((manual) => (
            <div className="col mb-4" key={manual.id}> {/* Added mb-4 for spacing between cards */}
              {renderManualCardContent(manual)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manuals;