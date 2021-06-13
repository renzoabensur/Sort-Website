import React from 'react'

export default function Navbar(props) {
    // props.randomArray()
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={props.randomArray}>Create random array</button>
            <button type="button" className="btn btn-primary" onClick={props.selectSort}>Selection Sort</button>
            <button type="button" className="btn btn-primary" >Buble Sort</button>
        </div>
    )
}
