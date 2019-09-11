import React from 'react'
import { FaAngleLeft, FaAngleRight} from 'react-icons/all'

export default function Arrows() {
    return (
        <div className="arrows">
            <div className="circle circle-left"><FaAngleLeft/></div>
            <div className="circle circle-right"><FaAngleRight/></div>
        </div>
    )
}
