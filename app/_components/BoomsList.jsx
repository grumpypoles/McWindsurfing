import { getBooms } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import BoomCard from "@/app/_components/BoomCard";



async function BoomsList({filter}) {
  const session = await auth();
  const eqData = await getBooms(session.user.appUserId);

  if (!eqData || !eqData.length) return null; // Check if eqData is null or empty

  let displayedEq;

 
  if (filter === "all") {
    displayedEq = eqData;
  } else if (filter === "active") {
    displayedEq = eqData.filter((equipment) => equipment.is_active === true);
  } else if (filter === "inactive") {
    displayedEq = eqData.filter((equipment) => equipment.is_active === false);
  }
  return (
    
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {eqData.length === 0 ? (
        <p>Current user does not own any equipment.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {displayedEq.map((equipment) => (
            <BoomCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      )}
    </div>
  );


}

export default BoomsList;
