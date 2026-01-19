const progress25 = document.getElementById("progress-25");


function progressBar(rootEl, initialVal) {
    const MIN = 0,
    MAX= 100;

    const progressBarEl = document.createElement('div');
    progressBarEl.className = "progressBar";

    progressBarEl.setAttribute("role", "progress-bar");
    progressBarEl.setAttribute("aria-valuemin", MIN);
    progressBarEl.setAttribute("aria-valuemax", MAX);

    function setValue(val) {
        const clampedVal = Math.min(Math.max(MIN, val), MAX);

        progressBarEl.style.width = `${clampedVal}%`;
        progressBarEl.textContent = `${clampedVal}%`;
        progressBarEl.setAttribute("aria-valuenow", clampedVal);
    }

    rootEl.appendChild(progressBarEl);
    setValue(initialVal);

    return setValue;
}

progressBar(document.getElementById("progress-0"), 0);
progressBar(document.getElementById("progress-25"), 25);
progressBar(document.getElementById("progress-50"), 50);
progressBar(document.getElementById("progress-75"), 75);
progressBar(document.getElementById("progress-100"), 100);
progressBar(document.getElementById("progress-0"), -10);
progressBar(document.getElementById("progress-120"), 120);
progressBar(document.getElementById("progress-2"), 2);

const slider = document.getElementById("slider");
const progressSlider = document.getElementById("progress-slider");
const setProgress = progressBar(progressSlider, 50);

slider.addEventListener('change', (event)=> setProgress(event.target.value));
