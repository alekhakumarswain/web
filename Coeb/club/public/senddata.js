document.addEventListener('DOMContentLoaded', function () {
    addEventListeners();
  
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAuwSWEbnAjQQXBkFUTN1_FG9I69ZRMiM0",
        authDomain: "coeb-farwell.firebaseapp.com",
        projectId: "coeb-farwell",
        storageBucket: "coeb-farwell.appspot.com",
        messagingSenderId: "789337148979",
        appId: "1:789337148979:web:5afdd8c55b3fd91a8f1d46",
        measurementId: "G-NGSH11YLH3"
      };
      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    // Get a reference to the database service
    var database = firebase.database();
  
    // Add event listener to the form submission
    document.getElementById('clubRegistrationForm').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
  
        // Get form values
        var fullName = document.getElementById('fullName').value;
        var dob = document.getElementById('dob').value;
        var contactNumber = document.getElementById('contactNumber').value;
        var registrationNumber = document.getElementById('registrationNumber').value;
        var department = document.getElementById('department').value;
        var year = document.getElementById('year').value;
        var emailAddress = document.getElementById('emailAddress').value;
        var clubReason = document.getElementById('clubReason').value;
        var skillsExperience = document.getElementById('skillsExperience').value;
        var referenceId = document.getElementById('place').value;
        var date = document.getElementById('date').value;
  
        // Get selected clubs
        var selectedClubs = [];
        var clubnameCheckboxes = document.querySelectorAll('.clubname');
        clubnameCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedClubs.push({
                    club: checkbox.value
                });
            }
        });
  
        // Get selected preferred clubs
        var selectedPreferredClubs = [];
        var preferedClubCheckboxes = document.querySelectorAll('.preferedclub');
        preferedClubCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedPreferredClubs.push({
                    club: checkbox.value
                });
            }
        });
  
        // Check for required fields
        if (!registrationNumber || !department || !year || !emailAddress || !clubReason || !selectedClubs.length || !selectedPreferredClubs.length || registrationNumber === "" || department === "" || year === "" || emailAddress === "" || clubReason === "") {
            alert("Please fill out all the required details");
        } else {
            // Create new applicant object with user input values
            var newApplicant = {
                registrationNumber: parseInt(registrationNumber),
                department: department.toLowerCase(),
                year: parseInt(year),
                emailAddress: emailAddress,
                referenceId: referenceId,
                date: date,
                selectedClubs: selectedClubs,
                selectedPreferredClubs: selectedPreferredClubs
            };
  
            console.log(newApplicant);
  
            // Push the form data to the database without generating Firebase key
            database.ref('users/' + registrationNumber).set({
                fullName: fullName,
                dob: dob,
                contactNumber: contactNumber,
                registrationNumber: registrationNumber,
                department: department,
                year: year,
                emailAddress: emailAddress,
                clubReason: clubReason,
                skillsExperience: skillsExperience,
                selectedClubs: selectedClubs,
                selectedPreferredClubs: selectedPreferredClubs,
                referenceId: referenceId,
                date: date
            }).then(function () {
                // Reset the form after successful submission
                document.getElementById('clubRegistrationForm').reset();
                // Show a success message or redirect to a thank you page
                alert('Form submitted successfully!');
            }).catch(function (error) {
                // Handle errors
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form. Please try again later.');
            });
        }
    });
  });
  