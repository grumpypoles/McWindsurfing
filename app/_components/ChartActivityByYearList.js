import { getActivities } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import ChartSwimBar from "@/app/_components/ChartSwimBar";
import { getRecreationsStatistics, getSwimStats } from "@/app/_lib/statistics";
import ChartActivityBar from "@/app/_components/ChartActivityBar";
import ChartActivityTimeBar from "@/app/_components/ChartActivityTimeBar";



async function ChartActivityByYearList() {
  const session = await auth()
  const recreationalData = await getRecreationsStatistics(session.user.appUserId);
  const activities = await getActivities()

 


  return (
    <div>
      {recreationalData.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
         You don&apos;t have any recreational activities recorded yet. Start collecting your statistics.
        </h1>
      ) : (
        <>
        <div className="grid grid-cols-2 gap-4">
        <ChartActivityBar rowData={recreationalData} activities={activities} />
        <ChartActivityTimeBar rowData={recreationalData} activities={activities} />
        </div>
        </>
      )}
    </div>
  );


}

export default ChartActivityByYearList;
