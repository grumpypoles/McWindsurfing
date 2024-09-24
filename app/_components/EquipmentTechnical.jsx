import { KeyIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
const EquipmentTechnical = ({ type, eqData }) => {
  return (
    <div className="flex flex-col items-center justify-top  text-primary-800 bg-primary-200">
      <span className="flex flex-row items-center gap-x-2 mb-4 w-full p-4 text-2xl font-bold  bg-primary-400">
        <WrenchScrewdriverIcon className="h-10 w-10" /> Technical Data
      </span>

      <div>
        <ul>
        {type === "Mast" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Type: {eqData[0].type}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Color: {eqData[0].color}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Luff: {eqData[0].luff}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Boom: {eqData[0].boom}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Battens: {eqData[0].battens}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Cams: {eqData[0].cams}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Head: {eqData[0].head}
              </span>
            </li>
          )}
          {type === "Sail" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Mast: {eqData[0].mast}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Volume: {eqData[0].volume} liters
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Width: {eqData[0].width}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Length: {eqData[0].length}
              </span>
            </li>
          )}
          
          <li>
            <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
              <KeyIcon className="h-6 w-6" /> Weight: {eqData[0].weight}
            </span>
          </li>
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Programme: {eqData[0].programme}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Fin Box: {eqData[0].fin_box}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Fin Size: {eqData[0].fin_size}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Sail Size: {eqData[0].sail_size}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Technology: {eqData[0].technology}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Shaper: {eqData[0].shaper}
              </span>
            </li>
          )}
          {type === "Mast" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> IMCS: {eqData[0].imcs}
              </span>
            </li>
          )}
          {type === "Mast" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Carbon: {eqData[0].carbon}
              </span>
            </li>
          )}
          
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Tail: {eqData[0].tail}
              </span>
            </li>
          )}
        
          
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Back Strap: {eqData[0].back_strap}
              </span>
            </li>
          )}
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Front Strap: {eqData[0].front_strap}
              </span>
            </li>
          )}
          
          
          
          {type === "Board" && (
            <li>
              <span className="flex flex-row items-center gap-x-2 w-full text-lg font-medium">
                <KeyIcon className="h-6 w-6" /> Serial Number: {eqData[0].serial_number}
              </span>
            </li>
          )}
          
          <li>
            <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
              <a
                href={eqData[0].web_url}
                className="flex flex-row items-center gap-x-2 w-full text-xl font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KeyIcon className="h-6 w-6" />
                Maker WEB: {eqData[0].web_url}
              </a>
            </span>
          </li>

          <li>
            <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
              {eqData[0].is_active && (
                <>
                  <KeyIcon className="h-6 w-6" />
                  Status: Active
                </>
              )}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center mb-6 gap-x-2 w-full text-xl font-medium">
              {!eqData[0].is_active && (
                <>
                  <KeyIcon className="h-6 w-6" />
                  Status: Inactive
                </>
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EquipmentTechnical;
