import React, { Component } from 'react'

export default class Blog extends Component {

    componentDidMount() {
        document.title = "Codemunit - blog";
      }

    render() {
        return (
            <div>
                hello from blog page
            </div>
        )
    }
}
