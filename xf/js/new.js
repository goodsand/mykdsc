	$(function ()
{
	var product_str='{"0":[{"speed":"50M","type":"全家福66套餐","price":"66元/月","price1":"99元/月","store":"￥792元/年","store1":"￥792元/年","desc_phone":"4G卡,免月租，每月5GB全国流量+300分钟全国通话","desc_guhua":"可选，固话月租21.6元/月，通话0.15元/分钟","desc_iptv":"可选，IPTV月租13元/月","sales1":"","sales2":"1年(12个月)","sales3":"","link":"shopId=0508347882&qrcodeId=0508347883"},{"speed":"300M","type":"全家福106套餐","price":"106元/月","price1":"148元/月","store":"￥1272元/年","store1":"￥1272元/年","desc_phone":"4G卡，免月租，每月20GB全国流量+1000分钟全国通话(可加1张副卡，副卡10元/月/张）","desc_guhua":"可选，免固话月租，通话0.15元/分钟","desc_iptv":"可选，IPTV月租13元/月","sales1":"","sales2":"1年(12个月)","sales3":"","link":"shopId=0508347875&qrcodeId=0508347876"},{"speed":"300M","type":"全家福136套餐","price":"136元/月","price1":"159元/月","store":"￥1632元/年","store1":"￥1632元/年","desc_phone":"5G卡,免月租,每月30GB全国流量+1000分钟全国通话(可加2张副卡，副卡10元/月/张）","desc_guhua":"可选，免固话月租，通话0.15元/分钟","desc_iptv":"可选，IPTV月租13元/月","sales1":"预存款1290元","sales2":"1年(12个月)","sales3":"","link":"shopId=0319898120&qrcodeId=0319898121"},{"speed":"500M","type":"全家福166套餐","price":"166元/月","price1":"199元/月","store":"￥1892元/年","store1":"￥1992元/年","desc_phone":"5G卡,免月租,每月40GB全国流量+1500分钟全国通话(可加3张副卡，副卡10元/月/张）","desc_guhua":"可选，免固话月租，通话300分钟/月","desc_iptv":"可选，IPTV月租13元/月","sales1":"立减100元","sales2":"1年(12个月)","sales3":"","link":"shopId=0508347470&qrcodeId=0508347471"},{"speed":"500M","type":"全家福239套餐","price":"239元/月","price1":"299元/月","store":"￥2768元/年","store1":"￥2868元/年","desc_phone":"5G卡,免月租,每月60GB全国流量+3000分钟全国通话(可加4张副卡，副卡10元/月/张）","desc_guhua":"可选，免固话月租，通话300分钟/月","desc_iptv":"可选，IPTV月租13元/月","sales1":"立减100元","sales2":"1年(12个月)","sales3":"","link":"shopId=0508347482&qrcodeId=0508347483"},{"speed":"1000M","type":"全家福299套餐","price":"299元/月","price1":"399元/月","store":"￥3288元/年","store1":"￥3588元/年","desc_phone":"5G卡,免月租,每月60GB全国流量+3000分钟全国通话(可加4张副卡，副卡10元/月/张）","desc_guhua":"可选，免固话月租，通话300分钟/月","desc_iptv":"可选，首部IPTV免月租","sales1":"立减200元","sales2":"1年(12个月)","sales3":"","link":"shopId=0508347494&qrcodeId=0508347495"}]}';
	var product=JSON.parse(product_str);
	var selectid=0;
	var stype=0;
	var baseurl='http://bjwys.bjunicom.com.cn/apps/shareapps/pub-page/mixWoFamily/shopInfoShowFamily.html?';
	var info={"name":"","card":""};
	var issearch=false;
	
	for(var i=0;i<product[stype].length;i++){
		$(".meal-content").append('<li class="tcDiv midbg"><span class="speed-no">'+product[stype][i].speed+'</span><span class="speed-no no-top">'+product[stype][i].type+'</span><span class="prePrice"><span class="price-text">【'+product[stype][i].price+'】 </span></span></li>');
	}

　　$(".meal-content li").click(function ()
　　{
　　　　$(this).addClass("check_on").siblings().removeClass("check_on");
　　　　var index = $(this).index();
		selectid = index;
　　　　$(this).parent().siblings().children().eq(index).addClass("check_on").siblings().removeClass("check_on");

		$("#speed").text(product[stype][index].speed);
		$("#desc_phone").text(product[stype][index].desc_phone);
		$("#desc_guhua").text(product[stype][index].desc_guhua);
		$("#desc_iptv").text(product[stype][index].desc_iptv);
		$("#sales2").text(product[stype][index].sales2);
		$("#sales").text(product[stype][index].sales);
		$("#store").text(product[stype][index].store);
		$("#store1").text(product[stype][index].store1);
		$("#price1").text(product[stype][index].price1);
		$("#price").text("优惠后"+product[stype][index].price);
		if(product[stype][index].price=="299元/月"){
			$("#hd").text("1000M宽带送20000mAh充电宝，更多详情请添加企业微信咨询（加30元/月再得第二条500M宽带）");
		}else{
			$("#hd").text("1000M宽带送20000mAh充电宝，更多详情请添加企业微信咨询");
		}
　　});
$(".meal-content").children().eq(4).click();
$(".buy").click(function ()
　　{
		top.location=baseurl+product[stype][selectid].link;
　　});
$("#help").click(function ()
　　{
	if($("#helper").css("display")=="none"){
		$("#helper").attr('src', 'img/zhuang.png');
		$("#helper").css("display","block");
	}else{
		$("#helper").css("display","none");
	}
　　});

})