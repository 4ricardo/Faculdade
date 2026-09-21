document.getElementById("calcular").addEventListener("click", function () {
  let v1 = Number(document.getElementById("base").value);
  let v2 = Number(document.getElementById("altura").value);
  let soma = (v1 * v2) / 2;
  document.getElementById("resultado").innerText = soma;
});
