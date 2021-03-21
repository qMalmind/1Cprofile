let achievements = document.querySelector('.achievements');
let allAchievements = achievements.querySelectorAll('li');
let desc = document.getElementById('description');

allAchievements.forEach(function (item, i){
    let sizeBody = document.body.clientWidth;


    if(sizeBody > 1430)
    {
        allAchievements[i].addEventListener('mouseover', function () {
            let description = document.createElement('div');

            let title = document.createElement('h4');
            title.style.fontSize = '15px';
            title.style.fontWeight = '600';
            title.textContent = 'Название достижения';

            let content = document.createElement('p');
            content.style.fontSize = '13px';
            content.textContent = 'Описание достижения';

            description.appendChild(title);
            description.appendChild(content);

            description.style.padding = '2px 0 0 5px';
            description.style.width = '250px';
            description.style.height = '100px';
            description.style.backgroundColor = '#2E2E2E';

            description.style.position = 'absolute';
            description.style.transform = 'translate(-90%, -35%)';

            description.style.zIndex = '2';

            description.classList.add('description-achievement');

            allAchievements[i].appendChild(description);
        });


    }else{
        allAchievements[i].addEventListener('mouseover', function () {
            let underDiv = document.createElement('div');
            underDiv.style.width = '100%';
            underDiv.style.height = '50px';
            underDiv.style.marginLeft = '15px';

            let title = document.createElement('h4');
            title.style.fontSize = '25px';
            title.style.fontWeight = '600';
            title.textContent = 'Название достижения';

            let content = document.createElement('p');
            content.style.fontSize = '20px';
            content.textContent = 'Описание достижения';


            underDiv.appendChild(title);
            underDiv.appendChild(content);

            desc.appendChild(underDiv);

            underDiv.classList.add('description-achievement');

        });
    }
    allAchievements[i].addEventListener('mouseout', function () {
        let deleteDescription = document.querySelectorAll('.description-achievement');
        deleteDescription[0].parentNode.removeChild(deleteDescription[0]);
    });
});



