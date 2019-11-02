import React from 'react'
import Nav from './Nav'

export default function Header({children,hero}) {

    // const [value, setValue] = useState(false);

    // componentDidMount = () => {
    //     document.addEventListener('scroll', this.trackScrolling);
    // }

    // componentWillUnmount = () => {
    //     document.removeEventListener('scroll', this.trackScrolling);
    // }

    return (
        <header className={hero}>
            <div className="bg-color">
                <div className="container">
                    <Nav />
                    {children}
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    hero:"defaultHero"
};
