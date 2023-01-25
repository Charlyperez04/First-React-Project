import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import {SmallScreenList, LargeScreenList} from './header/header.jsx'

function MyComponentHeader() {
  const [width, setWidth] = useState(window.innerWidth)
  const [componentToShow, setComponentToShow] = useState(null)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (width > 1200) {
      setComponentToShow(<LargeScreenList />)
    } else {
      setComponentToShow(<SmallScreenList />)
    }
  }, [width])

  return <div>
    {componentToShow}</div>
}
ReactDOM.createRoot(document.getElementById('header-components')).render(
    <MyComponentHeader />
)
