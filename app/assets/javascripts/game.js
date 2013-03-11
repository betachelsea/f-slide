enchant();//use enchant.js

var _click_x = 0;
var _click_y = 0;

//windowサイズ変更時のクリック座標不一致バグへの対策
//読み込み時のenchant_stageの座標を保持
var _init_stage_position;

var _nowResourceNum = 0;
var _complete = false;
var _root_partsimg = "./assets/";
var _root_gifimg = "./assets/fukui/";
var _PUZZLE_BOX_SIZE = 320;

//シャッフル時の(game.frame/game.fps)の時刻を保持しておく。-1は未測定
var _playStartTime = -1;

$("#test").text("miow");
var _TEST_COMPLETE = false;

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

                if (result === 0) {//完成済みの状態のため、パズルをシャッフルさせる
                    var n = 0;
                    var shufflePuzzle = function() {
                        console.log("shuffle:"+n);
                        slideBox.oneShuffle();
                        n++;
                        if (100 < n) {
                            scene.removeEventListener('enterframe', shufflePuzzle);
                            _playStartTime = game.frame/game.fps;//アプリ読込後からの時刻を保持
                        }
                    };
                    scene.addEventListener('enterframe', shufflePuzzle);
                
                } else if (slideBox.judgeComplete() && _playStartTime !== -1) {
                    _complete = true;
                    
                    $("#timer").html("完成しました！<br/>記録＜"+getTimeStrings((game.frame/game.fps)-_playStartTime)+"＞");
                    console.log("CompTest");
                    $("#doc").show();//説明文表示
                    _playStartTime = -1;//時間リセット
                }
   		});

   	    	
   		scene.addEventListener('enterframe', function() {
   			
            // $("#test").text(game.frame/game.fps);	
            if(_playStartTime !== -1 && !_complete) {
 				var record = (game.frame/game.fps) - _playStartTime;
                $("#timer").text(getTimeStrings((game.frame/game.fps)-_playStartTime));
   			}

   			if(_playStartTime === -1) {
   				
   			}
   		});
   		
    }


    game.start();
};

//秒数を渡すと分、秒に整形して文字列を返す
function getTimeStrings(sectime) {
	var min = Math.floor(sectime / 60);
   	var sec = Math.floor(sectime - min*60);
   	var msec = Math.floor(sectime*100) - sec*100;
   	var recordstring = 	("0"+min).slice(-2) + " : "+
   				("0"+sec).slice(-2) + " : "+
   				("0"+msec).slice(-2);
   	return recordstring;
};



