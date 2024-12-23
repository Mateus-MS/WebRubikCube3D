import * as THREE from 'three';
import { getColor } from '../utils/color.js';
import { Piece } from './piece.js';

let positions = [
    [-1, -1, -1],
    [ 0, -1, -1],
    [ 1, -1, -1],
    [-1, -1,  0],
    [ 0, -1,  0],
    [ 1, -1,  0],
    [-1, -1,  1],
    [ 0, -1,  1],
    [ 1, -1,  1],

    [-1,  0, -1],
    [ 0,  0, -1],
    [ 1,  0, -1],
    [-1,  0,  0],
    [ 1,  0,  0],
    [-1,  0,  1],
    [ 0,  0,  1],
    [ 1,  0,  1],
   
    [-1,  1, -1],
    [ 0,  1, -1],
    [ 1,  1, -1],
    [-1,  1,  0],
    [ 0,  1,  0],
    [ 1,  1,  0],
    [-1,  1,  1],
    [ 0,  1,  1],
    [ 1,  1,  1],
]

let colorsDefault = [
    [5, 0, 0, 4, 0, 1],
    [0, 0, 0, 4, 0, 1],
    [0, 0, 6, 4, 0, 1],
    [5, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 6, 0, 0, 1],
    [5, 3, 0, 0, 0, 1],
    [0, 3, 0, 0, 0, 1],
    [0, 3, 6, 0, 0, 1],

    [5, 0, 0, 4, 0, 0],
    [0, 0, 0, 4, 0, 0],
    [0, 0, 6, 4, 0, 0],
    [5, 0, 0, 0, 0, 0],
    [0, 0, 6, 0, 0, 0],
    [5, 3, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 6, 0, 0, 0],
    
    [5, 0, 0, 4, 2, 0],
    [0, 0, 0, 4, 2, 0],
    [0, 0, 6, 4, 2, 0],
    [5, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 6, 0, 2, 0],
    [5, 3, 0, 0, 2, 0],
    [0, 3, 0, 0, 2, 0],
    [0, 3, 6, 0, 2, 0],
]

let colorsF2L = [
    [5, 0, 0, 4, 0, 1],
    [0, 0, 0, 4, 0, 1],
    [0, 0, 6, 4, 0, 1],
    [5, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 6, 0, 0, 1],
    [5, 3, 0, 0, 0, 1],
    [0, 3, 0, 0, 0, 1],
    [0, 3, 6, 0, 0, 1],

    [5, 0, 0, 4, 0, 0],
    [0, 0, 0, 4, 0, 0],
    [0, 0, 6, 4, 0, 0],
    [5, 0, 0, 0, 0, 0],
    [0, 0, 6, 0, 0, 0],
    [5, 3, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 6, 0, 0, 0],
    
    [7, 0, 0, 7, 7, 0],
    [0, 0, 0, 7, 7, 0],
    [0, 0, 7, 7, 7, 0],
    [7, 0, 0, 0, 7, 0],
    [0, 0, 0, 0, 7, 0],
    [0, 0, 7, 0, 7, 0],
    [7, 7, 0, 0, 7, 0],
    [0, 7, 0, 0, 7, 0],
    [0, 7, 7, 0, 7, 0],
]

let colorsOLLandPLL = [
    [7, 0, 0, 7, 0, 7],
    [0, 0, 0, 7, 0, 7],
    [0, 0, 7, 7, 0, 7],
    [7, 0, 0, 0, 0, 7],
    [0, 0, 0, 0, 0, 7],
    [0, 0, 7, 0, 0, 7],
    [7, 7, 0, 0, 0, 7],
    [0, 7, 0, 0, 0, 7],
    [0, 7, 7, 0, 0, 7],

    [7, 0, 0, 7, 0, 0],
    [0, 0, 0, 7, 0, 0],
    [0, 0, 7, 7, 0, 0],
    [7, 0, 0, 0, 0, 0],
    [0, 0, 7, 0, 0, 0],
    [7, 7, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0],
    [0, 7, 7, 0, 0, 0],
    
    [5, 0, 0, 4, 2, 0],
    [0, 0, 0, 4, 2, 0],
    [0, 0, 6, 4, 2, 0],
    [5, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 6, 0, 2, 0],
    [5, 3, 0, 0, 2, 0],
    [0, 3, 0, 0, 2, 0],
    [0, 3, 6, 0, 2, 0],
]

export const cube = new THREE.Group()

function initialieCube(){

    for(let i = 0; i < 26; i++){
        let piece = new Piece(
            positions[i],
            colorsDefault[i]
        )
    
        cube.add(piece.faces)
    }

}
initialieCube()