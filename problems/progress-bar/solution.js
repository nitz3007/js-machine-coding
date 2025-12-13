const container = document.getElementById("container");
const addButton = document.getElementById("add-btn");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");

let bars = [];
let queue = [];
let activeCount = 0;


function addBar() {
    const wrapper = document.createElement('div');
    wrapper.className = 'progress-wrapper';

    const bar = document.createElement('div');
    bar.className = 'progress-bar';

    wrapper.appendChild(bar);
    container.appendChild(wrapper);

    bars.push({element: bar, status: "idle"});

//    const timer = setTimeout(()=> {
//         bar.style.width = "100%";
//    },10);
}

function startBarFill(barObj) {
    if(activeCount >= 3) {
        queue.push(barObj);
        return;
    }

    barObj.status = "running";
    activeCount++;

    let progress = 0;
    const timer = setInterval(()=> {
        progress += 1;
        barObj.element.style.width = progress + '%';

        if(progress >= 100) {
            clearInterval(timer);
            barObj.status = "done";
            activeCount--;

            if(queue.length > 0) {
                const next = queue.shift();
                startBarFill(next);
            }
        }
    },20);
}

function resetBar() {
    container.innerHTML = "";
    bars = [];
    activeCount = 0;
    queue=[];

}
    

addButton.addEventListener("click", addBar);

startButton.addEventListener("click", () => {
    bars.forEach((barObj)=> {
        if(barObj.status == "idle") {
            startBarFill(barObj);
        } 
    })
});

resetButton.addEventListener("click", resetBar);
