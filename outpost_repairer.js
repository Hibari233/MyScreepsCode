

const body = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];


module.exports = {
    run: function (roomName, spawnRoomName) {
        const creepName = 'outpost_repairer_' + roomName;
        if(!Game.rooms[roomName]) return;
        var roads = Game.rooms[roomName].find(FIND_STRUCTURES, {
            filter: (structure) => {
                return structure.structureType == STRUCTURE_ROAD && structure.hits <= (structure.hitsMax / 5);
            }
        });
        var creep = Game.creeps[creepName];
        if (!creep && roads[0]) {
            autoSpawnCreep(creepName, spawnRoomName, body);
        }
        else if (creep){
            if(!creep.pos.inRangeTo(new RoomPosition(25, 25, roomName),24)) creep.moveTo(new RoomPosition(25, 25, roomName));
            else{
                if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
                    creep.memory.repairing = false;
                }
                if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
                    creep.memory.repairing = true;
                }
                if(creep.memory.repairing) {
                    var roads_to_repair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax;
                        }
                    });
                    if(roads_to_repair) {
                        if(creep.repair(roads_to_repair) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(roads_to_repair);
                        }
                    }
                }
                else {
                    var source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return structure.structureType == STRUCTURE_CONTAINER &&
                                    structure.store.energy > 0;
                        }
                    });
                    if(creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
        }
    }
}

function autoSpawnCreep(creepName, spawnRoomName, body) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'outpost_repairer' }});
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