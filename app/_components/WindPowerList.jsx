import { auth } from "@/app/_lib/auth";
import { getWindPower } from "@/app/_lib/data-service";
import WindPowerGrid from "@/app/_components/WindPowerGrid";

async function WindPowerList() {
  const session = await auth();
  const ws_wind = await getWindPower();
  

  return (
    <div>
      {ws_wind.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any wind power recorded yet.
        </h1>
      ) : (
        <WindPowerGrid rowData={ws_wind} />
      )}
    </div>
  );
}

export default WindPowerList;
