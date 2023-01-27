import React from 'react';
import { ListGroup } from 'react-bootstrap';
import NoticiaItem from './NoticiaItem';

const ListaNoticias = (props) => {
    return (
        <div className='mt-4'>

           <ListGroup horizontal>
                {props.arregloNoticias.map((item, posicion) => <NoticiaItem key={posicion} noticia={item} />)}
            </ListGroup>
           
        </div>
    );
};

export default ListaNoticias;