import React from 'react'
import { FaAngleLeft, FaAngleRight} from 'react-icons/all'

export default function Arrows() {
    return (
        <div className="arrows">
            <div className="circle circle-left" onClick={() => this.prevBtn()}><FaAngleLeft/></div>
            <div className="circle circle-right" onClick={() => this.nextBtn()}><FaAngleRight/></div>
        </div>
    )
}
