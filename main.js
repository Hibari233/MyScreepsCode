var drone = require('drone');
var upgrader = require('upgrader');
var builder = require('builder');
var scout = require('scout');
var repairer = require('repairer');
var transporter = require('transporter');
var queen = require('queen');
var charger = require('charger');
var transmitter = require('transmitter');
var guarder = require('guarder');
var stateScanner = require('stateScanner');
var mdrone = require('mdrone');

module.exports.loop = function () {
    console.log('############################# START #############################');
    for(const name in Memory.creeps) {
    if(!Game.creeps[name]) {
            delete Memory.creeps[name]
        }
    }
    
    // #########################   drones  #############################

    var drones1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source1');
    console.log('drones1: ' + drones1.length);
    
    var drones2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source2');
    console.log('drones2: ' + drones2.length);
    
    var drones3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source3');
    console.log('drones3: ' + drones3.length);
    
    var drones4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source4');
    console.log('drones4: ' + drones4.length);

    var drones5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source5');
    console.log('drones5: ' + drones5.length);
    
    var drones6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source6');
    console.log('drones6: ' + drones6.length);

    // #########################   mdrones  #############################

    var mdrones1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'mdrone' && creep.memory.s == 'mineral1');
    console.log('mdrones1: ' + mdrones1.length);

    // #########################   scouts  #############################
    
    var scouts1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W22S7');
    console.log('scouts1: ' + scouts1.length);

    var scouts2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S8');
    console.log('scouts2: ' + scouts2.length);

    var scouts3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S9');
    console.log('scouts3: ' + scouts3.length);
    
    // #########################   transporters  #############################

    var transporter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W22S8');
    console.log('transporter1s: ' + transporter1s.length);
    
    var transporter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S8');
    console.log('transporter2s: ' + transporter2s.length);

    var transporter3s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S9');
    console.log('transporter3s: ' + transporter3s.length);

    // #########################   guarders  ###################################

    var guarder1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S8');
    console.log('guarder1s: ' + guarder1s.length);

    var guarder2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S9');
    console.log('guarder2s: ' + guarder2s.length);

    // #########################   tranmitter  ###################################

    var transmitter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S8');
    console.log('transmitter1s: ' + transmitter1s.length);

    var transmitter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S9');
    console.log('transmitter2s: ' + transmitter2s.length);

    // #########################   others  ####################################
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('upgraders: ' + upgraders.length);
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('builders: ' + builders.length);

    var queens = _.filter(Game.creeps, (creep) => creep.memory.role == 'queen');
    console.log('queens: ' + queens.length);

    var smallqueens = _.filter(Game.creeps, (creep) => creep.memory.role == 'smallqueen');
    console.log('smallqueens: ' + smallqueens.length);

    var chargers = _.filter(Game.creeps, (creep) => creep.memory.role == 'charger');
    console.log('chargers: ' + chargers.length);
    
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('repairers: ' + repairers.length);
    
    
    // #########################   num_control  #############################
    // #########################   drones  #############################

    if(drones1.length < 1) {
        var newName = 'drone1_' + Game.time;
        console.log('Spawning new drone1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source1'}});        
    }
    
    if(drones2.length < 1) {
        var newName = 'drone2_' + Game.time;
        console.log('Spawning new drone2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'drone', s: 'source2'}});        
    }
    
    if(drones3.length < 1) {
        var newName = 'drone3_' + Game.time;
        console.log('Spawning new drone3: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source3'}});        
    }
    
    if(drones4.length < 1) {
        var newName = 'drone4_' + Game.time;
        console.log('Spawning new drone4: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source4'}});        
    }

    if(drones5.length < 1) {
        var newName = 'drone5_' + Game.time;
        console.log('Spawning new drone5: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source5'}});        
    }

    if(drones6.length < 1) {
        var newName = 'drone6_' + Game.time;
        console.log('Spawning new drone6: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source6'}});        
    }
    // #########################   mdrones  #############################

    if(mdrones1.length < 1) {
        var newName = 'mdrone1_' + Game.time;
        console.log('Spawning new mdrone1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'mdrone', s: 'mineral1'}});
    }

    // #########################   scouts  #############################

    if(scouts1.length < 1) {
        var newName = 'scout1_' + Game.time;
        console.log('Spawning new scout1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W22S7'}});        
    }
    
    if(scouts2.length < 1) {
        var newName = 'scout2_' + Game.time;
        console.log('Spawning new scout2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S8'}});        
    }
    
    if(scouts3.length < 1) {
        var newName = 'scout3_' + Game.time;
        console.log('Spawning new scout3: ' + newName);
        Game.spawns['Hibari'].spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S9'}});        
    }
    // #########################   transporters  #############################

    if(transporter1s.length < 1) {
        var newName = 'transporter1_' + Game.time;
        console.log('Spawning new transporter1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W22S8'}});        
    }
    
    if(transporter2s.length < 3) {
        var newName = 'transporter2_' + Game.time;
        console.log('Spawning new transporter2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S8'}});        
    }

    if(transporter3s.length < 2) {
        var newName = 'transporter3_' + Game.time;
        console.log('Spawning new transporter3: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S9'}});        
    }
    
    // #########################   transmitters  #############################

    if(transmitter1s.length < 1) {
        var newName = 'transmitter1_' + Game.time;
        console.log('Spawning new transmitter1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S8'}});        
    }

    if(transmitter2s.length < 1) {
        var newName = 'transmitter2_' + Game.time;
        console.log('Spawning new transmitter2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S9'}});        
    }
    
    // #########################   guarders  #############################

    if(guarder1s.length < 1) {
        var newName = 'guarder1_' + Game.time;
        console.log('Spawning new guarder1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S8'}});        
    }

    if(guarder2s.length < 1) {
        var newName = 'guarder2_' + Game.time;
        console.log('Spawning new guarder2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S9'}});
    }

    // #########################   others  #############################

    if(repairers.length < 0) {
        var newName = 'repairer_' + Game.time;
        console.log('Spawning new repairer: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'repairer'}});        
    }

    if(queens.length < 1) {
        var newName = 'queen_' + Game.time;
        console.log('Spawning new queen: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'queen'}});        
    }

    if(upgraders.length < 1) {
        var newName = 'upgrader_' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }

    if(builders.length < 0) {
        var newName = 'builder_' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});        
    }
    
    if(smallqueens.length < 1) {
        var newName = 'smallqueen_' + Game.time;
        console.log('Spawning new smallqueen: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'smallqueen'}});
    }

    if(chargers.length < 1) {
        var newName = 'charger_' + Game.time;
        console.log('Spawning new charger: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'charger'}});
    }
    
    if(Game.spawns['Hibari'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari'].spawning.name];
        Game.spawns['Hibari'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari'].pos.x + 1, 
            Game.spawns['Hibari'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    if(Game.spawns['Hibari2'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari2'].spawning.name];
        Game.spawns['Hibari2'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari2'].pos.x - 1, 
            Game.spawns['Hibari2'].pos.y + 1, 
            {align: 'left', opacity: 0.8});
    }
    
    var towers = Game.rooms.W22S8.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_TOWER;
            }
    });
    
    var str = Game.rooms.W22S8.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_CONTAINER ||
                    structure.structureType == STRUCTURE_ROAD ||
                    structure.structureType == STRUCTURE_RAMPART && structure.hits < 2000000) &&
                    structure.hits < structure.hitsMax;
            }
    });
    var hostile = Game.rooms.W22S8.find(FIND_HOSTILE_CREEPS);
    var powerh = Game.rooms.W22S8.find(FIND_HOSTILE_POWER_CREEPS);
    var friend = Game.rooms.W22S8.find(FIND_MY_CREEPS, {
        filter: (creep) => {
            return creep.hits < creep.hitsMax;
        }
    });
    hostile.concat(powerh);
    if(hostile[0]) {
        towers[0].attack(hostile[0]);
        towers[1].attack(hostile[0]);
        towers[2].attack(hostile[0]);
    }
    else{
        towers[0].heal(friend[0]);
        towers[0].repair(str[0]);
        towers[1].repair(str[1]);
        towers[2].repair(str[2]);
    }
    var links = Game.rooms.W22S8.find(FIND_STRUCTURES, {
        filter: (structure) => {
                return structure.structureType == STRUCTURE_LINK
            }
    });
    if(links[1].store.energy == 0) {links[0].transferEnergy(links[1]);}
    
    
    
    /*
    const amountToSell = 2000, maxTransferEnergyCost = 2000;
    const orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});

    for(let i=0; i<orders.length; i++) {
        const transferEnergyCost = Game.market.calcTransactionCost(amountToSell, 'W22S8', orders[i].roomName);

        if(transferEnergyCost < maxTransferEnergyCost) {
            Game.market.deal(orders[i].id, amountToSell, "W22S8");
            break;
        }
    }
    */
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'drone') {
            drone.run(creep);
        }
        if(creep.memory.role == 'mdrone') {
            mdrone.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            upgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            if(!creep.pos.inRangeTo(Game.flags.W23S9,24)) creep.moveTo(Game.flags.W23S9);
            else {
                builder.run(creep);
            }
        }
        if(creep.memory.role == 'scout') {
            scout.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            builder.run(creep);
        }
        if(creep.memory.role == 'transporter') {
            transporter.run(creep);
        }
        if(creep.memory.role == 'queen' || creep.memory.role == 'smallqueen') {
            queen.run(creep);
        }
        if(creep.memory.role == 'charger') {
            charger.run(creep);
        }
        if(creep.memory.role == 'transmitter') {
            transmitter.run(creep);
        }
        if(creep.memory.role == 'guarder') {
            guarder.run(creep);
        }
    }
    //stateScanner();
}