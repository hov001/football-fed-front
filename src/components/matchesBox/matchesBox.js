import './matchesBox.css'
// Matches box data
import nationalMatchesData from '@data/nationalMatchesData.js'
// Matches box class
import MatchesBox from '@model/MatchesBox.js'

const matchesBox = new MatchesBox(nationalMatchesData, ['slide']).render()

export default matchesBox