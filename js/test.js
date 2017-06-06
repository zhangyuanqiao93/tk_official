/**
 * Created by TKKJ on 2017/6/6.
 */


/**
 *
 * 运行时加载轮播图片
 */


$(function () {

    var bg_slides =  function () {

        //配置
        var config = {

            //轮播图的尺寸
            height: $('#myCarousel').height,
            width: $('#myCarousel').width,

            //是否自动切换
            autoSwitch: true,
            //自动切换的时间
            interval:6000,
            //图片地址
            picPath:"../image/tk_logo/tk_slide_002.png",

            //轮播图图片信息：图片文件名 / 图片标题 / 图片指向链接
            picInfo : [
                ['tk_slide_002.png', '瞳康改变视界','../image/tk_logo/tk_slide_002.png'],
                ['tk_slide_002.png', '瞳康改变视界','../image/tk_logo/tk_slide_002.png'],
                ['tk_slide_002.png', '瞳康改变视界','../image/tk_logo/tk_slide_002.png']
            ]

        };

        //获取图片信息
        /**
         * @param index  图片所在的索引值
         */
        var getImgInfo =  function(index)  {

            var imgSrc = config.picPath + config.picInfo[index][0],
                imgAlt = config.picInfo[index][3],
                imgUrl = config.picInfo[index][4],
                imgId  = 'slide_' + (index+1).toString(),
                //imgHtml= "";
                imgHtml = '<li id="' + imgId + '">' +
                    '  <a href="' + imgUrl +'" rel="external nofollow" title="' + imgAlt + '" class="pic">' +
                    '    <img src="' + imgSrc + '" alt="' + imgAlt + '" class="slide_thumb" />' +
                    '  </a>' +
                    '</li>',
                slideTextHtml = '<a href="' + imgUrl + '" rel="external nofollow" title="' + imgAlt + '">' + imgAlt+ '</a>';


            return {
                imgAlt:imgAlt,
                imgUrl:imgUrl,
                imgId:imgId,
                imgHtml:imgHtml,
                slideTextHtml:slideTextHtml,
            }




        }(jQuery);
    }
});


$(function(){
    var start=0;
    var loadDom=$(".load>.loadLine");
    var loadWdth=loadDom.css("width");
    var info=setInterval(num,20);
    loadDom.animate({width:"100%"},2000,function(){
        $(".content").slideDown(1000);
        var info1=setInterval(autoImg,1500);
    });
    function num(){
        start=start+1;
        loadDom.text("loading"+(start)+"%");
        console.log(start);
        if(start==100){
            clearInterval(info);
        }
    }
    function autoImg(){
        var ulDom=$("#ulDom");
        var leftNum=parseInt(ulDom.css("left"));
        ulDom.animate({left:leftNum-148+"px"},500,function(){
            var li=ulDom.children()[0];
            li.remove();
            ulDom.append(li);
            ulDom.css("left","0px");
        });
    }
})
