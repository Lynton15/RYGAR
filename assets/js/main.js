async function loadComponent(id, file){

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(error);
        document.getElementById(id).innerHTML = "<p class='component-error'>Unable to load component. Run this site from a local server, not via file://</p>";
    }
}

async function initializeSite(){

    await loadComponent(
        "navbar-container",
        "components/navbar.html"
    );

    await loadComponent(
        "footer-container",
        "components/footer.html"
    );

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    const menuToggle = document.getElementById("menuToggle");
    const navLinksContainer = document.getElementById("navLinks");
    const dropdownToggle = document.getElementById("dropdownToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.classList.add("active-link");
        }
    });

    if (menuToggle && navLinksContainer){
        menuToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    if (dropdownToggle && dropdownMenu){
        dropdownToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = dropdownMenu.classList.toggle("show");
            dropdownToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.addEventListener("click", event => {
            if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)){
                dropdownMenu.classList.remove("show");
                dropdownToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    addAosToSections();
    if (window.AOS){
        AOS.refreshHard();
    }
}

function addAosToSections(){
    document.querySelectorAll("section:not([data-aos])").forEach(section => {
        section.setAttribute("data-aos","fade-up");
    });
}

initializeSite();

// Loader

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("hide");
            document.body.classList.add("background-loaded");
            refreshAos();

        }, 1200);

    } else {
        refreshAos();
    }

});

function refreshAos(){
    if(window.AOS){
        AOS.refreshHard();
    }
}