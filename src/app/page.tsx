import HeaderDashboard from '@/components/comp-head/HeaderDashboard'
import NavbarDashboard from '@/components/comp-nav/NavbarDashboard'
import NavbarRightDashboard from '@/components/comp-nav/NavbarRightDashboard'
import React from 'react'

const page = () => {
  return (
    <>
      <NavbarDashboard />
      <NavbarRightDashboard />
      <HeaderDashboard />
    </>
  )
}

export default page