// Dynamically load latest blog posts
const posts = [
  { title: "My Research on Quantum Systems", link: "post/post-1.html", date: "April 20, 2025" },
];

function loadPosts(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.innerHTML = `
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p>${post.date}</p>
    `;
    container.appendChild(postCard);
  });
}

// Check which page we are on
if (document.getElementById('posts-container')) {
  loadPosts('posts-container'); // Homepage
}
if (document.getElementById('blog-posts')) {
  loadPosts('blog-posts'); // Blog page
}

// Dynamically load projects
const projects = [
  { title: "Quantum Systems Simulation", link: "https://github.com/opaquebug/quantum-sim", description: "A simulation framework for studying particle interactions." },
];

function loadProjects(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
      <p>${project.description}</p>
    `;
    container.appendChild(projectCard);
  });
}

// Check which page we are on
if (document.getElementById('projects-list')) {
  loadProjects('projects-list'); // Projects page
}