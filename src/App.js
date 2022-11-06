import {Fragment, useState, useEffect, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const countTotal = (num) =>{
        console.log('calc');
        return num+10;
    }
    const total = useMemo(()=>{
        return countTotal(slide);
    }, [slide]);

    const logging = ()=>{
        console.log('logg');
    }

    const style =useMemo(() => ({color: slide > 4? 'red': 'black'}), [slide])
    useEffect(()=>{
        console.log('effect');
        document.title = `Slide ${slide}`;


        window.addEventListener('click', logging);

        return ()=>{
            window.removeEventListener('click', logging);
        }
    }, [slide]);


    function changeSlide(i){
        setSlide((slide)=> slide+i);
    }

    function changeAutoplay(){
        setAutoplay((autoplay)=> !autoplay);
    }


    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="text-center mt-5" style = {style}>Total {total} <br/></div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={changeAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}



function App() {
    const [slider, setSlider] = useState(true);

    return (
        <Fragment>
            <button onClick={()=>setSlider(false)}>click</button>
            {slider?<Slider/>: null }
        </Fragment>
    );
}

export default App;
