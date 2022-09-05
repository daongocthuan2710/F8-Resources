<style>

 1. Absolute units?
    .px
    .pt
    .cm
    .mm
    .inch
    .pc


 2. Relative units?
    .% /* depends on the tag containing it */
    .rem  /* depends on the html tag  */
        html {
            font-size: 40px;
        }

        h1 {
            font-size: 1rem;
        }
    .em /* depends on the closest tag containing it having font-size attribute */
        html {
            font-size: 40px;
        }

        div {
            font-size: 50px;
        }

        h1 {
            font-size: 1em; /* getfont-size: 50; */
        }

    .vw /* viewport width */
        .box{
            width: 1vw; /* get 1% viewport */
        }
    .vh /* viewport height */
    .vmax /* viewport max */
    .vmin /* viewport min */
    .ex
    .ch 

</style>

