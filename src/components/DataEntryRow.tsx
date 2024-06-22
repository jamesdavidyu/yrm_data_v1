import "~/styles/globals.css";

export function DataEntryRow() {
  return (
    <div className="container text-[#15162c]">
      <div className="columns p-1">
        <input type="date" id="date" name="date" className="h-6 bg-slate-300" />
      </div>
      <div className="columns p-1">
        <select id="name" name="name" className="h-6 bg-slate-300">
          <option>Name</option>
        </select>
      </div>
      <div className="columns p-1">
        <select id="category" name="category" className="h-6 bg-slate-300">
          <option>Category</option>
        </select>
      </div>
      <div className="columns p-1">
        <select id="notes" name="notes" className="h-6 bg-slate-300">
          <option>Notes</option>
        </select>
      </div>
      <div className="columns p-1">
        <select id="hours" name="hours" className="h-6 bg-slate-300">
          <option>Hours</option>
        </select>
      </div>
      <div className="columns p-1">
        <textarea
          id="comments"
          name="comments"
          placeholder=" Comments"
          className="h-6 bg-slate-300"
        />
      </div>
    </div>
  );
}
