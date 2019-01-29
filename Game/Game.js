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
        if(mainCell == "look at bed" || mainCellLook == "look at bed"){
            var mainCellBed = prompt("The bed is a concrete slab.  There is straw instead of a blanket, and a pillow.  It's bolted to the ground, and there is a slight space under it.  \n -Back \n look").toLowerCase;
        if (mainCellBed == "back"){
            Maincell();
        }
        }
        if (mainCell == "n" || mainCell == "move n"|| mainCellLook == "n" || mainCellLook == "move n" ){
            var discoloredPatch = prompt("You move to the north of your tiny cell.  As you saw before, there is a discolored patch on the wall.  There is a small indentation running along the wall in the shape of a door. \n - Break patch \n - back \n -listen").toLowerCase;
        }
        if (discoloredPatch == "listen"){
            alert("you place your ear against the patch, and listen.  You can barley hear some voices, you can't make out what they are saying but they sound festive");
            mainCell();
        }



}    
}