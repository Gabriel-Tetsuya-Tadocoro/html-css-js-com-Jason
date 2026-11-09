const produtos = [
  {
    "titulo": "Grand Theft Auto V",
    "desenvolvedora": "Rockstar North",
    "ano_lancamento": 2013,
    "plataforma_principal": "PlayStation 3",
    "modo_multiplayer": "Possui"
  },
  {
    "titulo": "Elden Ring",
    "desenvolvedora": "FromSoftware",
    "ano_lancamento": 2022,
    "plataforma_principal": "PC",
    "modo_multiplayer": "Possui"
  },
  {
    "titulo": "Forza Horizon 5",
    "desenvolvedora": "Playground Games",
    "ano_lancamento": 2021,
    "plataforma_principal": "Xbox Series X",
    "modo_multiplayer": "Possui"
  },
  {
    "titulo": "EA Sports FC 24",
    "desenvolvedora": "EA Romania",
    "ano_lancamento": 2023,
    "plataforma_principal": "PlayStation 5",
    "modo_multiplayer": "Possui"
  },
  {
    "titulo": "Resident Evil 4 Remake",
    "desenvolvedora": "Capcom",
    "ano_lancamento": 2023,
    "plataforma_principal": "Multiplataforma",
    "modo_multiplayer": "Nao Possui"
  }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.titulo}</td>
        <td>${produto.desenvolvedora}</td>
        <td>${produto.ano_lancamento}</td>
        <td>${produto.plataforma_principal}</td>
        <td>${produto.modo_multiplayer}</td>
    `

    corpoTabela.appendChild(linha)
  }