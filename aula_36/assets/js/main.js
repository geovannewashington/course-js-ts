function myScope() {
    const paragraphs = document.querySelectorAll('.paragraphs p');
    const allBodyStyles = getComputedStyle(document.body);
    const bodyBackGroundColor = allBodyStyles.backgroundColor;
    
    for (const p of paragraphs) {
        p.style.backgroundColor = bodyBackGroundColor;
        p.style.color = '#fff';
    }
}

myScope();


