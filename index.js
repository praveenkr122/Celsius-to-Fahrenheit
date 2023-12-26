const btn1 = document.getElementById('btn');
btn1.addEventListener('click', function (e) {
  const data = document.getElementById('celsiusInput').value;
  const f = (data * 9) / 5 + 32;
  const finalValue = document.getElementById('ans');
  finalValue.innerHTML = f;
});
