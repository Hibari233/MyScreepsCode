var builder = require('builder')

const body = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];


module.exports = {
    run: function (roomName, spawnRoomName) {
        const creepName = 'auto_builder_' + roomName;
        var creep = Game.creeps[creepName];
        if (!creep) {
            autoSpawnCreep(creepName, spawnRoomName, body);
        }
        else {
            if(!creep.pos.inRangeTo(new RoomPosition(25, 25, roomName),24)) creep.moveTo(new RoomPosition(25, 25, roomName));
            else{
                builder.run(creep, 'CONTAINER');
            }
        }
    }
}

function autoSpawnCreep(creepName, spawnRoomName, body) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'outpost_builder' }});
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