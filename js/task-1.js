function slugify(title) {
    const titleLower = title.toLowerCase();
    return titleLower.split(' ').join('-');
}
//Підскажіть,будь-ласка,як краще.Добавити змінну окрему для .split(' '), чи можна .split(' ') добавити в змінну titleLower,чи залишити все як є? Як краще буде читатись? 
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 