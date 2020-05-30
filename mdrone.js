var mdrone = {
    run: function(creep) {
        
        if(creep.ticksToLive < 200 && creep.store.getUsedCapacity() == 0) {creep.suicide();}
        
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
            for(var name of RESOURCES_ALL) {
                    if(creep.store.getUsedCapacity(name) > 0) {
                        if(creep.transfer(ss,name) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(ss, {visualizePathStyle: {stroke: '#ffffff', opacity: .1, reusePath: 50}});
                        }
                    }
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