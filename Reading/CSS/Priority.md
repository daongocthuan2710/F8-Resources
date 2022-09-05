<style>
Priority?
1. Internal, External?
2. Inline - 1000
3. #id - 100
4. Class - 10
5. Tag (thẻ) - 1
6. Equal specificity? 
    /* gọi lặp lại */
    h1#heading-id{

    }

    h1#heading-id.heading-class{

    }


7. Universial selector and inherited?-
    /* CSS chung cho tất cả các thẻ được nhúng file css này */
    * /* -0 */
    {
        color: red;
    }

    html  /* -0 */
    {  
        color: violet;
    }
    
    8. Important - > 1000
    li{
        color: red !important;
    }
    




</style>