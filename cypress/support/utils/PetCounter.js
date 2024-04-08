export class PetCounter {
    constructor(pets) {
      this.pets = pets;
    }
  
    countPetNames() {
      const nameCounts = {};
      this.pets.forEach(pet => {
        nameCounts[pet.name] = (nameCounts[pet.name] || 0) + 1;
      });
      return nameCounts;
    }
}
  