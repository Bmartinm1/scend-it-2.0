/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Climb, Crag } from '../../models/index.js'

class ClimbSeeder {
  static async seed () {
    const hammond = await Crag.query().findOne({ name: 'Hammond Pond'})
    const rockHouse = await Crag.query().findOne({ name: 'Rock House Reservation'})
    const pway = await Crag.query().findOne({ name: 'Pawtuckaway'})

    const climbsData = [
      {
        name: 'Milkweed',
        grade: 'V2',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'Sit start with hands at the bottom of the diagonally trending flake that is to the left of Monarch Crack. Rather than following the flake to the crack, climb straight up the slab on decent face holds. Height is definitely a factor, and good reach could make this feel a bit easier.',
        notes: 'This is about three feet to the left of the obvious, vertical crack in the center of the wall.',
        safety: 'Crash pad and a spotter.',
        climbType: 'Boulder',
        cragId: hammond.id
      },
      {
        name: 'Monarch Crack',
        grade: 'V0',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'Sit start the obvious, vertical crack in the middle of the Butterfly Wall. Climb straight up using the crack and some of the immediately surrounding face holds. Sticking to just the crack could bump up the difficulty a little. Top out right to avoid the tree growing at the top of the wall.',
        notes: 'This is directly in the center of the Butterfly Wall.',
        safety: 'Crash pad and a spotter.',
        climbType: 'Boulder',
        cragId: hammond.id
      },
      {
        name: 'The Butterfly Effect',
        grade: 'V3',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'This a traverse along a thin, horizontal crack that runs across the right side of the Butterfly Wall. Sit start with your hands on good holds just to the right of the obvious, vertical crack in the middle of the face. Traverse right along the crack as far as possible before topping out with jugs on the far right side of the wall.',
        notes: 'This starts just three feet to the right of the obvious, vertical crack. Traverse across the entire right side of the Butterfly Wall.',
        safety: 'Crash pad and a spotter.',
        climbType: '',
        cragId: hammond.id
      },
      {
        name: 'Glass House',
        grade: 'V5',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'Start with both hands and a heel on on the shelf. Bump the right hand through a series of weird edges until you reach an in-cut edge with a nearby knob for the left hand. Work straight up from there. Look for a bomber foot jib out right to assist with the somewhat sketchy top-out. There is a break in the shelf where it changes angle and becomes covered in moss. The section of the boulder to the left of this break is off. It seems contrived when looking at it but feels more natural when you\'re on the rock.',
        notes: '',
        safety: 'Crash pad and a spotter.',
        climbType: 'Boulder',
        cragId: hammond.id
      },
      {
        name: 'Time To Go!',
        grade: 'V2',
        gradeMod: '',
        dangerRating: 'PG13',
        firstAscent: 'Andrew Hatch',
        beta: 'Ascend the large slab on the left. On the face of Annulment Boulder, start on a crack with decent crimps and a high foot, and slowly work your way up on decent crimps and techy foot work. Top out about 3 feet to the left of the large pocket.',
        notes: 'It ascends a large, slab face on Annulment Boulder to the left of Go To The Corner!',
        safety: 'A fall on this climb can be scary, and it would be a good idea to have at least two pads and a good spotter if you plan on attempting the top-out.',
        climbType: 'Boulder',
        cragId: rockHouse.id
      },
      {
        name: 'Anorexorcist',
        grade: 'V6',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'A fun, short power problem that climbs a bottomless block. Sit start with both hands matched on a sloping jug rail on the bottom right corner. Heel hook next to your hands to pull on and dangle before making a move out to the edges, bump left hand again, then match. Rock up on the heel and around the arete to a crimp (crux) or the lip if you\'re long.',
        notes: 'This boulder is a chunk of the Split Boulder, behind Halcyon and My Little Pony. If facing those problems, walk right about ten feet.',
        safety: 'A pad, maybe two.',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Bones to Bits',
        grade: 'V2',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'One of the very best boulder problems at Pawtuckaway. Don\'t climb too far unless you\'re sure of what you\'re doing. A funky layback/kneebar keeps the \"riff raff\" away at the bottom. A classic squeeze chimney follows which then pinches off at the top. You must then leave the security of the chimney for the crux - a surprisingly awkward scrunch move makes the transition to the mossy slab above. You really wouldn\'t want to pop off here. Relish the summit (like being on the roof of a house!), then consider the options of getting down, possibly via the epic downclimb of a fat chimney on the opposite side.',
        notes: 'Look behind you if you\'re looking at the problems on the backside of the Ride the Lightning Boulder.',
        safety: 'Know how to downclimb. Also a pad or two won\'t hurt.',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Confident Man',
        grade: 'V11',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'Tim Kemple',
        beta: 'This is the very thin line of crimps up the overhanging wall to the left of Halcyon. Start with a sidepull and a very small right handhold and make an exceedingly hard move to a decent edge. Continue with interesting, difficult moves on decent edges to the lip, then top out and follow Halcyon up the slab to the top of the boulder. The crux is the first move, but the rest is no gimme.',
        notes: 'To the left of Halcyon - shares the same finish.',
        safety: 'pads and spotters',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Halcyon',
        grade: 'V11',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'Justin Borque',
        beta: 'One of the proudest lines in the park. Start sitting on an obvious good undercling, then work up to a desperate move way left to a sloping, friction-dependent gaston. Stick this, then make a couple difficult moves on slopers (a couple ways to do this section, possibly with a kneebar) to the lip. Top out, then traverse left on crispy rock and continue up the slab to the top of the boulder.',
        notes: 'On the first large boulder that you come to as you enter Boulder Natural from the Reservation Rd. parking. The climb faces the trail and follows the obvious prow feature.',
        safety: 'Pads & spotters',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Stegosaurus',
        grade: 'V9',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'Although it doesn\'t look like much, this short problem climbs great and is usually dry. Sit start on the left arete with your left hand on the arete, and right hand on a crimp. Pull up and bump out right to the vertical pinch/crimp, work your feet and make a hard match. A strong core, the right foot beta, and use of the thumb catch might make the move feel more realistic. Move right to a slopey rail as a gaston. Use some technique to match the rail and move right to a crimp, before bumping up again with the right hand to a better crimp. Use the sidepull with your left hand to assist in reaching the jugs above. Alternately, from the rail, power up and left into the sidepull/undercling and fire out right for a better hold and the top. The landing can be a bit muddy although the sticks will keep your pad rather clean.',
        notes: 'On a small boulder leaning against the Split Boulder and a tree.',
        safety: 'A pad should do.',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Rio\'s Problem',
        grade: 'V7',
        gradeMod: '+',
        dangerRating: '',
        firstAscent: 'Rio',
        beta: 'Start with a good undercling for your left hand and a big slopey gaston a little lower with your right hand. Make a move with your right hand to a sharp sidepull/crimp strait above you. Next come up to another slopey sidepull/pinch with your left. Work your feet up and make a move to an edge, match, then on to easier finishing moves.',
        notes: 'A little farther to the left of Confident Man right over the stream.',
        safety: 'Just a pad',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Hobbit Hole',
        grade: 'V3',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'The crux of this climb is the beta; work it out for yourself because everyone\'s is different on this thing. The climb is amongst the majority of the boulders in Boulder Natural (an area referred to as Gandalf\'s Lair). It is an obvious up and left slanting lower crack the follows the arete and jugs to the top of the boulder (downclimb route). Lots of climbers find the lower sidepull helpful to use with your left hand to pull the crux move out of the horizontal handcrack.',
        notes: 'You\'ll find it in Gandalf\'s Lair, a.k.a."Boulder Natural" (look for smooth, well-chalked, hand/finger horizontal crack).',
        safety: 'Pads and someone to move em. It\'s relatively low, and you should be fine.',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Hobbit Direct',
        grade: 'V4',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'Levitate off bad holds and pop to big crimp on arete, continue up easier ground on arete and downclimb route. Hard sit start. The start feels like trying to squeeze a hippo between your legs.',
        notes: 'Arete left of Hobbit Hole.',
        safety: 'Just a pad.',
        climbType: 'Boulder',
        cragId: pway.id
      },
      {
        name: 'Power and Grace',
        grade: 'V3',
        gradeMod: '',
        dangerRating: '',
        firstAscent: 'unknown',
        beta: 'A crimpy crux with feet in all the wrong places. The beta varies, but it\'s either techy or a big throw at the crux, plus an easy topout',
        notes: 'On the Mushroom Traverse Boulder across from Another World',
        safety: 'A pad should do it.',
        climbType: 'Boulder',
        cragId: pway.id
      }
      
    ]

    for (const singleClimbData of climbsData) {
      const currentClimb = await Climb.query().findOne(singleClimbData)

      if (!currentClimb) {
        await Climb.query().insert(singleClimbData)
      }
    }
  }
}

export default ClimbSeeder
