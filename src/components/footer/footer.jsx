import React from 'react';
import styles from './footer.module.css'

const Footer = ({heading, copyright}) => {
    return (
        <footer>
            <div className={
                styles.innerContainer
            }>
                <h2>{heading}</h2>
                <p>{copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;
