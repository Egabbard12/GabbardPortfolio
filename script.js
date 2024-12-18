
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('#navlst li');

    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const spanText = this.querySelector('span').innerText;
            alert('You clicked on ' + spanText);
        });
    });
});

