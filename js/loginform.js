    const tabButtons = document.querySelectorAll(".tab-btn");
    const formBoxes = document.querySelectorAll(".form-box");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        formBoxes.forEach(box => box.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.target).classList.add("active");
      });
    });