<style>
    
/* CSS1 */
    .intro	 /*Chọn tất cả các phần tử có class=”intro" */
    #firstname	/*Chọn tất cả các phần tử có id=”firstname” */
    p   /* Chọn tất cả các phần tử  <p> */
    div, p	/* Chọn tất cả các phần tử <div> và phần tử <p> */
    div p	 /* Chọn tất cả các phần tử <p> bên trong phần tử <div> */
    a:active    /*Chọn tất cả các liên kết được kích hoạt */
    p::first-letter	/* Chọn kí tự đầu tiên của phần tử  <p>	*/
    p::first-line	/* Chọn dòng đầu tiên của các phần tử <p> */
    a:hover	/* Chọn các liên kết khi chuột di chuyển qua */
    a:link	/* Chọn tất cả các liên kết khi chưa được click	*/
    a:visited	/* Chọn tất cả các liên kết được truy cập	*/

/* CSS2 */
    * /* Chọn tất cả các phần tử */
    div > p /* Chọn tất cả các phần tử <p> là con trực tiếp phần tử <div> */
    div + p /* Chọn tất cả các phần tử <p> được đặt phía sau phần tử <div> */
    [target] /* Chọn tất cả các phần tử có cùng thuộc tính */
    [target=_blank]	/* Chọn tất cả các phần tử có thuộc tính bằng giá trị( target=”_blank”)	*/
    [title~=flower]	/* Chọn tất cả các phần tử có tiêu đề của thuộc tính có chứa từ “flower” */
    [lang|=en]	/* Chọn tất cả các phần tử có giá trị thuộc tính “lang” bắt đầu bằng “en” */
    :p::after	/* Chèn thêm nội dung ngay phía sau của các phần tử <p>	*/
    p::before	/* Chèn thêm nội dung ngay phía trước của các phần tử <p> */
    p:first-child	/* Chọn các phần tử  <p> có phần tử đầu tiên của phần tử cha chứa nó */
    input:focus	/* Chọn các phần tử <input> nhận focus */
    p:lang(it)	/* Chọn tất cả các phần tử  <p> có giá trị thuộc tính “lang” bằng “it” */

/* CSS3 */
    p ~ ul	/* Chọn tất cả các phần tử <ul> được đặt trước bởi một phần tử  <p> */
    p:empty	 /* Chọn tất cả các phần tử  <p> không chứa phần tử con (bao gồm cả các nút văn bản) */
    a[href^=”https”]	/* Chọn tất cả các phần tử  <a> có giá trị thuộc tính “href” bắt đầu bằng “https” */
    a[href$=".pdf"]	/* Chọn tất cả các phần tử <a> có giá trị thuộc tính “href” kết thúc bằng ".pdf"	*/
    a[href*=”timoday”]	/*Chọn tất cả các phần tử <a> có giá trị thuộc tính “href” chứa chuỗi ”timoday”	*/
    input:checked	/* Chọn tất cả các phần tử <input> đang được chọn (selected) */
    input:disabled	/* Chọn tất cả các phần tử <input> đang được vô hiệu hoá (disabled)	*/
    input:enabled	/* Chọn tất cả các phần tử <input> đang được kích hoạt */
    p:first-of-type	 /* Chọn tất cả các phần tử <p> có phần tử đầu tiên <p> là phần tử cha	*/
    input:in-range	/* Chọn phần tử <input> có giá trị  trong phạm vi nhất định	*/
    input:valid	 /* Chọn tất cả các phần tử đầu vào có một giá trị hợp lệ	*/
    input:invalid	/* Chọn tất cả các phần tử <input> có giá trị không hợp lệ	*/
    p:last-child	/* Chọn tất cả các phần tử <p> là phần tử con cuối cùng của phần tử cha	*/
    p:last-of-type	/* Chọn tất cả các phần tử <p> là thuộc tính cuối cùng của phần tử cha	*/
    :not(p)	/* Chọn tất cả các phần tử không phải là một phần tử <p> */
    p:nth-child(2)	/* Chọn tất cả các phần tử <p> là phần tử thứ hai của phần tử cha	*/
    p:nth-last-child(2)	 /* Chọn tất cả các phần tử <p> là phần tử con thứ hai của phần tử cha, tính từ phần tử con cuối cùng */
    p:nth-last-of-type(2)	/* Chọn tất cả các phần tử <p>là phần tử thuộc tính thứ hai của phần tử cha, tính từ phần tử thuộc tính con cuối cùng */
    p:nth-of-type(2)	/* Chọn tất cả các phần tử <p> là phần tử thuộc tính con thứ hai của phần tử cha */
    p:only-of-type	/* Chọn tất cả các phần tử <p> là thuộc tính duy nhất của phần tử cha	*/
    p:only-child	/* Chọn tất cả các phần tử <p> là con duy nhất của phần tử cha	*/
    input:optional	/* Chọn tất cả các phần tử đầu vào không có thuộc tính “required”	*/
    input:out-of-range	/* Chọn tất cả các phần tử đầu vào có giá trị ngoài một phạm vi nhất định */
    input:read-only	 /* Chọn tất cả các phần tử đầu vào có thuộc tính xác định “readonly” */
    input:read-write	/* Chọn tất cả các phần tử đầu vào có thuộc tính không xác định “readonly”	*/
    input:required	/*Chọn tất cả các phần tử đầu vào có thuộc tính  “required” xác định */
    :root	/*Chọn các phần tử gốc của văn bản	*/
    ::selection	/*Chọn các phần tử được người dùng tô đen	*/
    #news:target	/* Chọn các phần tử đang hoạt động hiện tại (click trong các liên kết  anchor name) */

</style>