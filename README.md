
# Lab Assignment 3: React Student Scoreboard 

Name: Agrima Mishra

Roll No: 2501010207

Course: B.Tech CSE



#  Student Scoreboard (React)

A simple and interactive **student dashboard** built using React.
It allows you to add students, update scores, and view real-time statistics like total students, passed count, and average score.



##  Features

*  Add new students with scores
*  Update student scores dynamically
* Automatic pass/fail status (based on score)
*  Live statistics:

  * Total students
  * Passed students
  * Average score
* Modern UI with dark theme + neon accents
*  Fast and responsive (built with Vite)



##  Tech Stack

* React (Functional Components + Hooks)
* Vite
* CSS (custom styling)



##  Project Structure

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── StudentTable.jsx
 │    ├── StudentRow.jsx
 │    ├── AddStudentForm.jsx
 │
 ├── App.jsx
 ├── App.css
 ├── index.css
 ├── main.jsx
```



##  Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/student-scoreboard.git
cd student-scoreboard
```


### 2. Install dependencies

```
npm install
```



### 3. Run the project

```
npm run dev
```

 Open in browser:
`http://localhost:5173`



## How it Works

* State is managed using `useState`
* Students are stored in an array of objects
* Each student contains:

  ```
  { id, name, score }
  ```
* Pass/Fail is calculated dynamically (`score >= 40`)
* Stats are derived using array methods (`filter`, `reduce`)



## Deployment

This project can be deployed easily on **Netlify**:

* Build command: `npm run build`
* Publish directory: `dist`



## Note

This project focuses on **core React concepts** and clean UI design rather than complex backend logic.
