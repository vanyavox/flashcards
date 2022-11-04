// document.querySelector('#questions').addEventListener('click', async (event) => {
//   if (event.target.classList.contains('questionCard')) {
//     event.preventDefault();
//     const { id } = event.target.closest('li');
//     console.log(id);

//     const response = await fetch(`/quiz/${id}`, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         id,
//       }),
//     });

//     const result = await response.text();
//     console.log(result);

//     event.target.closest('ul').remove();
//     document.body.insertAdjacentHTML('beforeend', result);
//   }
// });
const arr = [];
document.querySelector('.cards').addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target.classList.contains('answer')) {
    const { id } = e.target.closest('.card');
    const text = e.target.closest('.card').querySelector('input').value;
    e.target.classList.add('disabled');
    e.target.closest('.card').querySelector('input').setAttribute('disabled', 'disabled');
    arr.push({ id, text });
    console.log(arr);
  }
});

document.querySelector('.send').addEventListener('click', async (e) => {
  const res = await fetch('/results', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      arr,
    }),
  });
  const data = await res.text();
  // console.log(data);
  document.querySelector('.cards').remove();
  document.querySelector('.send').remove();
  document.body.insertAdjacentHTML('beforeend', data);
});
