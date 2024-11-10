
import { ThemeProvider } from './Context/ThemeContext'
import { useEffect, useState } from 'react'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {

  const [theme, setTheme] = useState('light')

  const lightMode = ()=>{
    setTheme('light')
  }
  const darkMode = ()=>{
    setTheme('dark')
  }


  useEffect(()=>{ 
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <>
      <ThemeProvider value={{theme, darkMode, lightMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* ThemeBtn */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card/>
            </div>
          </div>
        </div>

      </ThemeProvider>

    </>
  )
}

export default App
