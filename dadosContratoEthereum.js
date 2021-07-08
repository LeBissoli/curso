const contractAddress = "0x33E8563Ef56A1502310Ea2399369d237b5350c75";
var smartContract;
var smartContractWithSigner;
const ABI = 
[
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "string",
					"name": "time1_Casa",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "time2_Visitante",
					"type": "string"
				}
			],
			"name": "novaPartidaLog",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_idPartida",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_timeVencedor",
					"type": "uint256"
				}
			],
			"name": "novoResultadoLog",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "Partidas",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "dataRegistro",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "time1_Casa",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "placarTime1_Casa",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "time2_Visitante",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "placarTime2_Visitante",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "timeVencedor",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "resultadoAtualizado",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "admin",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_time1_Casa",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_time2_Visitante",
					"type": "string"
				}
			],
			"name": "cadastrarNovaPartida",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "listarPartidas",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "dataRegistro",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "time1_Casa",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "placarTime1_Casa",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "time2_Visitante",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "placarTime2_Visitante",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "timeVencedor",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "resultadoAtualizado",
							"type": "bool"
						}
					],
					"internalType": "struct OraclePartidas.partida[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "listarPartidasAtivas",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "listarPartidasEncerradas",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "listarQuantidadePartidas",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_totalPartidas",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_idPartida",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_timeVencedor",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_placarTime1_Casa",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_placarTime2_Visitante",
					"type": "uint256"
				}
			],
			"name": "registrarVencedor",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_idPartida",
					"type": "uint256"
				}
			],
			"name": "retornarPartida",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_idTimeVencedor",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_time1_Casa",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_time2_Visitante",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_idPartida",
					"type": "uint256"
				}
			],
			"name": "retornarVencedor",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_idTimeVencedor",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
];