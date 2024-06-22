"use client";

import { useState } from "react";
import { DataEntryFormSubmit } from "./DataEntryFormSubmit";
import { DataEntryRow } from "./DataEntryRow";
import "~/styles/globals.css";

type Row = number;

const initialRows = 10;

export function DataEntryForm() {
  const [rows, setRows] = useState<Row[]>(
    Array.from({ length: initialRows }, (_, index) => index),
  );

  const handleAddRow = (): void => {
    setRows((prevRows) => [...prevRows, prevRows.length]);
  };

  return (
    <div className="container p-4">
      <div className="columns"></div>
      <div className="columns">
        <form>
          {rows.map((_, index) => (
            <DataEntryRow key={index} />
          ))}
          <AddRowButton onAddRow={handleAddRow} />
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

interface AddRowButtonProps {
  onAddRow: () => void;
}

function AddRowButton({ onAddRow }: AddRowButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full border p-1"
      onClick={onAddRow}
    >
      +
    </button>
  );
}
