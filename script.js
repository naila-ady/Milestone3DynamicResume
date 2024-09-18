var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    console.log('form submitted');
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        //profilepicture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //create resumeOutput
        var resumeOutput = "\n  <h2>Resume</h2>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " \" alt=\"ProfilePicture\" class=\"profilePicture\">") : '', ";\n  <p><strong>Name:</strong>").concat(name_1, "</p>\n  <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone:</strong>").concat(phone, "</p>\n\n  <h3>Education</h3>\n  <p>").concat(education, "</p>\n  <h3>Skills</h3>\n  <p>").concat(skills, "</p>\n  <h3>Experience</h3>\n  <p>").concat(experience, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        console.log('resume output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
