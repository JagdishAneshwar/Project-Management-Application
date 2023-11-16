import React from 'react'
import "./_line.scss";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';

  
const DrawLine = ({dates, earned_value, spent }) => {

    const labels = dates
    const data = {
      labels: labels,
      datasets: [
        // {
        //   label: 'Dataset 1',
        //   data: [14, 26,38,60,72,93,103],
        //   borderColor: 'rgb(255, 99, 132)',
        //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // },
        {
          label: 'Spent',
          data: spent,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'earned value',
          data: earned_value,
          borderColor: 'rgba(255, 206, 86)',
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
        },
      ],
    };

      const options={
        plugins:{           
          title: {
            display: true,
            text: `Progress`,
            color: "white", 
            position:"bottom"
        },
        legend: {
          display: true,
          position: `bottom`,
          align: `center`,
          labels:{
            color: "white", 
          }
        },  
        }
        ,scales:{
          x:{
            beginAtZero:true,
            grid:{
            color:'white'
            },
            ticks:{
              color: "white"
            }
          },
          y:{
            beginAtZero:true,
            grid:{
            color:'white'},
            ticks:{
              color: "white"
            }
          }
        }
        ,layout:{
          padding:20
        }
      }


  return (
    <div className='line'>
    <Line options={options} data={data} />
    </div>
  )
}

export default DrawLine