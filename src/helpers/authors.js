'use strict'

module.exports = (value, trim = true) => {
  if (value) {
    const contributorCount = String(value).split(',').map((v) => v.trim()).length
    let contributorString = ''
    const maximumDisplayCount = trim ? 3 : contributorCount
    const displayCount = Math.min(maximumDisplayCount, contributorCount)
    for (let i = 0; i < displayCount; i++) {
      contributorString += String(value).split(',').map((v) => v.trim())[i]
      if (i < displayCount - 1) {
        contributorString += ', '
      }
    }
    if (contributorCount > maximumDisplayCount) {
      contributorString += ' and ' + (contributorCount - maximumDisplayCount) + ' more'
    }
    return contributorString
  } else {
    return 'Unknown author'
  }
}
