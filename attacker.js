var attacker = {
    run: function(creep, _target, _type) {
        creep.heal(creep);
        if(_type == 'MOVE') {
            if(!creep.pos.inRangeTo(Game.flags[_target].pos,0)) creep.moveTo(Game.flags[_target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(_type == 'ATTACK') {
            var str = creep.room.lookForAt(LOOK_STRUCTURES, Game.flags[_target]);
            if(creep.rangedAttack(str[0]) == ERR_NOT_IN_RANGE) creep.moveTo(str[0], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(_type == 'GUARD') {
            creep.rangedMassAttack();
            if(!creep.pos.inRangeTo(Game.flags[_target].pos,0)) creep.moveTo(Game.flags[_target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(_type == 'AUTO') {
            var hostile = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            creep.rangedAttack(hostile);
            //creep.moveTo(hostile, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(_type == 'HEAL') {
            var creeplow = creep.room.find(FIND_MY_CREEPS, {
                filter: (creep) => {
                    return creep.hits < creep.hitsMax;
                }
            });
            if(creep.hits < creep.hitsMax) creep.heal(creep);
            else {
                if(creep.heal(creeplow[0]) == ERR_NOT_IN_RANGE) creep.moveTo(creeplow[0]);
            }
        }
    }
};

module.exports = attacker;