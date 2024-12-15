import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicTable from './components/Table.jsx'
import HeaderApp from './components/header/header.jsx'

function App() {
  const nameuser = 'Janya Suriwong'

  return (
    <>
       <HeaderApp  nameUser = {nameuser}/>
      {/* <BasicTable /> */}
    </>
  )
}

export default App
