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
            if(container[0] == undefined){
                var str = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                if(creep.build(str) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(str);
                }
            }
            else{
                if(container[0].hits < container[0].hitsMax){
                    if(creep.repair(container[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container[0]);
                    }
                }
                else{
                    if(creep.transfer(container[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container[0]);
                    }
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