var attacker_drone = {
    run: function(creep, _target, _type) {
        //creep.heal(creep);
        if(_type == 'MOVE') {
            if(!creep.pos.inRangeTo(Game.flags[_target].pos,0)) creep.moveTo(Game.flags[_target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(_type == 'ATTACK') {
            var str = creep.room.lookForAt(LOOK_STRUCTURES, Game.flags[_target]);
            if(creep.dismantle(str[0]) == ERR_NOT_IN_RANGE) creep.moveTo(str[0], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
    }
};

module.exports = attacker_drone;