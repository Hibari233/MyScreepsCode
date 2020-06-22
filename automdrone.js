

const body = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK];


module.exports = {
    run: function (roomName) {
        var room = Game.rooms[roomName];
        var mineral = Game.rooms[roomName].find(FIND_MINERALS);
        const creepName = 'mdrone_' + roomName;
        var creep = Game.creeps[creepName];
        if (!creep) {
            autoSpawnCreep(creepName, roomName);
        }
        else {
            
        }
    }
}

function autoSpawnCreep(creepName, roomName) {
    var spawn = getAvaliableSpawn(roomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'mdrone' }});
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