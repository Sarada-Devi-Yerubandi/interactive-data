import { useEffect } from 'react'
import Plot from 'react-plotly.js'

const LineChart = ({ selectedFeature, timeTrendData, selectedDateRange }) => {
  const selectedFeatureData = timeTrendData.filter(
    (item) => item.feature === selectedFeature,
  )

  useEffect(() => {})

  const lineChartData = [
    {
      x: selectedFeatureData.map((item) => item.date),
      y: selectedFeatureData.map((item) => item.value),
      type: 'scatter',
      mode: 'lines+markers',
      hoverinfo: 'y',
    },
  ]

  const lineChartLayout = {
    title: `Time Trend for Feature ${selectedFeature}`,
    xaxis: { title: 'Date', tickformat: '%d-%b' },
    yaxis: { title: 'Value' },
    zoom: { type: 'date' },
  }

  return <Plot data={lineChartData} layout={lineChartLayout} />
}

export default LineChart
