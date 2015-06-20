$(document).ready(function(){

/** 功能说明：2015.06.15
 *
 * 点击弹出出现登录页面
 * 一些事件处理
 *
 */
    $("#login").on("click",function(){
    	$(".static").show();
    });

    $(".close").on("click",function(){
    	$(".static").hide();
    });


    // submit 接口也写好了, 后端获取参数 model 即可
    $(".nav.nav-tabs.nav-justified.index-input").delegate("li","click",function(e){
    	e.preventDefault();
    	$(this).tab('show');
    	$("#search-text").focus();
    	
    	if( parseInt($(this).val()) ){
	    	$(".form-control").attr("placeholder", "请输入要查询的成分名称");
	    	$("#model").attr("value", "1");
    	}else{
    		$(".form-control").attr("placeholder", "请输入要查询的产品名称");
	    	$("#model").attr("value", "0");
    	}

    });
    
    $(".submit,.input-group-addon").on('click',function(){
    	$(".input-group.index-input").submit();
    });

    $(".after").on('click',function(){
        // 处理
        window.location.href = './compare.html?product=';
    });

});