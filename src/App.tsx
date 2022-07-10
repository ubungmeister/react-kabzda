import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./componenty/Accordion/Accordion";
import {Rating, RatingValueType} from "./componenty/Rating/Rating";
import {Pagetitle} from "./componenty/PageTitle/Pagetitle";
import {OnOff} from "./componenty/onOff/OnOff";
import {UncontrolledAccordion} from "./componenty/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./componenty/Rating/UncontrolledRating";
import {UncontrolledRating2} from "./componenty/Rating/UncontrolledRating2";
import {Rating_varian2} from "./componenty/Rating/Rating_varian2";



function App() {

    let [ratingValue, setRatingValue] =useState<RatingValueType>(0)
    let [accardionValue, setAccardionValue] = useState(true)
    let[state,newState] = useState(false)

    return (<div>
    {/*<Rating_varian2 value={ratingValue} onClick={setRatingValue}/>*/}
        <Accordion titleValue={'hello'} collapsed={accardionValue} onClick={setAccardionValue}/>
        <OnOff state={state} newState={newState}/>

    </div>)
}

export default App;

