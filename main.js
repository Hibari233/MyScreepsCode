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
var mdrone = require('mdrone');
var tower = require('tower');
var check = require('stateScanner');
var modern_transporter = require('modern_transporter');

module.exports.loop = function () {
    for(const name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name]
        }
    }
    const show_details = false;
    // #########################   drones  #############################
    var drones1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source1');
    var drones2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source2'); 
    var drones3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source3');
    var drones4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source4');
    var drones5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source5'); 
    var drones6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source6');
    // #########################   mdrones  #############################
    var mdrones1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'mdrone' && creep.memory.s == 'mineral1');
    // #########################   scouts  #############################
    var scouts1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W22S7');
    var scouts2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S8');
    var scouts3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S9'); 
    // #########################   transporters  #############################
    var transporter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W22S8');
    var transporter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S8');
    var transporter3s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S9');
    var modern_transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'modern_transporter');
    // #########################   guarders  ###################################
    var guarder1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S8');
    var guarder2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S9');
    // #########################   tranmitter  ###################################
    var transmitter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S8');  
    var transmitter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S9');
    // #########################   others  ####################################
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var queens = _.filter(Game.creeps, (creep) => creep.memory.role == 'queen');
    var smallqueens = _.filter(Game.creeps, (creep) => creep.memory.role == 'smallqueen');
    var chargers = _.filter(Game.creeps, (creep) => creep.memory.role == 'charger');
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

    // #########################   panel  #############################
    if(show_details) {
        console.log('drones1: ' + drones1.length);
        console.log('drones2: ' + drones2.length);
        console.log('drones3: ' + drones3.length);
        console.log('drones4: ' + drones4.length);
        console.log('drones5: ' + drones5.length);
        console.log('drones6: ' + drones6.length);
        console.log('mdrones1: ' + mdrones1.length);
        console.log('scouts1: ' + scouts1.length);
        console.log('scouts2: ' + scouts2.length);
        console.log('scouts3: ' + scouts3.length);
        console.log('transporter1s: ' + transporter1s.length);
        console.log('transporter2s: ' + transporter2s.length);
        console.log('transporter3s: ' + transporter3s.length);
        console.log('modern_transporters:' + modern_transporters.length);
        console.log('guarder1s: ' + guarder1s.length);
        console.log('guarder2s: ' + guarder2s.length);
        console.log('transmitter1s: ' + transmitter1s.length);
        console.log('transmitter2s: ' + transmitter2s.length);
        console.log('upgraders: ' + upgraders.length);
        console.log('builders: ' + builders.length);
        console.log('queens: ' + queens.length);
        console.log('smallqueens: ' + smallqueens.length);
        console.log('chargers: ' + chargers.length);
        console.log('repairers: ' + repairers.length);
    }
    // #########################   num_control  #############################
    // #########################   drones  #############################
    if(drones1.length < 1) {
        var newName = 'drone1_' + Game.time;
        if(show_details) console.log('Spawning new drone1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source1'}});        
    }
    
    if(drones2.length < 1) {
        var newName = 'drone2_' + Game.time;
        if(show_details) console.log('Spawning new drone2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'drone', s: 'source2'}});        
    }
    
    if(drones3.length < 1) {
        var newName = 'drone3_' + Game.time;
        if(show_details) console.log('Spawning new drone3: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source3'}});        
    }
    
    if(drones4.length < 1) {
        var newName = 'drone4_' + Game.time;
        if(show_details) console.log('Spawning new drone4: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source4'}});        
    }

    if(drones5.length < 1) {
        var newName = 'drone5_' + Game.time;
        if(show_details) console.log('Spawning new drone5: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source5'}});        
    }

    if(drones6.length < 1) {
        var newName = 'drone6_' + Game.time;
        if(show_details) console.log('Spawning new drone6: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source6'}});        
    }
    // #########################   mdrones  #############################

    if(mdrones1.length < 0) {
        var newName = 'mdrone1_' + Game.time;
        if(show_details) console.log('Spawning new mdrone1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'mdrone', s: 'mineral1'}});
    }

    // #########################   scouts  #############################

    if(scouts1.length < 1) {
        var newName = 'scout1_' + Game.time;
        if(show_details) console.log('Spawning new scout1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W22S7'}});        
    }
    
    if(scouts2.length < 1) {
        var newName = 'scout2_' + Game.time;
        if(show_details) console.log('Spawning new scout2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S8'}});        
    }
    
    if(scouts3.length < 1) {
        var newName = 'scout3_' + Game.time;
        if(show_details) console.log('Spawning new scout3: ' + newName);
        Game.spawns['Hibari'].spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S9'}});        
    }
    // #########################   transporters  #############################

    if(transporter1s.length < 1) {
        var newName = 'transporter1_' + Game.time;
        if(show_details) console.log('Spawning new transporter1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W22S8'}});        
    }
    
    if(transporter2s.length < 3) {
        var newName = 'transporter2_' + Game.time;
        if(show_details) console.log('Spawning new transporter2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S8'}});        
    }

    if(transporter3s.length < 2) {
        var newName = 'transporter3_' + Game.time;
        if(show_details) console.log('Spawning new transporter3: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S9'}});        
    }
    
    if(modern_transporters.length < 0) {
        var newName = 'modern_transporter_' + Game.time;
        if(show_details) console.log('Spawning new modern_transporter: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'modern_transporter'}});
    }
    // #########################   transmitters  #############################

    if(transmitter1s.length < 1) {
        var newName = 'transmitter1_' + Game.time;
        if(show_details) console.log('Spawning new transmitter1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S8'}});        
    }

    if(transmitter2s.length < 1) {
        var newName = 'transmitter2_' + Game.time;
        if(show_details) console.log('Spawning new transmitter2: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S9'}});        
    }
    
    // #########################   guarders  #############################

    if(guarder1s.length < 1) {
        var newName = 'guarder1_' + Game.time;
        if(show_details) console.log('Spawning new guarder1: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S8'}});        
    }

    if(guarder2s.length < 1) {
        var newName = 'guarder2_' + Game.time;
        if(show_details) console.log('Spawning new guarder2: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S9'}});
    }

    // #########################   others  #############################

    if(repairers.length < 0) {
        var newName = 'repairer_' + Game.time;
        if(show_details) console.log('Spawning new repairer: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'repairer'}});        
    }

    if(queens.length < 1) {
        var newName = 'queen_' + Game.time;
        if(show_details) console.log('Spawning new queen: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'queen'}});        
    }

    if(upgraders.length < 1) {
        var newName = 'upgrader_' + Game.time;
        if(show_details) console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }

    if(builders.length < 1) {
        var newName = 'builder_' + Game.time;
        if(show_details) console.log('Spawning new builder: ' + newName);
        Game.spawns['Hibari2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});        
    }
    
    if(smallqueens.length < 1) {
        var newName = 'smallqueen_' + Game.time;
        if(show_details) console.log('Spawning new smallqueen: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'smallqueen'}});
    }

    if(chargers.length < 1) {
        var newName = 'charger_' + Game.time;
        if(show_details) console.log('Spawning new charger: ' + newName);
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
    for(var i = 0 ; i < towers.length ; i ++ ) {
        tower.run(towers[i]);
    }
    var links = Game.rooms.W22S8.find(FIND_STRUCTURES, {
        filter: (structure) => {
                return structure.structureType == STRUCTURE_LINK
            }
    });
    if(links[1].store.energy == 0) {links[0].transferEnergy(links[1]);}
    
    var lab1 = Game.getObjectById('5eb58e85405c8ea6a54d653e');
    var lab2 = Game.getObjectById('5eb5cb0d505937045f020767');
    var lab3 = Game.getObjectById('5eb553d2a7d7c84181f3c070');

    lab1.runReaction(lab2, lab3);
    
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
            if(!creep.pos.inRangeTo(Game.flags.W22S8,24)) creep.moveTo(Game.flags.W22S8);
            else {builder.run(creep);}
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
        if(creep.memory.role == 'modern_transporter') {
            modern_transporter.run(creep, '', '5e8ad848acf3f319ef9cb795', RESOURCE_OXYGEN, false);
        }
    }
    check.stateScanner();
}