
import { auth } from "@/app/_lib/auth";
import { getDisciplineStats } from "@/app/_lib/statistics";
import ChartWSBar from "@/app/_components/ChartWSBar";



async function ChartWSCatList() {
  const session = await auth()
  const sportsData = await getDisciplineStats(session.user.appUserId);
  
 
  return (
    <div>
      {getDisciplineStats.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
         You don&apos;t have any swims recorded yet. Start collecting your statistics.
        </h1>
      ) : (
        <ChartWSBar rowData={sportsData} />
      )}
    </div>
  );


}

export default ChartWSCatList;
