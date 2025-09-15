import DormRates from "./Gadgets";

export default function DormInfo() {
  return (
    <div className="space-y-6 text-sm">
      {/* Capacity per Dormitory */}
       
     
       {/* LIADLAW HALL */}
      <div>
        <h2 className="font-semibold">I. LIADLAW HALL</h2>
        <p className="text-gray-600 text-xs mb-6">
          Note: With additional charges for gadgets.
        </p>
        <table className="w-full border border-collapse mt-2 text-sm ">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1 text-left">Room Type</th>
              <th className="border px-2 py-1 text-left">Monthly Rate per Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Special (A/C)</td>
              <td className="border px-2 py-1">
                ₱3,975.00 (local students, 2 pax/room) <br />
                ₱7,950.00 (foreign/exchange students, 2 pax/room)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Regular (Fan)</td>
              <td className="border px-2 py-1">₱1,500.00 (4 pax/room)</td>
            </tr>
          </tbody>
        </table>
      </div>

        {/* Liadlaw Hall Capacity */}
        <div className="overflow-x-auto">
          
          <table className="w-full border border-collapse text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="border px-2 py-1">Floor level</th>
                <th className="border px-2 py-1">Aircon Rooms</th>
                <th className="border px-2 py-1">Fan Rooms</th>
                <th className="border px-2 py-1">Capacity per floor level</th>
              </tr>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1"></th>
                <th className="border px-2 py-1">Female / Male</th>
                <th className="border px-2 py-1">Female / Male</th>
                <th className="border px-2 py-1">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1st Floor</td>
                <td className="border px-2 py-1">2 / 4</td>
                <td className="border px-2 py-1">24 / 24</td>
                <td className="border px-2 py-1">54</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2nd Floor</td>
                <td className="border px-2 py-1">4 / 4</td>
                <td className="border px-2 py-1">24 / 24</td>
                <td className="border px-2 py-1">56</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">3rd Floor</td>
                <td className="border px-2 py-1">4 / 4</td>
                <td className="border px-2 py-1">24 / 24</td>
                <td className="border px-2 py-1">56</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">4th Floor</td>
                <td className="border px-2 py-1">4 / 4</td>
                <td className="border px-2 py-1">24 / 24</td>
                <td className="border px-2 py-1">56</td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border px-2 py-1">Total</td>
                <td className="border px-2 py-1">14 / 16</td>
                <td className="border px-2 py-1">96 / 96</td>
                <td className="border px-2 py-1">222</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* LIHANGIN HALL */}
      <div>
        <h2 className="font-semibold">
          II. LIHANGIN HALL – ₱500.00/person/month
        </h2>
        <p className="text-gray-600 text-xs">
          Note: With additional charges for gadgets.
        </p>
      </div>

        {/* Lihangin Hall Capacity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold bg-green-100 px-2 py-1">
              Lihangin Hall – Female
            </h3>
            <table className="w-full border border-collapse mt-2 text-sm">
              <tbody>
                <tr>
                  <td className="border px-2 py-1">First Floor</td>
                  <td className="border px-2 py-1">8 Double Deck Beds</td>
                  <td className="border px-2 py-1">16 pax</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Second Floor</td>
                  <td className="border px-2 py-1">11 Double Deck Beds</td>
                  <td className="border px-2 py-1">22 pax</td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td className="border px-2 py-1" colSpan={2}>
                    Total
                  </td>
                  <td className="border px-2 py-1">38 pax</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-semibold bg-green-100 px-2 py-1">
              Lihangin Hall – Male
            </h3>
            <table className="w-full border border-collapse mt-2 text-sm">
              <tbody>
                <tr>
                  <td className="border px-2 py-1">First Floor</td>
                  <td className="border px-2 py-1">8 Double Deck Beds</td>
                  <td className="border px-2 py-1">16 pax</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Second Floor</td>
                  <td className="border px-2 py-1">11 Double Deck Beds</td>
                  <td className="border px-2 py-1">22 pax</td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td className="border px-2 py-1" colSpan={2}>
                    Total
                  </td>
                  <td className="border px-2 py-1">38 pax</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

           {/* Gadgets */}
            <DormRates />
      

      
    </div>
  );
}
