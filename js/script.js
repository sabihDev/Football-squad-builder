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

<<<<<<< HEAD
=======
    // SetValues() {
    //     var playerProps = {
    //         picture: this.button.parentElement.childNodes[2],
    //         nameProp: this.button.parentElement.childNodes[4],
    //         heightProp: this.button.parentElement.childNodes[5].childNodes[1].childNodes[1],
    //         phyProp: this.button.parentElement.childNodes[5].childNodes[3].childNodes[1],
    //         defProp: this.button.parentElement.childNodes[5].childNodes[5].childNodes[1],
    //         drribleProp: this.button.parentElement.childNodes[5].childNodes[7].childNodes[1],
    //         paceProp: this.button.parentElement.childNodes[5].childNodes[9].childNodes[1],
    //         mainFootProp: this.button.parentElement.childNodes[5].childNodes[11].childNodes[1],
    //     }

    //     console.log(playerProps.defProp);

    //     playerProps['nameProp'].innerHTML = this.name;
    //     console.log(playerProps['nameProp'].innerHTML);
    //     playerProps.heightProp.innerHTML = this.height;
    //     playerProps['paceProp'].innerHTML = this.pace;
    //     playerProps.phyProp.innerHTML = this.physcique;
    //     playerProps.defProp.innerHTML = this.defence;
    //     console.log(playerProps.defProp.innerHTML);
    //     playerProps.drribleProp.innerHTML = this.drrible;
    //     playerProps.mainFootProp.innerHTML = this.mainFoot;
    //     console.log(playerProps.mainFootProp);

    //     playerProps.nameProp.classList.remove("hidden");
    //     playerProps.nameProp.style.color = 'black';

    //     Show(playerProps.picture);
    //     playerProps.picture.style.cursor = 'pointer';
    //     button.parentElement.childNodes[4].classList.remove("hidden");

    //     const buttons = document.querySelectorAll('.tooltip');
    //     buttons.forEach((button) => {
    //         const tooltips = document.querySelectorAll('.tooltip-text');

    //         tooltips.forEach((tooltip) => {


    //             button.addEventListener('mouseover', (event) => {
    //                 const mouseX = event.clientX;
    //                 const mouseY = event.clientY;
    //                 tooltip.style.position = 'fixed';
    //                 tooltip.style.left = mouseX + 'px';
    //                 tooltip.style.top = mouseY + 20 + 'px';
    //                 Show(tooltip);
    //             });

    //             button.addEventListener('mouseout', () => {
    //                 tooltip.style.position = 'absolute';
    //                 Hide(tooltip);
    //             });
    //         });
    //     });

    //     const picturess = document.querySelectorAll('.picture');

    //     picturess.forEach(editButton => {
    //         editButton.onclick = () => {
    //             let playerProperties = {
    //                 playerNameProp: editButton.parentElement.childNodes[4].childNodes[1],
    //                 playerHeightProp: editButton.parentElement.childNodes[6].childNodes[1].childNodes[1],
    //                 playerPhyProp: editButton.parentElement.childNodes[6].childNodes[3].childNodes[1],
    //                 playerDefProp: editButton.parentElement.childNodes[6].childNodes[5].childNodes[1],
    //                 playerDrribleProp: editButton.parentElement.childNodes[6].childNodes[7].childNodes[1],
    //                 playerPaceProp: editButton.parentElement.childNodes[6].childNodes[9].childNodes[1],
    //                 playerMainFootProp: editButton.parentElement.childNodes[6].childNodes[11].childNodes[1],
    //             }
    //             Show(playersAdditionForm);
    //             playerInputs.inputPlayerName.value = "Name: " + playerProperties.playerNameProp.textContent;
    //             playerInputs.inputPlayerHeight.placeholder = "Height: " + playerProperties.playerHeightProp.textContent;
    //             playerInputs.inputPlayerPhy.placeholder = "Physcique: " + playerProperties.playerPhyProp.textContent;
    //             playerInputs.inputPlayerDef.placeholder = "Defence: " + playerProperties.playerDefProp.textContent;
    //             playerInputs.inputPlayerDrrible.placeholder = "Drribles: " + playerProperties.playerDrribleProp.textContent;
    //             playerInputs.inputPlayerPace.placeholder = "Pace: " + playerProperties.playerPaceProp.textContent;
    //             playerInputs.inputPlayerMainFoot.value = "Main foot: " + playerProperties.playerMainFootProp.textContent;

    //             playerInputs.inputPlayerName.onfocus = () => {
    //                 playerInputs.inputPlayerName.value = playerProperties.playerNameProp.textContent;
    //             }

    //             playerInputs.inputPlayerHeight.onfocus = () => {
    //                 playerInputs.inputPlayerHeight.value = playerProperties.playerHeightProp.textContent;
    //             }

    //             playerInputs.inputPlayerPhy.onfocus = () => {
    //                 playerInputs.inputPlayerPhy.value = playerProperties.playerPhyProp.textContent;
    //             }

    //             playerInputs.inputPlayerDef.onfocus = () => {
    //                 playerInputs.inputPlayerDef.value = playerProperties.playerDefProp.textContent;
    //             }

    //             playerInputs.inputPlayerDrrible.onfocus = () => {
    //                 playerInputs.inputPlayerDrrible.value = playerProperties.playerDrribleProp.textContent;
    //             }

    //             playerInputs.inputPlayerPace.onfocus = () => {
    //                 playerInputs.inputPlayerPace.value = playerProperties.playerPaceProp.textContent;
    //             }

    //             playerInputs.inputPlayerMainFoot.onfocus = () => {
    //                 playerInputs.inputPlayerMainFoot.value = playerProperties.playerMainFootProp.textContent;
    //             }
    //             submitPlayerPropsButton.onclick = () => {

    //                 function GetTeamName() {
    //                     if (GetParentInHierarchy(4, playerProps.nameProp) == teamAPlayersContainer) {
    //                         return teamAName.textContent;
    //                     }
    //                     else {
    //                         return teamBName.textContent;
    //                     }
    //                 }

    //                 const jsonData = {
    //                     id: Math.floor(Math.random() * 10000),
    //                     TeamName: GetTeamName(),
    //                     name: playerProps.nameProp.textContent,
    //                     height: playerProps.heightProp.textContent,
    //                     phy: playerProps.phyProp.textContent,
    //                     def: playerProps.defProp.textContent,
    //                     drrible: playerProps.drribleProp.textContent,
    //                     pace: playerProps.paceProp.textContent,
    //                     mainFoot: playerProps.mainFootProp.textContent,
    //                 };

    //                 const playerId = jsonData.id;
    //                 let newHeight = playerInputs.inputPlayerHeight.value;
    //                 let newName = playerInputs.inputPlayerName.value;
    //                 let newDef = playerInputs.inputPlayerDef.value;
    //                 let newPhy = playerInputs.inputPlayerPhy.value;
    //                 let newDrrible = playerInputs.inputPlayerDrrible.value;
    //                 let newPace = playerInputs.inputPlayerPace.value;
    //                 let newMainFoot = playerInputs.inputPlayerMainFoot.value;

    //                 playerProperties.playerNameProp.textContent = newName;
    //                 playerProperties.playerHeightProp.textContent = newHeight;
    //                 playerProperties.playerPhyProp.textContent = newPhy;
    //                 playerProperties.playerDefProp.textContent = newDef;
    //                 playerProperties.playerDrribleProp.textContent = newDrrible;
    //                 playerProperties.playerPaceProp.textContent = newPace;
    //                 playerProperties.playerMainFootProp.textContent = newMainFoot;

    //                 Hide(playersAdditionForm);
    //                 if (playerId == jsonData.id) {
    //                     jsonData.height = newHeight;
    //                     jsonData.name = newName;
    //                     jsonData.phy = newPhy;
    //                     jsonData.def = newDef;
    //                     jsonData.drrible = newDrrible;
    //                     jsonData.pace = newPace;
    //                     jsonData.mainFoot = newMainFoot;
    //                     let jsonString = JSON.stringify(jsonData);
    //                     players = JSON.parse(JSON.stringify(jsonString));
    //                 }
    //             }
    //         }
    //     });
    // }

