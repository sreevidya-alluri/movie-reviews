let reviewsContainerEl = document.getElementById("reviewsContainer");

let titleEle = document.getElementById("titleInput");
let reviewEle = document.getElementById("reviewTextarea");

function onAddReview() {

    let movieTitle = titleEle.value;
    let movieReview = reviewEle.value;
    if (movieTitle === "") {
        alert("Please the movie title");
        return;
    } else {
        let movieTitleEl = document.createElement("h1");
        movieTitleEl.textContent = "Movie Title: " + movieTitle;
        reviewsContainerEl.appendChild(movieTitleEl);
        let movieReviewEl = document.createElement("p");
        movieReviewEl.textContent = "Review: " + movieReview;
        reviewsContainerEl.appendChild(movieReviewEl);
        let horizontalLineEl = document.createElement("hr");
        reviewsContainerEl.appendChild(horizontalLineEl);
        titleEle.value = "";
        reviewEle.value = "";
    }
}