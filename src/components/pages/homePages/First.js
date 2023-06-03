import React from 'react';
import Marquee from "react-fast-marquee";

export default function First() {
    return (
        <div className='first-home'>
            <div>
                <img src='../../../images/closer.jpg' alt="Keely Sherman" />
            </div>
                <Marquee>Keely Sherman - Keely Sherman - </Marquee>
        </div>
        );
    }