import React from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';

const NoticiaItem = (props) => {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (

        <ListGroup.Item className='sinborde'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.noticia.image} />
                <Card.Body>
                    <Card.Title>{props.noticia.title}</Card.Title>
                    <Card.Text>
                        {props.noticia.description}
                    </Card.Text>
                    <Card.Text>
                        {`Fuente: ${props.noticia.source}`}
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                    <Button variant="primary"
                        role="link"
                        onClick={() => openInNewTab(props.noticia.url)}
                    >
                        Ir a la noticia
                    </Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </ListGroup.Item>
    );
};

export default NoticiaItem;