export const BiderAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tenderbidsIndex",
        "type": "uint256"
      }
    ],
    "name": "approveTender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "deleteTender",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalBindsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myTenders",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "companyName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tenderDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "deadlineDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contactEmail",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "tenderAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tendersindex",
            "type": "uint256"
          }
        ],
        "internalType": "struct TenderPoster.TenderDetails[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tenderbidsIndex",
        "type": "uint256"
      }
    ],
    "name": "onlyApproveTender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "readBiderDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "bidowner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "companyName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contact",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "goodsDealsWith",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tenderOwnerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bidsTenderIndex",
            "type": "uint256"
          },
          {
            "internalType": "enum Bider.statuschoices",
            "name": "choice",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "goodsDescription",
            "type": "string"
          }
        ],
        "internalType": "struct Bider.biderDetails[]",
        "name": "tenders",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "readTenderDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "companyName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tenderDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "deadlineDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contactEmail",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "tenderAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tendersindex",
            "type": "uint256"
          }
        ],
        "internalType": "struct TenderPoster.TenderDetails[]",
        "name": "tenders",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tenderbidsIndex",
        "type": "uint256"
      }
    ],
    "name": "rejectTender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "showOnlyApprovedTender",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "bidowner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "companyName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contact",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "goodsDealsWith",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tenderOwnerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bidsTenderIndex",
            "type": "uint256"
          },
          {
            "internalType": "enum Bider.statuschoices",
            "name": "choice",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "goodsDescription",
            "type": "string"
          }
        ],
        "internalType": "struct Bider.biderDetails[]",
        "name": "tenders",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tenderItems",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "tenderDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "deadlineDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "contactEmail",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "tenderAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tendersindex",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tenderTotals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewBiderTenders",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "bidowner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "companyName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contact",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "goodsDealsWith",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tenderOwnerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bidsTenderIndex",
            "type": "uint256"
          },
          {
            "internalType": "enum Bider.statuschoices",
            "name": "choice",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "goodsDescription",
            "type": "string"
          }
        ],
        "internalType": "struct Bider.biderDetails[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tenderIndex",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_contact",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_goodsDealsWith",
        "type": "string"
      }
    ],
    "name": "writeBiderDetails",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_tenderDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_deadlineDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_contactEmail",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_tenderAmount",
        "type": "uint256"
      }
    ],
    "name": "writeTenderDetails",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]