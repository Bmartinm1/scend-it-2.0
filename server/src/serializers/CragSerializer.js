class CragSerializer {
  static getSummary(crag) {
    const allowedAttributes = ['id', 'name', 'state', 'country']
    const serializedCrag = {}

    for (const attribute of allowedAttributes) {
      serializedCrag[attribute] = crag[attribute]
    }

    return serializedCrag
  }

  static async getDetails(crag) {
    const serializedCrag = this.getSummary(crag)
    serializedCrag.climbs = await crag.$relatedQuery('climbs')
    
    return serializedCrag
  }
}

export default CragSerializer
