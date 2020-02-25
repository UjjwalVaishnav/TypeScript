import { Student } from './student';
import { School } from './school';

import * as Helpers from './utility';

var school:School[]=[];

document.getElementById('addStudent')!.addEventListener('click', () => {
 const stud:School = new School();
 stud.name = Helpers.getValue('studentname');
 stud.age = Number(Helpers.getValue('age'));
stud.class=Number(Helpers.getValue('class'));
stud.favSubject = Helpers.getValue('favSubject');
stud.schoolName=Helpers.getValue('schoolName');
school.push(stud);
console.log(school);
});

document.getElementById('search')!.addEventListener('click', () => {
    
    var sch=Helpers.getValue('searchSchool');
    let searchForm: string = '';
    searchForm += '<div class="form-group">';
    searchForm += '<table border=1 class="col-sm-4 col-sm-offset-2">';
    searchForm += '<tr><td>Student Name</td><td>Age</td><td>Class</td><td>FavSubject</td></tr>';
    for(var i=0;i<school.length;i++)
    {
        var name=school[i];
        console.log(sch);
        if(sch===String(name.schoolName))
        {
            console.log(name);
            
            searchForm += '<tr><td>'+name.name+'</td><td>'+name.age+'</td><td>'+name.class+'</td><td>'+name.favSubject+'</td></tr>';
            
            
            const searchElement: HTMLElement = document.getElementById('result')!;
            searchElement.innerHTML = searchForm;
        }
    }
    searchForm += '</table>';
    searchForm += '</div>';
   });
