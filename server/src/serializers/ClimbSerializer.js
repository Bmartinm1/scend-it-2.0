class ClimbSerializer {
  static async getSummary(climb) {
    const allowedAttributes = ['id', 'name', 'firstAscent', 'grade', 'gradeMod', 'dangerRating', 'crag', 'beta', 'notes', 'safety', 'climbType']
    const serializedClimb = {}

    for (const attribute of allowedAttributes) {
      serializedClimb[attribute] = climb[attribute]
    }
    return serializedClimb
  }
}

export default ClimbSerializer
