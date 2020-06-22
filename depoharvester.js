

const body = [WORK,CARRY,MOVE];
//const depoRooms = [W23S10, W24S10];

module.exports = {
    run: function (roomName, depoRooms) {
        const creepName = 'depoHarvester_' + roomName;
        var creep = Game.creeps[creepName];
        const observer = Game.rooms[roomName].observer;
        for (var room in depoRooms) {
            observer.observeRoom(depoRooms[room]);
            const depo = Game.rooms[depoRooms[room]](FIND_DEPOSITS, {
                filter: depo => {
                    return depo.ticksToDecay > 5000;
                }
            });
            if(!depo) {
                Memory.depo.depoRooms[room].depopos
            }
        }
        if (!creep) {
            autoSpawnCreep(creepName, spawnRoomName);
        }
        else {
            
        }
    }
}

function autoSpawnCreep(creepName, spawnRoomName) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'scout' }});
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