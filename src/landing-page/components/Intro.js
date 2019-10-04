import React, { Component } from 'react'

import IntroImg from '../../images/intro.jpg'

export default class Intro extends Component {
    render() {
        return (
            <div className="intro" id="intro">
                <div className="container">
                    <div className="img-container">
                        <img src={IntroImg} alt="intro"/>
                    </div>
                    <div className="img-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse, incidunt, laborum nam expedita dolorem ipsam labore facere pariatur quod dolor dolore saepe sunt ducimus hic magni, adipisci ab porro.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione qui nemo distinctio inventore minima voluptas doloribus rerum, ipsum placeat, itaque magni, nostrum eligendi dolores enim dolore vitae fuga. Culpa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt voluptas quia veniam a quas molestias modi, pariatur, ea quasi fugiat cupiditate dolore molestiae hic rem! Officiis doloribus totam architecto?
                    </div>
                </div>
                <div className="container">
                    <div className="img-description img-description-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse, incidunt, laborum nam expedita dolorem ipsam labore facere pariatur quod dolor dolore saepe sunt ducimus hic magni, adipisci ab porro.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione qui nemo distinctio inventore minima voluptas doloribus rerum, ipsum placeat, itaque magni, nostrum eligendi dolores enim dolore vitae fuga. Culpa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt voluptas quia veniam a quas molestias modi, pariatur, ea quasi fugiat cupiditate dolore molestiae hic rem! Officiis doloribus totam architecto?
                    </div>
                    <div className="img-container">
                        <img src={IntroImg} alt="intro"/>
                    </div>
                </div>
                <div className="container">
                    <div className="img-container">
                        <img src={IntroImg} alt="intro"/>
                    </div>
                    <div className="img-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse, incidunt, laborum nam expedita dolorem ipsam labore facere pariatur quod dolor dolore saepe sunt ducimus hic magni, adipisci ab porro.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione qui nemo distinctio inventore minima voluptas doloribus rerum, ipsum placeat, itaque magni, nostrum eligendi dolores enim dolore vitae fuga. Culpa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt voluptas quia veniam a quas molestias modi, pariatur, ea quasi fugiat cupiditate dolore molestiae hic rem! Officiis doloribus totam architecto?
                    </div>
                </div>
            </div>
        )
    }
}
