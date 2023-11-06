var flag = false
function view_bio() {
    document.getElementById("bio").classList.toggle("show_bio");
    document.getElementById("preview").classList.toggle("show_bio");
    document.getElementById("open_bio").classList.toggle("active");
    if (document.getElementById("me_video").muted == true) {
        document.getElementById("me_video").muted = false
    }
    else {
        document.getElementById("me_video").muted = true
    }
}

function view_social_list() {
    document.getElementById("social_list").classList.toggle("show_social_list");
    document.getElementById("open_social_list").classList.toggle("active");
}

function view_projects_list() {
    document.getElementById("projects_list").classList.toggle("show_projects_list");
    document.getElementById("open_projects_list").classList.toggle("active");
}