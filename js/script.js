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
    }

    SetValues() {
        let playerProperties = {
            playerPicture: this.button.parentElement.childNodes[3],
            propertyPlayerName: this.button.parentElement.childNodes[5].childNodes[1],
            propertyPlayerHeight: this.button.parentElement.childNodes[7].childNodes[1].childNodes[1],
            propertyPlayerPhyscique: this.button.parentElement.childNodes[7].childNodes[3].childNodes[1],
            propertyPlayerDef: this.button.parentElement.childNodes[7].childNodes[5].childNodes[1],
            propertyPlayerDrrible: this.button.parentElement.childNodes[7].childNodes[7].childNodes[1],
            propertyPlayerPace: this.button.parentElement.childNodes[7].childNodes[9].childNodes[1],
            propertyPlayerMainFoot: this.button.parentElement.childNodes[7].childNodes[11].childNodes[1],
        };

        playerProperties.propertyPlayerName.textContent = this.name;
        playerProperties.propertyPlayerHeight.textContent = this.height;
        playerProperties.propertyPlayerPhyscique.textContent = this.physique;
        playerProperties.propertyPlayerDef.textContent = this.defence;
        playerProperties.propertyPlayerDrrible.textContent = this.drrible;
        playerProperties.propertyPlayerPace.textContent = this.pace;
        playerProperties.propertyPlayerMainFoot.textContent = this.mainFoot;

        Show(GetParentInHierarchy(1, playerProperties.propertyPlayerName));
        Show(GetParentInHierarchy(2, playerProperties.propertyPlayerHeight));
        Show(playerProperties.playerPicture);
        GetParentInHierarchy(2, playerProperties.propertyPlayerName).style.background = 'none';
        GetParentInHierarchy(2, playerProperties.propertyPlayerName).style.border = 'none';
        GetParentInHierarchy(2, playerProperties.propertyPlayerName).style.color = 'white';
        GetParentInHierarchy(1, playerProperties.propertyPlayerName).style.padding = '0 1rem';
        Show(playerProperties.playerPicture);

        const jsonData = {
            id: Math.floor(Math.random() * 100000),
            TeamName: GetTeamName(),
            name: playerProperties.propertyPlayerName.textContent,
            height: playerProperties.propertyPlayerHeight.textContent,
            phy: playerProperties.propertyPlayerPhyscique.textContent,
            def: playerProperties.propertyPlayerDef.textContent,
            drrible: playerProperties.propertyPlayerDrrible.textContent,
            pace: playerProperties.propertyPlayerPace.textContent,
            mainFoot: playerProperties.propertyPlayerMainFoot.textContent,
        };

        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(editButton => {
            editButton.onclick = () => {
                let playerProperties = {
                    playerNameProp: editButton.parentElement.parentElement.childNodes[5].childNodes[1],
                    playerHeightProp: editButton.parentElement.parentElement.childNodes[7].childNodes[1].childNodes[1],
                    playerPhyProp: editButton.parentElement.parentElement.childNodes[7].childNodes[3].childNodes[1],
                    playerDefProp: editButton.parentElement.parentElement.childNodes[7].childNodes[5].childNodes[1],
                    playerDrribleProp: editButton.parentElement.parentElement.childNodes[7].childNodes[7].childNodes[1],
                    playerPaceProp: editButton.parentElement.parentElement.childNodes[7].childNodes[9].childNodes[1],
                    playerMainFootProp: editButton.parentElement.parentElement.childNodes[7].childNodes[11].childNodes[1],
                }
                Show(playersAdditionForm);
                playerInputs.inputPlayerName.value = "Name: " + playerProperties.playerNameProp.textContent;
                playerInputs.inputPlayerHeight.placeholder = "Height: " + playerProperties.playerHeightProp.textContent;
                playerInputs.inputPlayerPhy.placeholder = "Physcique: " + playerProperties.playerPhyProp.textContent;
                playerInputs.inputPlayerDef.placeholder = "Defence: " + playerProperties.playerDefProp.textContent;
                playerInputs.inputPlayerDrrible.placeholder = "Drribles: " + playerProperties.playerDrribleProp.textContent;
                playerInputs.inputPlayerPace.placeholder = "Pace: " + playerProperties.playerPaceProp.textContent;
                playerInputs.inputPlayerMainFoot.value = "Main foot: " + playerProperties.playerMainFootProp.textContent;

                playerInputs.inputPlayerName.onfocus = () => {
                    playerInputs.inputPlayerName.value = playerProperties.playerNameProp.textContent;
                }

                playerInputs.inputPlayerHeight.onfocus = () => {
                    playerInputs.inputPlayerHeight.value = playerProperties.playerHeightProp.textContent;
                }

                playerInputs.inputPlayerPhy.onfocus = () => {
                    playerInputs.inputPlayerPhy.value = playerProperties.playerPhyProp.textContent;
                }

                playerInputs.inputPlayerDef.onfocus = () => {
                    playerInputs.inputPlayerDef.value = playerProperties.playerDefProp.textContent;
                }

                playerInputs.inputPlayerDrrible.onfocus = () => {
                    playerInputs.inputPlayerDrrible.value = playerProperties.playerDrribleProp.textContent;
                }

                playerInputs.inputPlayerPace.onfocus = () => {
                    playerInputs.inputPlayerPace.value = playerProperties.playerPaceProp.textContent;
                }

                playerInputs.inputPlayerMainFoot.onfocus = () => {
                    playerInputs.inputPlayerMainFoot.value = playerProperties.playerMainFootProp.textContent;
                }
                submitPlayerPropsButton.onclick = () => {
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
                }
            }
        });

        let jsonString = JSON.stringify(jsonData);
        players += JSON.parse(JSON.stringify(jsonString));

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
        });

        function GetTeamName() {
            if (GetParentInHierarchy(4, playerProperties.propertyPlayerName) == teamAPlayersContainer) {
                return teamAName.textContent;
            }
            else {
                return teamBName.textContent;
            }
        }
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

