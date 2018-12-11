var rs = require('readline-sync');
// seperate game logic from function logic
// functional logic(business logic)
function Player(name, hp, inventory, enemiesKilled, playerAttack){
    this.name = 'name';
    this.hp = 100;
    this.inventory = [];
    this.enemiesKilled = 0;
    this.playerAttack =  playerAttack();
}

var Enemies = [
    {
        enemyName = 'Lone Wolf', 
        damage = 25,
        hp = 15
    },
    {
        enemyName = 'Witch', 
        damage = 30,
        hp = 20
    },
    {
        enemyName = 'Dark Elf',
        damage = 30,
        hp = 30
    }
]

function enemyChance(Enemies){
    if((Math.random * 10) <= 2.5){
        Enemies[0] === true
    } else if((Math.random * 10) <= 5 >= 2.6){
        Enemies[1] === true
    } else if(((Math.random * 10) <= 7.5) && ((Math.random * 10) >= 5.1)){
        Enemies[2] === true

    } else {
        isWalking();
    }
}

function enemyAttack(Enemies){
    Math.floor(Math.random() * 30) + 10
}

function playerAttack(Player){
    Math.floor(Math.random() * 33) + 15  
}

function runChance(){
    if(Math.random < .5){
        isWalking();
} else {
    enemyChance();
}

function enemyLife(Enemies){
    if(Enemies.hp <= 0){
        return "You defeated your Foe!"
        isWalking();
    } else {
        enemyAttack();
    }
}

function gameOver(Player){
    if(Player.hp <= 0){
        Console.log('Game Over Man')
    } else {
        playerAttack();
    }
}


// game logic - momentum of the game
//     
var name = rs.question('What is your name?\n');  
var player = new Player();
console.log('Greetings ' + Player.name)

// var startAdventure = rs.keyInSelect(['y'], 'Press \'y\' to begin your Adventure out of the Dark Forest');
// // prompt user for name and info
// while(true){
//     var isWalking = rs.keyInSelect(['w'], 'Press \'w\' to continue');
//     enemyChance();

