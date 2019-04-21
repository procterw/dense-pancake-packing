// from https://www2.stetson.edu/~efriedma/cirincir/
export const RELATIVE_PK_RADII = {
  1: 1,
  2: 0.5,
  3: 0.464,
  4: 0.414,
  5: 0.370,
  6: 0.333,
  7: 0.333,
  8: 0.302,
  9: 0.276,
  10: 0.262,
  11: 0.254,
  12: 0.248,
};

export const forceData = {
  1: {
    forces: {
      strong: 1,
      weak: 0,
    },
    nodes: [
      { id: 1 },
    ],
    links: [],
  },

  2: {
    forces: {
      strong: 1,
      weak: 0,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
    ],
    links: [
      { source: 1, target: 2},
    ],
  },

  3: {
    forces: {
      strong: 1,
      weak: 0,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 1 },
    ],
  },

  4: {
    forces: {
      strong: 1.5,
      weak: 1,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 1 },
      { source: 1, target: 3, weak: true },
      { source: 2, target: 4, weak: true },
    ],
  },

  5: {
    forces: {
      strong: 1,
      weak: 0,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },

    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 1 },
    ], 
  },

  6: {
    forces: {
      strong: 1.2,
      weak: 0,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 1 },
    ], 
  },

  7: {
    forces: {
      strong: 1.2,
      weak: 0.6,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 1 },
      { source: 7, target: 1 },
      { source: 7, target: 2 },
      { source: 7, target: 3 },
      { source: 7, target: 4 },
      { source: 7, target: 5 },
      { source: 7, target: 6 },
    ], 
  },

  8: {
    forces: {
      strong: 2,
      weak: 0.8,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 7, target: 1 },

      { source: 8, target: 1, weak: true },
      { source: 8, target: 2, weak: true },
      { source: 8, target: 3, weak: true },
      { source: 8, target: 4, weak: true },
      { source: 8, target: 5, weak: true },
      { source: 8, target: 6, weak: true },
      { source: 8, target: 7, weak: true },
    ], 
  },

  9: {
    forces: {
      strong: 2.2,
      weak: 0.6,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 7, target: 8 },
      { source: 8, target: 1 },

      { source: 9, target: 1, weak: true },
      { source: 9, target: 2, weak: true },
      { source: 9, target: 3, weak: true },
      { source: 9, target: 4, weak: true },
      { source: 9, target: 5, weak: true },
      { source: 9, target: 6, weak: true },
      { source: 9, target: 7, weak: true },
      { source: 9, target: 8, weak: true },
    ], 
  },

  10: {
    forces: {
      strong: 2.2,
      weak: 0.6,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 5, target: 7 },
      { source: 7, target: 8 },
      { source: 8, target: 9 },
      { source: 9, target: 10 },
      { source: 10, target: 1 },
      { source: 1, target: 6 },
      { source: 2, target: 10, weak: true },
    ], 
  },

  11: {
    forces: {
      strong: 2.3,
      weak: 0.3,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 1, target: 4 },
      { source: 1, target: 9 },
      { source: 1, target: 11 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 3, target: 5 },
      { source: 4, target: 5 },
      { source: 4, target: 9 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 7, target: 8 },
      { source: 8, target: 9 },
      { source: 8, target: 10 },
      { source: 9, target: 10 },
      { source: 10, target: 11 },
      { source: 4, target: 7, weak: true },
      { source: 6, target: 9, weak: true },
    ], 
  },

  12: {
    forces: {
      strong: 2.6,
      weak: 1.7,
    },
    nodes: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 7, target: 8 },
      { source: 8, target: 9 },
      { source: 9, target: 10 },
      { source: 10, target: 11 },
      { source: 11, target: 12 },
      { source: 12, target: 1 },

      { source: 1, target: 5 },
      { source: 5, target: 9 },
      { source: 9, target: 1 },

      { source: 2, target: 12, weak: true },
      { source: 4, target: 6, weak: true },
      { source: 8, target: 10, weak: true },

    ], 
  },
};
