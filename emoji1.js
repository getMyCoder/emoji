(function ($) {
    // html
    function setHtml(Target,imgVal) {
        // 添加表情路径
        var imgObj={};
        for(var a=1;a<=91;a++){
            imgObj.title="";
            imgObj.url=a+".gif";
            imgVal.imgSrc.push(imgObj);
            imgObj={};
        }
        // --------------
        Target.append("<div class='emojiCon'><i><span>&times;</span></i></div>");
        for (var i=0;i<imgVal.imgSrc.length;i++){
            $(".emojiCon").append("<p><img src='"+imgVal.imgUrl+"/"+imgVal.imgSrc[i].url+"' alt='' title='"+imgVal.imgSrc[i].title+"'></p>")
        }
    }
    // 事件
    function setEvent(Target,imgVal) {
        Target.find(".emojiCon p").each(function () {
            $(this).click(function () {
                var nSrc=$(this).find("img").attr("src");
                var nTitle=$(this).find("img").attr("title");
                $(".textareaCon").focus();
                var range = window.getSelection().getRangeAt(0);
                var img=document.createElement("img");
                img.setAttribute("src",nSrc);
                img.setAttribute("title",nTitle);
                range.insertNode(img);
            })
        });
        $("."+imgVal.Div.className).click(function (ev) {
            $(".emojiCon").show();
            ev.stopPropagation()
        });
        $(".emojiCon i span").click(function () {
            $(".emojiCon").hide();
        });
        $(document).click(function (evt) {
            console.log(evt.clientX);
            var evtX=evt.clientX;
            var evtY=evt.clientY;
            var emojiX=$(".emojiCon").offset().left;
            var emojiY=$(".emojiCon").offset().top;
            if (  (evtX<emojiX || evtX>(emojiX+$(".emojiCon").width())) || (evtY<emojiY || evtY>(emojiY+$(".emojiCon").height()))) {
                console.log(1);
                Target.find(".emojiCon").hide()
            }
        })
    }
    $.fn.setEmoji=function (val) {
        var Emoji=$.extend({
            Div:{className:""},
            imgUrl:"img",
            imgSrc:[
                // {title:"微笑",url:"1.gif"},
                // {title:"囧",url:"2.gif"},
                // {title:"开心",url:"3.gif"},
                // {title:"呆",url:"4.gif"},
                // {title:"耍酷",url:"5.gif"},
                // {title:"蔑视",url:"6.gif"},
                // {title:"妩媚",url:"7.gif"},
                // {title:"惊呆",url:"8.gif"},
                // {title:"睡觉",url:"9.gif"},
                // {title:"大哭",url:"10.gif"}
            ]
        },val);
        setHtml(this,Emoji);
        setEvent(this,Emoji)
    }
})(jQuery);