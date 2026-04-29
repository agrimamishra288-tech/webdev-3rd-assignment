import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdate }) {
  return (
    <div className="table">
      <div className="table-header">
        <span>NAME</span>
        <span>SCORE</span>
        <span>STATUS</span>
        <span>UPDATE</span>
      </div>

      {students.map((s) => (
        <StudentRow key={s.id} student={s} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default StudentTable;