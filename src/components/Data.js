import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export const Data=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id ="skl">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <div className="shadow">
                        <h2>
                            Data
                        </h2>
                        <div className="below"></div>
                        <p>Spatial Distribution of key metrological parameters relavent to  cloudburst prediction
                        </p>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src="img1.jpg"  className="img1"></img>
                                <h5>
                                    Two days before Cloud-burst.
                                </h5>
                            </div>
                            <div className="item">
                                <img src="img2.jpg"  className="img2"></img>
                                <h5>
                                    One days before Cloud-burst.
                                </h5>
                            </div>
                            <div className="item">
                                <img src="img3.jpg"  className="img3"></img>
                                <h5>
                                    The day of the Cloud-burst.
                                </h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}