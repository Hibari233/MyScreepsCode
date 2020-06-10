var transporter = {
    run: function(creep) {
        if(creep.ticksToLive < 150 && creep.store.energy == 0) {creep.suicide();}
        if(creep.memory.transport && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.transport = false;
	    }
	    if(!creep.memory.transport && creep.store.getFreeCapacity() == 0) {
	        creep.memory.transport = true;
        }
	    if(creep.memory.transport) {
            var des = Game.getObjectById(creep.memory.des);
            if(creep.transfer(des, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(des, {visualizePathStyle: {stroke: '#ffffff', reusePath: 100}});
            }
        }
        else {
            var p = creep.memory.s;
            if(Game.rooms[p] == undefined) return;
            const targets = Game.rooms[p].find(FIND_STRUCTURES, {
                filter: object => {
                    return object.structureType == STRUCTURE_CONTAINER &&
                             object.store.energy > 0;
                }
            });
            targets.sort((a,b) => a.store.energy < b.store.energy);
            if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff', reusePath: 100}});
            }
        }
	}
};

module.exports = transporter;