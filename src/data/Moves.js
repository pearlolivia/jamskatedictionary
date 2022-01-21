import React from 'react';
import glossary from './Glossary';

const moves = [
  {
    id: 1,
    name: 'Arabesque',
    description: '',
    altNames: [],
    letterGroup: 'A',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 2,
    name: 'Barrel Roll',
    description: '',
    altNames: [],
    letterGroup: 'B',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 3,
    name: 'Coffin',
    description: <p>Essentially lying down while skating! While bending down on your <a href={glossary[0]['link']}>{glossary[0]['phrase']}</a>, wrap your other leg behind your knee. Lean away from your bent knee and towards the ground so it appears that you\'re lying down.</p>,
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 4,
    name: 'Compass Spin',
    description: '',
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 5,
    name: 'Corkscrew Spin',
    description: '',
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 6,
    name: 'Crab Walk',
    description: '',
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 7,
    name: 'Crazy Legs',
    description: '',
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 8,
    name: 'Crossovers',
    description: '',
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 9,
    name: 'C-Step',
    description: '',
    altNames: [],
    letterGroup: 'C',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 10,
    name: 'Dip',
    description: <p>An elegant move indeed. As you\'re moving backwards, drag your leg round behind you in a semi-circle. Bend your knees and lean back from maximum effect.</p>,
    altNames: [],
    letterGroup: 'D',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 11,
    name: 'Disco Spin',
    description: <p>Spinning round in a huge circle! While moving forward, put your <a href={glossary[0]['link']}>{glossary[0]['phrase']}</a> forward with your front wheels off the floor. Drag your other leg round towards your first leg and lean into your first leg. You\'ll find yourself spinning around. Going into this move with more speed makes it easier!</p>,
    altNames: [],
    letterGroup: 'D',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 12,
    name: 'Downtown',
    description: <p>A funky stepping move. Put foot 1 in front of foot 2, then step behind foot 2 with foot 1. Repeat going the opposite way.</p>,
    altNames: [],
    letterGroup: 'D',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 13,
    name: 'Dribble',
    description: '',
    altNames: [],
    letterGroup: 'D',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 14,
    name: 'Electric Slide (Sheffield Version)',
    description: '',
    altNames: [],
    letterGroup: 'E',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 15,
    name: 'Four Step',
    description: '',
    altNames: [],
    letterGroup: 'F',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 16,
    name: 'Grapevine',
    description: 'Swivelling on your toes as you move forward. Start with your feet in a V shape, cross your left foot over your right to the back, so it is slightly behind but parallel to your right foot. Step out to the right with your right foot. Your feet should now be in a / \ shape. Step your left foot over your right to the front so that it is slightly in front but parallel to your right foot. Step your right foot back out to make the original V shape \\/ -> // -> /\\ -> \\ -> \\/',
    altNames: [],
    letterGroup: 'G',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 17,
    name: 'Hurricane Kick',
    description: '',
    altNames: [],
    letterGroup: 'H',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 18,
    name: 'Heel Toe Spin',
    description: '',
    altNames: [],
    letterGroup: 'H',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 19,
    name: 'Hez',
    description: '',
    altNames: [],
    letterGroup: 'H',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 20,
    name: 'Inside 3 Turn',
    description: '',
    altNames: [],
    letterGroup: 'I',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 21,
    name: <span>Jump (180&middot;/360&middot;)</span>,
    description: '',
    altNames: [],
    letterGroup: 'J',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 22,
    name: 'Leg Extension',
    description: '',
    altNames: [],
    letterGroup: 'L',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 23,
    name: 'Manuals',
    description: <p>This involves moving on one set of wheels on each foot rather than both. One leg goes in front of the other and you lift up your chosen set of wheels, either your toes or heels. This can have various combinations i.e. lifting both your toes so you\'re travelling on your heels and vice versa, lifting your toes on one foot and your heels on the other.</p>,
    altNames: [],
    letterGroup: 'M',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 24,
    name: 'One Foot Spin',
    description: '',
    altNames: [],
    letterGroup: 'O',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 25,
    name: 'Outside 3 turn',
    description: <p>Starting on your right foot. Curve round slightly to the right. Left arm in front, right arm behind. Bring your left arm round across the front of you, <a href={glossary[2]['link']}>{glossary[2]['phrase']}</a> with your weight slightly on your toes to the right, so that you end up traveling backwards on the same foot. Left arm remains in front and right arm behind. Reverse for a left outside 3 turn.</p>,
    altNames: [],
    letterGroup: 'O',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 26,
    name: 'Shoot The Duck',
    description: <p>Crouch down on your <a href={glossary[0]['link']}>{glossary[0]['phrase']}</a>, non-dominant leg stretched out in front of you (holding your thigh, calf or toe - whichever is easiest). Make sure your bum is below your knees. </p>,
    altNames: [],
    letterGroup: 'S',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 27,
    name: 'Snake Walk',
    description: 'Hiss hiss baby.',
    altNames: [],
    letterGroup: 'S',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 28,
    name: 'Side Surf',
    description: '',
    altNames: [],
    letterGroup: 'S',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 29,
    name: 'Spread Eagle',
    description: '',
    altNames: [],
    letterGroup: 'S',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 30,
    name: 'Strut Walk',
    description: '',
    altNames: [],
    letterGroup: 'S',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 31,
    name: 'Three Turn',
    description: '',
    altNames: [],
    letterGroup: 'T',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 32,
    name: 'Toe Loop',
    description: '',
    altNames: [],
    letterGroup: 'T',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 33,
    name: 'Toe Spin',
    description: '',
    altNames: [],
    letterGroup: 'T',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 34,
    name: 'Transitions',
    description: '',
    altNames: [],
    letterGroup: 'T',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 35,
    name: 'Travelling Turns',
    description: '',
    altNames: [],
    letterGroup: 'T',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 36,
    name: 'Waltz Jump',
    description: <p>Starting on your non-dominant leg, same arm out to the front, opposite arm out to the side. Bring both arms to your chest as you transfer your weight round towards the outside onto your <a href={glossary[0]['link']}>{glossary[0]['phrase']}</a> with a little hop. Bring your arms back out into the same starting position.</p>,
    altNames: [],
    letterGroup: 'W',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
  {
    id: 37,
    name: 'Zero',
    description: 'Sliding from side to side! Push one foot in front then turn to slide in the direction of the forward foot. Do this by lifting your heels on the forward foot so it\'s on it\'s toes, jumping a little, thrusting your weight in the direction of travel. Turn to face forward again. Now put your other foot forward and repeat the slide in the other direction.',
    altNames: [],
    letterGroup: 'Z',
    diagram: '',
    tutorialName: '',
    tutorialLink: ''
  },
]

export default moves;
