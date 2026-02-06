import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: '스마트팜 시스템',
      description: '아두이노와 센서를 활용한 자동화된 스마트팜 시스템입니다.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Smart+Farm',
    },
    {
      id: 2,
      title: 'AI 기반 로봇팔',
      description: '인공지능을 이용해 물체를 인식하고 조작하는 로봇팔 프로젝트입니다.',
      imageUrl: 'https://via.placeholder.com/300x200?text=AI+Robot+Arm',
    },
    {
      id: 3,
      title: '3D 프린터 제작',
      description: '직접 설계하고 조립한 고성능 3D 프린터입니다.',
      imageUrl: 'https://via.placeholder.com/300x200?text=3D+Printer',
    },
    {
      id: 4,
      title: '드론 개발',
      description: '자율 비행 기능을 갖춘 드론을 개발했습니다.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Drone+Development',
    },
    {
      id: 5,
      title: '웨어러블 디바이스',
      description: '건강 모니터링 기능을 탑재한 스마트 웨어러블 디바이스입니다.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Wearable+Device',
    },
    {
      id: 6,
      title: '친환경 에너지 솔루션',
      description: '태양광 및 풍력 에너지를 활용한 친환경 발전 시스템입니다.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Eco+Energy',
    },
  ];

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">프로젝트 갤러리</h1>
      <p className="lead text-center mb-5">동아리에서 만든 멋진 프로젝트들을 소개합니다.</p>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Button variant="outline-primary" className="mt-auto">자세히 보기</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;