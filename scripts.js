window.onload = function () {
    let btnSearch = document.getElementById("btnSearch")
    btnSearch.addEventListener("click", requestAPI);
}

function requestAPI() {
    let search = document.getElementById("inputSearch").value;
    if (search == "") {
        $("#divResult").html("Nenhum resultado!");
        return;
    }

    $.post('php/requestAPI.php', { search }, function (result) {
        console.log(result);
        console.log(typeof result);

        if (result.includes("Not Found")) {
            $("#divResult").html("Nenhum resultado!");
        } else {
            const objResult = JSON.parse(result);
            saveResult(objResult);
        }

    });
};

function saveResult(objResult) {
    $.post('php/saveResult.php', { objResult }, function (result) { });
    getResult(objResult.login, objResult);
};

function getResult(login) {
    $.post('php/getResult.php', { login }, function (result) {
        console.log("Resultado: " + result);
        updatePage(result);
    });
};

function updatePage(result) {
    let values = result.split("|");

    let login = values[0];
    let avatar = values[1];
    let url = values[2];
    let followers = values[3];
    let following = values[4];
    let repos = values[5];
    let created = values[6];
    let bio = values[7];

    let html = `
    <div class="card" style="width: 30rem;">
            <div class="card-body">
                <div class="cardAvatar">
                    <img src="${avatar}">
                </div>
                <div class="cardBio">
                    <h5 class="card-title">${login}</h5>
                    <p class="card-text">${bio}</p>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <b>Followers: </b>
                    <p>${followers}</p>
                </li>
                <li class="list-group-item">
                    <b>Following: </b>
                    <p>${following}</p>
                </li>
                <li class="list-group-item">
                    <b>Public Repos: </b>
                    <p>${repos}</p>
                </li>
                <li class="list-group-item">
                    <b>Created at: </b>
                    <p>${created}</p>
                </li>
            </ul>
            <div class="card-body cardProfile">
                <form action="${url}">
                    <button type="submit" class="btn btn-primary">Visit profile</button>
                </form>
            </div>
        </div>
    `

    $("#divResult").html(html);
}