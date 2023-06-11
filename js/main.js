var test=0,iter=48,iter_up=0,class_super=0;
var val=[
        [1,7,13,19,25,31,37,43],
        [2,8,14,20,26,32,38,44],
        [3,9,15,21,27,33,39,45],
        [4,10,16,22,28,34,40,46],
        [5,11,17,23,29,35,41,47],
        [6,12,18,24,30,36,42,48]
    ];
function aa(){
    if (test==0){
        r=Math.random() * 360;
        console.log("r :"+r);
        randomIndex = Math.round(r);
        console.log("randomIndex :"+randomIndex);
        item=Math.ceil(r/7.5);
        iter=item;
        iter_up=item;
        rer=Math.floor(r/60);
        console.log("item :"+item);
        console.log("rer :"+rer);
        document.getElementsByClassName('in')[1].style.transition="all 10s";
        //document.getElementsByClassName('superClass')[rer].style.color="green";
        if (item){

        }
        var x="rotate("+(randomIndex+(3600))+"deg)";
        var y="rotate("+(randomIndex)+"deg)";
        var ret="rotate("+(360-randomIndex)+"deg)";
        document.getElementsByClassName('in')[0].style.transform+=y;
        document.getElementsByClassName('in')[1].style.transform+=x;
        test++;
        setTimeout(function(){
            document.getElementsByClassName('in')[1].style.transition="all 2s";
            document.getElementsByClassName('in')[1].style.transform+=ret;
            document.getElementsByClassName('in')[0].style.transform+=ret;
            test--;
            iter=item;
            iter_up=item;
            for (i=0;i<=8;i++){
                if (iter>0){
                    document.getElementsByClassName('target-'+iter)[0].style.color="black";
                    if (iter==0) break;
                    iter-=6;
                }
                if (iter_up<=48){
                    document.getElementsByClassName('target-'+iter_up)[0].style.color="black";
                    if (iter==48) break;
                    iter_up+=6;
                }
            }   
            document.getElementsByClassName('item')[class_super].style.background="rgba(255, 255, 255, 0.904)";
            document.getElementsByClassName('number-target')[0].innerHTML="?";

        },15000);
        //console.log("x :"+x);
        //console.log("ret :"+ret);
        setTimeout(function(){
            for (i=0;i<=8;i++){
                if (iter>0){
                    console.log("iter["+iter+"]");
                    document.getElementsByClassName('target-'+iter)[0].style.color="white";
                    class_super=iter;
                    if (iter==0) break;
                    iter-=6;
                }
                if (iter_up<=48){
                    console.log("iter_up["+iter_up+"]");
                    document.getElementsByClassName('target-'+iter_up)[0].style.color="white";
                    if (iter==48) break;
                    iter_up+=6;
                }
            }
            class_super--;
            console.log(class_super);
            document.getElementsByClassName('item')[class_super].style.background="rgba(2, 247, 255, 0.904)";
            document.getElementsByClassName('number-target')[0].innerHTML=item;
        },10500);
    }

}

/*
var test=0;
function aa(){
    if (test==0){
        randomIndex = Math.round(Math.random() * 360);
        console.log(randomIndex);
        item=Math.round(randomIndex/39.25);
        console.log(item);
        document.getElementsByClassName('in')[1].style.transition="all 10s";
        //document.getElementsByClassName('superClass')[item].style.color="green";
        var x="rotate("+(randomIndex+(360*10))+"deg)";
        var ret="rotate("+(360-randomIndex)+"deg)";
        document.getElementsByClassName('in')[1].style.transform+=x;
        console.log(x);
        test++;
        setTimeout(function(){
            document.getElementsByClassName('in')[1].style.transition="all 2s";
            document.getElementsByClassName('in')[1].style.transform+=ret;
            test--;
            document.getElementsByClassName('superClass')[item-1].style.color="black";
        },15000);
        console.log(ret);
    }

}

*/