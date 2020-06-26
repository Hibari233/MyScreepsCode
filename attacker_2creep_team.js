
const attacker_body = [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
const healer_body = [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];


module.exports = {
    run: function(spawnRoomName, target, type) {
        const creepName_attacker = 'attacker_2creep_' + spawnRoomName;
        const creepName_healer = 'healer_2creep_' + spawnRoomName;
        var attacker = Game.creeps[creepName_attacker];
        var healer = Game.creeps[creepName_healer];
        if (!attacker) {autoSpawnCreep(creepName_attacker, spawnRoomName, attacker_body);}
        if (!healer) {autoSpawnCreep(creepName_healer, spawnRoomName, healer_body);}
        
        if(attacker && healer){
            AutoBoostCreep(attacker);
            AutoBoostCreep(healer);
            const attacker_hp = attacker.hits;
            const healer_hp = healer.hits;
            
            if(attacker_hp < healer_hp) healer.heal(attacker);
            else healer.heal(healer);
            if(type == 'MOVE') {
                if(attacker.pos.getRangeTo(healer) == Infinity){
                    healer.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}, bypassHostileCreeps: false});
                }
                if(attacker.pos.inRangeTo(healer, 1) == true && attacker.fatigue == 0) {
                    healer.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}, bypassHostileCreeps: false});
                }
                attacker.moveTo(healer, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(type == 'ATTACK') {
                //var str = attacker.room.lookForAt(LOOK_STRUCTURES, Game.flags[target]);
                var hostile = Game.getObjectById('5ef3304c7aae9c06b9b3b883');
                if(attacker.rangedAttack(hostile) == ERR_NOT_IN_RANGE) {
                    if(healer.pos.inRangeTo(attacker, 1) == true && healer.fatigue == 0) {
                        attacker.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}, bypassHostileCreeps: false});
                    }
                    healer.moveTo(attacker, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}, bypassHostileCreeps: false});
                }
            }
        }
    }
};

function autoSpawnCreep(creepName, spawnRoomName, body) {
    var spawn = getAvaliableSpawn(spawnRoomName);
    if (spawn) {
        spawn.spawnCreep(body, creepName, {memory: {role: 'attacker_2creep_team' }});
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

function AutoBoostCreep(creep) {
    var labs = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_LAB;
        }
    });
    for (var lab in labs) {
        labs[lab].boostCreep(creep);
    }
}