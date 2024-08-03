

function showContent(sectionId, element) {
    
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; 

   
    const xhr = new XMLHttpRequest();

   
    xhr.open('GET', `${sectionId}.html`, true);

   
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
           
            contentContainer.innerHTML = xhr.responseText;
        } else {
            
            contentContainer.innerHTML = '<p>Error loading content.</p>';
        }
    };


    xhr.send();


    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });


    element.classList.add('active');
}
