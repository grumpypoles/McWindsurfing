import { auth } from "@/app/_lib/auth";
import { getSwell } from "@/app/_lib/data-service";
import SwellGrid from "@/app/_components/SwellGrid";

async function SwellList() {
  const session = await auth();
  const ws_swell = await getSwell();
  

  return (
    <div>
      {ws_swell.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any ocean swell recorded yet.
        </h1>
      ) : (
        <SwellGrid rowData={ws_swell} />
      )}
    </div>
  );
}

export default SwellList;
