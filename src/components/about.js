export const About=()=>{
    return(
        <div className="About" >
            <div className="dis" id = "abt">
                <p className="header">About the Model: </p>
                <div className="underline"></div>
                <p>We're developing an ML model to predict cloudbursts using meteorological data like temperature, humidity, wind, and precipitation across geographic coordinates. Given the data's spatial nature, CNNs are a potential fit, but traditional models like Random Forest are also viable. Training uses historical data, with distinct validation and test sets. A key challenge is the data's potential imbalance due to the infrequency of cloudbursts. The model will output cloudburst likelihood.</p>
            </div>
            <div className="elemcon">
                <div className="flowchart">
                <p className="header">Flowchart: </p>
                <div className="underline" id="new"></div>
                    <img src="fl.png" className="aboutimg"></img>
                </div>
                <div className="techstack">
                <p className="header">Tech-stack: </p>
                <div className="underline" id="neww"></div>
                    <img src="ts.png" className="aboutimg"></img>
                </div>
            </div>
        </div>
    )
}