import React from 'react'
import Plot from 'react-plotly.js'

const BarChart = ({ data, onBarClick }) => {
  const barChartData = [
    {
      x: data.map((item) => item.timeSpent),
      y: data.map((item) => item.feature),
      type: 'bar',
      hoverinfo: 'x',
      orientation: 'h',
    },
  ]

  const barChartLayout = {
    title: 'Total Time Spent by Feature',
    xaxis: { title: 'Total Time Spent' },
    yaxis: { title: 'Features' },
  }

  return (
    <Plot
      data={barChartData}
      layout={barChartLayout}
      onClick={(data) => onBarClick(data.points[0].y)}
    />
  )
}

export default BarChart
