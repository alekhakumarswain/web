function addEventListeners() {
    // Hide dynamicClubPreferences initially
    document.getElementById('dynamicClubPreferences').style.display = 'none';

    // Array to store selected checkboxes
    var selectedCheckboxes = [];

    // Show dynamicClubPreferences based on selected clubs
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var checkboxId = this.id;

            if (this.checked) {
                // Add to the array if checked
                selectedCheckboxes.push(checkboxId);

                if (selectedCheckboxes.length >= 2) {
                    // Disable other checkboxes when the maximum is reached
                    checkboxes.forEach(function (otherCheckbox) {
                        if (!otherCheckbox.checked) {
                            otherCheckbox.disabled = true;
                        }
                    });
                }
            } else {
                // Remove from the array if unchecked
                selectedCheckboxes = selectedCheckboxes.filter(item => item !== checkboxId);

                // Enable all checkboxes
                checkboxes.forEach(function (otherCheckbox) {
                    otherCheckbox.disabled = false;
                });
            }

            // Show or hide dynamicClubPreferences based on the array length
            document.getElementById('dynamicClubPreferences').style.display = selectedCheckboxes.length > 0 ? 'block' : 'none';

            // Generate dynamic checkboxes based on selected club
            var dynamicClubPreferences = document.getElementById('dynamicClubPreferences');
            dynamicClubPreferences.innerHTML = '';
            if (selectedCheckboxes.includes('sportsClub')) {
                // Add checkboxes for the selected sports club
                dynamicClubPreferences.innerHTML += `
                <h4>Sports Club Preferences:</h4>
                    <div class="form-check">
                        <input type="checkbox" value="Cricket" class="form-check-input preferedclub" id="cricket">
                        <label class="form-check-label" for="cricket">Cricket</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="VolleyBall" class="form-check-input preferedclub" id="volleyball">
                        <label class="form-check-label" for="volleyball">Volleyball</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Basketball" class="form-check-input preferedclub" id="basketball">
                        <label class="form-check-label" for="basketball">Basketball</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Badminton" class="form-check-input preferedclub" id="badminton">
                        <label class="form-check-label" for="badminton">Badminton</label>
                    </div>
                    <div class="form-group">
                        <label for="otherSport">Other (please specify): </label>
                        <input type="text" class="form-control preferedclub" id="otherSport">
                    </div> 
                    <!-- Add checkboxes for other sports -->
                `;
            }
            
            if (selectedCheckboxes.includes('technicalClub')) {
                // Add checkboxes for the selected technical club
                dynamicClubPreferences.innerHTML += `
                <h4>Technical Club Preferences:</h4>
                    <div class="form-check">
                        <input type="checkbox" value="App Development" class="form-check-input preferedclub" id="appDevelopment">
                        <label class="form-check-label" for="appDevelopment">App Development</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Game Development" class="form-check-input preferedclub" id="gameDevelopment">
                        <label class="form-check-label" for="gameDevelopment">Game Development</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Web Development" class="form-check-input preferedclub" id="webDevelopment">
                        <label class="form-check-label" for="webDevelopment">Web Development</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Cyber Security" class="form-check-input preferedclub" id="cyberSecurity">
                        <label class="form-check-label" for="cyberSecurity">Cyber Security</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Cloud" class="form-check-input preferedclub" id="cloud">
                        <label class="form-check-label" for="cloud">Cloud</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Database" class="form-check-input preferedclub" id="dataBase">
                        <label class="form-check-label" for="dataBase">Database</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Graphics Design" class="form-check-input preferedclub" id="graphicsDesign">
                        <label class="form-check-label" for="graphicsDesign">Graphics Design</label>
                    </div>
                `;
            }
            
            if (selectedCheckboxes.includes('culturalClub')) {
                // Add checkboxes for the selected cultural club
                dynamicClubPreferences.innerHTML += `
                <h4>Cultural Club Preferences:</h4>
                    <div class="form-check">
                        <input type="checkbox" value="Music & Dance" class="form-check-input preferedclub" id="musicDance">
                        <label class="form-check-label" for="musicDance">Music & Dance</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Debate" class="form-check-input preferedclub" id="debate">
                        <label class="form-check-label" for="debate">Debate</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Art & Photography" class="form-check-input preferedclub" id="artPhotography">
                        <label class="form-check-label" for="artPhotography">Art & Photography</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Stand Up Comedy" class="form-check-input preferedclub" id="standUpComedy">
                        <label class="form-check-label" for="standUpComedy">Stand Up Comedy</label>
                    </div   >
                `;
            }
            
            if (selectedCheckboxes.includes('socialWelfareClub')) {
                // Add checkboxes for the selected social welfare club
                dynamicClubPreferences.innerHTML += `
                <h4>Social & Welfare Club Preferences:</h4>
                    <div class="form-check">
                        <input type="checkbox" value="Community Service" class="form-check-input preferedclub" id="communityService">
                        <label class="form-check-label" for="communityService">Community Service</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Food Donation & Water Distribution" class="form-check-input preferedclub" id="foodDonation">
                        <label class="form-check-label" for="foodDonation">Food Donation & Water Distribution</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Yoga" class="form-check-input preferedclub" id="yoga">
                        <label class="form-check-label" for="yoga">Yoga</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="Educational Outreach" class="form-check-input preferedclub" id="educationalOutreach">
                        <label class="form-check-label" for="educationalOutreach">Educational Outreach</label>
                    </div>
                `;
            }
            

        });
    });
}

function showPage(pageNumber) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('page' + i).style.display = i === pageNumber ? 'block' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    addEventListeners();
});