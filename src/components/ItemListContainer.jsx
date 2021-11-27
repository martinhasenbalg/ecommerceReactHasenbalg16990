import React from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import ItemList from './ItemList';
// import { useParams } from "react-router-dom";


const ItemListContainer = () => {  
    return (
      <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  Lista de Productos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>      
      </Container>
      <br></br>
      <ItemList />
    </div>   
    );
  };
  
  export default ItemListContainer;