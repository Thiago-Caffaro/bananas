import './banana.css'
import { useState, useRef, useEffect } from 'react';

function Banana({src, desc, title}) {

    const cardRef = useRef();
    const [desc1, useDesc1] = useState('');

    function bigHandler(){
        if (cardRef.current.id == "isZoomed"){
            cardRef.current.id = ""
            useDesc1('')
        } else{
            cardRef.current.id = "isZoomed";
            useDesc1(desc)
        }
    }
    return (
        <div ref={cardRef}className='bananaCard' onClick={bigHandler}>
            <img className="ImagemBanana"src={src}/>
            <p className='title'>{title}</p>
            <p className='desc'>{desc1}</p>
        </div>
    )
}

export default Banana
