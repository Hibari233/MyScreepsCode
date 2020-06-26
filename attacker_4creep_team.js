
const body = [MOVE];


module.exports = {
    run: function(spawnRoomName, target, type) {
        const creepName_attacker_1 = 'attacker_1_' + spawnRoomName;
        const creepName_attacker_2 = 'attacker_2_' + spawnRoomName;
        const creepName_healer_1 = 'healer_1_' + spawnRoomName;
        const creepName_healer_2 = 'healer_2_' + spawnRoomName;
        var attacker_1 = Game.creeps[creepName_attacker_1];
        var attacker_2 = Game.creeps[creepName_attacker_2];
        var healer_1 = Game.creeps[creepName_healer_1];
        var healer_2 = Game.creeps[creepName_healer_2];

        if (!attacker_1) {autoSpawnCreep(creepName_attacker_1, spawnRoomName);}
        if (!attacker_2) {autoSpawnCreep(creepName_attacker_2, spawnRoomName);}
        if (!healer_1) {autoSpawnCreep(creepName_healer_1, spawnRoomName);}
        if (!healer_2) {autoSpawnCreep(creepName_healer_2, spawnRoomName);}
        
        if(attacker_1 && attacker_2 && healer_1 && healer_2){
            const attacker_1_hp = attacker_1.hits;
            const attacker_2_hp = attacker_2.hits;
            const healer_1_hp = healer_1.hits;
            const healer_2_hp = healer_2.hits;
            const leader = attacker_1;
            
            if(type == 'MOVE') {
                if(leader.pos.getRangeTo(healer_1) == Infinity){
                    attacker_2.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
                    healer_1.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
                    healer_2.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
                }
                if(!leader.fatigue && !attacker_2.fatigue && !healer_1.fatigue && !healer_2.fatigue) {
                    leader.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
                    attacker_2.moveTo(leader.pos.x, leader.pos.y + 1);
                    healer_1.moveTo(leader.pos.x + 1, leader.pos.y);
                    healer_2.moveTo(leader.pos.x + 1, leader.pos.y + 1);
                }
            }
        }
    }
};

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