>>>>>>> parent of 29f42cb (updating green co;or)
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
<<<<<<< HEAD
=======

        var pictures = document.querySelectorAll(".picture");
        pictures.forEach(editButton => {
            editButton.onclick = () => {

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
                        if (GetParentInHierarchy(4, playerProperties.playerNameProp) == teamAPlayersContainer) {
                            return teamAName.textContent;
                        }
                        else {
                            return teamBName.textContent;
                        }
                    }

                    const jsonData = {
                        id: Math.floor(Math.random() * 100000),
                        TeamName: GetTeamName(),
                        name: playerProperties.playerNameProp.textContent,
                        height: playerProperties.playerHeightProp.textContent,
                        phy: playerProperties.playerPhyProp.textContent,
                        def: playerProperties.playerDefProp.textContent,
                        drrible: playerProperties.playerDrribleProp.textContent,
                        pace: playerProperties.playerPaceProp.textContent,
                        mainFoot: playerProperties.playerMainFootProp.textContent,
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
>>>>>>> parent of 29f42cb (updating green co;or)
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
let playerAdditionButtons = document.querySelectorAll('.add-player-btn');

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

formationButtons.forEach(element => {
    element.onclick = () => {
        formationForm.style.display = 'block';
        Show(formationForm);

        setTimeout(() => {
            var formationSubmitButton = document.querySelector('.set-formation');
            AddClickListener(formationSubmitButton, HandleFormationSubmission(element));
            formationForm.style.display = 'none';
        }, 4000);
<<<<<<< HEAD
=======

        playerAdditionButtons.forEach(playerAdditionButton => {
            playerAdditionButton.onclick = () => {
                Show(playersAdditionForm);
                function PlayerAdded() {
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
                    console.log(playerInputs.inputPlayerHeight.value);
                    console.log(playerInputs.inputPlayerDef.value);

                    Hide(playersAdditionForm);
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

                Hide(playersAdditionForm);
            }
        });

        pictures.forEach(editButton => {
            editButton.onclick = () => {

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
                        if (GetParentInHierarchy(4, playerProperties.playerNameProp) == teamAPlayersContainer) {
                            return teamAName.textContent;
                        }
                        else {
                            return teamBName.textContent;
                        }
                    }

                    const jsonData = {
                        id: Math.floor(Math.random() * 100000),
                        TeamName: GetTeamName(),
                        name: playerProperties.playerNameProp.textContent,
                        height: playerProperties.playerHeightProp.textContent,
                        phy: playerProperties.playerPhyProp.textContent,
                        def: playerProperties.playerDefProp.textContent,
                        drrible: playerProperties.playerDrribleProp.textContent,
                        pace: playerProperties.playerPaceProp.textContent,
                        mainFoot: playerProperties.playerMainFootProp.textContent,
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
>>>>>>> parent of 29f42cb (updating green co;or)
    }

    playerAdditionButtons.forEach(playerAdditionButton => {
        playerAdditionButton.onclick = () => {
            Hide(playerAdditionButton);
            submitPlayerPropsButton.onclick = () => {
                Show(playersAdditionForm);
                function PlayerAdded() {
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
                    console.log(playerInputs.inputPlayerHeight.value);
                    console.log(playerInputs.inputPlayerDef.value);
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
    });

    var pictures = document.querySelectorAll(".picture");
    pictures.forEach(editButton => {
        editButton.onclick = () => {

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
                    if (GetParentInHierarchy(4, playerProperties.playerNameProp) == teamAPlayersContainer) {
                        return teamAName.textContent;
                    }
                    else {
                        return teamBName.textContent;
                    }
                }

                const jsonData = {
                    id: Math.floor(Math.random() * 100000),
                    TeamName: GetTeamName(),
                    name: playerProperties.playerNameProp.textContent,
                    height: playerProperties.playerHeightProp.textContent,
                    phy: playerProperties.playerPhyProp.textContent,
                    def: playerProperties.playerDefProp.textContent,
                    drrible: playerProperties.playerDrribleProp.textContent,
                    pace: playerProperties.playerPaceProp.textContent,
                    mainFoot: playerProperties.playerMainFootProp.textContent,
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
});

function HandleFormationSubmission(parents) {
    var currentFormedTeam = GetParentTeamContainer(parents);
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

            Hide(parents);

            currentFormedTeam.appendChild(parentPlayerDiv);
        }
    }
}

function CreatePlayerDiv() {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';

    // Set the innerHTML for playerDiv
    playerDiv.innerHTML = `
    <div class="add-player-btn" id="add-player-1-btn">+</div>
    <div class="picture hidden"></div>
    <div class="name hidden tooltip">
      Name: <span id="player-1-name"></span>
      <span class="edit-btn">
        <span class="material-symbols-outlined"> edit </span>
      </span>
    </div>
    <div class="hidden tooltip-text">
      <div class="height">
        Height: <span id="player-1-height"></span>
      </div>
      <div class="phy">
        Physcique: <span id="player-1-phy"></span>
      </div>
      <div class="def">
        Defence: <span id="player-1-def"></span>
      </div>
      <div class="drrible">
        Drribles: <span id="player-1-drrible"></span>
      </div>
      <div class="pace">Pace: <span id="player-1-pace"></span></div>
      <div class="main-foot">
        Main foot: <span id="player-1-main-foot"></span>
      </div>
    </div>
    `;
    playerDiv.style.background = 'white';

    playerAdditionButtons.forEach(playerAdditionButton => {
        playerAdditionButton.onclick = () => {
            Hide(playerAdditionButton);
            submitPlayerPropsButton.onclick = () => {
                Show(playersAdditionForm);
                function PlayerAdded() {
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
<<<<<<< HEAD
                    console.log(playerInputs.inputPlayerHeight.value);
                    console.log(playerInputs.inputPlayerDef.value);
=======

                    
>>>>>>> parent of 29f42cb (updating green co;or)
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
                Hide(playersAdditionForm);
            };
        }
    });

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

var pictures = document.querySelectorAll('.picture');
pictures.forEach(editButton => {
    editButton.onclick = () => {

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
                if (GetParentInHierarchy(4, playerProperties.playerNameProp) == teamAPlayersContainer) {
                    return teamAName.textContent;
                }
                else {
                    return teamBName.textContent;
                }
            }

            const jsonData = {
                id: Math.floor(Math.random() * 100000),
                TeamName: GetTeamName(),
                name: playerProperties.playerNameProp.textContent,
                height: playerProperties.playerHeightProp.textContent,
                phy: playerProperties.playerPhyProp.textContent,
                def: playerProperties.playerDefProp.textContent,
                drrible: playerProperties.playerDrribleProp.textContent,
                pace: playerProperties.playerPaceProp.textContent,
                mainFoot: playerProperties.playerMainFootProp.textContent,
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

playerAdditionButtons.forEach(playerAdditionButton => {
    playerAdditionButton.onclick = () => {
        Show(playersAdditionForm);
        function PlayerAdded() {
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

        Hide(playersAdditionForm);
    }
});

