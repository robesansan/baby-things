import uniqueRandomArray from 'unique-random-array'
import babyThings from './baby-things.json'

const mainExport = {
    all: babyThings,
    random: uniqueRandomArray(babyThings),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility