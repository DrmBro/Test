function isk(locationid,links,cs,reglink,typeid){

	if (links==reglink) {	
	
		ajax(links+"zxyy.php","POST","v="+locationid,function(data){
	   
		if(data==6) {
			ajax(links+"checkjydl.php","POST","v="+locationid,function(tdata){
 				
				if(tdata!='') {
					layer.open({
						type: 1,
						title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						content: tdata
					});
					
					
				 
				}	
			});
		 } else if (data == 3) {
			alert("您是学员无法预约"); 	
		 }else if (data == 33) {
			alert("您是机构无法预约"); 	
		 } else if (data == 1) {
			alert("您已成功预约该学员"); 	
		 } else if (data == 5) {
			alert("您的资料未审核通过无法预约"); 	
		 }else if (data == 7) {
			alert("异地无法预约"); 	
		 }else if (data == 9) {
			alert("您账号已被屏蔽，无法预约");	
		 }   else if (data == 2) {
			ajax(links+"cgtk.php","POST","v="+locationid,function(tdata){
 				if(tdata!='') {
					layer.open({
						type: 1,
						title: false,
						closeBtn: false,
						 area: ['580px', '465px'],
						shadeClose: true,
						content: tdata
					});
					
					
				 
				}	
			});
		 }
	});	
	}else{
		top.location=reglink + "xbxylist.php?dqid=" +cs+ "&id=" + locationid + "&type=" + typeid + "&lx=1" ;
	}	
	
} 


function tankuangdd(locationid,links){
 	
	$.post(links+"jsfk.php", {v:locationid}, function(str){
		layer.open({
			type: 1,
			title: false,
							closeBtn: true,
							 area: ['455px', '332px'],
							shadeClose: true,
							offset: '140px',
			content: str //注意，如果str是object，那么需要字符拼接。
		});
});
}


function spxfd(locationid,t_id,links){
 	
	$.post(links+"sptipd.php", {v:locationid,vd:t_id}, function(str){
		layer.open({
			type: 1,
			title: false,
							closeBtn: true,
							 area: ['455px', '167px'],
							shadeClose: true,
			content: str //注意，如果str是object，那么需要字符拼接。
		});
});
}


function spxf(locationid,t_id,links){
 	
	$.post(links+"sptip.php", {v:locationid,vd:t_id}, function(str){
		layer.open({
			type: 1,
			title: false,
							closeBtn: true,
							 area: ['455px', '167px'],
							shadeClose: true,
			content: str //注意，如果str是object，那么需要字符拼接。
		});
});
}


function tankuang(links){
 	
	$.post(links+"denglu.php", {}, function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}


function tankuangd(links){
 	
	$.post(links+"denglud.php", {}, function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}

function tankuangt1(links){
 	
	$.post(links+"denglu111.php", {}, function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}

function tankuang1(links,typeid){
 	
	$.post(links+"denglu1.php", {type:typeid}, function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}


function tankuang1a(links){
 	
		ajax(links+"denglu1.php","POST","v=",function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '395px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}


function tankuang111(links){
 	
	ajax(links+"denglu111.php","POST","v=",function(str){
 		
				   layer.open({
 							type: 1,
							title: false,
											closeBtn: true,
											 area: ['445px', '400px'],
											shadeClose: true,
											offset: '0',
							content: str //注意，如果str是object，那么需要字符拼接。
						});
 	 });
	
 	 
}



function tankuang2(links){
 	
	$.post(links+"denglu2.php", {}, function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}

function tankuang3(links){
 	
	$.post(links+"denglu3.php", {}, function(str){
    layer.open({
        type: 1,
		title: false,
						closeBtn: true,
						 area: ['445px', '400px'],
						shadeClose: true,
						offset: '140px',
        content: str //注意，如果str是object，那么需要字符拼接。
    });
});
}
function formCheckd(links,ddid){
	  
	var username=$("input[name='username']").val();	
	if (username=='') {
		alert("用户名不能为空");	
		document.form1d.username.focus();
 		return false;
	}
	var password=$("input[name='password']").val();	
	if (password=='') {
		alert("密码不能为空");	
		document.form1d.password.focus();
		return false;
	}
		 var locationid= username+","+password+","+ddid;
	
		 ajax(links+"1t1regactjsdd.php","POST","v="+locationid,function(str){
 			 
				if (str==1) {
				alert("用户名不能为空");	
			}
			if (str==2) {
				alert("密码不能为空");	
			}
			
			if (str==3) {
				alert("用户名和密码不正确");	
			}
			if (str==8) {
				alert("异地无法查看");	
				location.reload();
 			}
			if (str==4) {
				alert("资料未审核通过无法预约");	
			}
			
			if (str==5) {
				alert("该订单已预约");	
				location.reload();
			}
			
			if (str==9) {
				alert("您账号已被屏蔽，无法预约");	
				location.reload();
			}
			
			
			if (str==6) {
				
				$.post(links+"cgtk.php", {v:ddid}, function(str){
				 layer.closeAll('page');
				layer.open({
						type: 1,
						title: false,
										closeBtn: false,
										 area: ['700px', '492px'],
										shadeClose: true,
						content: str //注意，如果str是object，那么需要字符拼接。
					});
				});
								
 			 
			}
			
			if (str==7) {
				alert("登录成功");	
				location.href =links+"1t1xyhy01.php";	
			}
			});
	
	

}


function jsfk(){
	
	 $("#aaccee").html("提交中");	
 	
 
	var s=document.getElementById("jsmonth");
	if(0 == s.selectedIndex){
		user_jsmonth_status = false;
	}else {
		user_jsmonth_status = true;
	}
	if (!user_jsmonth_status) {
		alert("请选择授课日期");
		 document.reg_formdt.jsmonth.focus();   
		  $("#aaccee").html("<input name=sdf type=image src='http://fuzhou.bcjy123.com/imgs/syaan.jpg' />");	
         return false;
	}
	
	var s=document.getElementById("jsday");
	if(0 == s.selectedIndex){
		user_jsday_status = false;
	}else {
		user_jsday_status = true;
	}
	if (!user_jsday_status) {
		alert("请选择授课日期");
		 document.reg_formdt.jsday.focus();  
		   $("#aaccee").html("<input name=sdf type=image src='http://fuzhou.bcjy123.com/imgs/syaan.jpg' />");	
         return false;
	}
	
	var s=document.getElementById("sksc");
	if(0 == s.selectedIndex){
		user_sksc_status = false;
	}else {
		user_sksc_status = true;
	}
	if (!user_sksc_status) {
		alert("请选择授课时长");
		  $("#aaccee").html("<input name=sdf type=image src='http://fuzhou.bcjy123.com/imgs/syaan.jpg' />");	
		 document.reg_formdt.sksc.focus();   
         return false;
	}
	
}