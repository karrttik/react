import HeaderDashboard from '@/components/comp-head/HeaderDashboard';
import NavbarDashboard from '@/components/comp-nav/NavbarDashboard';
import NavbarSlider from '@/components/comp-nav/NavbarSlider';
import React from 'react';

const Page = () => {
  return (
    <>
      <NavbarSlider />
      <div className="relative md:ml-64 bg-blueGray-50">
        <NavbarDashboard />
        <HeaderDashboard />
      </div>
    </>
  );
};

export default Page;
