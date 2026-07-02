function openProject(
    title,
    description,
    student,
    college,
    github,
    linkedin
){

    document.getElementById("modalTitle").textContent =
    title;

    document.getElementById("modalDescription").textContent =
    description;

    document.getElementById("modalStudent").textContent =
    student;

    document.getElementById("modalCollege").textContent =
    college;

    document.getElementById("modalGithub").href =
    github;

    document.getElementById("modalLinkedin").href =
    linkedin;

    document
        .getElementById("projectModal")
        .classList.add("active");

}

document
    .getElementById("closeModal")
    ?.addEventListener("click", () => {

        document
            .getElementById("projectModal")
            .classList.remove("active");

    });