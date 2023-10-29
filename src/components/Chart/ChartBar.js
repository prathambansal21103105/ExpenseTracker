import React from 'react';
import './ChartBar.css';
const ChartBar=(props)=>{
    let barFillHeight='0%';
    console.log(props.value, props.maxValue);
    if(props.maxValue>0){
        barFillHeight=Math.round(((100*props.value)/props.maxValue))+'%';
    }
    return(
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div 
                className='chart-bar__fill' 
                style={{height:barFillHeight}}
            ></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
    );
}
export default ChartBar;