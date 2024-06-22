import { DataEntryFormSubmit } from "./DataEntryFormSubmit";
import { DataEntryRow } from "./DataEntryRow";
import "~/styles/globals.css";

var defaultRows: number = 10;

export function DataEntryForm() {
  return (
    <div className="container p-4">
      <div className="columns"></div>
      <div className="columns">
        <form>
          {Array.from({ length: defaultRows }).map((_, index) => (
            <DataEntryRow key={index} />
          ))}
          <AddRowButton />
          <div className="container">
            <div className="columns"></div>
            <div className="columns flex items-center justify-center">
              <DataEntryFormSubmit />
            </div>
            <div className="columns"></div>
          </div>
        </form>
      </div>
      <div className="columns"></div>
    </div>
  );
}

function AddRowButton() {
  return (
    <button className="rounded-full border p-1" onClick={AddRow()}>
      +
    </button>
  );
}

function AddRow(): any {
  defaultRows++;
}
