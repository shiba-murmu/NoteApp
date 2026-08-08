import React from "react";

import WelcomeBanner from "./WelcomeBanner";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";

const DashboardHome = () => {
    return (
        <div className="min-h-screen ">

            {/* Content */}
            <div className="p-5 md:p-6">

                <div className="mx-auto max-w-7xl space-y-6">

                    {/* Welcome */}
                    <WelcomeBanner />

                    {/* Statistics */}
                    <StatsGrid />

                    {/* Main Dashboard Row */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                        {/* Main Area */}
                        <div className="xl:col-span-2">
                            {/* NotesWidget will come here */}
                        </div>

                      

                    </div>

                    {/* Secondary Dashboard Row */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                        {/* Future widgets */}
                        
                    </div>

                </div>

            </div>

        </div>
    );
};

export default DashboardHome;