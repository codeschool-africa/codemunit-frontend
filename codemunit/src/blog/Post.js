import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from "./components/Header"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/all"
import "../styles/blog/style.css"
import profile from "../images/profile.png"

export default class Blog extends Component {

    componentDidMount() {
        document.title = `Blog - Codemunit`;
      }

    render() {
        return (
            <div className="blog">
                <Header hero="blog-bg">
                </Header>
                <div className="content" id="content">
                    <p><Link to="/blog">Carrier Posts</Link> / first post</p>
                    <h1>First post guys...  Hope you enjoy being here</h1>
                    <small>by Justine Peterson, 30 October 2019</small>
                    <hr/>
                    <div className="post-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magni dicta earum sed architecto ad voluptatum, deleniti id porro optio quis natus iste incidunt soluta eos quo perspiciatis placeat officia.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores corrupti architecto quod excepturi, a doloribus maxime veniam sunt quos. Illum possimus dicta quo porro voluptatibus eum animi assumenda non tenetur?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eaque est libero laborum in itaque iusto id sed impedit quidem. Qui magnam autem vero fuga recusandae quae odit delectus nesciunt?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae, id sequi iure consequuntur, dolorum quod, autem exercitationem reprehenderit velit ratione a. Facilis delectus doloribus amet placeat, maxime eos iusto.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi fugit saepe voluptatem. Consectetur, repudiandae necessitatibus aspernatur vero consequatur, fuga amet dicta culpa reiciendis quo libero, voluptatum dolore accusantium dignissimos?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quas facilis maxime mollitia sint sapiente, dicta ducimus iste ipsam? Quisquam nemo, culpa quaerat corrupti aliquam molestias cumque inventore. Amet, voluptatum.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam soluta in aliquid quibusdam dolor deserunt recusandae quia quae omnis unde, hic, nemo voluptas reiciendis eius nostrum porro mollitia? Laboriosam, cumque.
                            Nobis explicabo perferendis voluptatibus at, consequuntur quod corrupti asperiores quas iste officiis cum atque porro culpa odit dolores commodi molestias laboriosam provident nam. Modi ex dolorum quas sit corporis ratione!
                            Modi eos sequi nam deleniti assumenda, laboriosam dicta, sit ducimus ratione debitis dignissimos, voluptatibus accusamus voluptate blanditiis esse error quia nisi inventore ea necessitatibus eligendi quidem deserunt ullam iure? Fugiat.
                            Amet, debitis adipisci voluptatibus assumenda ratione possimus sunt animi provident nemo, facere sint, natus ab neque? Nemo aut neque repudiandae voluptates odit aliquid ratione, nisi laborum consequatur, magnam, maiores ex?
                            Nihil eum dolorem numquam iste sit eaque quis nesciunt sunt nobis ex perferendis, harum laudantium excepturi totam nemo. Nostrum quod repellendus deleniti ea veritatis quas modi tempora exercitationem, dolore et.
                        </p>
                    </div>
                    <div className="content-provider">
                        <div className="profile-image">
                            <img src={profile} alt="profile"/>
                        </div>
                        <div className="profile-status">
                            <Link to="/">Justine Peterson</Link> CTO of Kodemunit
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                    <div className="social-container">
                            <a href="www.facbook.com"><FaFacebookF className="icon"/></a>
                            <a href="www.twitter.com"><FaTwitter className="icon"/></a>
                            <a href="www.instagram.com"><FaInstagram className="icon"/></a>
                        </div>
                        <div className="copyright">
                            Copyright &copy; 2019 Codemunit.
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
