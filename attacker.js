var attacker = {
    run: function(creep, _target, _type) {
        creep.heal(creep);
        if(_type == 'MOVE') {
            if(!creep.pos.inRangeTo(Game.flags[_target].pos,0)) creep.moveTo(Game.flags[_target]);
        }
        if(_type == 'ATTACK') {
            var str = creep.room.lookForAt(LOOK_STRUCTURES, Game.flags[_target]);
            if(creep.rangedAttack(str[0]) == ERR_NOT_IN_RANGE) creep.moveTo(str[0]);
        }
        if(_type == 'GUARD') {
            creep.rangedMassAttack();
            if(!creep.pos.inRangeTo(Game.flags[_target].pos,0)) creep.moveTo(Game.flags[_target]);
        }
    }
};

module.exports = attacker;