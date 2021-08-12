//背景 case 0:
//墙 case 1:
//箱子 case 2:
//球 case 3:
//上 case 4:
//右 case 5:
//下 case 6:
//左 case 7:

const level = new Array();

const level1 = new Array(),
    level2 = new Array();
var blockRow =12, blockNum = 12;

for(var n = 0; n<blockRow; n++){
    level1[n] = new Array();
    level2[n] = new Array();
    for(var i = 0; i<blockNum ; i++){
        level1[n][i] = {x:null,y:null,sign:0,cover:null}
        level2[n][i] = {x:null,y:null,sign:0,cover:null}
    }
}
level1[1][3].sign = 1;
level1[1][4].sign = 1;
level1[1][5].sign = 1;

level1[2][3].sign = 1;
level1[2][4].sign = 3;
level1[2][5].sign = 1;

level1[3][3].sign = 1;
level1[3][4].sign = 0;
level1[3][5].sign = 1;
level1[3][6].sign = 1;
level1[3][7].sign = 1;
level1[3][8].sign = 1;

level1[4][1].sign = 1;
level1[4][2].sign = 1;
level1[4][3].sign = 1;
level1[4][4].sign = 2;
level1[4][5].sign = 0;
level1[4][6].sign = 2;
level1[4][7].sign = 3;
level1[4][8].sign = 1;

level1[5][1].sign = 1;
level1[5][2].sign = 3;
level1[5][3].sign = 0;

// level1[5][2].sign = 3;
// level1[5][3].sign = 3;

level1[5][4].sign = 2;

level1[5][5].sign = 6;
level1[5][6].sign = 1;
level1[5][7].sign = 1;
level1[5][8].sign = 1;

level1[6][1].sign = 1;
level1[6][2].sign = 1;
level1[6][3].sign = 1;
level1[6][4].sign = 1;
level1[6][5].sign = 2;
level1[6][6].sign = 1;

level1[7][4].sign = 1;
level1[7][5].sign = 3;
level1[7][6].sign = 1;

level1[8][4].sign = 1;
level1[8][5].sign = 1;
level1[8][6].sign = 1;





level2[1][1].sign = 1;
level2[1][2].sign = 1;
level2[1][3].sign = 1;
level2[1][4].sign = 1;
level2[1][5].sign = 1;

level2[2][1].sign = 1;
level2[2][2].sign = 6;
level2[2][5].sign = 1;

level2[3][1].sign = 1;
level2[3][3].sign = 2;
level2[3][4].sign = 2;
level2[3][5].sign = 1;
level2[3][7].sign = 1;
level2[3][8].sign = 1;
level2[3][9].sign = 1;

level2[4][1].sign = 1;
level2[4][3].sign = 2;
level2[4][5].sign = 1;
level2[4][7].sign = 1;
level2[4][8].sign = 3;
level2[4][9].sign = 1;

level2[5][1].sign = 1;
level2[5][2].sign = 1;
level2[5][3].sign = 1;
level2[5][5].sign = 1;
level2[5][6].sign = 1;
level2[5][7].sign = 1;
level2[5][8].sign = 3;
level2[5][9].sign = 1;

level2[6][2].sign = 1;
level2[6][3].sign = 1;
level2[6][8].sign = 3;
level2[6][9].sign = 1;


level2[7][2].sign = 1;
level2[7][6].sign = 1;
level2[7][9].sign = 1;


level2[8][2].sign = 1;
level2[8][6].sign = 1;
level2[8][7].sign = 1;
level2[8][8].sign = 1;
level2[8][9].sign = 1;


level2[9][2].sign = 1;
level2[9][3].sign = 1;
level2[9][4].sign = 1;
level2[9][5].sign = 1;
level2[9][6].sign = 1;







level.push(level1,level2)

export default level
