var transporter = {
    run: function(creep) {
        if(creep.ticksToLive < 200 && creep.store.energy == 0) {creep.suicide();}
        if(creep.memory.transport && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.transport = false;
	    }
	    if(!creep.memory.transport && creep.store.getFreeCapacity() == 0) {
	        creep.memory.transport = true;
        }
	    if(creep.memory.transport) {
            const str = Game.rooms['W22S8'].find(FIND_STRUCTURES, {
                filter: object => {
                    return object.structureType == STRUCTURE_STORAGE &&
                            object.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            //console.log(str[0]);
            if(creep.transfer(str[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
            //console.log(creep.transfer(str[0], RESOURCE_ENERGY));
        }
        else {
            
            var p = creep.memory.s;
            const targets = Game.rooms[p].find(FIND_STRUCTURES, {
                filter: object => {
                    return ((object.structureType == STRUCTURE_CONTAINER && object.id != '5e896838b9e23c0fb2b26d4d') ||
                            (object.structureType == STRUCTURE_TERMINAL && object.store.energy > 0 )) &&
                            object.store.energy > 0;
                }
            });
            targets.sort((a,b) => a.store.energy < b.store.energy);
            if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
            
            /*
            var ss = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store.energy > 0;
                }
            });
            */
        }
	}
};

module.exports = transporter;