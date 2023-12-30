import React from 'react';
import CardHeaderDashboard from '../cards/CardHeaderDashboard';

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <CardHeaderDashboard />
              <CardHeaderDashboard />
              <CardHeaderDashboard />
              <CardHeaderDashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
