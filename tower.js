var tower = {
    run: function(tower) {
        var structures = tower.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_ROAD ||
                        structure.structureType == STRUCTURE_WALL && structure.hits < 100000 ||
                        structure.structureType == STRUCTURE_RAMPART && structure.hits < 100000) &&
                        structure.hits < structure.hitsMax;
                }
        });
        var hostile = tower.room.find(FIND_HOSTILE_CREEPS);
        var power_hostile = tower.room.find(FIND_HOSTILE_POWER_CREEPS);
        hostile.concat(power_hostile);
        var friends = tower.room.find(FIND_MY_CREEPS, {
            filter: (creep) => {
                return creep.hits < creep.hitsMax;
            }
        });
        if(hostile[0]) {
            tower.attack(hostile[0]);
        }
        else{
            tower.heal(friends[0]);
            tower.repair(structures[0]);
        }
	}
};

module.exports = tower;