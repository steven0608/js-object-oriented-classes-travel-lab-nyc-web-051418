
class Driver{
  constructor(name,startDate){
    this.name=name
    this.startDate=new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
  return year - this.startDate.getFullYear()
}
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation=beginningLocation
    this.endingLocation=endingLocation
  }
  blocksTravelled(){
    // debugger;
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return (eastWest.indexOf(this.endingLocation["horizontal"])-eastWest.indexOf(this.beginningLocation["horizontal"]))+(this.endingLocation["vertical"]-this.beginningLocation["vertical"])
    // debugger;
  }
  estimatedTime(peak){
    const blocks=this.blocksTravelled()
    if (peak){
      // debugger;
      return blocks/2
    }
    else {
      return blocks/3
    }
  }
}
