let go = () => {
    let playerList = document.getElementById("players");
    let playerCount = parseInt(document.getElementById("count").value);
    if (playerCount > 3) {
        playerList.innerHTML = "<div class='w100 p20'></div>";
        let roles = [];
        let blackCount = 0;
        while ((blackCount * 2) + 1 + blackCount < playerCount - 2) {
            roles.push("Նեգռ");
            blackCount++;
        }
        roles[0] = "Զուբյենկո Միխայիլ Պետռովիչ";
        for (let i = 0; i < playerCount - blackCount; i++) {
            roles.push("Պուշեչնոե Մյասո");
        }
        roles[roles.length - 1] = "Վովա Գասպարյան";
        
        let randomRoles = [];
        
        while (roles.length > 0) {
            let x = Math.floor(Math.random() * roles.length);
            randomRoles.push(roles[x]);
            roles.splice(x, 1);
        }
        
        
        for (let i in randomRoles) {
            playerList.innerHTML +=
            `
            <div class="player ${(randomRoles[i] == "Նեգռ" || randomRoles[i] == "Զուբյենկո Միխայիլ Պետռովիչ") ? "black" : "red"}">
            <p>${parseInt(i) + 1}: ${randomRoles[i]}</p>
            </div>
            `;
        }
    } else {
        playerList.innerHTML = (isNaN(playerCount)) ? "<div class='error'>Խնդրում ենք Գրել Անբախտների Քանակը</div>" : 
        `
        <div class="error">
        <p>Ամբաստանյալների Քանակը Քիչ է, Խնդրում ենք գտնել ևս ${4 - playerCount} Խաղացող</p>
        </div>
        `;
    }
    
}