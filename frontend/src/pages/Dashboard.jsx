import Topbar from "../components/dashboard/Topbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewStats from "../components/dashboard/OverviewStats";
import AIInterviewCard from "../components/dashboard/AIInterviewCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import SkillPerformance from "../components/dashboard/SkillPerformance";
import RecentInterviews from "../components/dashboard/RecentInterviews";
import Recommendations from "../components/dashboard/Recommendations";
import BottomBanner from "../components/dashboard/BottomBanner";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <Topbar />

      <div className="w-full px-5 py-7 sm:px-6 lg:px-8">
        <DashboardHeader />

        <OverviewStats />

        <div className="mt-5 grid gap-5 xl:grid-cols-[2fr_0.8fr]">
          <AIInterviewCard />
          <ProgressCard />
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <SkillPerformance />
          <RecentInterviews />
          <Recommendations />
        </div>

        <BottomBanner />
      </div>
    </div>
  );
}

export default Dashboard;