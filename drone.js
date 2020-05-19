var builder = require('builder');
var drone = {
    run: function(creep) {

        if(!creep.memory.drone && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.drone = true;
	    }
	    if(creep.memory.drone && creep.store.getFreeCapacity() == 0) {
	        creep.memory.drone = false;
        }
	    if(!creep.memory.drone) {
	        var po = creep.memory.s;
	        var container = creep.room.lookForAt(LOOK_STRUCTURES, Game.flags[po]);
	        if(container[0].hits < container[0].hitsMax){
	            if(creep.repair(container[0]) == ERR_NOT_IN_RANGE) {
	                creep.moveTo(container[0]);
	            }
	        }
	        else{
                var ss = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_CONTAINER &&
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                if(creep.transfer(ss, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(ss);
                }
	        }
        }
        else {
            var p = creep.memory.s;
            if(!creep.pos.inRangeTo(Game.flags[p].pos,0)) creep.moveTo(Game.flags[p]);
            else {
                var sources = creep.pos.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {creep.moveTo(sources,{visualizePathStyle: {stroke: '#ffffff'}});}
            }
        }
	}
};

module.exports = drone;