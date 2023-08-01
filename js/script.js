import { Hide, Show, AddClickListener } from './Reuseables.js'

//Classes

class Player {
    constructor(button, name, height, defence, physique, drrible, pace, mainFoot) {
        this.button = button;
        this.name = name;
        this.height = height;
        this.physique = defence;
        this.defence = physique;
        this.drrible = drrible;
        this.pace = pace;
        this.mainFoot = mainFoot;
        this.SetValues();
    }

    SetValues() {
        let playerProperties = {
            propertyPlayerName: this.button.parentElement.childNodes[3].childNodes[1],
            propertyPlayerHeight: this.button.parentElement.childNodes[5].childNodes[1].childNodes[1],
            propertyPlayerPhyscique: this.button.parentElement.childNodes[5].childNodes[3].childNodes[1],
            propertyPlayerDef: this.button.parentElement.childNodes[5].childNodes[5].childNodes[1],
            propertyPlayerDrrible: this.button.parentElement.childNodes[5].childNodes[7].childNodes[1],
            propertyPlayerPace: this.button.parentElement.childNodes[5].childNodes[9].childNodes[1],
            propertyPlayerMainFoot: this.button.parentElement.childNodes[5].childNodes[11].childNodes[1],
        };

        playerProperties.propertyPlayerName.textContent = this.name;
        playerProperties.propertyPlayerHeight.textContent = this.height;
        playerProperties.propertyPlayerPhyscique.textContent = this.physique;
        playerProperties.propertyPlayerDef.textContent = this.defence;
        playerProperties.propertyPlayerDrrible.textContent = this.drrible;
        playerProperties.propertyPlayerPace.textContent = this.pace;
        playerProperties.propertyPlayerMainFoot.textContent = this.mainFoot;

        playerProperties.propertyPlayerName.parentElement.classList.remove("hidden");
        playerProperties.propertyPlayerHeight.parentElement.parentElement.classList.remove("hidden");
        playerProperties.propertyPlayerName.parentElement.parentElement.style.background = 'none';
        playerProperties.propertyPlayerName.parentElement.parentElement.style.border = 'none';
        playerProperties.propertyPlayerName.parentElement.parentElement.style.color = 'white';
        playerProperties.propertyPlayerName.parentElement.style.padding = '0 1rem';

        const buttons = document.querySelectorAll('.tooltip');
        buttons.forEach((button) => {
            const tooltips = document.querySelectorAll('.tooltip-text');

            tooltips.forEach((tooltip) => {


                button.addEventListener('mouseover', (event) => {
                    const mouseX = event.clientX;
                    const mouseY = event.clientY;
                    tooltip.style.position = 'fixed';
                    tooltip.style.left = mouseX + 'px';
                    tooltip.style.top = mouseY + 20 + 'px';
                    Show(tooltip);
                });

                button.addEventListener('mouseout', () => {
                    tooltip.style.position = 'absolute';
                    Hide(tooltip);
                });
            });
        })
    };


}


class Team {
    name = "";
    players = [];

    constructor(name) {
        this.name = name;
    }

    AddPlayer(player) {

        let isPlayerTypeRight = (player instanceof Player);
        let hasSpaceForNewPlayersInTeam = (this.players.length < 11);

        if (isPlayerTypeRight && hasSpaceForNewPlayersInTeam) {
            this.players.push(player);
        }

        if (!hasSpaceForNewPlayersInTeam) {
            console.log(player.name + " cannot be added because the team is full");
        }

        // AddPlayers();
    }
}


//Buttons
const createMatchButton = document.querySelector('.create-match-section__btn');
const teamFormSubmitButton = document.querySelector('#teams-form__submit-btn');
const playerAdditionButton = document.querySelectorAll('.add-player-btn');

//Containers
const createMatchContainer = document.querySelector('.create-match-section');
const teamAdditionDialogBox = document.querySelector('.teams-addition');
const teamAPlayersContainer = document.querySelector('.team-a');
const teamBPlayersContainer = document.querySelector('.team-b');
const teamAName = document.querySelector('.team-a__name');
const teamBName = document.querySelector('.team-b__name');
const submitPlayerPropsButton = document.querySelector('#players-form__submit-btn');


