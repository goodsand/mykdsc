var R = { 
	Q: function (key) {
	var s = window.location.search.match(new RegExp("[\?\&]" + key + "=([^\&]*)(\&?)", "i"));
	var url=window.location.href;
	var t = url.match(new RegExp("#([^\&]*)(\&?)", "i"));
	return s ? s[1] : t ? t[1] : t;
	}
}
var number=R.Q('d');
var pn="";
var ppn="";

function isqjf1(){
var patt=/50M|100M|200M|300M|400M|500M|600M/g;
result=patt.test(pn);
return result;
}

function getInfo(e) {
if(number){
	ajaxPost('info.php', {
		"number":number,
		}, function (data) {
        if (data.ErrorCode == 0) {
			var result=data.Result;
            $(".owner_name").text(result.name);
			$(".address").text(result.address);
			$(".expiration_date").text(result.exdate);
			$(".broadband_account").text(result.account);
			ppn=result.account;
			$(".package_name").text(result.product);
			pn=result.speed;
			$(".ex_speed").text(result.speed);
			$("#search").css("display","none");
			$("#tpinfo").css("display","block");
        }
    });
}
}


//接口调用方法
function ajaxPost(url, params, callback) {

	var jsonpName = "_jsonp" + Math.random().toString(36).substr(2);
	$.ajax({
		type: "POST",
		url: url,
		contentType: "application/json",
		data: JSON.stringify(params),
		dataType: "jsonp",
		jsonp: 'callback',
		jsonpCallback: jsonpName,
		success: function (data) {
			callback(data);
		},
		error: function (err) {
			console.log('# 请求不成功 #'+err);
		}
	});
}

$(function(){
	getInfo(true);
		$("#btnXu").click(function ()
　　{
			window.location.href="https://a.bjunicom.com.cn/Sv1uu5F6";
	});
		$("#btnUp").click(function ()
　　{
			if(isqjf1())
			{
				window.location.href="xufei.html#"+ppn;
			}else{
				window.location.href="xufei.html";
			}
			
	});
		$("#kdxf").click(function ()
　　{
			window.location.href="https://a.bjunicom.com.cn/Sv1uu5F6";
	});
		$("#xf299").click(function ()
　　{
			window.location.href="xf299.html";
	});
		$("#kdsj").click(function ()
　　{
			window.location.href="xufei.html";
	});
		$("#dqcx").click(function ()
　　{
			window.location.href="search.html";
	});
		$("#ddcx").click(function ()
　　{
			window.location.href="https://a.bjunicom.com.cn/GdR2pE";
	});
});


function xufei_kb(){
 $(".last").each(function(i,item){
	if($(this).css("display")=="block"){
		$(this).css("display","none");
		if(i==$(".last").length-1){
			$(".last").eq(0).css("display","block");
		}else{
			$(".last").eq(i+1).css("display","block");
			
		}
		return false;
	}
  });
}

$(document).ready(function(){
	setInterval("xufei_kb()",5000);
});