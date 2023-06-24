console.clear();
require("dotenv").config();
const {
  Client,
  AccountId,
  PrivateKey,
  ContractCreateTransaction,
  ContractFunctionParameters,
  ContractCallQuery,
  FileCreateTransaction,
  Hbar,
  ContractCreateFlow,
  ContractExecuteTransaction,
} = require("@hashgraph/sdk");

const fs = require("fs");

// Config account and client
const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function main() {
  // import the compiled contract
  const contractBytecode = await fs.readFileSync(
    "combinedContract_sol_CombinedContract.bin"
  );

  // create a file on hedera and store the bytecode
  const fileCreateTx = new FileCreateTransaction()
    .setContents(contractBytecode)
    .setKeys([operatorKey])
    .setMaxTransactionFee(new Hbar(5))
    .freezeWith(client);
  const fileCreateSign = await fileCreateTx.sign(operatorKey);
  const fileCreateSubmit = await fileCreateSign.execute(client);
  const fileCreateRx = await fileCreateSubmit.getReceipt(client);
  const bytecodeFileId = fileCreateRx.fileId;
  console.log(`- The bytecode file ID is: ${bytecodeFileId} \n`);

  // const contractCreate = new ContractCreateFlow()
  //   .setGas(100000)
  //   .setBytecode(contractBytecode);
  // const fileCreateSign = await contractCreate.execute(client);
  // const fileCreateRx = await fileCreateSign.getReceipt(client);
  // const bytecodeFileId = fileCreateRx.fileId;
  // console.log(`- The bytecode file ID is: ${bytecodeFileId} \n`);

  // instantiate the smart contract

  // const contractInstantiateTx = new ContractCreateTransaction()
  //   .setBytecodeFileId(bytecodeFileId)
  //   .setGas(100000);
  // const contractInstantiateSubmit = await contractInstantiateTx.execute(client);
  // const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(
  //   client
  // );
  // const contractId = contractInstantiateRx.contractId;
  // const contractAddress = contractId.toSolidityAddress();
  // console.log(` The smart contract Id is: ${contractId} \n`);
  // console.log(`The smart contract address is: ${contractAddress}`);

  //   // query the smart
  //   const contractQueryTx = new ContractCallQuery()
  //     .setContractId(contractId)
  //     .setGas(100000)
  //     .setFunction(
  //       "getMobileNumber",
  //       new ContractFunctionParameters().addString("Tame")
  //     )
  //     .setMaxQueryPayment(new Hbar(5)); // Hbar(0.00000005)
  //   const contractQuerySubmit = await contractQueryTx.execute(client);
  //   const contractQueryResult = contractQuerySubmit.getUint256(0);
  //   console.log(` Here's the number you asked for : ${contractQueryResult} \n`);

  // call contract function to update state variable

  // query the contract to get changes in state variable
}

main();
