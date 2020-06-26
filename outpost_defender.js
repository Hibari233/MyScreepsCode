

const body_against_hostiles = [RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,HEAL];
const body_against_cores = [ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE]

module.exports = {
    run: function (roomName, spawnRoomName) {
        const creepName = 'outpost_defender_' + roomName;
        if(!Game.rooms[roomName]) return;
        var cores = Game.rooms[roomName].find(FIND_STRUCTURES, {
            filter: (structure) => {
                return structure.structureType == STRUCTURE_INVADER_CORE;
            }
        });
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
        var creep = Game.creeps[creepName];
        if(!cores.length && !hostiles.length && creep) creep.suicide();
        if (!creep && cores.length) {
            autoSpawnCreep(creepName, spawnRoomName, body_against_cores, 'core');
        }
        else if (!creep && hostiles.length) {
            autoSpawnCreep(creepName, spawnRoomName, body_against_hostiles, 'hostiles');
        }
        else if(creep) {
            console.log('Incoming Enemies or Cores In Outpost:' + roomName);
            if(creep.memory.type == 'core') {
                if(creep.attack(cores[0]) == ERR_NOT_IN_RANGE) creep.moveTo(cores[0]);
            }
            if(creep.memory.type == 'hostiles') {
                creep.heal(creep);
                if(creep.rangedAttack(hostiles[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostiles[0]);
                }
            }
        }
    }
}

function autoSpawnCreep(creepName, spawnRoomName, body, memory) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'outpost_defender', type: memory }});
    }
}

function getAvaliableSpawn(room) {
    for (var spawnname in Game.spawns) {
        var spawn = Game.spawns[spawnname];
        if (spawn.room.name == room && spawn.spawning == null) {
            return spawn;
        }
    }
    return null;
}