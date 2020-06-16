var charger = {
    run: function(creep) {
        if(creep.ticksToLive < 200) creep_renew(creep);
        if(creep.memory.charge && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.charge = false;
	    }
	    if(!creep.memory.charge && creep.store.getFreeCapacity() == 0) {
	        creep.memory.charge = true;
        }
	    if(creep.memory.charge) {
            const str = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: object => {
                    return (object.structureType == STRUCTURE_TOWER ||
                            object.structureType == STRUCTURE_LAB  ||
                            object.structureType == STRUCTURE_LINK && object.id != '5e8d48bbe1ebfe7eb1a00221') &&
                            object.store.getFreeCapacity(RESOURCE_ENERGY) > 50;
                }
            });
            if(creep.transfer(str, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: object => {
                    return (object.structureType == STRUCTURE_STORAGE)&&
                            object.store.energy > 0;
                }
            });
            
            //targets.sort((a,b) => a.store.energy < b.store.energy);
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

function creep_renew(creep) {
    const spawn = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: structure => {
            return structure.structureType == STRUCTURE_SPAWN && structure.spawning == null;
        }
    });
    if(spawn) {
        if(spawn.renewCreep(creep) == ERR_NOT_IN_RANGE) creep.moveTo(spawn);
    }
}
module.exports = charger;