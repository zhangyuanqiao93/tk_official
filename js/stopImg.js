/**
 * Created by TKKJ on 17/5/19.
 */
//禁止图片拖动
!function(){
    function imgdragstart(){
        return false;
    }
    //for...in 语句用于对数组或者对象的属性进行循环操作。
 /*   for (变量 in 对象)
    {
        在此执行代码
    }*/
    for(i in document.images)
        document.images[i].ondragstart=imgdragstart;
}();
