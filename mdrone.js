var mdrone = {
    run: function(creep) {

        if(!creep.memory.mdrone && creep.store[RESOURCE_HYDROGEN] == 0) {
            creep.memory.mdrone = true;
        }
        if(creep.memory.mdrone && creep.store.getFreeCapacity() == 0) {
            creep.memory.mdrone = false;
        }
        if(!creep.memory.mdrone) {
            var ss = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_STORAGE &&
                        structure.store.getFreeCapacity() > 0;
                }
            });
            if(creep.transfer(ss, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                creep.moveTo(ss);
            }
        }
        else {
            var p = creep.memory.s;
            if(!creep.pos.inRangeTo(Game.flags[p].pos,0)) creep.moveTo(Game.flags[p]);
            else {
                var mineral = creep.pos.findClosestByPath(FIND_MINERALS);
                if(creep.harvest(mineral) == ERR_NOT_IN_RANGE) {creep.moveTo(mineral,{visualizePathStyle: {stroke: '#ffffff'}});}
            }
        }
    }
};

module.exports = mdrone;