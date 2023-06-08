import React from 'react'

export default function Button() {
    return (
        <div className='container d-flex justify-content-center '>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary">1</button>
                <button type="button" className="btn btn-outline-primary">2</button>
                <button type="button" className="btn btn-outline-primary">3</button>
            </div>
        </div>
    )
}
