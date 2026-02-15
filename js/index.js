// console.log('English Janala');

const url = `https://openapi.programming-hero.com/api/levels/all`;

const loadLessons = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => showLessons(data.data))
}

const showLessons = (lessons) => {
    // console.log(lessons);
    const lessonsContainer = document.getElementById("lesson-container");
    lessonsContainer.innerHTML = "";

    lessons.forEach(lesson => {
        // console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <Button class="btn btn-outline btn-primary mx-3"><a><i class="fa-solid fa-book-open"></i>Lesson ${lesson.level_no}</a></Button>  
    `;
        lessonsContainer.appendChild(btnDiv);

    });


}
loadLessons();