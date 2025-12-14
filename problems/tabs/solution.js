const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) =>{
    tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-tab");

        tabs.forEach((tab)=> {
            tab.classList.remove("active");
        });

        tabPanels.forEach((tabPanel) => {
            tabPanel.classList.remove("active");
        });

        tab.classList.add("active");

        document.getElementById(targetId).classList.add("active")

    })
})

