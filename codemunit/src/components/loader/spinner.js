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
                borderBottom: '3px solid transparent',
                borderLeft: '3px solid #438976',
                borderRadius: '50%',
                borderRight: '3px solid transparent',
                borderTop: '3px solid #438976',
                boxSizing: 'border-box',
                height: 70,
                width: 70
            }}
        />
    </div>
)

export default Spinner