
Game();

function Game(){
    var inventory = {
        chisel:0,
        handgun:0,
        c4:0,
        knife:0,
        ammo:0,
        keycard:0,
        straw:0,
        chestplate:0,
        kevlar:0,
        ironSuit:0,
    }
    var playerStats = {
        health:100,
        fatigue:0,
        armor:0,
    }
    document.write("Insomnic memories: a game by malachi barnard");
    alert("a few quick rules, if health = 0, you die.  If fatuige = 100, you have to restart, so be sure to check your stats at all times!")
    var playername = prompt("White... everything is white.  Thats the first thing you see, and the only thing you remember is your name: ");
    alert("you look around the room. A bed and a door, thats all. also the memory burning in your head.  "+ playername);
    var checkStats = function(){
        alert("Health: " + playerStats.health + "\n Fatigue: " + playerStats.fatigue + "\narmor: " + playerStats.armor);
    }
    var checkArmor = function(){
        alert("straw armor: " + inventory.straw + "\nchestplate: " + inventory.chestplate + "\nkevlar: " + inventory.kevlar + "\niron suit: " + inventory.ironSuit )
    }
    var checkArmortoDamage = function(){
        if (playerStats.armor <5){
            playerStats.health = playerStats.health;
        }
        else if(playerStats.armor >= 5 && playerStats.armor <= 10){
            playerStats.health += 2
        }
        else if(playerStats.armor >10 && playerStats.armor <= 20){
            playerStats.health += 8
            playerStats.fatigue += 4
        }
        else if(playerStats.armor > 20 && playerStats.armor <= 50){
            playerStats.health += 14
            playerStats.fatigue += 8
        }
        else if(playerStats.armor > 50 && playerStats.armor <= 100){
            playerStats.health += 28
            playerStats.fatigue += 16
        }
    }
    
    Maincell();
    
    function Maincell(){
        var mainCell = prompt("The room is empty.  The bed is bolted to the ground. The door has a slot, most likely to feed whoever is in here. You wonder why you are here. Faint voices seem to be heard from a distance, they seem to be speaking in russian. You notice a guard watching your every move at the door. Why do you need to be watched?   \n Basic commands \n -take \n -move (n,s,e,w) \n -go to sleep. \n -stats \n -bed \n -armor \nyou can find out the rest...").toLowerCase();
        if (playerStats.health <= 0){
            alert("you have died")
        } 
        else if(mainCell == "go to sleep" || mainCell == 'sleep' ){
        alert("as you go back to sleep on the uncomftorable bed, you notice a burning feeling in your head... then everything goes black");
        Sleep();
        }
        else if (mainCell == "w"|| mainCell == "move w" || mainCell == "e"|| mainCell == "move e"){
            alert("There a wall here");
            Maincell();
        }
        else if(mainCell == "look at bed"&& inventory.chisel<1 || mainCell == "bed"&& inventory.chisel<1){
            Bed();
        }       
        else if (mainCell == "n" || mainCell == "move n"){
            Discoloredpatch();
        }
        else if(mainCell == "look at bed"&& inventory.chisel>= 1 || mainCell == "bed"&& inventory.chisel>= 1){
            alert('you have already taken the chisel, there is nothing left here');
            Maincell();
        }
        else if(mainCell == "take"){
            alert("what is there to take?")
            Maincell();
        }
        else if(mainCell == "move"){
            alert("to help yourself out, please place a letter (pretaining to the direction) after move");
            Maincell();
        }
        else if(mainCell == "stats"){
            checkStats(); 
            Maincell();
        }
        else if(mainCell == "s" || mainCell == "move s"){
            Bigdoor();
        }
        else if(mainCell == "armor"){
            checkArmor();
            Maincell();
        }
        
        else{
            alert("you can't do that");
            Maincell();
        }
    }
        function Bed(){
        var mainCellBed = prompt("The bed is a concrete slab.  There is straw instead of a blanket, and a pillow.  It's bolted to the ground, and there is a slight space under it.  \n -Back \n -look under bed \n -take \n armor ").toLowerCase();
        if (mainCellBed == "back"){
            Maincell();
        }
        else if(mainCellBed == "look"|| mainCellBed == "look under bed") {
            var underBed = prompt("you look under the bed.  There are cobwebs.  Just cobwebs.  When you are about to give up and cry, you notice a shimmer out of the corner of your eye.  \n -look deeper \n -back ")
            if (underBed == "look deeper" || underBed == "look"){
                    alert("you start to reach your arm under the bed. and then the flashback happenes.\n \n You are on the ground, in a forest. gunshots are going off all around you, you can't tell where they are coming from because the trees block your path.  You see your commander, but you don't remember his name.  \n 'Soldier get up and fight.' \n you look down and see that you are holding a gun. As you look at your surroundings you see your platoon, all dead.  you realise that you are in real danger.  You decide to follow his orders, out of fear for your life.  You stand up but feel confused and dizzy. you see the commander start to shoot, but he gets hit.  He falls to the ground. \n the commander calls you over and with his last dying breath he says one thing, 'run.' ");
                    alert("what just happened? This flashback floods you with sorrow.  You can't remember much, but you know that your platoon was your friends.  You need to know why you are here.  mabey your memorys will come back, but for now, you need to find out who took you")
                var takeChisel = prompt("you notice that the shiny thing under your bed is an iron bar, but its been made into a makeshift chisel. Someone has already been here? Could you possibly know them?  You can probably use this. \n -take chisel ").toLowerCase();
                    if(takeChisel == "take" || takeChisel == "take chisel"){
                        //Add one to the chisel
                        inventory.chisel  ++;
                        alert("you took the chisel");
                        Maincell();
                    }
                    else{
                        Bed();
                    }
            }
        }
            else if(underBed == "commit die"){
                alert("† you commit heart no pump †");
                hnp = confirm("play again?")
                    if(hnp){
                        Game();
                    }
                    else{
                        alert("oof death")
                    }
            }
            else if(mainCellBed == "take straw" && inventory.straw < 1){
                alert("you take the straw and stuff it into your shirt and pants, unconftorable but adds some padding");
                inventory.straw += 1
                playerStats.armor += 5
                Bed();
            }
            else if(mainCellBed == "take straw" && inventory.straw >= 1){
                alert("you took the straw already, you'll just be cold when you sleep in exchange for armor");
                Bed();
            } 
            else if (mainCellBed == "take"){
                alert("please take something relevant and not just the air for your lungs");
                Bed();
            }
            else if(mainCellBed == "back"){
                Maincell();
            }
            else if(mainCellBed == "stats"){
                checkStats();
                Bed();
            }

        
            else{
                alert("you can't do that")
                Bed();
            }
        }
        function Discoloredpatch(){ 
            var discoloredPatch = prompt("You move to the north of your tiny cell.  As you saw before, there is a discolored patch on the wall.  There is a small indentation running along the wall in the shape of a door. \n - Break patch \n - back \n - listen \n -break with").toLowerCase();
            if (discoloredPatch == "listen"){
                alert("you place your ear against the patch, and listen.  You can barley hear voices, you can't make out what they are saying but they †sound festive.  Who are your captors");
                Discoloredpatch();
            }
            else if(discoloredPatch == "back"){
                Maincell();
            }
            else if(discoloredPatch == "break patch with chisel" && inventory.chisel >= 1 || discoloredPatch == "break with chisel" && inventory.chisel >= 1 || discoloredPatch == "chisel" && inventory.chisel >= 1 || discoloredPatch == "break" && inventory.chisel>= 1 || discoloredPatch == "break patch" && inventory.chisel>=1 ){
                GuardhouseCloset();
            }
            else if(discoloredPatch == "break" && inventory.chisel< 1 || discoloredPatch == "break patch" && inventory.chisel<1 ){
                var attemptBreak = ["you try to headbutt it, wow that hurt\n health -5", "you run at the area and plow with your shoulder, bad idea\n health -5", "you try to kick it, painful\n health -5"]
                alert(attemptBreak[Math.floor(Math.random()*3)])
                playerStats.health -= 5
                playerStats.fatigue += 2
                checkArmortoDamage();
                Discoloredpatch();
            }
            else if (playerStats.health <= 0){
                alert("you have died")
            } 
            else if(discoloredPatch == "stats"){
                alert("Health: " + playerStats.health + "\n Fatigue: " + playerStats.fatigue + "\n Armor: " + playerStats.armor);
                Discoloredpatch();
            }
            else{
                alert("you can't do that");
                Discoloredpatch();
            }                   

        }
             
            function Sleep(){        
            var resume = confirm("do you want to wake up?");
            
            if(resume){
                Game();
            }
            else{
                alert("You don't wake up... ");
            }  
        }
        function Bigdoor(){
            var southDoor = prompt("There is a big iron door, about two meters in width and six in heigth.  There is a guard with an emotionless face... watching you.  \nCommands: \n-talk to guard \n -hit door \n -back \n -stats").toLocaleLowerCase();
            if (southDoor == "stats"){
                alert("Health: " + playerStats.health + "\n Fatigue: " + playerStats.fatigue + "\n Armor: " + playerStats.armor);
                Bigdoor();
            }
            else if(southDoor == 'talk to guard' || southDoor == "talk"){
                var smallTalk = ["you say hello, the guard dosen't respond","you ask who you are, the guard dosen't respond","you ask where you are, the guard dosen't respond","you ask for food, the guard dosen't respond","you beg for food, the guard dosen't respond", "you yell at the guard, the guard dosen't respond", "You try to use sign language at the guard, the guard dosen't respond", "you quote winston churchill's talk on never giving up, the guard dosen't respond", "you tell the guard a dad joke, the guard dosen't respond", "you tell the guard how this line of code is probably the longest in the game, the guard dosen't respond","You tell the guard he's mean, the guard dosen't respond","you tell the guard he looks like he looks like he's single, he looks offended", "You flop onto the ground and start loudly screaming and moaning. The guard looks inside and smugly smiles, then goes back to his business.","you yell at the guard 'Hey look at me!', the guard looks over, you say 'try me'","at this point the guard is playing roblox on his iphone 5s"]
                    alert(smallTalk[Math.floor(Math.random()*15)])
                    playerStats.fatigue += 2
                    Bigdoor(); 
                }
            else if(southDoor == "back"){
                Maincell();
            }
            else if(southDoor == "hit door" || southDoor == "hit"){
                var hitDoor =["you hit the door with your head, ouch... the guard laughs \n health -5 \n fatigue -5","You hit the door with your fist, that was a stupid idea... the guard mocks you \n health -5 \n fatigue -5","You try to kick the door. With your bare feet... oops \n health -5 \n fatigue -5"];
                alert(hitDoor[Math.floor(Math.random()*3)])
                playerStats.health -= 5
                playerStats.fatigue += 5
                checkArmortoDamage();
                Bigdoor();
            }

            else if(playerStats.fatigue >= 100 || playerStats.health <= 0){
                alert("You have died");
                var doorDeath = confirm("play again?");
                    if(doorDeath){
                        Game();
                    }
                    else{
                        alert("you'll never find out why you were here")
                    }
            }            
            else if(playerStats.fatigue == 20){
                alert("you are getting pretty tired, remeber, don't get to 100 with fatuige");
                Bigdoor();

            }
            else{
                alert("you can't do that");
                Bigdoor();
            }
        }    
        function GuardhouseCloset(){
        var guardCloset = prompt("The patch swings open, it turns out this is an abandoned service hatch, which means this cell was probably repurposed.  There are cleaning supplies in here, a broom, a janitors cart and some bleach.  There is a door leading to the another room, which is quiet. \n n\n s \n take \n look at ").toLowerCase();

        if(guardCloset == "look at janitors cart"){
            var janitorsCart = prompt("The cart is dirty, there is not much on it, just some rags and spray \n back \n move (object) ").toLowerCase();

            if(janitorsCart == "move rags" && inventory.knife < 1){
                var moveRags = confirm("you move the rags, and find a small pocket knife... it can be good.  Take it?")
            }
                if (moveRags){
                    alert("you take the knife");
                    inventory.knife += 1
                    GuardhouseCloset();
                }
            else{
                GuardhouseCloset();
            }
            if(guardCloset == "s"){
                discoloredPatch();
            }
            else if(guardCloset == "n"){
                alert("you can't go there cause we are in beta right now");
                GuardhouseCloset();
            }
            else{
                alert("you cant do that");
                GuardhouseCloset();
            }
        }
                  }
                }  


