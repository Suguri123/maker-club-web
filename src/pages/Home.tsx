import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home = () => {
  const [date, setDate] = useState<Value>(new Date());

  const events = [
    { date: new Date(2026, 0, 31), title: '팹랩제주 CNC 스터디', youtubeLink: 'https://youtu.be/KW7iHRdqONQ', completed: true }, // Month is 0-indexed (January)
    { date: new Date(2026, 1, 28), title: '랩랩제주 레이저커팅기 스터디', youtubeLink: 'https://www.youtube.com/watch?v=yyyyyyyy' }, // Month is 0-indexed (February)
  ];

  const formatShortWeekday = (_locale: string | undefined, date: Date) => {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    return weekdays[date.getDay()]; // date.getDay() returns 0 for Sunday, 1 for Monday, etc.
  };

  const formatMonth = (_locale: string | undefined, date: Date) => {
    const monthNames = [
      '1월', '2월', '3월', '4월', '5월', '6월',
      '7월', '8월', '9월', '10월', '11월', '12월'
    ];
    return monthNames[date.getMonth()];
  };

  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">맹글멍 메이커 동아리</h1>
          <p className="p-regular-font">
            '맹글멍'은 제주 곳곳의 메이커스페이스를 찾아다니며, 메이커 장비들을 함께 배우는 모임입니다. <br></br>
             3D 프린터, 레이저 커팅기, CNC부터 나만의 굿즈를 만드는 평판/머그 프레스까지!<br></br>
             혼자서는 막막했던 디지털 장비들, 이제는 같이 스터디하며 나만의 작품을 직접 만들어보세요. 초보자도 환영! 함께 만들며 즐겁게 함께할 분들을 기다립니다.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="/manuals" className="btn btn-primary btn-md-font px-4 me-md-2">
              장비 매뉴얼
            </a>
            <a href="/makerspaces" className="btn btn-light-magenta btn-md-font px-4">
              제주 메이커스페이스
            </a>
          </div>
          <p className="mt-4 p-regular-font">
            새로운 메이커가 되고 싶으신가요? 메이커 동아리 맹글멍과 함께하세요!
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-3">
            <a href="https://pf.kakao.com/_njsPxj" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-md-font px-4">
              <img src="images/logo.png" alt="Logo" style={{ width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '8px' }} /> 카카오 채널 가입하기(모임공지)
            </a>
          </div>
          <div className="p-3 bg-light border rounded shadow-sm">
            <p className="p-regular-font mb-0">
              '맹글멍'은 제주도 방언(제주어)으로, '만들면서'라는 뜻입니다.
              <br />
              • 맹글다: '만들다'의 제주어 표현
              <br />
              • -멍: '-면서' (~하는 동작을 동시에 할 때)를 뜻하는 어미
              <br />
              즉, 무언가를 제작하거나 만드는 중인 상황을 나타내는 말입니다.
            </p>
          </div>
          <br />
        </div>
        <div className="col-12 col-lg-6"> {/* This will contain calendar and new event list */}
          <div className="p-3 bg-light rounded-3 shadow-sm">
            <h4 className="mb-3">다가오는 일정</h4>
            <div className="row mb-4"> {/* New internal row */}
              <div className="col-12 col-md-6"> {/* Calendar column */}
                <Calendar
                  onChange={(value) => setDate(value)} // Explicitly handle value
                  value={date}
                  locale="en-US"   // Set locale to English (to make Sunday first day of week)
                  formatShortWeekday={formatShortWeekday} // Custom weekday format (to display Korean weekdays)
                  formatMonth={formatMonth} // Custom month format (to display Korean month names)
                  tileContent={({ date, view }) => {
                    let classes = [];
                    if (
                      view === 'month' &&
                      events.some(
                        (event) =>
                          event.date.getDate() === date.getDate() &&
                          event.date.getMonth() === date.getMonth() &&
                          event.date.getFullYear() === date.getFullYear()
                      )
                    ) {
                      classes.push(<p className="event-indicator">●</p>);
                    }
                    return classes.length > 0 ? <div>{classes}</div> : null;
                  }}
                  tileClassName={({ date, view }) =>
                    view === 'month' && date.getDay() === 6 ? 'saturday-tile' : null
                  }
                />
              </div>
              <div className="col-12 col-md-6"> {/* New Event List Column */}
                <h5 className="mb-3">이벤트 상세</h5>
                <ul className="list-group">
                  {events.map((event, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className={event.completed ? 'text-decoration-line-through' : ''}>{`${event.date.getMonth() + 1}월 ${event.date.getDate()}일 '${event.title}'`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className="mb-3 mt-4">지난 모임 사진</h4> {/* Added mt-4 for spacing */}
            {/* Display 4 images in a single row for medium screens and up, 2 per row on small screens */}
            <div className="row row-cols-2 row-cols-md-4 g-2">
              <div className="col">
                <div className="ratio ratio-1x1">
                  <img src="images/meet_01.png" className="img-fluid img-thumbnail" alt="Past Event 1" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col">
                <div className="ratio ratio-1x1">
                  <img src="images/meet_02.png" className="img-fluid img-thumbnail" alt="Past Event 2" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col">
                <div className="ratio ratio-1x1">
                  <img src="images/meet_03.png" className="img-fluid img-thumbnail" alt="Past Event 3" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col">
                <div className="ratio ratio-1x1">
                  <img src="images/meet_04.png" className="img-fluid img-thumbnail" alt="Past Event 4" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