let playerInputs = {
    inputPlayerName: playersAdditionForm.querySelector('#player-input__name'),
    inputPlayerHeight: playersAdditionForm.querySelector('#player-input__height'),
    inputPlayerDef: playersAdditionForm.querySelector('#player-input__def'),
    inputPlayerPhy: playersAdditionForm.querySelector('#player-input__phy'),
    inputPlayerDrrible: playersAdditionForm.querySelector('#player-input__drrible'),
    inputPlayerPace: playersAdditionForm.querySelector('#player-input__pace'),
    inputPlayerMainFoot: playersAdditionForm.querySelector('#player-input__main-foot'),
}

playerAdditionButton.forEach(element => {
    element.onclick = (e) => {
        if (e.target.classList.contains('add-player-btn')) {
            Hide(e.target);

            playersAdditionForm.classList.remove(playersAdditionForm.classList[2]);
            submitPlayerPropsButton.onclick = () => {

                function AllNumeric() {
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

                AllNumeric();

                function PlayerAdded() {
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
        }
    };
});

const formationButtons = document.querySelectorAll(".formation-btn");
const formationForm = document.querySelector(".formation-decider");
const formationSubmitButton = document.querySelector('.set-formation');
const inputFormation = document.querySelector('.input-formation');
let sum = 0;

// Define or import necessary functions like Show, Hide, and GetParentTeamContainer
// Define or obtain the formationSubmitButton and inputFormation

formationButtons.forEach(element => {
    element.onclick = () => {
        Show(formationForm);
        var currentFormedTeam = GetParentTeamContainer(element);
        var sum = 0; // Initialize the sum variable

        AddClickListener(formationSubmitButton, SetFormation);

        function SetFormation() {
            // console.log(+inputFormation.value[0] + +inputFormation.value[2]);

            for (var i = 0; i < +inputFormation.value.length; i += 2) {
                sum += +inputFormation.value[i];
                let parentPlayerDiv = document.createElement('div');
                parentPlayerDiv.className = 'four';
                let playerDiv = document.createElement('div');
                playerDiv.className = 'player';
                playerDiv.innerHTML = `<div class="add-player-btn">+</div>
                <div class="picture hidden"></div>
                <div class="name hidden tooltip">
                    Name: <span></span>
                    <span class="edit-btn">
                        <span class="material-symbols-outlined"> edit </span>
                    </span> 
                </div>
                <div class="hidden tooltip-text">
                    <div class="height">
                        Height: <span ></span>
                    </div>
                    <div class="phy">
                        Physique: <span></span>
                    </div>
                    <div class="def">
                        Defence: <span></span>
                    </div>
                    <div class="dribble"> <!-- Correct typo: drrible to dribble -->
                        Dribbles: <span ></span>
                    </div>
                    <div class="pace">Pace: <span ></span></div>
                    <div class="main-foot">
                        Main foot: <span ></span>
                    </div>
                </div>`;
                if (sum <= 10) {
                    for (var j = 0; j < +inputFormation.value[i]; j++) {
                        parentPlayerDiv.appendChild(playerDiv.cloneNode(true));
                    }
                    currentFormedTeam.appendChild(parentPlayerDiv);
                    playerDiv.style.background = 'white';
                    Hide(formationForm);
                    Hide(element);
                }
                var playerAdditionButtons = parentPlayerDiv.querySelectorAll(".add-player-btn");

                playerAdditionButtons.forEach(playerAdditionButton => {
                    playerAdditionButton.onclick = () => {
                        Hide(playerAdditionButton);

                        playersAdditionForm.classList.remove(playersAdditionForm.classList[2]);
                        submitPlayerPropsButton.onclick = () => {

                            function AllNumeric() {
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

                            AllNumeric();

                            function PlayerAdded() {
                                Hide(playersAdditionForm)
                                console.log(playerInputs.inputPlayerHeight.value);

                                let player = newPlayer(
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


                            playerInputs.inputPlayerName.value = "";
                            playerInputs.inputPlayerHeight.value = "";
                            playerInputs.inputPlayerDef.value = "";
                            playerInputs.inputPlayerPhy.value = "";
                            playerInputs.inputPlayerPace.value = "";
                            playerInputs.inputPlayerDrrible.value = "";
                            playerInputs.inputPlayerMainFoot.value = "";
                        };
                    }
                })
            }
        }


    }
});




function GetParentTeamContainer(button) {
    if (GetParentInHierarchy(1, button) == teamAPlayersContainer) {
        return teamAPlayersContainer;
    }
    else {
        return teamBPlayersContainer;
    }
}



const pictures = document.querySelectorAll('.picture');

// pictures.forEach(picture =>{
//     picture.classList.remove("hidden");
// })

function newPlayer(button, name, height, defence, physcique, drrible, pace, mainFoot) {
    var playerProps = {
        picture: button.parentElement.childNodes[2],
        nameProp: button.parentElement.childNodes[4].childNodes[1],
        heightProp: button.parentElement.childNodes[6].childNodes[1].childNodes[1],
        phyProp: button.parentElement.childNodes[6].childNodes[3].childNodes[1],
        defProp: button.parentElement.childNodes[6].childNodes[5].childNodes[1],
        drribleProp: button.parentElement.childNodes[6].childNodes[7].childNodes[1],
        paceProp: button.parentElement.childNodes[6].childNodes[9].childNodes[1],
        mainFootProp: button.parentElement.childNodes[6].childNodes[11].childNodes[1],
    }

    playerProps.nameProp.textContent = name;
    playerProps.heightProp.textContent = height;
    playerProps.paceProp.textContent = pace;
    playerProps.phyProp.textContent = physcique;
    playerProps.defProp.textContent = defence;
    playerProps.drribleProp.textContent = drrible;
    playerProps.mainFootProp.textContent = mainFoot;


    Show(playerProps.picture);
    playerProps.picture.style.cursor = 'pointer';
    console.log(playerProps.picture);
    button.parentElement.childNodes[4].classList.remove("hidden");

    const buttons = document.querySelectorAll('.tooltip');
    buttons.forEach((button) => {
        const tooltips = document.querySelectorAll('.tooltip-text');

        tooltips.forEach((tooltip) => {


            button.addEventListener('mouseover', (event) => {
                const mouseX = event.clientX;
                const mouseY = event.clientY;
                tooltip.style.position = 'fixed';
                tooltip.style.left = mouseX + 'px';
                tooltip.style.top = mouseY+20 + 'px';
                Show(tooltip);
            });

            button.addEventListener('mouseout', () => {
                tooltip.style.position = 'absolute';
                Hide(tooltip);
            });
        });
    });

    const picturess = document.querySelectorAll('.picture');

    picturess.forEach(editButton => {
        editButton.onclick = () => {
            let playerProperties = {
                playerNameProp: editButton.parentElement.childNodes[4].childNodes[1],
                playerHeightProp: editButton.parentElement.childNodes[6].childNodes[1].childNodes[1],
                playerPhyProp: editButton.parentElement.childNodes[6].childNodes[3].childNodes[1],
                playerDefProp: editButton.parentElement.childNodes[6].childNodes[5].childNodes[1],
                playerDrribleProp: editButton.parentElement.childNodes[6].childNodes[7].childNodes[1],
                playerPaceProp: editButton.parentElement.childNodes[6].childNodes[9].childNodes[1],
                playerMainFootProp: editButton.parentElement.childNodes[6].childNodes[11].childNodes[1],
            }
            Show(playersAdditionForm);
            playerInputs.inputPlayerName.value = "Name: " + playerProperties.playerNameProp.textContent;
            playerInputs.inputPlayerHeight.placeholder = "Height: " + playerProperties.playerHeightProp.textContent;
            playerInputs.inputPlayerPhy.placeholder = "Physcique: " + playerProperties.playerPhyProp.textContent;
            playerInputs.inputPlayerDef.placeholder = "Defence: " + playerProperties.playerDefProp.textContent;
            playerInputs.inputPlayerDrrible.placeholder = "Drribles: " + playerProperties.playerDrribleProp.textContent;
            playerInputs.inputPlayerPace.placeholder = "Pace: " + playerProperties.playerPaceProp.textContent;
            playerInputs.inputPlayerMainFoot.value = "Main foot: " + playerProperties.playerMainFootProp.textContent;

            playerInputs.inputPlayerName.onfocus = () => {
                playerInputs.inputPlayerName.value = playerProperties.playerNameProp.textContent;
            }

            playerInputs.inputPlayerHeight.onfocus = () => {
                playerInputs.inputPlayerHeight.value = playerProperties.playerHeightProp.textContent;
            }

            playerInputs.inputPlayerPhy.onfocus = () => {
                playerInputs.inputPlayerPhy.value = playerProperties.playerPhyProp.textContent;
            }

            playerInputs.inputPlayerDef.onfocus = () => {
                playerInputs.inputPlayerDef.value = playerProperties.playerDefProp.textContent;
            }

            playerInputs.inputPlayerDrrible.onfocus = () => {
                playerInputs.inputPlayerDrrible.value = playerProperties.playerDrribleProp.textContent;
            }

            playerInputs.inputPlayerPace.onfocus = () => {
                playerInputs.inputPlayerPace.value = playerProperties.playerPaceProp.textContent;
            }

            playerInputs.inputPlayerMainFoot.onfocus = () => {
                playerInputs.inputPlayerMainFoot.value = playerProperties.playerMainFootProp.textContent;
            }
            submitPlayerPropsButton.onclick = () => {

                function GetTeamName() {
                    if (GetParentInHierarchy(4, playerProps.nameProp) == teamAPlayersContainer) {
                        return teamAName.textContent;
                    }
                    else {
                        return teamBName.textContent;
                    }
                }

                const jsonData = {
                    id: Math.floor(Math.random() * 100000),
                    TeamName: GetTeamName(),
                    name: playerProps.nameProp.textContent,
                    height: playerProps.heightProp.textContent,
                    phy: playerProps.phyProp.textContent,
                    def: playerProps.defProp.textContent,
                    drrible: playerProps.drribleProp.textContent,
                    pace: playerProps.paceProp.textContent,
                    mainFoot: playerProps.mainFootProp.textContent,
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
            }
        }
    });

    console.log(playerProps.nameProp.textContent);
    console.log(playerProps.heightProp.textContent);
}

const buttons = document.querySelectorAll('.tooltip');
buttons.forEach((button) => {
    const tooltips = document.querySelectorAll('.tooltip-text');

    tooltips.forEach((tooltip) => {


        button.addEventListener('mouseover', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            tooltip.style.position = 'fixed';
            tooltip.style.left = mouseX + 'px';
            tooltip.style.top = mouseY+ 20 + 'px';
            Show(tooltip);
        });

        button.addEventListener('mouseout', () => {
            tooltip.style.position = 'absolute';
            Hide(tooltip);
        });
    });
});