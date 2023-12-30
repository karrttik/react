import HeaderDashboard from '@/components/comp-head/HeaderDashboard'
import NavbarDashboard from '@/components/comp-nav/NavbarDashboard'
import NavbarSlider from '@/components/comp-nav/NavbarSlider'
import React from 'react'

const page = () => {
  return (
    <>
    <body className="text-blueGray-700 antialiased">

        <NavbarSlider />
      <div className="relative md:ml-64 bg-blueGray-50">
        <NavbarDashboard />
        <HeaderDashboard />
      </div>

    </body>  
    </>
  )
}

export default page