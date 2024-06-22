import { DataEntryFormSubmit } from "./DataEntryFormSubmit";
import { DataEntryRow } from "./DataEntryRow";
import "~/styles/globals.css";

export function DataEntryForm() {
  return (
    <div className="container p-4">
      <div className="columns"></div>
      <div className="columns">
        <form>
          <DataEntryRow />
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
