$(document).ready(function () {
	// 全てを見るをクリック時
	$('#more').click(function () {
		var text1 = '全ての目次表示'
		var text2 = '目次を非表示'
		if($('#more a').text() == text1){
			$('#toc ul li').show('blind');
			$('#more a').text(text2);
		}else{
			$('#toc ul li').slideUp('slow');
			$('#more a').text(text1);
		}
		return false;
	});
});

/*
 *目次表示（最大５タイトル）
 */
function showTOC(id){
	var titles = $('#toc ul li'); //タイトルのオブジェクト
	var max_index = titles.length - 1 //最後のタイトルのインデックス番号
	var display = 5; //表示するタイトル数
	var count = Math.floor(display / 2);　//前後のタイトル数
	//現在のタイトルにクラスを追加
	$('#' + id).addClass('active');
	//h2タグを非表示
	$('#toc h2').hide();
	//全タイトル数が表示数分ある場合
	if(titles.length >= display){
		//全タイトルを非表示
		titles.hide();
		//表示するタイトル設定
		var current_index = titles.index($('#' + id));
		var start = current_index - count;
		var end = current_index + count;
		//前にタイトルがない場合
		if(start < 0){
			end = display - 1;
			start = 0;
		}
		//後ろにタイトルがない場合
		if(end > max_index){
			start = max_index - (display - 1);
			end = max_index;
		}
		//指定した目次を表示
		for(var i = start; i <= end; i++){
			var item = titles.eq(i);
			if(item.length > 0) item.show();
		}
	}else{
		//もっと見るボタンを非表示
		$('#more').hide()
	}
}


