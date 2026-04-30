document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('coin-flip-button');
  button.addEventListener('click', flipCoin);
});

async function flipCoin() {
  const res = await fetch('/api/flip');
  const data = await res.json();
  document.getElementById('result').textContent = data.result;
}
