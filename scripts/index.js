import importedObj1 from '../JSONs/book1.json' with {type: 'json'};
console.log(importedObj1)
import importedObj2 from '../JSONs/book2.json' with {type: 'json'};
console.log(importedObj2)
import importedObj3 from '../JSONs/book3.json' with {type: 'json'};
console.log(importedObj3)
const arr = [importedObj1, importedObj2, importedObj3]
function library() {
    document.querySelector("#btn").onclick = myClick
    function myClick() {
        let text = prompt('Введите название книги')
        var bookId;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].name == text) {
                bookId = arr[i];
                break;
            }
        }   
        
        document.getElementById('name').textContent  = `${bookId.name}`;
        document.getElementById('age').textContent = `Год издания: ${bookId.age}`;
        document.getElementById('des').textContent = `${bookId.description}`;
        document.getElementById('des2').textContent = 'Краткое описание:';
        const sr = document.querySelector('.book-info');
        sr.style.border = '4px solid black';
        sr.style.borderRadius = '20px';
    }
}   
library()