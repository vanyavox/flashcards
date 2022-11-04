document.querySelector('#questions').addEventListener('click', async (event) => {
  if (event.target.classList.contains('questionCard')) {
    event.preventDefault();
    const id = event.target.closest('li').id;
    console.log(id);

    const response = await fetch(`/quiz/${id}`, {
      method : 'GET',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id : id,
      }),
    });

    const result = await response.text();
    console.log(result);

    event.target.closest('ul').remove();
    document.body.insertAdjacentHTML('beforeend', result);
    
  }
})

