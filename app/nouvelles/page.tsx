'use client'

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const apikey = 'coe8u09r01qjje1ujas0coe8u09r01qjje1ujasg';

function NewsCard() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://finnhub.io/api/v1/news?categorygeneral&token=' + apikey)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNews(data.slice(0,20)); // limit to 20 news items
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">ERROR</Alert>;
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '90%' }}> {/* increased maximum width */}
      <h1>NOUVELLES</h1>
      <Row>
        {news.map((newsItem, index) => {
          const { headline, summary, url, image, datetime } = newsItem;
          const date = new Date(datetime * 1000).toLocaleString(); // convert Unix timestamp to local date/time

          return (
            <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index} className="mb-4"> {/* adjusted column spans */}
              <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{headline}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle> {/* added date */}
                  <Card.Text>
                    {summary}
                  </Card.Text>
                  <Button variant="primary" href={url}>Lire la suite</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewsCard;