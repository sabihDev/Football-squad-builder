import { Hide, Show, AddClickListener, ValidateInteger, GetParentInHierarchy } from './Reuseables.js'

//Classes

let players = {};

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
        // console.log(this.button);
    }

    SetValues() {
        let playerProps = {
            picture: this.button.parentElement.childNodes[3],
            nameProp: this.button.parentElement.childNodes[5].childNodes[1],
            heightProp: this.button.parentElement.childNodes[7].childNodes[1].childNodes[1],
            phyProp: this.button.parentElement.childNodes[7].childNodes[3].childNodes[1],
            defProp: this.button.parentElement.childNodes[7].childNodes[5].childNodes[1],
            drribleProp: this.button.parentElement.childNodes[7].childNodes[7].childNodes[1],
            paceProp: this.button.parentElement.childNodes[7].childNodes[9].childNodes[1],
            mainFootProp: this.button.parentElement.childNodes[7].childNodes[11].childNodes[1],
        }

        playerProps.nameProp.innerHTML = this.name;
        playerProps.heightProp.innerHTML = this.height;
        playerProps.defProp.innerHTML = this.defence;
        playerProps.drribleProp.innerHTML = this.drrible;
        playerProps.phyProp.innerHTML = this.physique;
        playerProps.paceProp.innerHTML = this.pace;
        playerProps.mainFootProp.innerHTML = this.mainFoot;

        Hide(this.button);
        Hide(playersAdditionForm);

        Show(playerProps.picture);
        Show(playerProps.nameProp.parentElement);
    }



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

//Containers
const createMatchContainer = document.querySelector('.create-match-section');
const teamAdditionDialogBox = document.querySelector('.teams-addition');
const teamAPlayersContainer = document.querySelector('.team-a');
const teamBPlayersContainer = document.querySelector('.team-b');
const teamAName = document.querySelector('.team-a__name');
const teamBName = document.querySelector('.team-b__name');
var submitPlayerPropsButton = document.querySelector('#players-form__submit-btn');

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
        teamBName.innerHTML = teamBNameInput.value;
        teamAName.innerHTML = teamANameInput.value;
        return;
    }
    else if (teamANameInput.innerHTML !== null) {
        Show(teamAName);
        teamAName.value = teamANameInput.value;
        Show(teamBName);
        teamBName.innerHTML = "Team B";
    }
    else if (teamBNameInput.value !== null) {
        teamBName.value = teamBNameInput.value;
        Show(teamAName);
        teamAName.innerHTML = 'Team A';
    }
    else {
        teamBName.innerHTML = "Team B";
        teamAName.innerHTML = "Team A";
        Show(teamAName);
        Show(teamBName);
    }
}

// TODO: Make a function that gets the id of add player btn

var playerInputs = {
    inputPlayerName: playersAdditionForm.querySelector('#player-input__name'),
    inputPlayerHeight: playersAdditionForm.querySelector('#player-input__height'),
    inputPlayerDef: playersAdditionForm.querySelector('#player-input__def'),
    inputPlayerPhy: playersAdditionForm.querySelector('#player-input__phy'),
    inputPlayerDrrible: playersAdditionForm.querySelector('#player-input__drrible'),
    inputPlayerPace: playersAdditionForm.querySelector('#player-input__pace'),
    inputPlayerMainFoot: playersAdditionForm.querySelector('#player-input__main-foot'),
}

var formationButtons = document.querySelectorAll(".formation-btn");
var formationForm = document.querySelector(".formation-decider");
var inputFormation = document.querySelector('.input-formation');
var teamToBeFormed;

formationButtons.forEach(element => {
    AddClickListener(element, MakeFormation)
    function MakeFormation() {
        formationForm.style.display = 'block';
        Show(formationForm);
        var formationSubmitButton = document.querySelector('.set-formation');
        // RemoveListenersFromCollection(formationSubmitButton);
        teamToBeFormed = GetParentTeamContainer(element);
        AddClickListener(formationSubmitButton, HandleFormationSubmission);
    }

});

function IsHTMLCollectionOrNodeList(input) {
    return ((input instanceof HTMLCollection) || (input instanceof NodeList));
}

function HandleFormationSubmission() {
    const inputFormationValue = inputFormation.value;
    var sum = 0;

    for (var i = 0; i < inputFormationValue.length; i += 2) {
        const formationValue = +inputFormationValue[i];
        sum += formationValue;

        if (sum <= 10) {
            let parentPlayerDiv = document.createElement('div');
            parentPlayerDiv.className = 'four';

            for (let j = 0; j < formationValue; j++) {
                const playerDiv = CreatePlayerDiv();
                parentPlayerDiv.appendChild(playerDiv);

            }

            if (teamToBeFormed === teamAPlayersContainer) {
                Hide(teamToBeFormed.childNodes[3]);
            } else {
                teamToBeFormed.childNodes[1].style.display = 'none';
            }
            teamToBeFormed.appendChild(parentPlayerDiv);
        }
    }
    Hide(formationForm);
    formationForm.style.display = 'none';

    console.log("eventListenerCalled");
    MakePlayerAdditionButtonsInteractable();
    MakeEditButtonInteractable();
    MakeTooltipInteractable();
}

function CreatePlayerDiv() {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';

    // Set the innerHTML for playerDiv
    playerDiv.innerHTML = `
    <div class="add-player-btn">+</div>
    <div class="picture hidden tooltip"></div>
    <div class="name hidden">
        Name: <span ></span>
      <span class="edit-btn">
        <span class="material-symbols-outlined"> edit </span>
      </span>
    </div>
    <div class="hidden tooltip-text">
      <div class="height">
        Height: <span ></span>
      </div>
      <div class="phy">
        Physcique: <span ></span>
      </div>
      <div class="def">
        Defence: <span></span>
      </div>
      <div class="drrible">
        Drribles: <span></span>
      </div>
      <div class="pace">Pace: <span></span></div>
      <div class="main-foot">
        Main foot: <span></span>
      </div>
    </div>
    `;
    playerDiv.style.background = 'white';



    return playerDiv;
}

function ClearInputs() {
    playerInputs.inputPlayerName.value = "";
    playerInputs.inputPlayerHeight.value = "";
    playerInputs.inputPlayerDef.value = "";
    playerInputs.inputPlayerPhy.value = "";
    playerInputs.inputPlayerPace.value = "";
    playerInputs.inputPlayerDrrible.value = "";
    playerInputs.inputPlayerMainFoot.value = "";
}

function GetParentTeamContainer(button) {
    if (GetParentInHierarchy(1, button) == teamAPlayersContainer) {
        return teamAPlayersContainer;
    }
    else {
        return teamBPlayersContainer;
    }
}

function MakeTooltipInteractable() {
    var buttons = document.querySelectorAll('.tooltip');
    buttons.forEach((button) => {
        var tooltip = button.parentElement.childNodes[7];

        button.addEventListener('mouseover', (event) => {
            console.log(tooltip);
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            tooltip.style.position = 'fixed';
            tooltip.style.left = mouseX + 'px';
            tooltip.style.top = mouseY + 20 + 'px';
            tooltip.style.display='block';
        });

        button.addEventListener('mouseout', () => {
            console.log(tooltip);
            tooltip.style.position = 'absolute';
            tooltip.style.display='none';
        });
    });
}

function RemoveListenersFromCollection(collection) {

    if (IsHTMLCollectionOrNodeList(collection)) {
        collection.forEach(collectionObject => {
            removeOnClickListeners(collectionObject);
        })
    }
    else {
        removeOnClickListeners(collection);
    }

}

function removeOnClickListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.parentNode.replaceChild(clonedElement, element);
}

function MakePlayerAdditionButtonsInteractable() {
    var playerAdditionButtons = document.querySelectorAll('.add-player-btn');
    console.log(playerAdditionButtons);
    // RemoveListenersFromCollection(playerAdditionButtons);
    playerAdditionButtons.forEach(playerAdditionButton => {
        AddClickListener(playerAdditionButton, MakePlayer)
        function MakePlayer() {
            console.log("event added")
            Hide(playerAdditionButton);
            Show(playersAdditionForm);
            AddClickListener(submitPlayerPropsButton, HandlePlayerPropertiesSubmission);
            function HandlePlayerPropertiesSubmission() {
                function PlayerAdded() {
                    console.log(playerAdditionButtons);

                    let player = new Player(
                        playerAdditionButton,
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

                function CheckAllNumeric() {
                    if (
                        (ValidateInteger(playerInputs.inputPlayerDef.value)) &&
                        (ValidateInteger(playerInputs.inputPlayerDrrible.value)) &&
                        (ValidateInteger(playerInputs.inputPlayerPhy.value)) &&
                        (ValidateInteger(playerInputs.inputPlayerPace.value)) &&
                        (ValidateInteger(playerInputs.inputPlayerHeight.value))) {
                        alert('Your Registration number has accepted....');
                        PlayerAdded();
                    }
                    else {
                        alert('Please input numeric characters only for height, physcique, defence, drribles and pace');
                        PlayerAddedNot();
                    }
                }

                CheckAllNumeric();
            };
        }
        ClearInputs();  
    });
}

function MakeEditButtonInteractable() {
    var pictures = document.querySelectorAll(".picture");
    pictures.forEach(editButton => {
        AddClickListener(editButton, EditPlayerProperties);
        function EditPlayerProperties() {
            let playerProperties = {
                playerNameProp: editButton.parentElement.childNodes[5].childNodes[1],
                playerHeightProp: editButton.parentElement.childNodes[7].childNodes[1].childNodes[1],
                playerPhyProp: editButton.parentElement.childNodes[7].childNodes[3].childNodes[1],
                playerDefProp: editButton.parentElement.childNodes[7].childNodes[5].childNodes[1],
                playerDrribleProp: editButton.parentElement.childNodes[7].childNodes[7].childNodes[1],
                playerPaceProp: editButton.parentElement.childNodes[7].childNodes[9].childNodes[1],
                playerMainFootProp: editButton.parentElement.childNodes[7].childNodes[11].childNodes[1],
            }

            Show(playersAdditionForm);
            playerInputs.inputPlayerName.value = "Name: " + playerProperties.playerNameProp.innerHTML;
            playerInputs.inputPlayerHeight.placeholder = "Height: " + playerProperties.playerHeightProp.innerHTML;
            playerInputs.inputPlayerPhy.placeholder = "Physcique: " + playerProperties.playerPhyProp.innerHTML;
            playerInputs.inputPlayerDef.placeholder = "Defence: " + playerProperties.playerDefProp.innerHTML;
            playerInputs.inputPlayerDrrible.placeholder = "Drribles: " + playerProperties.playerDrribleProp.innerHTML;
            playerInputs.inputPlayerPace.placeholder = "Pace: " + playerProperties.playerPaceProp.innerHTML;
            playerInputs.inputPlayerMainFoot.value = "Main foot: " + playerProperties.playerMainFootProp.innerHTML;

            playerInputs.inputPlayerName.onfocus = () => {
                playerInputs.inputPlayerName.value = playerProperties.playerNameProp.innerHTML;
            }

            playerInputs.inputPlayerHeight.onfocus = () => {
                playerInputs.inputPlayerHeight.value = playerProperties.playerHeightProp.innerHTML;
            }

            playerInputs.inputPlayerPhy.onfocus = () => {
                playerInputs.inputPlayerPhy.value = playerProperties.playerPhyProp.innerHTML;
            }

            playerInputs.inputPlayerDef.onfocus = () => {
                playerInputs.inputPlayerDef.value = playerProperties.playerDefProp.innerHTML;
            }

            playerInputs.inputPlayerDrrible.onfocus = () => {
                playerInputs.inputPlayerDrrible.value = playerProperties.playerDrribleProp.innerHTML;
            }

            playerInputs.inputPlayerPace.onfocus = () => {
                playerInputs.inputPlayerPace.value = playerProperties.playerPaceProp.innerHTML;
            }

            playerInputs.inputPlayerMainFoot.onfocus = () => {
                playerInputs.inputPlayerMainFoot.value = playerProperties.playerMainFootProp.innerHTML;
            }

            AddClickListener(submitPlayerPropsButton, HandleEditPlayerProperties);
            function HandleEditPlayerProperties() {

                function GetTeamName() {
                    if (GetParentInHierarchy(4, playerProperties.playerNameProp) == teamAPlayersContainer) {
                        return teamAName.innerHTML;
                    }
                    else {
                        return teamBName.innerHTML;
                    }
                }

                const jsonData = {
                    id: Math.floor(Math.random() * 100000),
                    TeamName: GetTeamName(),
                    name: playerProperties.playerNameProp.innerHTML,
                    height: playerProperties.playerHeightProp.innerHTML,
                    phy: playerProperties.playerPhyProp.innerHTML,
                    def: playerProperties.playerDefProp.innerHTML,
                    drrible: playerProperties.playerDrribleProp.innerHTML,
                    pace: playerProperties.playerPaceProp.innerHTML,
                    mainFoot: playerProperties.playerMainFootProp.innerHTML,
                };

                const playerId = jsonData.id;
                let newHeight = playerInputs.inputPlayerHeight.value;
                let newName = playerInputs.inputPlayerName.value;
                let newDef = playerInputs.inputPlayerDef.value;
                let newPhy = playerInputs.inputPlayerPhy.value;
                let newDrrible = playerInputs.inputPlayerDrrible.value;
                let newPace = playerInputs.inputPlayerPace.value;
                let newMainFoot = playerInputs.inputPlayerMainFoot.value;

                playerProperties.playerNameProp = newName;
                playerProperties.playerHeightProp = newHeight;
                playerProperties.playerPhyProp = newPhy;
                playerProperties.playerDefProp = newDef;
                playerProperties.playerDrribleProp = newDrrible;
                playerProperties.playerPaceProp = newPace;
                playerProperties.playerMainFootProp = newMainFoot;

                Hide(playersAdditionForm);
                if (playerId == jsonData.id) {
                    jsonData.height = newHeight;
                    jsonData.name = newName;
                    jsonData.phy = newPhy;
                    jsonData.def = newDef;
                    jsonData.drrible = newDrrible;
                    jsonData.pace = newPace;
                    jsonData.mainFoot = newMainFoot;
                    let jsonString = JSON.stringify(jsonData);
                    players = JSON.parse(JSON.stringify(jsonString));
                }
                console.log(newName);
            }
        }

    });
    ClearInputs();
}