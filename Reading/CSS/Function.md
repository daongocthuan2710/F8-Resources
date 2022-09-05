 <style>
    CSS FUNCIONS
    /* .var() */

    /* .linear-gradient() */
    /* .rgba() */
    /* .rgb() */
    /* .calc() */
        .box{
            --my-width: 120px;
            width: calc(var(--my-width)*2);
        }
    /* .attr() */
        a::after{
            content:" (" attr(href) ")";
        }

</style>