import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; 
import { DateRange } from "react-date-range";
import { Box } from "@mui/material";

const WhenDate = ({ onSelect }) => {

  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
    key: 'selection',
  });
  const [rangeColor, setRangeColor] = useState(false);

  const handleSelect = (ranges) => {
    setSelectedRange(ranges.selection);
    onSelect(ranges.selection);
    setRangeColor(true);
  };

  return (
    <div>
    <DateRange
      ranges={[selectedRange]}
      onChange={handleSelect} 
      // rangeColors={['#ff0000']}
      rangeColors={rangeColor ? ['#ff0000'] : ['#245554']}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      editableDateInputs={true}
    />
  </div>
  );
}

export default WhenDate;  