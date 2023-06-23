// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./loanContract.sol";
import "./profitDistribution.sol";
import "./projectContract.sol";

contract CombinedContract is LoanContract, ProjectContract, ProfitDistribution {
    constructor() {}
}
