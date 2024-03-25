
function getInfo(e) {
if(number){
	ajaxPost('searchinfo.php', {
		"number":number,
		}, function (data) {
        if (data.ErrorCode == 0) {
			var result=data.Result;
            $(".owner_name").text(result.name);
			$(".address").text(result.address);
			$(".expiration_date").text(result.exdate);
			$(".broadband_account").text(result.account);
			$(".package_name").text(result.product);
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
	$("#btnXu").click(function ()
　　{
			window.location.href="https://a.bjunicom.com.cn/Dt14Wb7v";
	});

});

