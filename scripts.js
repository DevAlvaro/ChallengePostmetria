function saveResult(objResult) {
  $.post("php/saveResult.php", { objResult }).always(() => {
    getResult(objResult.login);
  });
}

function getResult(login) {
  $.post("php/getResult.php", { login }, function (result) {
    updatePage(result);
  });
}

function updatePage(result) {
  let values = result.split("|");

  let name = values[0];
  let login = values[1];
  let avatar = values[2];
  let bio = values[3];
  let created = values[4];
  let repos = values[5];
  let followers = values[6];
  let following = values[7];
  let url = values[8];

  let html = `
    <div class="card" style="width: 30rem;">
        <div class="card-body">
            <div class="cardAvatar">
                <img src="${avatar}">
            </div>
            <div class="cardPerfil">
                <h5 class="card-title name">${name}</h5>
                <p class="login"> ${login} </p>
            </div>
            <div class="cardDate">
                <p>Joined ${created}</p>
            </div>
        </div>
        <div class="card-body cardBio"> 
            <p class="card-text">${bio}</p>
        </div>
        <ul class="cardInfo">
            <li class="">
                <div class="info"> 
                    <b>Repositories </b>
                    <p>${repos}</p>
                </div>
                <div class="info">
                    <b>Followers </b>
                    <p>${followers}</p>
                </div>
                <div class="info"> 
                    <b>Following </b>
                    <p>${following}</p>
                </div>
            </li>
        </ul>
        <div class="card-body cardLink">
            <form action="${url}">
                <button type="submit" class="btn btn-primary">Visit profile</button>
            </form>
        </div>
    </div>
    `;

  $("#divResult").html(html);
}
