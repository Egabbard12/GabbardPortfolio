
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.clickable');

    listItems.forEach(span => {
        span.addEventListener('click', () => {
            const targetId = span.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);

                // Toggle the visibility of the target content
                if (targetContent.style.display === 'block') {
                    targetContent.style.display = 'none';
                } else {
                    // Hide any currently visible content
                    document.querySelectorAll('.content').forEach(content => {
                        content.style.display = 'none';
                    });
                    // Show the clicked content
                    targetContent.style.display = 'block';
                }
            });
    })

    
});

