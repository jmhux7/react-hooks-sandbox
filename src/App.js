import React, { useEffect, useState } from 'react'
import { getData } from './api/requestClient'

const App = () => {
  const [appState, setAppState] = useState({})

  const fetchData = async (url) => {
    // eslint-disable-next-line no-console
    getData(url).then(res => setAppState({ dog: res.data.message })).catch(e => console.log(e))
  }

  useEffect(() => {
    fetchData('https://dog.ceo/api/breeds/image/random')
  }, [])

  return (
    <>
      {appState.dog && <img aria-label="boilerplate dog image" src={appState.dog} alt="No dogs here" />}
    </>
  )
}

export default App
