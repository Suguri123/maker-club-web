import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div className="bg-light p-5 rounded-lg m-3 text-center">
      <Container>
        <h1 className="display-4">메이커 동아리</h1>
        <p className="lead">창의적인 아이디어를 현실로 만드는 공간</p>
        <hr className="my-4" />
        <p>함께 만들고, 배우고, 성장할 메이커를 찾습니다!</p>
        <Button variant="primary" size="lg" href="/join">
          가입 안내
        </Button>
      </Container>
    </div>
  );
};

export default Home;