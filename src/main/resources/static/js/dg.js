 
var EV_MsgBox_ID=""; //��Ҫ     
//�����Ի�����(msgID-Ҫ��ʾ��div��id)   
function EV_modeAlert(msgID){  
    //�������ı�����   
    var bgObj=document.createElement("div");  
    bgObj.setAttribute('id','EV_bgModeAlertDiv');  
    document.body.appendChild(bgObj);  
    //��������������ʾ   
    EV_Show_bgDiv();  
   //��Ҫ��ʾ��div������ʾ   
    EV_MsgBox_ID=msgID;  
    EV_Show_msgDiv();  
	 document.form1d.username.focus(); 
}  
//�رնԻ�����   
function EV_closeAlert(){  
    var msgObj=document.getElementById(EV_MsgBox_ID);  
    var bgObj=document.getElementById("EV_bgModeAlertDiv");  
    msgObj.style.display="none";  
    document.body.removeChild(bgObj);  
    EV_MsgBox_ID="";  
}  
  
//���ڴ�С�ı�ʱ������ʾ��С��λ��   
window.onresize=function(){  
    if (EV_MsgBox_ID.length>0){  
        EV_Show_bgDiv();  
        EV_Show_msgDiv();  
    }  
}  
  
//���ڹ������϶�ʱ������ʾ��С��λ��   
window.onscroll=function(){  
    if (EV_MsgBox_ID.length>0){  
        EV_Show_bgDiv();  
        EV_Show_msgDiv();  
    }  
}  
  
//��Ҫ��ʾ��div������ʾ   
function EV_Show_msgDiv(){  
    var msgObj   = document.getElementById(EV_MsgBox_ID);  
   msgObj.style.display  = "block";  
    var msgWidth = msgObj.scrollWidth;  
    var msgHeight= msgObj.scrollHeight;  
    var bgTop=EV_myScrollTop();  
    var bgLeft=EV_myScrollLeft();  
    var bgWidth=EV_myClientWidth();  
    var bgHeight=EV_myClientHeight();  
   
 

   
   var msgTop=bgTop+Math.round((bgHeight-msgHeight)/2);  
    var msgLeft=bgLeft+Math.round((bgWidth-msgWidth)/2);  
    msgObj.style.position = "absolute";  
    msgObj.style.top      = msgTop+"px";  
    msgObj.style.left     = msgLeft+"px";  
    msgObj.style.zIndex   = "10001";  
      
}  
//��������������ʾ   
function EV_Show_bgDiv(){  
    var bgObj=document.getElementById("EV_bgModeAlertDiv");  
    var bgWidth=EV_myClientWidth();  
    var bgHeight=EV_myClientHeight();  
    var bgTop=EV_myScrollTop();  
    var bgLeft=EV_myScrollLeft();  
    bgObj.style.position   = "absolute";  
 
    bgObj.style.top        = bgTop+"px";  
   bgObj.style.left       = bgLeft+"px";  
    bgObj.style.width      = bgWidth + "px";  
    bgObj.style.height     = bgHeight + "px";  
    bgObj.style.zIndex     = "10000";  
    bgObj.style.background = "#777";  
    bgObj.style.filter     = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60,finishOpacity=60);";  
    bgObj.style.opacity    = "0.6";  
}  
//��ҳ����ȥ���ϸ߶�   
function EV_myScrollTop(){  
    var n=window.pageYOffset   
    || document.documentElement.scrollTop   
    || document.body.scrollTop || 0;  
   return n;  
}  
//��ҳ����ȥ�������   
function EV_myScrollLeft(){  
    var n=window.pageXOffset   
    || document.documentElement.scrollLeft   
    || document.body.scrollLeft || 0;  
    return n;  
}  
//��ҳ�ɼ������   
function EV_myClientWidth(){  
    var n=document.documentElement.clientWidth   
    || document.body.clientWidth || 0;  
    return n;  
}  
//��ҳ�ɼ������   
function EV_myClientHeight(){  
    var n=document.documentElement.clientHeight     
    || document.body.clientHeight || 0;
 
    return n;  
}  
 
function changekm(index){     

if (index==1) {
 document.getElementById('aaa1').style.display = "";
 document.getElementById('aaa2').style.display = "none";
 document.getElementById('aaa3').style.display = "none";
 document.reg_form.kn.value=1; 
}

if (index==2) {
 document.getElementById('aaa1').style.display = "none";
 document.getElementById('aaa2').style.display = "";
  document.getElementById('aaa3').style.display = "none";
  document.reg_form.kn.value=2; 
}
if (index==3) {
  document.getElementById('aaa1').style.display = "none";
 document.getElementById('aaa2').style.display = "none";
  document.getElementById('aaa3').style.display = "";
  document.reg_form.kn.value=3; 
 
}

}


