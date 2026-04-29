import { useState } from "react";
import Header from "./components/Header.jsx";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 },
  ]);

  // ADD STUDENT
  const addStudent = (name, score) => {
    if (!name || score === "") return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    setStudents([...students, newStudent]);
  };

  // UPDATE SCORE
  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  // STATS
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((acc, s) => acc + s.score, 0) / total
        );

  return (
    <div className="container">
      <Header />

      <AddStudentForm onAdd={addStudent} />

      <div className="stats">
        <div className="card">
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>

        <div className="card">
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>

        <div className="card">
          <p>AVG SCORE</p>
          <h2>{avg}</h2>
        </div>
      </div>

      <StudentTable students={students} onUpdate={updateScore} />

      <div className="footer">
        ACADEMIC TERMINAL • SECURE SESSION
      </div>
    </div>
  );
}

export default App;