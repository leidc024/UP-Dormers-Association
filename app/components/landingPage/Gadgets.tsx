export default function DormRates() {
  return (
    <div className="space-y-6 text-sm">

      {/* Gadgets */}
      <div>
        <h3 className="font-semibold">Monthly rate for gadgets:</h3>
        <div className="grid grid-cols-2 gap-x-8 mt-2">
          <ul className="space-y-1">
            <li>Computer/Laptop : ₱100.00</li>
            <li>Wireless Headphone : ₱20.00</li>
            <li>Tablet : ₱50.00</li>
            <li>Electric Fan : ₱50.00</li>
            <li>Power Bank : ₱50.00</li>
            <li>Smart Watch : ₱20.00</li>
          </ul>
          <ul className="space-y-1">
            <li>Printer : ₱100.00</li>
            <li>Printer with Printing Job : ₱120.00</li>
            <li>Cellphone : ₱50.00</li>
            <li>Study Lamp : ₱50.00</li>
            <li>Radio/Cassette : ₱50.00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