function cz(index)
{     
	switch(index){
		case 1:
		{   
		document.getElementById('iDBody11').style.display = "";
		document.getElementById('iDBody21').style.display = "none";
		document.getElementById('iDBody31').style.display = "none";
		document.getElementById('iDBody41').style.display = "none";
		document.getElementById('iDBody51').style.display = "none";
		break;        
		}
		case 2:
		{   
		document.getElementById('iDBody11').style.display = "none";
		document.getElementById('iDBody21').style.display = "";
		document.getElementById('iDBody31').style.display = "none";
		document.getElementById('iDBody41').style.display = "none";
		document.getElementById('iDBody51').style.display = "none";
		break;        
		}   
		case 3:
		{ 
		document.getElementById('iDBody11').style.display = "none";
		document.getElementById('iDBody21').style.display = "none";
		document.getElementById('iDBody31').style.display = "";
		document.getElementById('iDBody41').style.display = "none";
		document.getElementById('iDBody51').style.display = "none";
		break;      
		}   
		case 4:
		{ 
		document.getElementById('iDBody11').style.display = "none";
		document.getElementById('iDBody21').style.display = "none";
		document.getElementById('iDBody31').style.display = "none";
		document.getElementById('iDBody41').style.display = "";
		document.getElementById('iDBody51').style.display = "none";
		break;      
		}   
		case 5:
		{ 
		document.getElementById('iDBody11').style.display = "none";
		document.getElementById('iDBody21').style.display = "none";
		document.getElementById('iDBody31').style.display = "none";
		document.getElementById('iDBody41').style.display = "none";
		document.getElementById('iDBody51').style.display = "";
		break;      
		}   
	}   
}    
 function changeselect41eeeee(locationid)
	{
	    $("#aaee").html('');
  		var selector=$('<select size=5 id=country style=width:130px;border solid $BBB name=country[]></select>');     
        for (i=0; i<subval51.length; i++)
        { 
			if (subval51[i][0] == locationid)  {
			selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
			}       
		}    
  		$("#aaee").append(selector);
        $("#country").multiSelect();
    }
  
 if (document.reg_form.kn.value==1) {

	function changeselect41(locationid)
	{
	    $("#aaee").html('');
  		var selector=$('<select size=5 id=country style=width:130px;border solid $BBB name=country[]></select>');     
        for (i=0; i<subval51.length; i++)
        { 
			if (subval51[i][0] == locationid)  {
			selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
			}       
		}    
  		$("#aaee").append(selector);
        $("#country").multiSelect();
    }
}

if (document.reg_form.kn.value==2) {
	function changeselect411(locationid)
	{
 	   $("#aaee1").html('');
       var selector=$('<select size=5 id=country1 style=width:130px;border solid $BBB name=country1[]></select>');     
       for (i=0; i<subval51.length; i++)
       { 
			if (subval51[i][0] == locationid)  {
			    selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
			}       
	   }    
       $("#aaee1").append(selector);
       $("#country1").multiSelect();
    }
	function changeselect412(locationid)
	{
      $("#aaee2").html('');
      var selector=$('<select size=5 id=country2 style=width:130px;border solid $BBB name=country2[]></select>');     
      for (i=0; i<subval51.length; i++)
      { 
           if (subval51[i][0] == locationid)  {
              selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
	       }       
      }    
      $("#aaee2").append(selector);
      $("#country2").multiSelect();
    }
}


if (document.reg_form.kn.value==3) {
	function changeselect413(locationid)
	{
       $("#aaee3").html('');
       var selector=$('<select size=5 id=country3 style=width:130px;border solid $BBB name=country3[]></select>');     
       for (i=0; i<subval51.length; i++)
       { 
			if (subval51[i][0] == locationid)  {
			    selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
			}       
	   }    
      $("#aaee3").append(selector);
      $("#country3").multiSelect();
    }
	function changeselect414(locationid)
	{
	    $("#aaee4").html('');
	    var selector=$('<select size=5 id=country4 style=width:130px;border solid $BBB name=country4[]></select>');     
	    for (i=0; i<subval51.length; i++)
	    { 
		  if (subval51[i][0] == locationid)  {
		     selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
		  }       
    	}    
	    $("#aaee4").append(selector);
	    $("#country4").multiSelect();
	}
	function changeselect415(locationid)
	{
	    $("#aaee5").html('');
	    var selector=$('<select size=5 id=country5 style=width:130px;border solid $BBB name=country5[]></select>');     
	    for (i=0; i<subval51.length; i++)
	   { 
		  if (subval51[i][0] == locationid)  {
	     	selector.append('<option value="'+subval51[i][2]+'">'+subval51[i][2]+'</option>');
	 	  }       
	   }    
	   $("#aaee5").append(selector);
	   $("#country5").multiSelect();
	  
	}
	
}




function zxx(index)
{     
	switch(index){
		case 1:
		{   
		document.getElementById('aa').style.display = "";
		document.getElementById('aa1').style.display = "none";
		document.getElementById('aa2').style.display = "none";
		break;        
		}
		case 2:
		{   
		document.getElementById('aa').style.display = "none";
		document.getElementById('aa1').style.display = "";
		document.getElementById('aa2').style.display = "none";
		break;        
		}   
		case 3:
		{ 
		document.getElementById('aa').style.display = "none";
		document.getElementById('aa1').style.display = "none";
		document.getElementById('aa2').style.display = "";
		break;      
		}   
	}   
}    

 function AutoResizeImage(maxWidth, maxHeight, objImg) { 
        var img = new Image(); 
        img.src = objImg.src; 
        var hRatio; 
        var wRatio; 
        var Ratio = 1; 
        var w = img.width; 
        var h = img.height; 
        wRatio = maxWidth / w; 
        hRatio = maxHeight / h; 
        if (maxWidth == 0 && maxHeight == 0) { 
            Ratio = 1; 
        } else if (maxWidth == 0) { // 
            if (hRatio < 1) Ratio = hRatio; 
        } else if (maxHeight == 0) { 
            if (wRatio < 1) Ratio = wRatio; 
        } else if (wRatio < 1 || hRatio < 1) { 
            Ratio = (wRatio <= hRatio ? wRatio : hRatio); 
        } 
        if (Ratio < 1) { 
            w = w * Ratio; 
            h = h * Ratio; 
        } 
        objImg.height = h; 
        objImg.width = w; 
    } 
	
	function showryz(o){

 var o = document.getElementById(o);
   o.style.left='-11px';
      o.style.top='71px';

 o.style.display = "";
}
function hideryz(o){
 var o = document.getElementById(o);
 o.style.display = "none";
}

 