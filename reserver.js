

const body = [CLAIM,CLAIM,MOVE,MOVE];


module.exports = {
    run: function (roomName, spawnRoomName) {
        const creepName = 'reserver_' + roomName;
        var creep = Game.creeps[creepName];
        if (!creep) {
            autoSpawnCreep(creepName, spawnRoomName);
        }
        else {
            if(!creep.pos.inRangeTo(new RoomPosition(25, 25, roomName),25)) creep.moveTo(new RoomPosition(25, 25, roomName));
            else {
                if(creep.room.controller) {
                    if(!creep.room.controller.my && creep.room.controller.owner != undefined) {
                        if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    else{
                        if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                }
            }
        }
    }
}

function autoSpawnCreep(creepName, spawnRoomName) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'reserver' }});
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