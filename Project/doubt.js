doubtSearchIcon.addEventListener("click", async () => {
    const question = doubtInput.value.trim();
    if (question) {
      solutionBox.innerHTML = `<p>Q: ${question} → Loading answer...</p>`;
  
      try {
        const response = await fetch("http://localhost:5000/ask-doubt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        });
  
        const data = await response.json();
        const para = document.createElement("p");
        para.textContent = `Q: ${data.question} → A: ${data.answer}`;
        solutionBox.innerHTML = "";
        solutionBox.appendChild(para);
      } catch (err) {
        solutionBox.innerHTML = `<p>Error fetching answer. Please try again.</p>`;
      }
  
      doubtInput.value = "";
    }
  });
  