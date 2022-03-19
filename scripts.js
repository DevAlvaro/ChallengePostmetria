window.onload = function () {
    let btnSearch = document.getElementById("btnSearch")
    btnSearch.addEventListener("click", requestAPI);
}

function requestAPI() {
    let search = document.getElementById("inputSearch").value;

    $.post('php/requestAPI.php', { search }, function (result) {
        console.log("result: " + result);

        if (result == "") {
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

    let html = `
    <img src="${values[1]}" style="width:100px"</img>
    <ul>
        <li>Login: ${values[0]}</li>
        <li>URL: ${values[2]}</li>
        <li>Followers: ${values[3]}</li>
        <li>Following: ${values[4]}</li>
        <li>Public Repos: ${values[5]}</li>
        <li>Created at: ${values[6]}</li>
    </ul>`

    $("#divResult").html(html);
}