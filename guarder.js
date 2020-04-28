var guarder = {
    run: function(creep) {
        var loc = creep.memory.s;
        if(!creep.pos.inRangeTo(Game.flags[loc].pos,25)) creep.moveTo(Game.flags[loc]);
        else {
            var hostile = creep.room.find(FIND_HOSTILE_CREEPS);
            var en = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_INVADER_CORE;
                }
            });
            if(en) {
                if(creep.attack(en) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(en);
                }
            }
            else if(hostile){
                if(creep.attack(hostile[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostile[0]);
                }
            }
        }
	}
};

module.exports = guarder;