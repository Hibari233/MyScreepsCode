
const body = [RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];


module.exports = {
    run: function(spawnRoomName, target, type) {
        const creepName_attacker = 'attacker_' + spawnRoomName;
        var attacker = Game.creeps[creepName_attacker];

        if (!attacker) {autoSpawnCreep(creepName_attacker, spawnRoomName, body);}
        
        if(attacker){
            const attacker_hp = attacker.hits;
            
            attacker.heal(attacker);
            if(_type == 'MOVE') {
                if(!attacker.pos.inRangeTo(Game.flags[_target].pos,0)) attacker.moveTo(Game.flags[_target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(_type == 'ATTACK') {
                var str = attacker.room.lookForAt(LOOK_STRUCTURES, Game.flags[_target]);
                if(attacker.rangedAttack(str[0]) == ERR_NOT_IN_RANGE) attacker.moveTo(str[0], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(_type == 'GUARD') {
                attacker.rangedMassAttack();
                if(!attacker.pos.inRangeTo(Game.flags[_target].pos,0)) attacker.moveTo(Game.flags[_target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(_type == 'AUTO') {
                var hostile = attacker.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                attacker.rangedAttack(hostile);
                //attacker.moveTo(hostile, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(_type == 'HEAL') {
                var creeplow = attacker.room.find(FIND_MY_CREEPS, {
                    filter: (creep) => {
                        return creep.hits < creep.hitsMax;
                    }
                });
                if(attacker.hits < attacker.hitsMax) attacker.heal(attacker);
                else {
                    if(attacker.heal(creeplow[0]) == ERR_NOT_IN_RANGE) attacker.moveTo(creeplow[0]);
                }
            }
        }
    }
};

function autoSpawnCreep(creepName, spawnRoomName, body) {
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