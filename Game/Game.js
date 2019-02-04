var inventory = {
    chisel:0,
    handgun:0,
    c4:0,
    ammo:0,
    keycard:0,
}
var playerStats = {
    health:100,
    fatigue:0,
    armor:0,
}


Game();

function Game(){
    document.write("Insomnic memories: a game by malachi barnard");
    var playername = prompt("White... everything is white.  Thats the first thing you see, and the only thing you remember is your name: ");
    alert("you look around the room. A bed and a door, thats all. also the memory burning in your head.  "+ playername);
    
    Maincell();
    
    function Maincell(){
        var mainCell = prompt("The room is empty.  The bed is bolted to the ground. The door has a slot, most likely to feed whoever is in here. You wonder why you are here. Faint voices seem to be heard from a distance, they seem to be speaking in russian. You notice a guard watching your every move at the door. Why do you need to be watched?   Basic commands: \n -look around (or) at, \n -break, \n -take \n- talk to guard \n - move (n,s,e,w), \n - go to sleep. you can find out the rest...").toLowerCase();
        
        if(mainCell == "look around" || mainCell == "look"){
            var mainCellLook = prompt("the room is definition of blank, probably made of concrete, and by the looks of things, it's thick.  What is the reason for you being in here?  You notice on the north wall there is a slight miscoloration about the size of a door. The bed is low to the ground. The guard is watching you. What is wrong with you? you wonder if you are a criminal... \n -look at \n -move (n,s,e,w) \n -break, \n -talk to guard, \n -go to sleep, the rest is up to you...").toLowerCase();
        
        }

        
        
    else if(mainCell == "go to sleep" || mainCell == 'sleep'){
        alert("as you go back to sleep on the uncomftorable bed, you notice a burning feeling in your head... then everything goes black");

        
        var resume = confirm("do you want to wake up?");
        
        if(resume){
            Game();
        }
        else{
            alert("You don't wake up... ");
        }
        

    }
        if (mainCell == "w"|| mainCell == "move w" || mainCell == "e"|| mainCell == "move e"){
            alert("There a wall here");
            Maincell();
        }
         if (mainCellLook == "w"|| mainCellLook == "move west" || mainCellLook == "e"|| mainCellLook == "move east"){
            alert("There a wall here");
            Maincell();
        }       
        else if (mainCellLook == "s" || mainCellLook == "move s"){
            var door = prompt('there is a door here.  It is big, around 4 meters in height and 3 in width.  Why is the door so big?  There is a window about one and a half meters up. \n -look \n -back \n - hit the dang door')
        }
        else{
            alert("you can't do that");
            Maincell();
        }
        if(mainCell == "look at bed" || mainCellLook == "bed"|| mainCell == "bed" || mainCellLook == "look at bed"){
            var mainCellBed = prompt("The bed is a concrete slab.  There is straw instead of a blanket, and a pillow.  It's bolted to the ground, and there is a slight space under it.  \n -Back \n -look under bed").toLowerCase();
            if (mainCellBed == "back"){
                Maincell();
            }
            else if(mainCellBed == "look" || mainCellBed == "look under bed" && chisel < 1){
                var underBed = prompt("you look under the bed.  There are cobwebs.  Just cobwebs.  When you are about to give up and cry, you notice a shimmer out of the corner of your eye.  \n -look deeper \n -back ")
         
                
                if (underBed == "look deeper" || underBed == "look"){
                    if (inventory.chisel < 1){
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
                            alert("you can't do that");
                            Maincell();
                        }
                 }
                }
                if (underBed == "look deeper" && inventory.chisel >= 1 || underBed == "look" && inventory.chisel >= 1){
                    alert('you have already taken the chisel, there is nothing left here');
                    Maincell();
                }
                else{
                    alert("you can't do that");
                    Maincell();
                }
        }
    }
        if (mainCell == "n" || mainCell == "move n"|| mainCellLook == "n" || mainCellLook == "move n" ){
            Discoloredpatch();
            function Discoloredpatch(){ 
             var discoloredPatch = prompt("You move to the north of your tiny cell.  As you saw before, there is a discolored patch on the wall.  There is a small indentation running along the wall in the shape of a door. \n - Break patch \n - back \n - listen \n -break with").toLowerCase();
                if (discoloredPatch == "listen"){
                    alert("you place your ear against the patch, and listen.  You can barley hear voices, you can't make out what they are saying but they †sound festive.  Who are your captors");
                    Discoloredpatch();
                }
                else if(discoloredPatch == "back"){
                    Maincell();
                }
                else if(discoloredPatch == "break patch with chisel" && inventory.chisel >= 1 || discoloredPatch == "break with chisel" && inventory.chisel >= 1 || discoloredPatch == "chisel" && inventory.chisel >= 1 ){
                    Guardhouse();
                }                    
                else{
                    alert("you cant do that");
                    Maincell();
                    }
                function Guardhouse(){
                        alert("this is a test");
                                    
                    }
            }

        }
        else{
            alert("you can't do that");
            Maincell();
        }
}    

}