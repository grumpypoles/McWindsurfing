import { auth } from "@/app/_lib/auth";
import { getSport } from "@/app/_lib/data-service";
import SportGrid from "@/app/_components/SportGrid";

async function SportList() {
  const session = await auth();
  const ws_sport = await getSport();
  

  return (
    <div>
      {ws_sport.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any sports recorded yet.
        </h1>
      ) : (
        <SportGrid rowData={ws_sport} />
      )}
    </div>
  );
}

export default SportList;
