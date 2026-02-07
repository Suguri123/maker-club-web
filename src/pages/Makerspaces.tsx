const makerspaces = [
  {
    id: 1,
    name: '제주평생교육장학진흥원 상상 E-ROOM',
    description: '제주 시내에 위치한 메이커스페이스입니다. 3D 프린팅, 레이저 커팅 등 다양한 장비를 보유하고 있습니다.',
    location: '제주특별자치도 제주시 서사로 43 (삼도이동) 2층 메이커스페이스(상상 E-room)',
    url: 'http://sser.kr/',
    reservationUrl: 'http://sser.kr/facility/application.htm?groupcode=JIWON',
    image: '/images/sangsangeroom.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%84%9C%EC%82%AC%EB%A1%9C%2043%20%EC%A0%9C%EC%A3%BC%ED%8F%89%EC%83%9D%EA%B5%90%EC%9C%A1%EC%9E%A5%ED%95%99%EC%A7%84%ED%9D%98%EC%9B%90%20%EC%83%81%EC%83%81%20E-ROOM&key=AIzaSyB2I79y0gP2VuLpj5OQ-Dv_ukzdqhFwoyo',
  },
  {
    id: 2,
    name: '팹랩제주',
    description: '서귀포 지역의 메이커들을 위한 공간입니다. 목공, 금속 가공 등 전통적인 제작 활동에 특화되어 있습니다.',
    location: '제주특별자치도 제주시 남성로 7',
    url: 'https://fablabjeju.org/',
    reservationUrl: 'https://fablabjeju.org/equipment_application',
    image: '/images/feblabjeju.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EB%82%A8%EC%84%B1%EB%A1%9C%207%20%ED%8C%B9%EB%9E%A9%EC%A0%9C%EC%A3%BC&key=AIzaSyB2I79y0gP2VuLpj5OQ-Dv_ukzdqhFwoyo',
  },
  {
    id: 3,
    name: '제주콘텐츠코리아랩 콘텐츠공작소',
    description: '어린이와 청소년을 위한 교육 프로그램이 풍부한 메이커스페이스입니다. 코딩, 로봇 제작 등을 경험할 수 있습니다.',
    location: '제주특별자치도 제주시 신산로 82(별관1층, 지하 1층)',
    url: 'https://jejuckl.kr/index.htm',
    reservationUrl: 'https://jejuckl.kr/reservation/equipmentreservation.htm',
    image: '/images/jejucontentskorealab.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%8B%A0%EC%82%B0%EB%A1%9C%2082%20%EC%A0%9C%EC%A3%BC%EC%BD%98%ED%85%90%EC%B8%A0%EC%BD%94%EB%A6%AC%EC%95%84%EB%9E%A9&key=AIzaSyB2I79y0gP2VuLpj5OQ-Dv_ukzdqhFwoyo',
  },
];

const Makerspaces = () => {
  return (
    <div className="container py-5">
      <h2 className="pb-2 border-bottom">제주 메이커스페이스 소개</h2>
      <p className="lead mb-4">제주 지역의 창의적인 공간, 메이커스페이스를 소개합니다.</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {makerspaces.map((space) => (
          <div className="col" key={space.id}>
            <div className="card h-100 shadow-sm">
              <img src={space.image} className="card-img-top" alt={space.name} />
              <div className="card-body">
                <h5 className="card-title">{space.name}</h5>
                <p className="card-text">{space.description}</p>
                <p className="card-text"><small className="text-muted">위치: {space.location}</small></p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <a href={space.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                  웹사이트
                </a>
                <a href={space.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                  장비 예약
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-danger mb-4">※이외에도 추천하고 싶은 공간이 있다면 저희에게 꼭 알려주세요. 새로운 메이커스페이스의 제보를 기다립니다.</p>
      <h3 className="pb-2 border-bottom mt-5">위치 안내</h3>
      <div className="row g-4 mt-3">
        {makerspaces.map((space) => (
          <div className="col-12 col-md-6 col-lg-4" key={space.id}>
            <h4 className="mb-3">{space.name}</h4>
            <div className="ratio ratio-4x3">
              <iframe
                src={space.mapEmbedUrl}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Makerspaces;
