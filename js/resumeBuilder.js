/*
This is empty on purpose! Your code to build the resume will go here.
 */
var placeholder = '%data%';

var skills = ["JS", "AngularJS", "Java", "Python", "C#"]

var bio = {
    "name": "Karanpal S. Dewgun",
    "role": "Full Stack Developer",
    "contacts": {
        "email": "karan.devgan@hotmail.com",
        "mobile": "+91 86999 50608",
        "location": "Hyderabad",
        "github": "https://github.com/karandevgan"
    },
    "pictureUrl": "images/fry.jpg",
    "welcomeMessage": "Hi! I am Karanpal Singh Dewgun.",
    "skills": skills,

    displayHeader: function () {
        var formattedHeaderName = HTMLheaderName.replace(placeholder, this.name);
        var formattedHeaderRole = HTMLheaderRole.replace(placeholder, this.role);
        $('#header').prepend(formattedHeaderRole).prepend(formattedHeaderName);
    },

    displayContacts: function () {
        if (this.contacts) {
            if (this.contacts.mobile) {
                var formattedHTMLmobile = HTMLmobile.replace(placeholder, this.contacts.mobile);
                $('#topContacts').append(formattedHTMLemail);
                $('#footerContacts').append(formattedHTMLemail);
            }
            if (this.contacts.email) {
                var formattedHTMLemail = HTMLemail.replace(placeholder, this.contacts.email);
                $('#topContacts').append(formattedHTMLemail);
                $('#footerContacts').append(formattedHTMLemail);
            }
            if (this.contacts.github) {
                var formattedHTMLgithub = HTMLgithub.replace(placeholder, this.contacts.github);
                $('#topContacts').append(formattedHTMLgithub);
                $('#footerContacts').append(formattedHTMLgithub);
            }
            if (this.contacts.location) {
                var formattedHTMLlocation = HTMLlocation.replace(placeholder, this.contacts.location);
                $('#topContacts').append(formattedHTMLlocation);
                $('#footerContacts').append(formattedHTMLlocation);
            }
        }
    },

    displaySkills: function () {
        if (this.skills && this.skills.length !== 0) {
            $('#header').append(HTMLskillsStart);
            this.skills.forEach(function (element) {
                var tempHtmlSkill = HTMLskills.replace(placeholder, element);
                $('#skills').append(tempHtmlSkill);
            }, this);
        }
    },

    displayPicture: function () {
        if (this.pictureUrl) {
            var formattedHTMLbioPic = HTMLbioPic.replace(placeholder, this.pictureUrl);
            $('#header').append(formattedHTMLbioPic);
        }
    }

}

var work = {
    "jobs": [
        {
            "job_position": "Full Stack Developer",
            "dates": "January, 2016 - Current",
            "employer": "Persistent Systems",
            "location": "Hyderabad",
            "description": "Worked in number of projects with different technologies. I had worn multiple hats with different roles in Persistent Systems. I had worked in Java, C#, and front-end technologies like AngularJS etc. to develop applications."
        },
        {
            "job_position": "Software Engineer",
            "dates": "August, 2016 - December, 2016",
            "employer": "Hewlett Packard",
            "location": "Chennai",
            "description": "Had the responsibility to develop and maintain the applications using C#."
        }
    ],

    displayWork: function () {
        if (this.jobs) {
            this.jobs.forEach(function (jobObject) {
                $('#workExperience').append(HTMLworkStart);
                var formattedHTMLworkEmployer = HTMLworkEmployer.replace(placeholder, jobObject.employer);
                var formattedHTMLworkTitle = HTMLworkTitle.replace(placeholder, jobObject.job_position);
                var formattedHTMLworkDates = HTMLworkDates.replace(placeholder, jobObject.dates);
                var formattedHTMLworkLocation = HTMLworkLocation.replace(placeholder, jobObject.location);
                var formattedHTMLworkDescription = HTMLworkDescription.replace(placeholder, jobObject.description);
                $('.work-entry:last').append(formattedHTMLworkEmployer.concat(formattedHTMLworkTitle))
                    .append(formattedHTMLworkDates)
                    .append(formattedHTMLworkLocation)
                    .append(formattedHTMLworkDescription);
            }, this);
        }
    }
}

var education = {
    "schools": [
        {
            "name": "Guru Nanak Dev Engineering College",
            "dates": "2011-15",
            "location": "Ludhiana, Punjab, India",
            "degree": "BTech",
            "majors": ["Computer Science"]
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://classroom.udacity.com/courses/ud804/"
        }
    ],

    display: function () {
        if (this.schools) {
            this.schools.forEach(function (school) {
                $('#education').append(HTMLschoolStart);
                var formattedHTMLschoolName = HTMLschoolName.replace(placeholder, school.name);
                var formattedHTMLschoolDegree = HTMLschoolDegree.replace(placeholder, school.degree);
                var formattedHTMLschoolDates = HTMLschoolDates.replace(placeholder, school.dates);
                var formattedHTMLschoolLocation = HTMLschoolLocation.replace(placeholder, school.location);
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace(placeholder, school.majors);

                $('.education-entry:last').append(formattedHTMLschoolName + formattedHTMLschoolDegree)
                    .append(formattedHTMLschoolLocation)
                    .append(formattedHTMLschoolDates)
                    .append(formattedHTMLschoolMajor);
            }, this);
        }
    }

};

var projects = {
    "projects": [
        {
            "title": "Interactive Resume Builder",
            "dates": "December, 2016 - Current",
            "description": "Interactive Resume with charts and bars with different themes. Users can provide the URL to their resume to potential employers which also increases their impression on employer."
        },
        {
            "title": "Storage as a Service using OpenStack",
            "dates": "June, 2014 - December, 2014",
            "description": "Providing reliable and scalable storage as a service using OpenStack Swift for the customers and end users. The backend of the APIs was made using Python and Flask whereas the frontend was made using AngularJS and BootStrap predominantly."
        }
    ],

    "display": function () {
        this.projects.forEach(function (project) {
            $('#projects').append(HTMLprojectStart);
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace(placeholder, project.title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace(placeholder, project.dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace(placeholder, project.description);
            $('.project-entry:last').append(formattedHTMLprojectTitle)
                .append(formattedHTMLprojectDates)
                .append(formattedHTMLprojectDescription);
        }, this);
    }

}

if (bio) {
    bio.displayHeader();
    bio.displayContacts();
    bio.displayPicture();
    bio.displaySkills();
}

if (work) {
    work.displayWork();
}

if (projects) {
    projects.display();
}

if (education) {
    education.display();
}

// $('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);

var inName = function () {
    var name = bio.name;
    var nameArray = name.split(' ');
    nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[nameArray.length - 1] = nameArray[nameArray.length - 1].toUpperCase();
    return nameArray.join(' ');
}