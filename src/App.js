import React, { useState } from 'react'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })

  const data = [
    { feature: 'A', timeSpent: 100 },
    { feature: 'B', timeSpent: 150 },
    { feature: 'C', timeSpent: 120 },
    { feature: 'D', timeSpent: 150 },
    { feature: 'E', timeSpent: 130 },
    { feature: 'F', timeSpent: 170 },

    // Add more data as needed
  ]

  const timeTrendData = [
    {
      feature: 'A',
      date: '2023-11-01',
      value: 30,
      gender: 'male',
      age: '15-25',
    },
    { feature: 'A', date: '2023-11-02', value: 45, gender: 'male', age: '>25' },
    {
      feature: 'A',
      date: '2023-11-03',
      value: 35,
      gender: 'female',
      age: '15-25',
    },
    {
      feature: 'A',
      date: '2023-11-04',
      value: 30,
      gender: 'female',
      age: '>25',
    },
    {
      feature: 'A',
      date: '2023-11-05',
      value: 45,
      gender: 'male',
      age: '15-25',
    },
    {
      feature: 'A',
      date: '2023-11-06',
      value: 35,
      gender: 'male',
      age: '15-25',
    },
    {
      feature: 'B',
      date: '2023-11-01',
      value: 20,
      gender: 'female',
      age: '>25',
    },
    {
      feature: 'B',
      date: '2023-11-02',
      value: 35,
      gender: 'male',
      age: '15-25',
    },
    {
      feature: 'B',
      date: '2023-11-03',
      value: 25,
      gender: 'male',
      age: '15-25',
    },
    // Add more data as needed
  ]

  const handleBarClick = (feature) => {
    setSelectedFeature(feature)
  }
  const handleStartDateChange = (date) => {
    setSelectedDateRange({ ...selectedDateRange, startDate: date })
  }

  const handleEndDateChange = (date) => {
    setSelectedDateRange({ ...selectedDateRange, endDate: date })
  }

  const [displayData, setDisplayData] = useState(timeTrendData)

  const filterData = () => {
    const displayData = timeTrendData.filter((item) => {
      const itemDate = new Date(item.date)
      return (
        (!selectedDateRange.startDate ||
          itemDate >= selectedDateRange.startDate) &&
        (!selectedDateRange.endDate || itemDate <= selectedDateRange.endDate)
      )
    })
    setDisplayData(displayData)
  }

  const filterDataByAge = () => {

  }

  const filterDataByGender = () => {

  }
 
  return (
    <div>
      <BarChart data={data} onBarClick={handleBarClick} />
      {selectedFeature && (
        <LineChart
          selectedFeature={selectedFeature}
          timeTrendData={displayData}
          selectedDateRange={selectedDateRange}
        />
      )}
      <div className="date-range-picker">
        <DatePicker
          selected={selectedDateRange.startDate}
          onChange={handleStartDateChange}
        />
        <DatePicker
          selected={selectedDateRange.endDate}
          onChange={handleEndDateChange}
        />
        <button className='button-grp' onClick={filterData}>Apply</button>
        <button className='button-grp' onClick={filterDataByAge}>Age</button>
        <button className='button-grp' onClick={filterDataByGender}>Gender</button>
      </div>
    </div>
  )
}

export default App
