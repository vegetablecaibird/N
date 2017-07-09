window.onload=function () {
			window.onscroll=function(){//返回顶部函数
			var btn=document.getElementById("btn");
			var timer=null;
		    var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
		    var cheight=document.documentElement.clientHeight;
			if (scrolltop>=cheight) {
				btn.style.display="block";
			   }else{btn.style.display="none";}
			}
			function sc(){
				var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
						document.documentElement.scrollTop=document.body.scrollTop-=100;	
				if (scrolltop==0) {clearInterval(timer);}
			}
			btn.onclick=function(){
				 timer=setInterval(sc,10)
			}
			
		    // var p=document.getElementById("box5").getElementsByTagName("p")[0];
		    // var img=document.getElementById("box5").getElementsByTagName("img")[0];
		    // img.onmouseover=function(){
		    // 	p.style.transform="translate(900px,0)"
		    // }
		 	var arc=document.getElementsByClassName("arc")[0];
		 	var context=arc.getContext("2d");//化圆
		 	context.fillStyle="#ff8000";
		 	context.beginPath();
		 	context.arc(75,50,25,0,Math.PI*2,true);
		 	context.closePath();
		 	context.fill();
			var can=document.getElementsByClassName("can")[0];
			var con=can.getContext("2d");//化正方形
			con.fillStyle="#ff8000";
			con.fillRect(50,25,25,25);
			var alink= document.getElementById("menu").getElementsByTagName("a");
			for(var i=0;i<alink.length;i++){
				alink[i].onmouseover=function(){
					this.style.background="#ff8000";
					this.style.color="#fff";
				}
				alink[i].onmouseout=function(){
					this.style.background="";
					this.style.color="#ff8000";
				}
			}
		var img1=document.getElementById("box2").getElementsByTagName("img")[0];
		     img1.onmouseover=function(){
			 document.getElementById("box2").getElementsByTagName("p")[0].className="hov";
		};
		   
		// img1.onmouseout=function(){
		//	document.getElementById("box2").getElementsByTagName("p")[0].className="hov";
		//	}
	
			// var tr=document.getElementsByClassName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
			// for(var i=0;i<tr.length;i++){
			// 	tr[i].firstChild.style.color="red";
			// }
			var west=document.getElementById("west");
			var east=document.getElementById("east");
			var dongbu=document.getElementById("dongbu");
			var xibu=document.getElementById("xibu");
			west.onclick=function(){
				dongbu.style.display="none";
				xibu.style.display="block";
			}
			east.onclick=function(){
				xibu.style.display="none";
				dongbu.style.display="block";
			}
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;
            var interval = 3000;
            var timer;
            function animate (offset) {//轮播图函数
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -600 * len + 'px';
                        }
                        if(left<(-600 * len)) {
                            list.style.left = '-600px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {//显示按钮函数
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {//下一张图片
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-600);
                showButton();
            }
            prev.onclick = function () {//上一张
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(600);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -600 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();
        }