var attacker = {
    run: function(creep, _target, _type) {
        if(_type == 'MOVE') {
            if(!creep.pos.inRangeTo(Game.flags[_target].pos,2)) creep.moveTo(Game.flags[_target]);
        }
        if(_type == 'ATTACK') {
            var str = creep.room.lookForAt(LOOK_STRUCTURES, Game.flags[_target]);
            if(creep.rangedAttack(str[0]) == ERR_NOT_IN_RANGE) creep.moveTo(str[0]);
        }
        if(_type == 'GUARD') {
            creep.rangedMassAttack();
        }
        if(creep.hits < creep.hitsMax) {
            creep.heal(creep);
        }
    }
};

module.exports = attacker;