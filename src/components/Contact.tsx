import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  const kakaoChannelUrl = "https://pf.kakao.com/_YOUR_KAKAO_CHANNEL_ID"; // Placeholder for Kakao Channel URL

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">문의 및 연락처</h1>
      <p className="lead text-center mb-5">궁금한 점이 있으시면 언제든지 문의해주세요. 친절하게 답변해 드리겠습니다.</p>

      <Card className="shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
        <Card.Body className="text-center">
          <Card.Title className="mb-3">카카오 채널로 문의하기</Card.Title>
          <Card.Text>
            가장 빠른 문의는 아래 카카오 채널을 이용해주세요.
          </Card.Text>
          <Button 
            variant="warning" 
            href={kakaoChannelUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-3"
          >
            <img 
              src="https://developers.kakao.com/assets/img/about/buttons/channel/btn_kakao_channel_ci.svg" 
              alt="Kakao Channel" 
              style={{ height: '20px', marginRight: '8px' }} 
            />
            카카오 채널 홈으로 이동
          </Button>
          <Card.Text className="text-muted mt-3">
            카카오 채널 ID: <span className="fw-bold">_YOUR_KAKAO_CHANNEL_ID</span> (URL에서 확인 가능)
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;