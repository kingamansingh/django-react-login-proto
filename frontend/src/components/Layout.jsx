import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'

function Layout() {
  const [sidebarWidth, setSidebarWidth] = useState(250)
  const [isResizing, setIsResizing] = useState(false)

  const startResizing = () => {
    setIsResizing(true)
  }

  const stopResizing = () => {
    setIsResizing(false)
  }

  const resize = (e) => {
    if (isResizing) {
      const newWidth = e.clientX
      if (newWidth > 150 && newWidth < 500) {
        setSidebarWidth(newWidth)
      }
    }
  }

  return (
    <div 
      className="layout" 
      onMouseMove={resize} 
      onMouseUp={stopResizing}
    >
      <Navbar />
      <div className="main-container">
        <Sidebar width={sidebarWidth} />
        <div 
          className="resizer" 
          onMouseDown={startResizing}
        />
        <Content />
      </div>
    </div>
  )
}

export default Layout