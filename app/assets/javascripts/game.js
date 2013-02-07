enchant();//use enchant.js

var _click_x = 0;
var _click_y = 0;

var _nowResourceNum = 0;
var _playStartTime = -1;//-1:未測定、他：シャッフル開始時間
var _record = 0;
var _complete = false;
var _root_partsimg = "./assets/";
var _root_gifimg = "./assets/fukui/";
var _PUZZLE_BOX_SIZE = 320;


function system_start(_filename, _filetext) {
	//初期設定＆リソース読み込み他
	var game = new Game(_PUZZLE_BOX_SIZE, _PUZZLE_BOX_SIZE);
	game.fps = 15;
	game.preload(_root_gifimg + _filename);
	game.onload = function() {
			//スライドパズルの箱
			var slideBox = new SlideBox(
					game.assets[_root_gifimg+_filename],
					_PUZZLE_BOX_SIZE);
			//メインScene
			var scene = game.rootScene;
			scene.backgroundColor = "white";
			for(var i=0; i<slideBox.pieces.length; i++){	
				scene.addChild(slideBox.pieces[i]);
			}
			
            //ゲーム開始・スライドパズルピース操作
			scene.addEventListener('touchstart', function(e) {

				var result = slideBox.operatePiece(e.clientX, e.clientY);
				$("#test").text("x->"+e.clientX+",y->"+e,clientY);
                if(result === 0) {//完成済みの状態のため、パズルをシャッフルさせる
                    var n = 0;
                    var shufflePuzzle = function() {
                        console.log("shuffle:"+n);
                        slideBox.oneShuffle();
                        n++;
                        if (100 < n) {
                            scene.removeEventListener('enterframe', shufflePuzzle);
                        }
                    };
                    scene.addEventListener('enterframe', shufflePuzzle);
                }
   			
   			
                
                if(slideBox.judgeComplete() && _playStartTime !== -1){
                    _complete = true;
                    _record = (game.frame/game.fps) - _playStartTime;
                    info.text = "Congratulations! "+"Record time : "+getTimeStrings(_record);
                }
   		});

   		
   		scene.addEventListener('enterframe', function() {
   			if(_playStartTime !== -1 && !_complete) {
   				var record = (game.frame/game.fps) - _playStartTime;
   				
   			}
   			if(_playStartTime === -1) {
   				
   			}
   		});
   		
    }


    game.start();
};

function getTimeStrings(sectime) {
	var min = Math.floor(sectime / 60);
   	var sec = Math.floor(sectime - min*60);
   	var msec = Math.floor(sectime*100) - sec*100;
   	var recordstring = 	("0"+min).slice(-2) + " : "+
   				("0"+sec).slice(-2) + " : "+
   				("0"+msec).slice(-2);
   	return recordstring;
};



