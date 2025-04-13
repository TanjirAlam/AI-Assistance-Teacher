const popup = document.getElementById('popup');

    function openPopup() {
      popup.style.display = 'flex';
    }

    function closePopup() {
      popup.style.display = 'none';
    }

    function submitLogin(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log("Login details:", { email, password });

      // Add your real login logic here...

      alert('Logged in as: ' + email);
      closePopup();
    }

    const signupPopup = document.getElementById('signupPopup');

    function openSignup() {
      signupPopup.style.display = 'flex';
    }

    function closeSignup() {
      signupPopup.style.display = 'none';
    }

    function submitSignup(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      console.log("Signup Info:", { name, email, password });

      // Add signup logic here...

      alert('Account created for: ' + name);
      closeSignup();
    }
// const links = document.querySelectorAll("a.click");
// Select all anchor tags with class "click"

  // Smooth scroll on tab click
  document.querySelectorAll('.click').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // profile dropdown
  function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById("profileDropdown").classList.toggle("show");
  }

  // Close dropdown when clicking outside
  window.addEventListener("click", () => {
    document.getElementById("profileDropdown").classList.remove("show");
  });
document.addEventListener("DOMContentLoaded", () => {

  // TO-DO INTERACTION (Optional extension, add elements if needed)
  const taskList = document.querySelector(".task-card ol");
  const addTaskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");

  if (taskList && addTaskBtn && addTaskInput) {
    addTaskBtn.addEventListener("click", () => {
      const newTask = addTaskInput.value.trim();
      if (newTask) {
        const li = document.createElement("li");
        li.textContent = newTask;
        taskList.appendChild(li);
        addTaskInput.value = "";
      }
    });
  }

  // HOMEWORK UPLOAD BUTTON
  const uploadBtn = document.querySelector(".upload-btn");
  if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
      alert("Homework uploaded successfully!");
    });
  }

  // DOUBT INPUT HANDLER
  const doubtInput = document.querySelector(".doubt-input input");
  const doubtSearchIcon = document.querySelector(".search-icon");
  const solutionBox = document.querySelector(".solution-box");

  if (doubtSearchIcon && doubtInput && solutionBox) {
    doubtSearchIcon.addEventListener("click", () => {
      const question = doubtInput.value.trim();
      if (question) {
        const para = document.createElement("p");
        para.textContent = `Q: ${question} → A: Your answer will appear soon.`;
        solutionBox.appendChild(para);
        doubtInput.value = "";
      }
    });
  }

  // PRACTICE QUESTION ATTEMPT MARKING
  const practiceBox = document.querySelector(".practice-box ul");
  if (practiceBox) {
    practiceBox.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "gray";
      }
    });
  }

  // WEEKLY TEST - Submit Button
  const submitTestBtn = document.querySelector(".submit-btn");
  const questionBox = document.querySelector(".question-box");

  if (submitTestBtn && questionBox) {
    submitTestBtn.addEventListener("click", () => {
      alert("Test submitted successfully!");
      questionBox.innerHTML += `<p><b>✔ Your answers have been saved.</b></p>`;
    });
  }

});
