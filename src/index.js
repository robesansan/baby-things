import uniqueRandomArray from 'unique-random-array'
import babyThings from './baby-things.json'

export default {
    all: babyThings,
    random: uniqueRandomArray(babyThings),
}
