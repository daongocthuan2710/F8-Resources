<!-- Các tag cơ bản -->
    div, p , h1, .....
Ngoài ra thì cũng có: bq cho <blockquote>, hdr cho <header>, ftr cho <footer>, btn cho <button>, và sect cho section.

<!-- Classes -->
div.wrapper —> <div class="wrapper"></div>
h1.header.center —> <h1 class="header center"></h1>

<!-- ID’s -->
div#hero —> <div id="hero"></div>

<!-- Ghép chuỗi -->
div#hero.wrapper —> <div id="hero" class="wrapper"></div>

<!-- Attributes – thuộc tính -->
img[src="cat.jpg"][alt="Cute cat pic"] —> <img src="cat.jpg" alt="Cute cat pic" />

<!-- Content – nội dung -->
p{This is a paragraph} —> <p>This is a paragraph</p>

<!-- Siblings & Children -->
section+section —> <section></section><section></section>
ul>li —> <ul><li></li></ul>

<!-- Climbing up -->
div+div>p>span+em^bq

<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>

<!-- Nhóm -->
<!-- Nếu cấu trúc phức tạp thì bạn có thể nhóm thẻ – group tag thay vì dùng climb up. Ví dụ này mình tạo header và footer (không climb) sử dụng ngoặc đơn (). -->

div>(header>ul>li>a)+footer>p
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>


<!-- Phép nhân và ký hiệu $ -->
ul>li*5 —> <ul><li></li><li></li><li></li><li></li><li></li></ul>
ul>li{Item $}*3 —> <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

<!-- Thậm chí bạn có thể customize luôn thứ tự đánh số chứa chữ số 0, bắt đầu với số xác định và có thể đảo ngược lại. -->

Đệm số 0: ul>li.item$$$*5
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>

<!-- Bắt đầu bằng một số xác định: ul>li.item$@3*5 -->
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>

<!-- Đảo hướng từ một số xác định: ul>li.item$@-3*5 -->
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>

<!-- Tag ngầm -->
Có một số thẻ tag không cần type ra mà có thể ngầm hiểu:

Một class lúc đầu không có tag thì sẽ được hiểu là <div>.
.wrapper —> <div class="wrapper"></div>

Class với thẻ emphasis sẽ được hiểu là <span>.
em>.emphasis —> <em><span class="emphasis"></span></em>

Class xác định bên trong list sẽ được hiểu là list item.
ul>.item —> <ul><li class="item"></li></ul>

Class xác định trong table được hiểu là <tr> còn trong row thì là <td>.
table>.row>.col —> <table><tr class="row"><td class="col"></td></tr></table>
