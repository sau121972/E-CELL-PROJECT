// Get elements
const filterForm = document.getElementById('filterForm');
const careerList = document.getElementById('careerList');
const loader = document.querySelector('.loader');
const clearFiltersBtn = document.getElementById('clearFilters');
const searchInput = document.getElementById('search');

// Example career data with additional details
const careers = [
    { name: "Software Developer", industry: "tech", skills: "technical", environment: "office", salary: "high", experience: "mid", education: "Bachelor's in Computer Science", outlook: "Positive" },
    { name: "Nurse", industry: "healthcare", skills: "communication", environment: "field", salary: "medium", experience: "entry", education: "Nursing Degree", outlook: "Growing" },
    { name: "Graphic Designer", industry: "creative", skills: "creative", environment: "remote", salary: "medium", experience: "mid", education: "Bachelor's in Design", outlook: "Stable" },
    { name: "Project Manager", industry: "business", skills: "communication", environment: "office", salary: "high", experience: "senior", education: "Master's in Business", outlook: "Positive" },
    { name: "Data Scientist", industry: "tech", skills: "technical", environment: "remote", salary: "high", experience: "senior", education: "Master's in Data Science", outlook: "High Demand" },
    { name: "Social Worker", industry: "healthcare", skills: "communication", environment: "field", salary: "low", experience: "entry", education: "Bachelor's in Social Work", outlook: "Growing" },
    { name: "Marketing Specialist", industry: "business", skills: "creative", environment: "office", salary: "medium", experience: "mid", education: "Bachelor's in Marketing", outlook: "Stable" },
    { name: "Photographer", industry: "creative", skills: "creative", environment: "field", salary: "low", experience: "mid", education: "Associate's in Photography", outlook: "Competitive" }
];

// Function to filter careers based on user-selected options
function filterCareers() {
    const industry = document.getElementById('industry').value;
    const skills = document.getElementById('skills').value;
    const environment = document.getElementById('environment').value;
    const salary = document.getElementById('salary').value;
    const experience = document.getElementById('experience').value;
    const searchQuery = searchInput.value.toLowerCase();

    // Show loader while filtering
    loader.style.display = 'block';

    setTimeout(() => {
        const filteredCareers = careers.filter(career => {
            return (industry === 'all' || career.industry === industry) &&
                (skills === 'all' || career.skills === skills) &&
                (environment === 'all' || career.environment === environment) &&
                (salary === 'all' || career.salary === salary) &&
                (experience === 'all' || career.experience === experience) &&
                (career.name.toLowerCase().includes(searchQuery));
        });

        displayCareers(filteredCareers);
    }, 1000); // Simulate delay for the loader (1 second)
}

// Function to display career suggestions as cards
function displayCareers(filteredCareers) {
    loader.style.display = 'none'; // Hide loader after filtering

    if (filteredCareers.length > 0) {
        careerList.innerHTML = filteredCareers.map(career => `
            <div class="career-card">
                <h3>${career.name}</h3>
                <p><strong>Industry:</strong> ${career.industry}</p>
                <p><strong>Skills:</strong> ${career.skills}</p>
                <p><strong>Environment:</strong> ${career.environment}</p>
                <p><strong>Salary:</strong> ${career.salary}</p>
                <p><strong>Experience Level:</strong> ${career.experience}</p>
                <p><strong>Education:</strong> ${career.education}</p>
                <p><strong>Job Outlook:</strong> ${career.outlook}</p>
            </div>
        `).join('');
    } else {
        careerList.innerHTML = `<p>No career suggestions match your criteria.</p>`;
    }
}

// Apply filters on form submission
filterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    filterCareers();
});

// Clear all filters
clearFiltersBtn.addEventListener('click', function() {
    filterForm.reset();
    searchInput.value = '';
    filterCareers(); // Reset to show all careers
});

// Initial load with all careers
displayCareers(careers);
