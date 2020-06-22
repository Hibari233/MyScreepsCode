

const body_against_hostiles = [RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,HEAL];
const body_against_cores = [ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE]

module.exports = {
    run: function (roomName, spawnRoomName) {
        const creepName = 'outpost_defender_' + roomName;
        var cores = Game.rooms[roomName].find(FIND_STRUCTURES, {
            filter: (structure) => {
                return structure.structureType == STRUCTURE_INVADER_CORE;
            }
        });
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
        var creep = Game.creeps[creepName];
        if(!cores[0] && !hostiles[0] && creep) creep.suicide();
        if (!creep && cores[0]) {
            autoSpawnCreep(creepName, spawnRoomName, body_against_cores);
        }
        else if (!creep && hostiles[0]) {
            autoSpawnCreep(creepName, spawnRoomName, body_against_hostiles);
        }
        else {
            if(cores[0] && creep.attack(cores[0]) == ERR_NOT_IN_RANGE) creep.moveTo(cores[0]);
            if(hostiles[0] && creep.rangedAttack(hostiles[0])) { 
                creep.moveTo(hostiles[0]);
                creep.heal(creep);
            }
        }
    }
}

function autoSpawnCreep(creepName, spawnRoomName, body) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'outpost_defender' }});
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