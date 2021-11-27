import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Logo from '../assets/viti.png'

export function Footer(){
    return(
        <Container fluid style = {{ backgroundColor: 'gray', maxWidth: '100vw', width: '100%', overflow: 'hidden' }}>
            <Row>
                <Col md = {4} xs = {12} className = 'm-auto'>
                    <img
                        className = 'd-block mx-auto'
                        src = {Logo}
                        alt = 'logo'
                    />
                </Col>
                <Col md = {8} xs = {12} className = 'm-auto'>
                    <p>© Військовий інститут телекомунікацій та інформатизації, 2009-2021.</p>
                    <p>vitivstup@viti.edu.ua Питання щодо вступу надсилайте на: vitivstup@ukr.net</p>
                </Col>
            </Row>
        </Container>
    )
}