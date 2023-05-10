import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div ><h4>Find best market<br />Stocks for Trading</h4></div>
            <div >
                <input type='text' placeholder='Commodity, mutual fund, IPO'></input>
                <input type='button' value={"Search"}></input>
            </div>
        </div>
    );
};

export default Footer;