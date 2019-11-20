import PropTypes from 'prop-types'
import * as React from 'react'

const Container = ({ children, isFinished, animationDuration }) => (
    <div
        style={{
            opacity: isFinished ? 0 : 1,
            pointerEvents: 'none',
            transition: `opacity ${animationDuration}ms linear`
            // background: "#eee",
            // height: '100vh',
            // width: "100vw"
        }}
    >
        {children}
    </div>
)

Container.propTypes = {
    animationDuration: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    isFinished: PropTypes.bool.isRequired
}

export default Container