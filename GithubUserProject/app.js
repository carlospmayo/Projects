console.log("Inicio");
const gitHub = new Github();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
    const userText = e.target.value;

    if (userText !== "") {
        gitHub.getUser(userText).then(data => {
            if (data.profile.message === "Not Found") {
                //Show Alert = in a next Lesson 
            } else {
                console.log(data);
            }
        });
    } else {
        //Clear profile - in a Next Lesson!
        ui.clearProfile();
    }
});