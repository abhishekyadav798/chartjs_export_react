import React, { useRef, useCallback } from 'react'
import { Bar,Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import './Chartjs_practice_export.css'


function Chartjs_practice_1 () {

    const ref = useRef(null);
   

    const downloadImage = useCallback(()=>{
        const link = document.createElement("a");
        link.download = "chart.jpg";
        link.href = ref.current.toBase64Image();
        link.click();

    },[])

    const data = {
        labels : ['sun','mon','tue','wed','thu','fri','sat','sun'],
        datasets:[{
            label: 'my first dataset',
            backgroundColor : 'yellow',
            borderColor : 'red',
            color:'yellow',
            data : [20,33,12,24,54,45,22,88],
            fill: true
        }]
        , options : {
            scales:{
                x :{
                    type: 'time',
                    display:true,
                }
            }
        }
    }
   


  return (
    <div className='chart-container'>
        <Bar ref={ref} data={data} />
        <button onClick={downloadImage}>Download</button>    
    </div>
  )
}

export default Chartjs_practice_1