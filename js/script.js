import { Hide, Show, AddClickListener } from './Reuseables.js'


//Buttons
const createMatchButton = document.querySelector('.create-match-section__btn');
const teamFormSubmitButton = document.querySelector('#teams-form__submit-btn');

//Containers
const createMatchContainer = document.querySelector('.create-match-section');
const teamAdditionDialogBox = document.querySelector('.teams-addition');
const teamAPlayersContainer = document.querySelector('.team-a');
const teamBPlayersContainer = document.querySelector('.team-b');

//Input Text Values
const teamAName = document.querySelector('#teamA__name');
const teamBName = document.querySelector('#teamB__name');

AddClickListener(createMatchButton, ShowDialogBoxForTeamsInput);
AddClickListener(teamFormSubmitButton, DisableCreateMatchScreen);



function ShowDialogBoxForTeamsInput() {
    Show(teamAdditionDialogBox);
    SetValue(teamAName, "")
    SetValue(teamBName, "")
}

function GetValue(team) {
    return team.value;
}

function SetValue(team, value) {
    team.value = value;
}

function DisableCreateMatchScreen() {
    Hide(createMatchContainer);
    Hide(teamAdditionDialogBox);
    Show(teamAPlayersContainer);
    Show(teamBPlayersContainer);
}


//Classes
class Team {
    players = [];
}

class Player {
    Name;
}