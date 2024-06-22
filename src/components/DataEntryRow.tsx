import "~/styles/globals.css";

export function DataEntryRow() {
  return (
    <div className="container text-[#15162c]">
      <div className="columns h-6 p-1">
        <input type="date" />
      </div>
      <div className="columns p-1">
        <select className="h-6">
          <option>Name</option>
        </select>
      </div>
      <div className="columns p-1">
        <select className="h-6">
          <option>Category</option>
        </select>
      </div>
      <div className="columns p-1">
        <select className="h-6">
          <option>Notes</option>
        </select>
      </div>
      <div className="columns p-1">
        <select className="h-6">
          <option>Hours</option>
        </select>
      </div>
      <div className="columns p-1">
        <textarea placeholder=" Comments" className="h-6" />
      </div>
    </div>
  );
}
