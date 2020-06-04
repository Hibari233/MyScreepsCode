var attacker_team = {
    run: function(attacker, healer, target, type) {
        if(type == 'MOVE') {
            /*
            if(healer.hits < healer.hitsMax) healer.heal(healer);
            else healer.heal(attacker);
            */
            if(healer.pos.getRangeTo(attacker) == Infinity){
                attacker.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(healer.pos.inRangeTo(attacker, 1) == true && healer.fatigue == 0) {
                attacker.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            healer.moveTo(attacker, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(type == 'ATTACK') {
            var str = creep.room.lookForAt(LOOK_STRUCTURES, Game.flags[target]);
            if(creep.dismantle(str[0]) == ERR_NOT_IN_RANGE) {
                if(healer.pos.inRangeTo(attacker, 1) == true && healer.fatigue == 0) {
                    attacker.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
                }
                healer.moveTo(attacker, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
        }
    }
};

module.exports = attacker_team;