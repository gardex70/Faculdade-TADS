let activeIndex = 0;

const articles = document.getElementsByTagName("article");

const handleRightClick = () => {

    const nextIndex = activeIndex + 1 < articles.length ? activeIndex + 1 : 0;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

    currentArticle.dataset.status = "inactive";
    nextArticle.dataset.status = "active";

    activeIndex = nextIndex;

}

const handleLeftClick = () => {

    const nextIndex = activeIndex - 1 < 0 ? articles.length - 1 : activeIndex -1 ;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

    currentArticle.dataset.status = "inactive";
    nextArticle.dataset.status = "active";

    activeIndex = nextIndex;

}