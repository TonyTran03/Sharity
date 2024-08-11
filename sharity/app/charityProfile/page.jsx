"use client"
import Image from "next/image";
import '../globals.css';
import React, { useState } from 'react';
import 'daisyui/dist/full.css';


export function Slider() {
    const [value, setValue] = useState(25);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <div className="tick-container">
                <div className="tick" style={{ left: '0%' }}></div>
                <div className="tick" style={{ left: '25%' }}></div>
                <div className="tick" style={{ left: '50%' }}></div>
                <div className="tick" style={{ left: '75%' }}></div>
                <div className="tick" style={{ left: '100%' }}></div>
            </div>
            <input
                type="range"
                min={0}
                max="100"
                value={value}
                className="range range-primary .gradient-slider"
                step="25"
                onChange={handleSliderChange}
            />
        </div>
    );
}

function SharityLogo() {
    return <img src={"Sharity.png"} alt="Sharity Logo" width={250} height={250}/>;
}

function CharityLogo() {
    return <img src={"salvation-army-logo.png"} width={150} height={150}/>;
}

export function Print({s1}) {
    return (
        <div>
            <h1 style={{ fontSize: '20px', marginBottom: '20px', paddingTop: '70px', fontWeight:'bold',  color: '#c77593', padding: '20px'}}>{s1}</h1>
        </div>
    )
}

export function InventoryIndicator({s1,s2}) {
    return (
        <div className="side-by-side">
            <h1 style={{paddingTop:'20px', marginRight:'190px'}}>{s1}</h1>
            <h1 style={{paddingTop:'20px'}}>{s2}</h1>
        </div>
    )
}

export default function CharityProfile() {
    return (
        <div>
        
            <div className="full-height">
                <div className="dashboard">

                <div className="side-by-side">
                    <SharityLogo/>
                    <CharityLogo/>
                </div>

                <h1 style={{paddingTop: '50px', fontWeight:'bold', fontSize:'2rem'}}>The Salvation Army</h1>

                <div className="rectangle" style={{width: '500px', height: '550px'}}>
                    <div className = "dashboard">
                        <h1><Print s1="Registration Number"/></h1>
                        <h1 style={{paddingBottom:'10px', fontSize:'25px'}}>10795 1618 RR0001</h1>
                        <h1><Print s1="Donations Wanted"/></h1>
                        <h1 style={{paddingBottom:'10px', fontWeight:'bold'}}>Clothing</h1>
                        
                        <Slider/>
                        <InventoryIndicator s1="Need Supplies" s2="Fully Stocked"/>

                        <h1 style={{paddingBottom:'10px', fontWeight:'bold', marginTop:'30px'}}>Food</h1>
                        <Slider/>
                        <InventoryIndicator s1="Need Supplies" s2="Fully Stocked"/>

                    </div>
                </div>
                
                </div>
            </div>
        </div>
    )
}