//Input Text Values
const playersAdditionForm = document.querySelector('.players-addition');
const teamANameInput = document.querySelector('#teamA__name');
const teamBNameInput = document.querySelector('#teamB__name');

AddClickListener(createMatchButton, ShowDialogBoxForTeamsInput);
AddClickListener(teamFormSubmitButton, DisableCreateMatchScreen);



function ShowDialogBoxForTeamsInput() {
    Show(teamAdditionDialogBox);
    SetValue(teamANameInput, "")
    SetValue(teamBNameInput, "")
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

    if (teamANameInput.value !== null && (teamBNameInput.value !== null)) {
        Show(teamBName);
        Show(teamAName);
        teamBName.textContent = teamBNameInput.value;
        teamAName.textContent = teamANameInput.value;
        return;
    }
    else if (teamANameInput.textContent !== null) {
        Show(teamAName);
        teamAName.value = teamANameInput.value;
        Show(teamBName);
        teamBName.textContent = "Team B";
    }
    else if (teamBNameInput.value !== null) {
        teamBName.value = teamBNameInput.value;
        Show(teamAName);
        teamAName.textContent = 'Team A';
    }
    else {
        teamBName.innerHTML = "Team B";
        teamAName.innerHTML = "Team A";
        Show(teamAName);
        Show(teamBName);
    }
}

// TODO: Make a function that gets the id of add player btn


playerAdditionButton.forEach(element => {
    element.onclick = () => {

        playersAdditionForm.classList.remove(playersAdditionForm.classList[2]);
        submitPlayerPropsButton.onclick = () => {

            let playerInputs = {
                inputPlayerName: playersAdditionForm.querySelector('#player-input__name'),
                inputPlayerHeight: playersAdditionForm.querySelector('#player-input__height'),
                inputPlayerDef: playersAdditionForm.querySelector('#player-input__def'),
                inputPlayerPhy: playersAdditionForm.querySelector('#player-input__phy'),
                inputPlayerDrrible: playersAdditionForm.querySelector('#player-input__drrible'),
                inputPlayerPace: playersAdditionForm.querySelector('#player-input__pace'),
                inputPlayerMainFoot: playersAdditionForm.querySelector('#player-input__main-foot'),
            }

            function AllNumeric() {
                var numbers = /^[0-9]+$/;
                if ((playerInputs.inputPlayerDef.value.match(numbers)) && (playerInputs.inputPlayerDrrible.value.match(numbers)) && (playerInputs.inputPlayerPhy.value.match(numbers)) && (playerInputs.inputPlayerPace.value.match(numbers)) && (playerInputs.inputPlayerHeight.value.match(numbers))) {
                    alert('Your Registration number has accepted....');
                    PlayerAdded();
                }
                else {
                    alert('Please input numeric characters only');
                    PlayerAddedNot();
                }
            }

            AllNumeric();

            function PlayerAdded() {
                Hide(element);
                Hide(playersAdditionForm)
                console.log(playerInputs.inputPlayerHeight.value);

                let player = new Player(
                    element,
                    playerInputs.inputPlayerName.value,
                    playerInputs.inputPlayerHeight.value,
                    playerInputs.inputPlayerDef.value,
                    playerInputs.inputPlayerPhy.value,
                    playerInputs.inputPlayerDrrible.value,
                    playerInputs.inputPlayerPace.value,
                    playerInputs.inputPlayerMainFoot.value,
                );
            }

            function PlayerAddedNot() {
                alert(`Form is not correctly filled.
                Make sure you would add text in name and foot of a player
                and add numbers in the remaining inputs.`);
            }


            playerInputs.inputPlayerName.value = "";
            playerInputs.inputPlayerHeight.value = "";
            playerInputs.inputPlayerDef.value = "";
            playerInputs.inputPlayerPhy.value = "";
            playerInputs.inputPlayerPace.value = "";
            playerInputs.inputPlayerDrrible.value = "";
            playerInputs.inputPlayerMainFoot.value = "";
        };
    };
});