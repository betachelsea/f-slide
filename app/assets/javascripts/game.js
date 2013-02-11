enchant();//use enchant.js

var _click_x = 0;
var _click_y = 0;

//windowサイズ変更時のクリック座標不一致バグへの対策
//読み込み時のenchant_stageの座標を保持
var _init_stage_position;

var _nowResourceNum = 0;
var _playStartTime = -1;//-1:未測定、他：シャッフル開始時間
var _record = 0;
var _complete = false;
var _root_partsimg = "./assets/";
var _root_gifimg = "./assets/fukui/";
var _PUZZLE_BOX_SIZE = 320;

$("#test").text("miow");

function system_start(_filename, _filetext) {
	//初期設定＆リソース読み込み他
    _init_stage_position = $("#enchant-stage").offset();
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
               
                //現在のenchant-stageのクリック位置を正確に取得
                //アクセス後にブラウザサイズを変更されると誤差がでるため。
				var bp = $("#enchant-stage").offset();
                var result = slideBox.operatePiece(
                                e.x + (_init_stage_position.left - bp.left),
                                e.y + (_init_stage_position.top - bp.top));
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



