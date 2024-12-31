// Function to handle form submission and save data
function saveDonorData(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bloodGroup = document.getElementById('blood-group').value;
    const location = document.getElementById('location').value;

    // Create an object with the donor's data
    const donorData = {
        name,
        email,
        phone,
        bloodGroup,
        location
    };

    // Get existing donor data from localStorage (if any)
    let donors = JSON.parse(localStorage.getItem('donors')) || [];

    // Add the new donor data to the array
    donors.push(donorData);

    // Save the updated donors array back to localStorage
    localStorage.setItem('donors', JSON.stringify(donors));

    // Show a success message
    alert('Thank you for registering as a donor!');

    // Optionally, reset the form
    document.querySelector('.register-form').reset();

    // Display the updated list of donors
    displayDonors();
}

// Function to display registered donors in the table
function displayDonors() {
    // Get the list of donors from localStorage
    const donors = JSON.parse(localStorage.getItem('donors')) || [];

    // Get the table body where donor data will be inserted
    const donorTable = document.getElementById('donor-table');
    donorTable.innerHTML = ''; // Clear the table content

    // Loop through the donor data and add rows to the table
    donors.forEach(donor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.email}</td>
            <td>${donor.phone}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.location}</td>
        `;
        donorTable.appendChild(row);
    });
}

// Display the list of donors when the page loads
window.onload = function() {
    displayDonors(); // Show the list of donors on page load
};

// Function to toggle the display of the FAQ answers
function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];

    // Toggle the 'show' class on the clicked answer
    answer.classList.toggle('show');
}