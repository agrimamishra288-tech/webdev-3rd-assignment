import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === "") return;

    onAdd(name, score);
    setName("");
    setScore("");
  };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="dot-header"></span>
          REGISTER STUDENT
        </div>
        <span className="new-entry">NEW ENTRY</span>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button type="submit">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;