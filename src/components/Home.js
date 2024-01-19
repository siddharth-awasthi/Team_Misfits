import { Container , Row, Col } from "react-bootstrap";
import { useState , useEffect } from "react";

export const Home=()=>{
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const toRotate = ["CloudBurst pridection", "PS id - 1374" , "Ministry of Power" ,"Disaster Management"];
    const [text , setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text] )

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={12}>
                    <span className="tagline">Welcome to the project page of Team: Misfits</span>
                    <div className="gl"></div>
                    <h2>{``}<span className="wrap">{text}</span></h2>
                    
                </Col>
            </Row>
        </section>
    )
}