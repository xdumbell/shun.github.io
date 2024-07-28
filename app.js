import projects from "./assets/projects.js";

const projectsContainer = document.querySelector(".project-cards");

// const tl = gsap.timeline();

// tl.from(".name", {
//   x: -100,
//   opacity: 0,
//   duration: 0.8,
// })
//   .from(
//     ".job",
//     {
//       x: -100,
//       opacity: 0,
//       duration: 1,
//     },
//     "-=.3"
//   )
//   .from(".job-2", {
//     x: -100,
//     opacity: 0,
//     duration: 0.2,
//   })
//   .from(
//     ".job-1",
//     {
//       x: -100,
//       opacity: 0,
//       duration: 0.2,
//     },
//     "-=.2"
//   )
//   .from(".btn-1", {
//     y: 100,
//     opacity: 0,
//     duration: 0.3,
//   })
//   .from(
//     ".btn-2",
//     {
//       y: 100,
//       opacity: 0,
//       duration: 0.3,
//     },
//     "-=.2"
//   );

// gsap.from(".project-card", {
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "top center",
//   },
//   y: 150,
//   opacity: 0,
//   stagger: 0.2,
//   duration: 1,
// });
// gsap.from(".contact-container", {
//   scrollTrigger: {
//     trigger: ".contact-page",
//     start: "top center",
//   },
//   y: 150,
//   opacity: 0,
//   stagger: 0.2,
//   duration: 1.3,
// });

const printProjects = () => {
  projects.map((item) => {
    projectsContainer.innerHTML += `
        <article class="project-card">
            <div class="imageContainer">
              <img src="${item.image}" alt="" />
            </div>
            <div class="project-details">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
            </div>
           
        </article>
    `;
  });
};
printProjects();
// const projectsContainer = document.querySelector(".project-cards");

const projectCard = document.querySelectorAll(".project-card");
const skillsContainer = document.querySelector(".skillsContainer");
const listItems = document.querySelectorAll(".styles_item__jBhft");

// Skill section Intersection Observer
const skillObserver = new IntersectionObserver((entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    listItems.forEach((list) => list.classList.add("slide"));
  } else {
    listItems.forEach((list) => list.classList.remove("slide"));
  }
});
skillObserver.observe(skillsContainer);

const projectSection = document.querySelector("#projectsSection");

const projectsObserver = new IntersectionObserver((entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    // console.log(entry.target);
    entry.target.classList.add("slideUp");
  } else {
    // entry.target.classList.remove("slideUp");
  }
});

// projectCard.forEach((card) => projectsObserver.observe(card));
projectsObserver.observe(projectsContainer);
