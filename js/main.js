
// Set Toggle Class When User Change Media

toggleBtn();
function toggleBtn()
{
    const navBtn = document.querySelector(".navbar .btn");

    if (window.innerWidth > 768)
    {
        navBtn.classList.add("w-auto");
        navBtn.classList.remove("w-25");
    } else
    {
        navBtn.classList.remove("w-auto");
        navBtn.classList.add("w-25");
    }
};

this.addEventListener("resize", _ =>
{ 
    toggleBtn();
    toggleLinks();
});

// Create Function To Set center Class to links

toggleLinks();
function toggleLinks()
{
    const links = document.querySelectorAll(".nav-link");
    links.forEach(e =>
    {
        if (window.innerHeight > 991)
        {
            e.classList.remove("text-center");
        } else
        {
            e.classList.add("text-center");
        }
    })
}