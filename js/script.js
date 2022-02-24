/* global $*/
$(function(){
    // すべての画像ファイル名を保存する配列
    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
    // 何枚目の画像を表示するかを保存するカウンター
    let count = 1;
    
    // 画像をすり替える関数
    const change_image = () => {
    // 画像が1秒間で消える
    $('#effect1 img').animate({'opacity': 0}, 1000, function(){
        // alert('OK');
        $('#effect1 img').prop('src', images[count]);
        $('#effect1 img').animate({'opacity': 1}, 1000);
        // 次の画像へ
        count++;
        // 次の画像が存在しなければ最初の画像に戻る
        if(count === images.length){
            count = 0;
        }
        });
    }
    // 画像をすり替えるアニメーション開始
    setInterval(change_image, 5000);
    
    // 画像のスライドアニメーション
    $('#effect2 img').eq(1).css('margin-left', '-500px');
    $('#effect2 img').eq(2).css('margin-left', '-500px');
    
    // 何枚目の画像をスライドさせるかのカウンター
    let count_slider = 0;
    
    
    // 画像をスライドする関数
  const slider = () => {
    $.when(
        $('#effect2 img').eq(count_slider % 3).animate({'marginLeft': '500px'}, 2000),
        $('#effect2 img').eq((count_slider + 1) % 3).animate({'marginLeft': '0px'}, 2000)
        ).done(function(){
        $('#effect2 img').eq(count_slider % 3).css('margin-left', '-500px');
        count_slider++;
        });
        }
            // 画像のスライドアニメーション開始
    setInterval(slider, 5000);
    
    // テキストアニメーション
    // カウンター
    let sec = 1;
    const text_animation = () => {
        $('p').text('経過秒数: ' + sec + '秒');
        sec++;
    }
    
    // テキストアニメーション開始
    setInterval(text_animation, 1000);
    
    $('.slider').bxSlider({
        auto: true,
        slideWidth: 600,
        mode: 'vertical',
        speed: 5000,
    });
    

});