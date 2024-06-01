
const WIDTH = 1600;
const HEIGHT = 800;
// const WIDTH = 120;
// const HEIGHT = 120;

const NODE_ROWS = HEIGHT/40;
const NODE_ROW_HEIGHT = HEIGHT/NODE_ROWS;
const NODE_COLS = WIDTH/40;
const NODE_COL_WIDTH = WIDTH/NODE_COLS;

const ROWS = NODE_ROWS/2;
const ROW_HEIGHT = HEIGHT/ROWS;
const COLS = NODE_COLS/2;
const COL_WIDTH = WIDTH/COLS;
const BRIGHT_GREEN = 0x00ff00;
const BRIGHT_PINK = 0Xff0080;
const DROP_SIZE = 40;
// const BALL_SIZE = ROW_HEIGHT-(ROW_HEIGHT/8);
const SQUARE_SIZE = NODE_ROW_HEIGHT;
const BLOCK_SIZE = ROW_HEIGHT;
const draw_grid = false;
const auto_turn = true;
const square_mask = [[-1,0],[1,0],[0,-1],[0,1]];
const playerStartCoords =   [2,18];


// Collision categories create the mask in setCollidesWith(cat);
const category_water_drop = 0b0001;
const category_water_bar = 0b0010;
const category_stone = 0b0100;

const NBS_MASK = [[0,-1],[1,0],[0,1],[-1,0]];

const NODE_MASK = [[0,0],[1,0],[1,1],[0,1]];

// turtle class constants

