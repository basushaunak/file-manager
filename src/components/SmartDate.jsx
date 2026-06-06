import { forwardRef, useState, useEffect } from "react";

const SmartDate = forwardRef(
  ({ label, value, onChange, className = "", id, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");

    // Format the date object back to standard d/m/y format when value changes externally
    useEffect(() => {
      if (value instanceof Date && !isNaN(value.getTime())) {
        const d = value.getDate();
        const m = value.getMonth() + 1; // 0-indexed
        const y = value.getFullYear();
        setInputValue(`${d}/${m}/${y}`);
      } else {
        setInputValue("");
      }
    }, [value]);

    const handleBlur = (e) => {
      const rawText = e.target.value.trim();
      const now = new Date();

      // Rules 3 & 4: Default to current date and time if input is entirely empty
      if (!rawText) {
        setInputValue(
          `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
        );
        if (onChange) onChange(now);
        if (props.onBlur) props.onBlur(e);
        return;
      }

      // Rule 1: Split string using any delimiter combination of /, ., or -
      const segments = rawText.split(/[./-]/).filter(Boolean);

      let day = now.getDate();
      let month = now.getMonth(); // 0-indexed internally (0 = Jan, 11 = Dec)
      let year = now.getFullYear();

      if (segments.length === 1) {
        // Rule 4: Only one number provided -> assume current month and year
        const parsedDay = parseInt(segments[0], 10);
        if (!isNaN(parsedDay)) day = parsedDay;
      } else if (segments.length >= 2) {
        // Rule 2: Single or double digit day and month
        const parsedDay = parseInt(segments[0], 10);
        const parsedMonth = parseInt(segments[1], 10);

        if (!isNaN(parsedDay)) day = parsedDay;
        if (!isNaN(parsedMonth)) month = parsedMonth - 1; // Map human month to JS 0-11 range

        if (segments.length === 3) {
          // Rule 2: Explicit year segment provided (2 or 4 digits)
          let parsedYear = parseInt(segments[2], 10);
          if (!isNaN(parsedYear)) {
            if (segments[2].length === 2) {
              // Convert 2-digit shortcut into a realistic 4-digit century year
              const currentCentury = Math.floor(now.getFullYear() / 100) * 100;
              parsedYear = currentCentury + parsedYear;
            }
            year = parsedYear;
          }
        }
        // Rule 3: If year segment is completely omitted, 'year' keeps its initialized 'now.getFullYear()'
      }

      // Build the target date object (inheriting the active timestamp hours/minutes/seconds)
      const targetDate = new Date(now.getTime());
      targetDate.setFullYear(year, month, day);

      // Simple validation fallback: reset to current date if user provided completely illegal calendar values
      if (isNaN(targetDate.getTime())) {
        const backupDate = new Date();
        setInputValue(
          `${backupDate.getDate()}/${backupDate.getMonth() + 1}/${backupDate.getFullYear()}`,
        );
        if (onChange) onChange(backupDate);
      } else {
        // Format layout cleanly inside the view boundary
        setInputValue(
          `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`,
        );
        if (onChange) onChange(targetDate);
      }

      // Chain initial HTML input onBlur event down seamlessly if provided by parent
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    return (
      <div
        className="smart-date-container"
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <input
          {...props}
          id={id}
          ref={ref}
          type="text"
          value={inputValue}
          placeholder="d/m/y"
          onChange={(e) => setInputValue(e.target.value)} // Free-text typing mode
          onBlur={handleBlur} // Parsing mechanics execute exclusively here
          className={`smart-date-input ${className}`}
        />
      </div>
    );
  },
);

SmartDate.displayName = "SmartDate";

export default SmartDate;
