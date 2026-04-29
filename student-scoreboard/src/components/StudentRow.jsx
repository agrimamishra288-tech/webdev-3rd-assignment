import { useState } from "react";

function StudentRow({ student, onUpdate }) {
  const [value, setValue] = useState(student.score || 0);

  const status = student.score >= 40 ? "PASS" : "FAIL";

  const handleSave = () => {
    if (value === "" || isNaN(value)) return;
    onUpdate(student.id, Number(value));
  };

  return (
    <div className="row">
      <span>{student.name}</span>

      <span className="score">{student.score}</span>

      <span className={status === "PASS" ? "pass" : "fail"}>
        <span className="dot"></span> {status}
      </span>

      <div className="update-box">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={handleSave}>
          SAVE
        </button>
      </div>
    </div>
  );
}

export default StudentRow;