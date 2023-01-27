import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import '../styles.css'
import ListaNoticias from './ListaNoticias';
import { getNoticias } from "../helpers/getNoticias"

const Formulario = () => {

    const [categoria, setCategoria] = useState('');
    const [pais, setPais] = useState('');
    const [noticias, setNoticias] = useState([])

    const getNews = async () => {
        console.log(categoria)
        const newNoticias = await getNoticias(pais, categoria)
        setNoticias(newNoticias)
    }


    useEffect(() => {
        getNews()


    }, [pais, categoria])

    const handleChange = (e) => {
        e.preventDefault();
        setCategoria(e.target.value)

    }

    const handleChange2 = (e) => {
        e.preventDefault();
        setPais(e.target.value)

    }



    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Form className='formWidth2'>
                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Buscar por categoria</Form.Label>
                        <Form.Select className='col formWidth'
                            onChange={handleChange}
                            value={categoria}
                        >
                            <option>Seleccionar una categoria</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Buscar por pais</Form.Label>
                        <Form.Select className='col formWidth'
                            onChange={handleChange2}
                            value={pais}
                        >
                            <option>Seleccionar un pais</option>
                            <option value="ar">Argentina</option>
                            <option value="br">Brasil</option>
                            <option value="us">USA</option>
                           
                        </Form.Select>
                    </Form.Group>
                </Form>

            </div>
            <ListaNoticias arregloNoticias={noticias}></ListaNoticias>
        </div>

    );
};

export default Formulario;