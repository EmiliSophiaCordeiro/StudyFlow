const subjects = [];

let totalMinutes = 0;

function addSubject() {

  const input =
    document.getElementById(
      "subjectInput"
    );

  if (!input) return;

  if (input.value.trim() === "")
    return;

  subjects.push(input.value);

  renderSubjects();

  input.value = "";
}

function renderSubjects() {

  const list =
    document.getElementById(
      "subjectList"
    );

  if (!list) return;

  list.innerHTML = "";

  subjects.forEach(subject => {

    const li =
      document.createElement("li");

    li.textContent = subject;

    list.appendChild(li);
  });
}

function registerStudy() {

  const input =
    document.getElementById(
      "minutesInput"
    );

  if (!input) return;

  totalMinutes +=
    Number(input.value);

  document.getElementById(
    "totalMinutes"
  ).textContent =
    `Total estudado: ${totalMinutes} minutos`;

  input.value = "";
}