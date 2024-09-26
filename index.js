// Code your solution here
const findMatching = (drivers, driver) => {
    return drivers.filter(dri => dri.toLowerCase() == driver.toLowerCase())
}

console.log(findMatching(["John", "Peter", "James"], "peter"));

const fuzzyMatch = (drivers, letters) => {
    let letterLength = letters.length;
    return drivers.filter((dri) => {
        if (dri.slice(0, letterLength) == letters) {
            return dri
        }
     }
    )
}

const matchName = (drivers, driver) => {
    return drivers.filter((dri) => {
        for (let name in dri){
            if (dri[name] === driver) {
                return dri
            }
        }
    })
}
