import { auth } from "@/app/_lib/auth";
import { getWindDirection } from "@/app/_lib/data-service";
import WindDirectionGrid from "@/app/_components/WindDirectionGrid";

async function WindDirectionList() {
  const session = await auth();
  const ws_wind = await getWindDirection();
  

  return (
    <div>
      {ws_wind.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any wind directions recorded yet.
        </h1>
      ) : (
        <WindDirectionGrid rowData={ws_wind} />
      )}
    </div>
  );
}

export default WindDirectionList;
