import React from 'react';
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">메이커 동아리 가입 안내</h1>
      <p className="lead text-center mb-5">
        창의적인 아이디어를 현실로 만들고 싶은 열정적인 메이커를 기다립니다!
        저희 동아리와 함께 성장하며 멋진 프로젝트들을 만들어보세요.
      </p>

      <Card className="shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Header as="h3" className="text-center">가입 정보</Card.Header>
        <Card.Body>
          <Card.Text>
            저희 메이커 동아리는 다양한 분야의 메이커들이 모여 아이디어를 공유하고,
            서로의 기술을 발전시키며 실제 결과물을 만들어내는 활동을 합니다.
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>지원 자격:</strong> 메이킹에 관심 있는 학생 또는 일반인 누구나
            </ListGroupItem>
            <ListGroupItem>
              <strong>활동 내용:</strong> 정기 프로젝트 진행, 스터디 모임, 장비 활용 교육, 대회 참가 등
            </ListGroupItem>
            <ListGroupItem>
              <strong>가입 방법:</strong>
              <p className="mb-0">1. 정기 모임(매주 [요일], [시간])에 참석하여 동아리 활동을 경험해보세요.</p>
              <p className="mb-0">2. 동아리 운영진에게 가입 의사를 밝히고 간단한 인터뷰 진행.</p>
              <p className="mb-0">3. 가입 승인 후 동아리 활동 시작!</p>
            </ListGroupItem>
          </ListGroup>
          <div className="text-center mt-4">
            <Button variant="primary" as={Link as any} to="/contact">
              궁금한 점이 있다면? 연락처 보기
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Join;