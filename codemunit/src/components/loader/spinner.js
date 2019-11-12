import * as React from 'react'

const Spinner = () => (
    <div
        style={{
            display: 'block',
            position: 'fixed',
            left: `50%`,
            top: `50%`,
            transform: `translate(-50%, -50%)`,
            zIndex: 1031
        }}
    >
        <div
            style={{
                animation: '400ms linear infinite spinner',
                borderBottom: '5px solid transparent',
                borderLeft: '5px solid #438976',
                borderRadius: '50%',
                borderRight: '5px solid transparent',
                borderTop: '5px solid #438976',
                boxSizing: 'border-box',
                height: 50,
                width: 50
            }}
        />
        <p className="loader" style={{
            position: 'absolute',
            width: '100vw',
            margin: '20px auto'
        }}>
            loading
            <span> . </span>
            <span> . </span>
            <span> . </span>
        </p>
    </div>
)

export default Spinner