<style>
    :root  /* global */
    {
        --text-color: red;
    }

    h1 
    {
        --my-color: green; /* local */
        color: var(--my-color);
    }

    h2
    {
        color: var(--text-color);
    }
</style>