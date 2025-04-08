const toggleMode = document.getElementById('toggleMode');
const body = document.body;
const totalCosto = document.getElementById('totalCosto');
const tarifa = 150;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const potencia = parseFloat(document.getElementById('potencia').value);
  const horas = parseFloat(document.getElementById('horas').value);
  const categoria = document.getElementById('categoria').value;

  const consumo = ((potencia * horas * 30) / 1000).toFixed(2); 
  const costo = (consumo * tarifa).toFixed(2); 

  const item = document.createElement('div');
  item.innerHTML = `<strong>${nombre}</strong> (${categoria}) → consumo: ${consumo} kWh/mes, costo mensual: ₡${costo}`;

  listaAparatos.appendChild(item);

  consumoTotal += parseFloat(consumo);
  totalConsumo.textContent = consumoTotal.toFixed(2);

  let costoActual = parseFloat(totalCosto.textContent);
  totalCosto.textContent = (costoActual + parseFloat(costo)).toFixed(2);

  formulario.reset();
});

toggleMode.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  toggleMode.innerHTML = body.classList.contains('dark') ? '🌙 Cambiar modo' : '🌞 Cambiar modo';
});



