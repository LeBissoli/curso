const contractAddress = "0x89B626dDE7B392B748B06d5236Efc25CBf8843B9";
var smartContract;
var smartContractWithSigner;
const ABI = 
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idPartida",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_idAposta",
				"type": "uint256"
			}
		],
		"name": "registrarAposta",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_enderecoContrato",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listaApostas",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "carteiraApostador",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "idAposta",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "valorAposta",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dataRegistro",
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
			}
		],
		"name": "listarApostas",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "carteiraApostador",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "idAposta",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "valorAposta",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dataRegistro",
						"type": "uint256"
					}
				],
				"internalType": "struct PartidaInteface.aposta[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "valorTotalApostas",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_valorTotalApostas",
				"type": "uint256[]"
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
		"name": "valorTotalApostasPartida",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_valorApostasPartida",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "valorTotalCustodia",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];