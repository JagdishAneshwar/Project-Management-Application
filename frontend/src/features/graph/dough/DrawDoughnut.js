import React from 'react'
import "./_doughnut.scss";
import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';

const DrawDoughnut = ({title, align, position,titpos, titalgn, label1, info1}) => {
  var label = []
  var info = []
  for(let i = 0; i < label1.length; i++) {
    label.splice(i, 0, label1[i]);
    info.splice(i, 0, info1[i]);
  }
  
  const data = {
    labels: label,
    datasets: [
      {
        label: '# of Votes',
        data: info,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
        cutout: '75%',
      }
    
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        display: true,
        position: `${position}`,
        align: `${align}`,
        labels:{
          color: "white", 
        }
      },            
      title: {
        display: true,
        text: `${title}`,
        color: "white", 
        position:`${titpos}`,
        align:`${titalgn}`,
        font:{
          size:20
        }
    }
    }
  };
  
  return (
    <div className='doughnut'>
    <Doughnut data={data} options={options} />
    </div>
  )
}

export default DrawDoughnut