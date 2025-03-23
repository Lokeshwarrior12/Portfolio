// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light');
});

// Dynamic Skills Grid
const skills = {
    Languages: ['C', 'C#', 'Java', 'HTML', 'CSS', 'Python', 'JavaScript'],
    Database: ['MySQL', 'SQL'],
    Frameworks: ['Flask', 'Django', 'Node.js'],
    Tools: ['Visual Studio Code', 'Postman', 'JIRA', 'Docker', 'GitHub', 'Metasploit'],
    'Project Management': ['Git', 'Resource Guru'],
    Platforms: ['Windows', 'Linux', 'MacOS', 'Kali Linux'],
    'Cloud Computing': ['AWS', 'Render'],
    'Financial Systems': ['Accounts Payable/Receivable', 'Financial Statements']
};

const skillsGrid = document.getElementById('skills-grid');
Object.entries(skills).forEach(([category, items]) => {
    const div = document.createElement('div');
    div.className = 'skill-category glass';
    div.innerHTML = `<strong>${category}</strong><p>${items.join(', ')}</p>`;
    skillsGrid.appendChild(div);
});

// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});