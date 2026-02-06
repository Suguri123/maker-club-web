import React from 'react';
import { Container } from 'react-bootstrap';

const EquipmentManuals: React.FC = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4">장비 매뉴얼</h1>
      <p className="lead">여기에 동영상 매뉴얼이 업데이트됩니다.</p>
      
      {/* Placeholder for video manuals */}
      <div className="mb-5">
        <h3 className="mb-3">장비 매뉴얼 1: 기본 사용법</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Rick Astley - Never Gonna Give You Up (Placeholder)
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-3">장비 매뉴얼 2: 고급 기능</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/yWjFwJ0wJbM" // Another Placeholder (e.g., a tutorial)
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-3">장비 매뉴얼 3: 안전 수칙</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/M8A-cE92j-g" // Another Placeholder (e.g., safety video)
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </Container>
  );
};

export default EquipmentManuals;