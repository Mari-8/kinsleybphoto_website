import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MainPicture from '../components/MainPicture'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'

export default class HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <figure className="test">
                    {/* <ImageSlider />  */}
                    <MainPicture /> 
                    <Footer /> 
                </figure>
            </Container>
        )
    }
}
