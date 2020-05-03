var repairer = {
    run: function(creep) {

        if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	    }
	    if(creep.memory.repairing) {
            var str = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_RAMPART && structure.hits < 1000000;
                }
            });
            //targets.sort((a,b) => a.hits - b.hits);
            //creep.say(str);
            if(str) {
                if(creep.repair(str) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(str);
                }
            }
        }
        else {
            var ss = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_STORAGE &&
                            structure.store.energy > 0;
                }
            });
            if(creep.withdraw(ss, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(ss);
            }
        }
	}
};

module.exports = repairer;