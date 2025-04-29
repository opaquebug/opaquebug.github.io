// Dynamically load latest blog posts
const posts = [
  { title: "My Research on Quantum Systems", link: "posts/post-1.html", date: "April 20, 2025" },
  { title: "Field Notes: Observing Deep Sea Microbes", link: "posts/post-2.html", date: "April 15, 2025" }
];

const postsContainer = document.getElementById('posts-container');

posts.forEach(post => {
  const postCard = document.createElement('div');
  postCard.className = 'post-card';
  postCard.innerHTML = `
    <h3><a href="${post.link}">${post.title}</a></h3>
    <p>${post.date}</p>
  `;
  postsContainer.appendChild(postCard);
});

const posts = [
  { title: "My Research on Quantum Systems", link: "posts/post-1.html", date: "April 20, 2025" },
  { title: "Field Notes: Observing Deep Sea Microbes", link: "posts/post-2.html", date: "April 15, 2025" },
  { title: "Tutorial: Building Simulation Models", link: "posts/post-3.html", date: "April 10, 2025" }
];

function loadPosts(containerId) {
  const container = document.getElementById(containerId);

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

// Existing blog posts loading stays here...

// Now add projects
const projects = [
  { title: "Quantum Systems Simulation", link: "https://github.com/yourusername/quantum-sim", description: "A simulation framework for studying particle interactions." },
  { title: "Marine Microbial Analysis", link: "https://github.com/yourusername/microbe-study", description: "Data analysis pipelines for marine biodiversity research." },
  { title: "Scientific Writing Toolkit", link: "https://github.com/yourusername/writing-toolkit", description: "Open-source templates for scientific publishing." }
];

function loadProjects(containerId) {
  const container = document.getElementById(containerId);

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
if (document.getElementById('posts-container')) {
  loadPosts('posts-container'); // Homepage
}
if (document.getElementById('blog-posts')) {
  loadPosts('blog-posts'); // Blog page
}
if (document.getElementById('projects-list')) {
  loadProjects('projects-list'); // Projects page
}
