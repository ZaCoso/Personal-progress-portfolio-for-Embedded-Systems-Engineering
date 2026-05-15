import type { RoadmapField } from '../types'

export const roadmapFields: RoadmapField[] = [
  {
    id: 'math',
    name: 'Math',
    summary:
      'This field tracks the mathematical tools I need to reason like an engineer: modeling, abstraction, equations, transformations, probability, and the language behind signals, systems, control, and electronics.',
    goals: [
      'Build the mathematical maturity needed to understand engineering textbooks instead of only memorizing formulas.',
      'Connect calculus, linear algebra, differential equations, probability, and systems math to real electronics problems.',
      'Use mathematics as evidence of analytical discipline and technical depth.',
    ],
    bookCategories: [],
    status: 'In Progress',
    progress: 0,
    accent: 'violet',
  },
  {
    id: 'physics',
    name: 'Physics',
    summary:
      'This field represents the physical intuition behind engineering: energy, fields, motion, waves, materials, and the principles that explain why hardware behaves the way it does.',
    goals: [
      'Strengthen the physics foundation behind circuits, electromagnetics, machines, sensors, and measurement.',
      'Develop intuition for real systems, not only symbolic manipulation.',
      'Prepare the background needed to connect electronics theory with physical behavior.',
    ],
    bookCategories: [],
    status: 'In Progress',
    progress: 0,
    accent: 'blue',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    summary:
      'This field is where I build the electrical foundation I need to understand real hardware: how circuits behave, how signals move, how devices are modeled, how power is converted, and how measurements become engineering evidence.',
    goals: [
      'Show that I can read serious electronics textbooks and turn them into structured technical progress.',
      'Develop the theory needed to analyze circuits, signals, controls, machines, power electronics, and measurement systems.',
      'Prepare myself to explain, design, debug, and validate hardware with engineering discipline.',
    ],
    bookCategories: [
      'Electronics',
      'Signals and Systems',
      'Microelectronics',
      'Control Systems',
      'Power Electronics',
      'Electric Machines',
      'Advanced Control',
      'Estimation Theory',
      'Measurement Systems',
      'Embedded Systems',
    ],
    status: 'In Progress',
    progress: 0,
    accent: 'blue',
  },
  {
    id: 'english',
    name: 'English',
    summary:
      'This field shows English as a professional engineering tool: reading textbooks and datasheets, writing documentation, explaining technical decisions, and communicating clearly in an international context.',
    goals: [
      'Maintain C2-level English as a finished achievement and a working technical skill.',
      'Use English confidently for engineering books, documentation, research, and public portfolio writing.',
      'Show that communication is part of engineering competence, not separate from it.',
    ],
    bookCategories: ['English'],
    status: 'Completed',
    progress: 100,
    accent: 'green',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    summary:
      'This field tracks my long-term Chinese development, with HSK 6 as the current milestone and advanced comprehension as the larger objective.',
    goals: [
      'Prepare for HSK 6 with serious vocabulary, reading, listening, and exam practice.',
      'Develop Chinese as a long-term academic and professional asset.',
      'Show consistency in language learning alongside engineering study.',
    ],
    bookCategories: ['Chinese'],
    status: 'In Progress',
    progress: 0,
    accent: 'violet',
  },
]
