import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div>
            error 404 page not found
            <Link to='/'>Back to home</Link>
        </div>
    )
}
