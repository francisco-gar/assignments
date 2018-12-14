var rs = require('readline-sync');

var enemyTypes = ['Cruiser', 'Fighter', 'Transport'];
var items = ['Repair Drone', 'Weapons Updgrade', 'Credits'];



// player constructor
function Player(name){
    this.name = name;
    this.hp = 200;
    this.item = [];
    this.enemiesKilled = 0;
    this.randomPlayerAttack = Math.floor(Math.random() * (55 - 25) + 25);
    this.escapeChance = Math.floor(Math.random() * 2);
}

//enemy constructor
function Enemy(){
    this.name = getRandomElement(enemyTypes);
    this.hp = Math.floor(Math.random() * (81 - 30) + 30);
    this.randomAttack = Math.floor(Math.random() * (55 - 25) + 25);
    this.hpBoost = Math.floor(Math.random() * (21 - 10) + 10)
    this.items = getRandomElement(items);
}

// pick an enemy at random
function getRandomElement(arr){
    var index = Math.floor(Math.random() * arr.length)
    return arr[index];
}

function enemyChance(){
    var chance = Math.floor(Math.random() * 5); // 1 in 5 chance
    if (chance == 1) {
        var enemy = enemies[Math.floor(Math.random() * enemies.length)];
        return enemy;
    }
}

function printStats (){
        console.log('     Name: ' + player.name + '\n       HP: ' + player.hp + '\nInventory: ' + player.inventory + '\n    Kills: ' + player.enmiesKilled)
}

var name = rs.question('What is your name Captain?\n');

var player = new Player(name);

while(true){
    var isWalking = rs.keyInYN('Would you like to traverse the stars?')
    while (isWalking){
        
        var encountersEnemy = Math.random() < .333333;
        if(encountersEnemy){
            printStats();
            //generate random enemy
            var enemy = new Enemy();
            console.log('You encountered a ' + enemy.name);
            var fight = rs.keyInYN('Would you like to fight or flight?')
            if(fight){
                while(player.hp > 0 && enemy.hp > 0){
                    var attack = rs.keyInYN('Would you like to attack?')
                    enemyStartHp = enemy.hp;
                    enemy.hp -= player.randomPlayerAttack;
                    console.log('You fired upon the enemy Ship! Reporting ' + (enemyStartHp - enemy.hp + ' DMG to the enemy ' + enemy.name));
                    if(enemy.hp > 0){
                        player.hp += -enemy.randomAttack;
                        console.log('The enemy has attacked for ' + (player.hp += -enemy.randomAttack) + ' DMG!');
                    } else {
                        player.enemiesKilled++
                        if ((player.hp += enemy.hpBoost) > 200){
                            player.hp = 200;
                        }
                        player.item.push(enemy.items);
                        console.log("The Enemy " + enemy.name + 'was destroyed!' + '\nYou have now tallied ' + player.enemiesKilled + ' Kills!') 
                         
                    }
                }
            } else {
                if(player.escapeChance === 1){
                    console.log("I've got a bad feeling about this, \n but we escape")
                } else {
                    player.hp += -enemy.randomAttack;
                    console.log('The ' + enemy.name + ' got a lucky shot on you while you escaped.')
                }
            }
            
    }
    if (player.hp <= 0){
        console.log('Do not go quietly into the night...GAME OVER.......');
        return false
    }
}}
