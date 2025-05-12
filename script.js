document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cycleForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lastPeriodInput = document.getElementById("lastPeriod").value;
    const cycleLengthInput = document.getElementById("cycleLength").value;

    if (!lastPeriodInput || !cycleLengthInput) {
      alert("Please fill in all fields.");
      return;
    }

    const lastPeriodDate = new Date(lastPeriodInput);
    const cycleLength = parseInt(cycleLengthInput, 10);

    // Calculate next period
    const nextPeriod = new Date(lastPeriodDate);
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

    // Calculate fertile window (ovulation is approx. 14 days before next period)
    const ovulationDate = new Date(nextPeriod);
    ovulationDate.setDate(ovulationDate.getDate() - 14);

    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 4);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    // Display results
    document.getElementById("nextPeriod").textContent = nextPeriod.toDateString();
    document.getElementById("fertileWindow").textContent = `${fertileStart.toDateString()} to ${fertileEnd.toDateString()}`;
    document.getElementById("result").classList.remove("hidden");
  });
});
