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
  FileAppendTransaction,
} = require("@hashgraph/sdk");

const fs = require("fs");

// Config account and client
const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function main() {
  // import the compiled contracts
  const comBinedContractBytecode = await fs.readFileSync(
    "GreenVestor_sol_CombinedContract.bin"
  );

  // create an empty file on hedera and store the bytecode
  const fileCreateTx = new FileCreateTransaction()
    .setKeys([operatorKey])
    .setMaxTransactionFee(new Hbar(5))
    .freezeWith(client);
  const fileCreateSign = await fileCreateTx.sign(operatorKey);
  const fileCreateSubmit = await fileCreateSign.execute(client);
  const fileCreateRx = await fileCreateSubmit.getReceipt(client);
  const greenFileId = fileCreateRx.fileId;
  console.log(`- The bytecode file ID is: ${greenFileId} \n`);

  // Append combined contract bin file, comBinedContractBytecode
  const appendCombinedTx = await new FileAppendTransaction()
    .setFileId(greenFileId)
    .setContents(comBinedContractBytecode)
    .setMaxTransactionFee(new Hbar(2))
    .freezeWith(client);
  const signCombinedTx = await appendCombinedTx.sign(operatorKey);
  const combinedTxResponse = await signCombinedTx.execute(client);

  //Request the receipt
  const combinedReceipt = await combinedTxResponse.getReceipt(client);

  //Get the transaction consensus status
  const combinedTransactionStatus = combinedReceipt.status;

  console.log(
    "The combined contract append transaction consensus status is " +
      combinedTransactionStatus
  );

  // Deploy Smart to Hedera blockchain.
  const contractInstantiateTx = new ContractCreateTransaction()
    .setBytecodeFileId(greenFileId)
    .setGas(100000);
  const contractInstantiateSubmit = await contractInstantiateTx.execute(client);
  const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(
    client
  );
  const contractId = contractInstantiateRx.contractId;
  const contractAddress = contractId.toSolidityAddress();
  console.log(` The smart contract Id is: ${contractId} \n`);
  console.log(`The smart contract address is: ${contractAddress}`);

  // Call a function of the smart contract
  const contractQuery = await new ContractCallQuery()
    //Set the gas for the query
    .setGas(100000)
    //Set the contract ID to return the request for
    .setContractId(contractId)
    //Set the contract function to call
    .setFunction("RATE_OF_RETURN")
    //Set the query payment for the node returning the request
    //This value must cover the cost of the request otherwise will fail
    .setQueryPayment(new Hbar(2));

  //Submit to a Hedera network
  const getMessage = await contractQuery.execute(client);

  // Get a string from the result at index 0
  const message = getMessage; //.getString(0);

  //Log the message
  console.log("The contract message is: " + message);

  //v2 Hedera JavaScript SDK
}

main();
