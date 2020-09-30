 /*jshint esversion: 6 */

    const list = document.querySelector('#todo-list ul');
    const forms = document.forms;

    // clear lists
    list.addEventListener('click', (e) => {
    if(e.target.className == 'clear'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    });

    // Add a "checked" class when clicking on a list item
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
    }, false);

    // add to list
    const addForm = forms['add-list'];
    addForm.addEventListener('submit', function(e){
    e.preventDefault();

      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const listName = document.createElement('span');
      const clearBtn = document.createElement('span');

      // add text content
      listName.textContent = value;
      clearBtn.textContent = 'clear';
      if(listName.textContent===''){
        alert("You must write something!");
      }
      else{
        li.appendChild(listName);
        // add classes
        listName.classList.add('name');
        clearBtn.classList.add('clear');
        // append to DOM
        li.appendChild(clearBtn);
        list.appendChild(li);
      }
    });

