const container =
    document.getElementById("projectContainer");

const searchInput =
    document.getElementById("searchInput");

let allProjects = [];

fetch("assets/data/projects.json")
    .then(response => response.json())
    .then(data => {

        allProjects = data;

        displayProjects(allProjects);

    });

function displayProjects(projects) {

    container.innerHTML = "";

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project-card"
            data-aos="fade-up"
            onclick="openProject(
                '${project.name}',
                '${project.description}',
                '${project.student}',
                '${project.college}',
                '${project.github}',
                '${project.linkedin}'
            )">

            <img src="${project.image}">

            <div class="project-content">

                <h3>${project.name}</h3>

                <p>${project.description}</p>

                <br>

                <strong>
                    Student:
                </strong>

                ${project.student}

                <br><br>

                <strong>
                    College:
                </strong>

                ${project.college}

                <br><br>

                <strong>
                    Technology:
                </strong>

                ${project.technology}

                <div class="project-buttons">

                    <a href="${project.github}"
                       class="btn"
                       target="_blank"
                       onclick="event.stopPropagation();">

                       GitHub

                    </a>

                    <a href="${project.linkedin}"
                       class="btn-outline"
                       target="_blank"
                       onclick="event.stopPropagation();">

                       LinkedIn

                    </a>

                </div>

            </div>

        </div>

        `;
    });

}

searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase();

    const filtered =
        allProjects.filter(project =>

            project.name
                .toLowerCase()
                .includes(value)

        );

    displayProjects(filtered);

});