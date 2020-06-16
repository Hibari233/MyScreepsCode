var attacker_team = {
    run: function(attacker, healer, target, type) {
        const attacker_hp = attacker.hits;
        const healer_hp = healer.hits;
        if(attacker_hp < healer_hp) healer.heal(attacker);
        else healer.heal(healer);
        if(type == 'MOVE') {
            if(attacker.pos.getRangeTo(healer) == Infinity){
                healer.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            if(attacker.pos.inRangeTo(healer, 1) == true && attacker.fatigue == 0) {
                healer.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
            attacker.moveTo(healer, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
        }
        if(type == 'ATTACK') {
            var str = attacker.room.lookForAt(LOOK_STRUCTURES, Game.flags[target]);
            if(attacker.dismantle(str[0]) == ERR_NOT_IN_RANGE) {
                if(healer.pos.inRangeTo(attacker, 1) == true && healer.fatigue == 0) {
                    attacker.moveTo(Game.flags[target], {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
                }
                healer.moveTo(attacker, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
        }
    }
};

module.exports = attacker_team;