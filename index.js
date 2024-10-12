const enrollButton = document.getElementById("formEnroll");

enrollButton.addEventListener("click", () => {
  let studentName = document.getElementById("studentName").value;
  let courseName = document.getElementById("courseName").value;
  let studentId = document.getElementById("studentId").value;

  // creating a table row where we will store our inputs/data
  let createRow = document.createElement("tr");

  // this will place student'name in the HTML element
  let studentNameElement = document.createElement("td");
  studentNameElement.innerHTML = studentName;
  createRow.append(studentNameElement);

  // this will place course name in the HTML element
  let courseNameElement = document.createElement("td");
  courseNameElement.innerHTML = courseName;
  createRow.append(courseNameElement);

  // this will place course name in the HTML element
  let studentIdElement = document.createElement("td");
  studentIdElement.innerHTML = studentId;
  createRow.append(studentIdElement);

  //console.log(createRow);

  // here we are adding a new row to the table
  document.querySelector("table").appendChild(createRow);

  // we are making sure that these lines are reset and we can add some njew data
  document.getElementById("studentName").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("studentId").value = "";
});
