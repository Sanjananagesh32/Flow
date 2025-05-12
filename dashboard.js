document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("cycleData"));

  if (data) {
    document.getElementById("lastPeriod").textContent = data.lastPeriod;
    document.getElementById("nextPeriod").textContent = data.nextPeriod;
    document.getElementById("fertileWindow").textContent = `${data.fertileStart} to ${data.fertileEnd}`;
    document.getElementById("cycleInfo").classList.remove("hidden");
  } else {
    alert("No data found. Please log your cycle first.");
    window.location.href = "index.html";
  }
});
