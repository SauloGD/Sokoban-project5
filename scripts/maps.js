const levels = {

  level1: {
    row: 10,
    colm: 10,
    personaje: { x: 4, y: 2, dir: 6 },
    tp: {},
    cajas: [
      { x: 5, y: 7, dir: 0 },
    ],
  
    stone: [
      { x: 8, y: 3 },
    ],
  
    gemas: [
      { x: 1, y: 8 },
    ],
  },
  
  level2: {
    row: 10,
    colm: 10,
    personaje: { x: 4, y: 2, dir: 6 },
    tp: { x: 0, y: 3, xtp: 9, ytp: 7 },
    cajas: [
      { x: 5, y: 7, dir: 0 },
    ],
  
    stone: [
      { x: 8, y: 3 },
    ],
  
    gemas: [
      { x: 1, y: 8 },
    ],
  },
  
  level3: {
    row: 10,
    colm: 10,
    personaje: { x: 5, y: 4, dir: 6 },
    tp: {},
    cajas: [
      { x: 3, y: 5, dir: 0 },
      { x: 7, y: 7, dir: 0 },
      { x: 2, y: 3, dir: 0 }
    ],
    stone: [
      { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 },
      { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
      { x: 0, y: 7 }, { x: 0, y: 8 }, { x: 0, y: 9 },

      { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 5 },
      { x: 1, y: 7 }, { x: 1, y: 8 }, { x: 1, y: 9 },

      { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 5 },
      { x: 2, y: 7 }, { x: 2, y: 8 }, { x: 2, y: 9 },

      { x: 3, y: 0 }, { x: 3, y: 9 },

      { x: 4, y: 0 }, { x: 4, y: 9 },

      { x: 5, y: 0 }, { x: 5, y: 5 }, { x: 5, y: 6 },
      { x: 5, y: 7 }, { x: 5, y: 8 }, { x: 5, y: 9 },

      { x: 6, y: 0 }, { x: 6, y: 5 },
      { x: 6, y: 9 },

      { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 9 },

      { x: 8, y: 0 }, { x: 8, y: 1 }, { x: 8, y: 5 },
      { x: 8, y: 9 },

      { x: 9, y: 0 }, { x: 9, y: 1 }, { x: 9, y: 2 },
      { x: 9, y: 3 }, { x: 9, y: 5 }, { x: 9, y: 6 },
      { x: 9, y: 7 }, { x: 9, y: 8 }, { x: 9, y: 9 }],
      
      gemas: [
        { x: 0, y: 6 },
        { x: 3, y: 1 },
        { x: 4, y: 7 },
      ]
    },
    
   /* level4: {
      row: 15,
      colm: 15,
      tp: {
  
      },
      personaje: { x: 5, y: 4, dir: 6 },
      cajas: [
        { x: 3, y: 3, dir: 0 },
        { x: 3, y: 4, dir: 0 },
        { x: 3, y: 5, dir: 0 },
        { x: 3, y: 6, dir: 0 }
      ],
      stone: [
        //perímetro
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 6, y: 0 },
        { x: 7, y: 0 },
        { x: 8, y: 0 },
        { x: 9, y: 0 },
        { x: 10, y: 0 },
        { x: 11, y: 0 },
        { x: 12, y: 0 },
        { x: 13, y: 0 },
        { x: 14, y: 0 },
  
        { x: 14, y: 1 },
        { x: 14, y: 2 },
        { x: 14, y: 3 },
        { x: 14, y: 4 },
        { x: 14, y: 5 },
        { x: 14, y: 6 },
        { x: 14, y: 7 },
        { x: 14, y: 8 },
        { x: 14, y: 9 },
        { x: 14, y: 10 },
        { x: 14, y: 11 },
        { x: 14, y: 12 },
        { x: 14, y: 13 },
        { x: 14, y: 14 },
  
        { x: 0, y: 14 },
        { x: 1, y: 14 },
        { x: 2, y: 14 },
        { x: 3, y: 14 },
        { x: 4, y: 14 },
        { x: 5, y: 14 },
        { x: 6, y: 14 },
        { x: 7, y: 14 },
        { x: 8, y: 14 },
        { x: 9, y: 14 },
        { x: 10, y: 14 },
        { x: 11, y: 14 },
        { x: 12, y: 14 },
        { x: 13, y: 14 },
        { x: 14, y: 14 },
  
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 0, y: 4 },
        { x: 0, y: 5 },
        { x: 0, y: 6 },
        { x: 0, y: 7 },
        { x: 0, y: 8 },
        { x: 0, y: 9 },
        { x: 0, y: 10 },
        { x: 0, y: 11 },
        { x: 0, y: 12 },
        { x: 0, y: 13 },
        { x: 0, y: 14 },
  
        //interior (oredenadas por filas)
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 5 },
        { x: 1, y: 7 },
        { x: 1, y: 8 },
        { x: 1, y: 9 },
        { x: 2, y: 1 },
        { x: 2, y: 5 },
        { x: 2, y: 8 },
        { x: 2, y: 9 },
        { x: 2, y: 11 },
        { x: 3, y: 9 },
        { x: 3, y: 11 },
        { x: 4, y: 9 },
        { x: 4, y: 11 },
        { x: 5, y: 5 },
        { x: 5, y: 1 },
        { x: 5, y: 6 },
        { x: 5, y: 8 },
        { x: 5, y: 9 },
        { x: 5, y: 11 },
        { x: 6, y: 5 },
        { x: 6, y: 9 },
        { x: 6, y: 11 },
        { x: 7, y: 1 },
        { x: 7, y: 7 },
        { x: 7, y: 9 },
        { x: 7, y: 11 },
        { x: 8, y: 1 },
        { x: 8, y: 5 },
        { x: 8, y: 9 },
        { x: 8, y: 11 },
        { x: 9, y: 1 },
  
        { x: 9, y: 3 },
        { x: 9, y: 5 },
        { x: 9, y: 6 },
        { x: 9, y: 7 },
        { x: 9, y: 8 },
        { x: 9, y: 9 },
        { x: 9, y: 11 },
        { x: 9, y: 13 },
        { x: 10, y: 11 },
        { x: 11, y: 2 },
        { x: 11, y: 4 },
        { x: 11, y: 5 },
        { x: 11, y: 7 },
        { x: 11, y: 11 },
        { x: 13, y: 11 },
      ],
      gemas: [
        { x: 1, y: 13 },
        { x: 5, y: 10 },
        { x: 6, y: 8 },
        { x: 13, y: 2 }
      ]
    },*/

  level4: {
    row: 20,
    colm: 40,
    personaje: { x: 11, y: 2, dir: 6 },
    tp: { x: 3, y: 16, xtp: 5, ytp: 30 },
    cajas: [
      { x: 1, y: 2 }, { x: 1, y: 5 },
      { x: 1, y: 14 }, { x: 1, y: 18 },
      { x: 2, y: 4 },
      { x: 2, y: 6 },
      { x: 5, y: 14 },
      { x: 5, y: 18 },
      { x: 7, y: 2 },
      { x: 8, y: 14 },
      { x: 8, y: 18 },
      { x: 8, y: 23 },
      { x: 8, y: 25 },
      { x: 10, y: 11 },
      { x: 10, y: 23 },
      { x: 10, y: 25 },
      { x: 10, y: 27 },
      { x: 11, y: 10 },
      { x: 14, y: 11 },
      { x: 14, y: 23 },
      { x: 15, y: 3 },
      { x: 16, y: 26 },
      { x: 17, y: 2 },
      { x: 17, y: 3 },
      { x: 17, y: 25 },
      { x: 17, y: 27 },
      { x: 17, y: 28 },
      { x: 18, y: 7 },
      { x: 18, y: 24 },
      { x: 18, y: 28 }
    ],
    gemas: [
      { x: 1, y: 1 },
      { x: 1, y: 13 },
      { x: 1, y: 19 },
      { x: 1, y: 38 },
      { x: 4, y: 1 },
      { x: 5, y: 13 },
      { x: 5, y: 19 },
      { x: 9, y: 25 },
      { x: 11, y: 23 },
      { x: 11, y: 27 },
      { x: 13, y: 16 },
      { x: 14, y: 15 },
      { x: 14, y: 17 },
      { x: 15, y: 1 },
      { x: 15, y: 16 },
      { x: 16, y: 30 },
      { x: 16, y: 31 },
      { x: 17, y: 1 },
      { x: 17, y: 30 },
      { x: 17, y: 34 },
      { x: 18, y: 31 }
    ],
    stone: [
      { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 },
      { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
      { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 },
      { x: 0, y: 9 }, { x: 0, y: 10 }, { x: 0, y: 11 },
      { x: 0, y: 12 }, { x: 0, y: 13 }, { x: 0, y: 14 },
      { x: 0, y: 15 }, { x: 0, y: 16 }, { x: 0, y: 17 },
      { x: 0, y: 18 }, { x: 0, y: 19 }, { x: 0, y: 20 },
      { x: 0, y: 21 }, { x: 0, y: 22 }, { x: 0, y: 23 },
      { x: 0, y: 24 }, { x: 0, y: 25 }, { x: 0, y: 26 },
      { x: 0, y: 27 }, { x: 0, y: 28 }, { x: 0, y: 29 },
      { x: 0, y: 30 }, { x: 0, y: 31 }, { x: 0, y: 32 },
      { x: 0, y: 33 }, { x: 0, y: 34 }, { x: 0, y: 35 },
      { x: 0, y: 36 }, { x: 0, y: 37 }, { x: 0, y: 38 },
      { x: 0, y: 39 },
      { x: 1, y: 0 },
      { x: 1, y: 8 },
      { x: 1, y: 9 },
      { x: 1, y: 10 },
      { x: 1, y: 11 },
      { x: 1, y: 12 },
      { x: 1, y: 20 },
      { x: 1, y: 21 },
      { x: 1, y: 37 },
      { x: 1, y: 39 },
      { x: 2, y: 0 }, { x: 2, y: 8 },
      { x: 2, y: 9 }, { x: 2, y: 10 },
      { x: 2, y: 11 }, { x: 2, y: 12 },
      { x: 2, y: 20 }, { x: 2, y: 21 },
      { x: 2, y: 34 }, { x: 2, y: 35 },
      { x: 2, y: 36 }, { x: 2, y: 37 },
      { x: 2, y: 39 },
      { x: 3, y: 0 }, { x: 3, y: 1 },
      { x: 3, y: 2 }, { x: 3, y: 3 },
      { x: 3, y: 4 }, { x: 3, y: 5 },
      { x: 3, y: 6 }, { x: 3, y: 10 },
      { x: 3, y: 11 }, { x: 3, y: 12 },
      { x: 3, y: 20 }, { x: 3, y: 21 },
      { x: 3, y: 32 }, { x: 3, y: 39 },
      { x: 4, y: 0 },
      { x: 4, y: 7 },
      { x: 4, y: 11 },
      { x: 4, y: 12 },
      { x: 4, y: 20 },
      { x: 4, y: 21 },
      { x: 4, y: 34 },
      { x: 4, y: 36 },
      { x: 4, y: 37 },
      { x: 4, y: 39 },
      { x: 5, y: 0 }, { x: 5, y: 1 },
      { x: 5, y: 2 }, { x: 5, y: 3 },
      { x: 5, y: 5 }, { x: 5, y: 7 },
      { x: 5, y: 12 }, { x: 5, y: 20 },
      { x: 5, y: 21 }, { x: 5, y: 34 },
      { x: 5, y: 36 }, { x: 5, y: 39 },
      { x: 6, y: 0 }, { x: 6, y: 2 },
      { x: 6, y: 3 }, { x: 6, y: 5 },
      { x: 6, y: 7 }, { x: 6, y: 12 },
      { x: 6, y: 13 }, { x: 6, y: 14 },
      { x: 6, y: 15 }, { x: 6, y: 17 },
      { x: 6, y: 18 }, { x: 6, y: 19 },
      { x: 6, y: 20 }, { x: 6, y: 21 },
      { x: 6, y: 33 }, { x: 6, y: 34 },
      { x: 6, y: 36 }, { x: 6, y: 38 },
      { x: 6, y: 39 },
      { x: 7, y: 0 }, { x: 7, y: 5 },
      { x: 7, y: 15 }, { x: 7, y: 17 },
      { x: 7, y: 20 }, { x: 7, y: 21 },
      { x: 7, y: 22 }, { x: 7, y: 23 },
      { x: 7, y: 25 }, { x: 7, y: 31 },
      { x: 7, y: 36 }, { x: 7, y: 38 },
      { x: 7, y: 39 },
      { x: 8, y: 0 }, { x: 8, y: 2 },
      { x: 8, y: 3 }, { x: 8, y: 5 },
      { x: 8, y: 10 }, { x: 8, y: 15 },
      { x: 8, y: 17 }, { x: 8, y: 20 },
      { x: 8, y: 21 }, { x: 8, y: 26 },
      { x: 8, y: 30 }, { x: 8, y: 36 },
      { x: 8, y: 38 }, { x: 8, y: 39 },
      { x: 9, y: 0 }, { x: 9, y: 5 },
      { x: 9, y: 9 }, { x: 9, y: 10 },
      { x: 9, y: 20 }, { x: 9, y: 21 },
      { x: 9, y: 22 }, { x: 9, y: 24 },
      { x: 9, y: 26 }, { x: 9, y: 28 },
      { x: 9, y: 32 }, { x: 9, y: 34 },
      { x: 9, y: 36 }, { x: 9, y: 39 },
      { x: 10, y: 0 }, { x: 10, y: 2 },
      { x: 10, y: 3 }, { x: 10, y: 4 },
      { x: 10, y: 5 }, { x: 10, y: 8 },
      { x: 10, y: 9 }, { x: 10, y: 10 },
      { x: 10, y: 12 }, { x: 10, y: 20 },
      { x: 10, y: 21 }, { x: 10, y: 28 },
      { x: 10, y: 36 }, { x: 10, y: 37 },
      { x: 10, y: 39 },
      { x: 11, y: 0 },
      { x: 11, y: 12 },
      { x: 11, y: 20 },
      { x: 11, y: 21 },
      { x: 11, y: 22 },
      { x: 11, y: 24 },
      { x: 11, y: 28 },
      { x: 11, y: 35 },
      { x: 11, y: 37 },
      { x: 11, y: 39 },
      { x: 12, y: 0 }, { x: 12, y: 1 },
      { x: 12, y: 9 }, { x: 12, y: 10 },
      { x: 12, y: 15 }, { x: 12, y: 17 },
      { x: 12, y: 20 }, { x: 12, y: 21 },
      { x: 12, y: 22 }, { x: 12, y: 23 },
      { x: 12, y: 24 }, { x: 12, y: 25 },
      { x: 12, y: 26 }, { x: 12, y: 27 },
      { x: 12, y: 28 }, { x: 12, y: 37 },
      { x: 12, y: 39 },
      { x: 13, y: 0 }, { x: 13, y: 1 },
      { x: 13, y: 2 }, { x: 13, y: 4 },
      { x: 13, y: 5 }, { x: 13, y: 14 },
      { x: 13, y: 15 }, { x: 13, y: 17 },
      { x: 13, y: 18 }, { x: 13, y: 20 },
      { x: 13, y: 21 }, { x: 13, y: 22 },
      { x: 13, y: 23 }, { x: 13, y: 24 },
      { x: 13, y: 25 }, { x: 13, y: 26 },
      { x: 13, y: 27 }, { x: 13, y: 28 },
      { x: 13, y: 39 },
      { x: 14, y: 0 },
      { x: 14, y: 1 },
      { x: 14, y: 4 },
      { x: 14, y: 5 },
      { x: 14, y: 26 },
      { x: 14, y: 27 },
      { x: 14, y: 28 },
      { x: 14, y: 29 },
      { x: 14, y: 30 },
      { x: 14, y: 31 },
      { x: 14, y: 39 },
      { x: 15, y: 0 }, { x: 15, y: 6 },
      { x: 15, y: 10 }, { x: 15, y: 14 },
      { x: 15, y: 15 }, { x: 15, y: 17 },
      { x: 15, y: 18 }, { x: 15, y: 25 },
      { x: 15, y: 27 }, { x: 15, y: 28 },
      { x: 15, y: 29 }, { x: 15, y: 30 },
      { x: 15, y: 31 }, { x: 15, y: 32 },
      { x: 15, y: 33 }, { x: 15, y: 36 },
      { x: 15, y: 38 }, { x: 15, y: 39 },
      { x: 16, y: 0 }, { x: 16, y: 1 },
      { x: 16, y: 2 }, { x: 16, y: 4 },
      { x: 16, y: 6 }, { x: 16, y: 9 },
      { x: 16, y: 15 }, { x: 16, y: 17 },
      { x: 16, y: 23 }, { x: 16, y: 24 },
      { x: 16, y: 32 }, { x: 16, y: 33 },
      { x: 16, y: 34 }, { x: 16, y: 35 },
      { x: 16, y: 36 }, { x: 16, y: 38 },
      { x: 16, y: 39 },
      { x: 17, y: 0 },
      { x: 17, y: 4 },
      { x: 17, y: 7 },
      { x: 17, y: 8 },
      { x: 17, y: 21 },
      { x: 17, y: 22 },
      { x: 17, y: 31 },
      { x: 17, y: 32 },
      { x: 17, y: 33 },
      { x: 17, y: 39 },
      { x: 18, y: 0 },
      { x: 18, y: 1 },
      { x: 18, y: 2 },
      { x: 18, y: 4 },
      { x: 18, y: 32 },
      { x: 18, y: 33 },
      { x: 18, y: 39 },
      { x: 19, y: 0 }, { x: 19, y: 1 }, { x: 19, y: 2 },
      { x: 19, y: 3 }, { x: 19, y: 4 }, { x: 19, y: 5 },
      { x: 19, y: 6 }, { x: 19, y: 7 }, { x: 19, y: 8 },
      { x: 19, y: 9 }, { x: 19, y: 10 }, { x: 19, y: 11 },
      { x: 19, y: 12 }, { x: 19, y: 13 }, { x: 19, y: 14 },
      { x: 19, y: 15 }, { x: 19, y: 16 }, { x: 19, y: 17 },
      { x: 19, y: 18 }, { x: 19, y: 19 }, { x: 19, y: 20 },
      { x: 19, y: 21 }, { x: 19, y: 22 }, { x: 19, y: 23 },
      { x: 19, y: 24 }, { x: 19, y: 25 }, { x: 19, y: 26 },
      { x: 19, y: 27 }, { x: 19, y: 28 }, { x: 19, y: 29 },
      { x: 19, y: 30 }, { x: 19, y: 31 }, { x: 19, y: 32 },
      { x: 19, y: 33 }, { x: 19, y: 34 }, { x: 19, y: 35 }, { x: 19, y: 38 },
      { x: 19, y: 39 }
    ],
  },
 }
