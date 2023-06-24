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

/*
Current issue; It says TRANSACTION OVERSIZE, when I call it.
My solution is to create a file on hedera
choice? (A) upload a bin file when the hedera file is created. (B) create an empty file. 
Append the contracts bin files to the file on hedera
*/
async function main() {
  // import the compiled contracts
  const comBinedContractBytecode = await fs.readFileSync(
    "GreenVestor_sol_CombinedContract.bin"
  );
  // import the compiled contract
  const loanContractBytecode = await fs.readFileSync(
    "GreenVestor_sol_LoanContract.bin"
  );
  // import the compiled contract
  const profitContractBytecode = await fs.readFileSync(
    "GreenVestor_sol_ProfitDistribution.bin"
  );
  // import the compiled contract
  const projectContractBytecode = await fs.readFileSync(
    "GreenVestor_sol_ProjectContract.bin"
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

  // Append the Loan contract bin files of all contracts
  const appendLoanTx = await new FileAppendTransaction()
    .setFileId(greenFileId)
    .setContents(loanContractBytecode)
    .setMaxTransactionFee(new Hbar(2))
    .freezeWith(client);
  const signTx = await appendLoanTx.sign(operatorKey);
  const txResponse = await signTx.execute(client);

  //Request the receipt
  const receipt = await txResponse.getReceipt(client);

  //Get the transaction consensus status
  const transactionStatus = receipt.status;

  console.log(
    "The loan contract append transaction consensus status is " +
      transactionStatus
  );

  // Append the profit contract bin files of all contracts
  const appendProfitTx = await new FileAppendTransaction()
    .setFileId(greenFileId)
    .setContents(profitContractBytecode)
    .setMaxTransactionFee(new Hbar(2))
    .freezeWith(client);
  const signProfitTx = await appendProfitTx.sign(operatorKey);
  const profitTxResponse = await signProfitTx.execute(client);

  //Request the receipt
  const profitReceipt = await profitTxResponse.getReceipt(client);

  //Get the transaction consensus status
  const profitTransactionStatus = profitReceipt.status;

  console.log(
    "The profit contract append transaction consensus status is " +
      profitTransactionStatus
  );

  // Append project contract bin file, projectContractBytecode
  const appendProjectTx = await new FileAppendTransaction()
    .setFileId(greenFileId)
    .setContents(projectContractBytecode)
    .setMaxTransactionFee(new Hbar(2))
    .freezeWith(client);
  const signProjectTx = await appendProjectTx.sign(operatorKey);
  const projectTxResponse = await signProjectTx.execute(client);

  //Request the receipt
  const projectReceipt = await projectTxResponse.getReceipt(client);

  //Get the transaction consensus status
  const projectTransactionStatus = projectReceipt.status;

  console.log(
    "The project contract append transaction consensus status is " +
      projectTransactionStatus
  );

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
}

main();
