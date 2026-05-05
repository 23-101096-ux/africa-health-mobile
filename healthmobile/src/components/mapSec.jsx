import { useState } from "react";
import "./FloorPlan.css";

export default function MapSec() {
  const [activeHall, setActiveHall] = useState(1);
  const [selected,   setSelected]   = useState(null);
  const [search,     setSearch]     = useState("");

  const toggle = (id) => setSelected((prev) => (prev === id ? null : id));
  const sel    = (id) => (selected === id ? " selected" : "");

  return (
    <div className="fp-page">
      <div className="fp-container">

        {/* ── Title ── */}
        <h1 className="fp-title">Floor Plan</h1>

        {/* ── Search ── */}
        <div className="fp-search-wrap">
          <span className="fp-search-icon">⌕</span>
          <input
            className="fp-search"
            type="text"
            placeholder="Search exhibitors or booths..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ── Hall Tabs ── */}
        <div className="fp-halls">
          <button
            className={`fp-hall-btn${activeHall === 1 ? " active" : ""}`}
            onClick={() => setActiveHall(1)}
          >
            Hall
          </button>
          <button
            className={`fp-hall-btn${activeHall === 2 ? " active" : ""}`}
            onClick={() => setActiveHall(2)}
          >
            Hall
          </button>
          <button
            className={`fp-hall-btn${activeHall === 3 ? " active" : ""}`}
            onClick={() => setActiveHall(3)}
          >
            Hall
          </button>
          <button
            className={`fp-hall-btn${activeHall === 4 ? " active" : ""}`}
            onClick={() => setActiveHall(4)}
          >
            Hall
          </button>
        </div>

        {/* ── Booth Grid ── */}
        <div className="fp-grid-panel">
          <div className="fp-grid">

            {/* Row 1 */}
            <div className={`fp-booth occupied${sel(100)}`}  onClick={() => toggle(100)}>100</div>
            <div className={`fp-booth available${sel(101)}`} onClick={() => toggle(101)}>101</div>
            <div className={`fp-booth available${sel(102)}`} onClick={() => toggle(102)}>102</div>
            <div className={`fp-booth available${sel(103)}`} onClick={() => toggle(103)}>103</div>

            {/* Row 2 */}
            <div className={`fp-booth available${sel(104)}`} onClick={() => toggle(104)}>104</div>
            <div className={`fp-booth occupied${sel(105)}`}  onClick={() => toggle(105)}>105</div>
            <div className={`fp-booth occupied${sel(106)}`}  onClick={() => toggle(106)}>106</div>
            <div className={`fp-booth available${sel(107)}`} onClick={() => toggle(107)}>107</div>

            {/* Row 3 */}
            <div className={`fp-booth available${sel(108)}`} onClick={() => toggle(108)}>108</div>
            <div className={`fp-booth occupied${sel(109)}`}  onClick={() => toggle(109)}>109</div>
            <div className={`fp-booth occupied${sel(110)}`}  onClick={() => toggle(110)}>110</div>
            <div className={`fp-booth premium${sel(111)}`}   onClick={() => toggle(111)}>111</div>

            {/* Row 4 */}
            <div className={`fp-booth premium${sel(112)}`}   onClick={() => toggle(112)}>112</div>
            <div className={`fp-booth available${sel(113)}`} onClick={() => toggle(113)}>113</div>
            <div className={`fp-booth available${sel(114)}`} onClick={() => toggle(114)}>114</div>
            <div className={`fp-booth occupied${sel(115)}`}  onClick={() => toggle(115)}>115</div>

            {/* Row 5 */}
            <div className={`fp-booth occupied${sel(116)}`}  onClick={() => toggle(116)}>116</div>
            <div className={`fp-booth occupied${sel(117)}`}  onClick={() => toggle(117)}>117</div>
            <div className={`fp-booth premium${sel(118)}`}   onClick={() => toggle(118)}>118</div>
            <div className={`fp-booth premium${sel(119)}`}   onClick={() => toggle(119)}>119</div>

            {/* Row 6 */}
            <div className={`fp-booth occupied${sel(120)}`}  onClick={() => toggle(120)}>120</div>
            <div className={`fp-booth premium${sel(121)}`}   onClick={() => toggle(121)}>121</div>
            <div className={`fp-booth occupied${sel(122)}`}  onClick={() => toggle(122)}>122</div>
            <div className={`fp-booth available${sel(123)}`} onClick={() => toggle(123)}>123</div>

          </div>
        </div>

        {/* ── Legend ── */}
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