function openModal(
  name,
  email,
  phone,
  nationality,
  residence,
  birthDate,
  gender,
  degree,
  endDate,
  startDate,
  score,
  experienceLevel,
  salary,
  ITSkills,
  languages,
  image
) {
    console.log(image);
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalEmail").innerText = email;
  document.getElementById("modalPhone").innerText = phone;
  document.getElementById("modalNationality").innerText = nationality;
  document.getElementById("modalResidence").innerText = residence;
  document.getElementById("modalBirthDate").innerText = birthDate;
  document.getElementById("modalGender").innerText = gender;
  document.getElementById("modalDegree").innerText = degree;
  document.getElementById("modalEndDate").innerText = endDate;
  document.getElementById("modalStartDate").innerText = startDate;
  document.getElementById("modalScore").innerText = score;
  document.getElementById("modalExperienceLevel").innerText = experienceLevel;
  document.getElementById("modalSalary").innerText = salary;
  document.getElementById("modalITSkills").innerText = ITSkills;
  document.getElementById("modalLanguages").innerText = languages;
  document.getElementById("modalImage").src = image;
}
