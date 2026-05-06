import { useState } from "react";
import "./mapSec.css";

const HALLS = ["A", "B", "C", "D"];

const generateBooths = (hall) => {
  const statuses = [
    "occupied", "available", "available", "available",
    "available", "occupied",  "occupied",  "available",
    "available", "occupied",  "occupied",  "premium",
    "premium",   "available", "available", "occupied",
    "occupied",  "occupied",  "premium",   "premium",
    "occupied",  "premium",   "occupied",  "available",
  ];
  return statuses.map((status, i) => ({
    id: `${hall}${i + 1}`,
    label: `${hall}${i + 1}`,
    status,
  }));
};

export default function MapSec() {
  const [activeHall, setActiveHall] = useState("A");
  const [selected,   setSelected]   = useState(null);
  const [search,     setSearch]     = useState("");

  const booths = generateBooths(activeHall);

  const filtered = booths.filter((b) =>
    b.label.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id) => setSelected((prev) => (prev === id ? null : id));

  return (
    <div className="fp-page">
      <div className="fp-container">

        <h1 className="fp-title">Floor Plan</h1>

        <div className="fp-search-wrap">
          <span className="fp-search-icon">⌕</span>
          <input
            className="fp-search"
            type="text"
            placeholder="Search exhibitors or booths..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelected(null);
            }}
          />
        </div>

        <div className="fp-halls">
          {HALLS.map((hall) => (
            <button
              key={hall}
              className={`fp-hall-btn${activeHall === hall ? " active" : ""}`}
              onClick={() => {
                setActiveHall(hall);
                setSelected(null);
                setSearch("");
              }}
            >
              Hall {hall}
            </button>
          ))}
        </div>

        <div className="fp-grid-panel">
          <div className="fp-grid">
            {filtered.map((booth) => (
              <div
                key={booth.id}
                className={`fp-booth ${booth.status}${selected === booth.id ? " selected" : ""}`}
                onClick={() => toggle(booth.id)}
              >
                {booth.label}
              </div>
            ))}
          </div>
        </div>

        <div className="fp-legend">
          <div className="fp-legend-item">
            <span className="fp-legend-dot available" />
            Available
          </div>
          <div className="fp-legend-item">
            <span className="fp-legend-dot occupied" />
            Occupied
          </div>
          <div className="fp-legend-item">
            <span className="fp-legend-dot premium" />
            Premium
          </div>
        </div>

      </div>
    </div>
  );
}