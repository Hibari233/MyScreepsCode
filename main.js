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
/**
 * 全局统计信息扫描器
 * 负责搜集关于 cpu、memory、GCL、GPL 的相关信息
 */
module.exports.stateScanner = function () {
    // 每 20 tick 运行一次
    if (Game.time % 20) return 
  
    if (!Memory.stats) Memory.stats = {}
    
    // 统计 GCL / GPL 的升级百分比和等级
    Memory.stats.gcl = (Game.gcl.progress / Game.gcl.progressTotal) * 100
    Memory.stats.gclLevel = Game.gcl.level
    Memory.stats.gpl = (Game.gpl.progress / Game.gpl.progressTotal) * 100
    Memory.stats.gplLevel = Game.gpl.level
    // CPU 的当前使用量
    Memory.stats.cpu = Game.cpu.getUsed()
    // bucket 当前剩余量
    Memory.stats.bucket = Game.cpu.bucket
}

module.exports.loop = function () {
    console.log('##############################');
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

    
    // #########################   scouts  #############################
    
    var scouts1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W22S7');
    console.log('scouts1: ' + scouts1.length);
    var scouts2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S8');
    console.log('scouts2: ' + scouts2.length);
    
    // #########################   transporters  #############################
    var transporter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W22S8');
    console.log('transporter1s: ' + transporter1s.length);
    
    var transporter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S8');
    console.log('transporter2s: ' + transporter2s.length);
    
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
    
    var transmitters1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S8');
    console.log('transmitters1: ' + transmitters1.length);
    
    var guarder1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S8');
    console.log('guarder1s: ' + guarder1s.length);
    
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
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S8'}});        
    }
    
    
    
    if(repairers.length < 0) {
        var newName = 'repairer_' + Game.time;
        console.log('Spawning new repairer: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'repairer'}});        
    }


    if(queens.length < 1) {
        var newName = 'queen_' + Game.time;
        console.log('Spawning new queen: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'queen'}});        
    }


    if(upgraders.length < 3) {
        var newName = 'upgrader_' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }

    if(builders.length < 1) {
        var newName = 'builder_' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Hibari'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
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

    if(transmitters1.length < 1) {
        var newName = 'transmitter1_' + Game.time;
        console.log('Spawning new transmitter1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S8'}});        
    }
    
    if(guarder1s.length < 1) {
        var newName = 'guarder1_' + Game.time;
        console.log('Spawning new guarder1: ' + newName);
        Game.spawns['Hibari'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S8'}});        
    }
    
    if(Game.spawns['Hibari'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari'].spawning.name];
        Game.spawns['Hibari'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari'].pos.x + 1, 
            Game.spawns['Hibari'].pos.y, 
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
    var friend = Game.rooms.W22S8.find(FIND_MY_CREEPS);
    towers[0].attack(hostile[0]);
    towers[1].attack(hostile[0]);
    //towers[0].heal(friend[0]);
    towers[0].repair(str[0]);
    towers[1].repair(str[1]);
    
    var links = Game.rooms.W22S8.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_LINK
            }
    });
    if(links[1].store.energy == 0) {links[0].transferEnergy(links[1]);}
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'drone') {
            drone.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            upgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            //creep.moveTo(Game.flags.W23S8);
            builder.run(creep);
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
    stateScanner()
}