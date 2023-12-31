
"use client"

import HeadDashboard from '@/components/header/HeadDashboard'
import SideHeadNav from '@/components/navbar/SideHeadNav'
import Dashboard from '@/pages/Dashboard'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="text-blueGray-700 antialiased">
        <Dashboard />
        <div className="relative md:ml-64 bg-blueGray-50">
          <SideHeadNav />
          <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
            <HeadDashboard />
          </div>
        </div>
      </div>
    </>
  )
}
