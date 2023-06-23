// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProfitDistribution {
    mapping(address => uint256) public investments;
    mapping(address => uint256) public profits;

    uint256 public totalInvestment;
    uint256 public totalProfits;

    uint256 public constant RATE_OF_RETURN = 10; // 10% fixed rate of return

    event Investment(address indexed investor, uint256 amount);
    event ProfitDistributed(address indexed investor, uint256 amount);

    function invest() external payable {
        require(msg.value > 0, "Investment amount must be greater than zero.");

        investments[msg.sender] += msg.value;
        totalInvestment += msg.value;

        emit Investment(msg.sender, msg.value);
    }

    function distributeProfits() external {
        require(
            totalInvestment > 0,
            "No investments available for profit distribution."
        );

        // uint256 totalReturns = (totalInvestment * RATE_OF_RETURN) / 100;

        for (uint256 i = 0; i < totalInvestment; i++) {
            address investor = msg.sender;
            uint256 investmentAmount = investments[investor];
            uint256 profit = (investmentAmount * RATE_OF_RETURN) / 100;

            profits[investor] += profit;
            totalProfits += profit;

            emit ProfitDistributed(investor, profit);
        }

        // Reset investments and total investment after profit distribution
        totalInvestment = 0;
        for (uint256 i = 0; i < totalInvestment; i++) {
            address investor = msg.sender;
            investments[investor] = 0;
        }
    }

    function withdrawProfits() external {
        require(profits[msg.sender] > 0, "No profits available to withdraw.");

        uint256 amountToWithdraw = profits[msg.sender];
        profits[msg.sender] = 0;
        totalProfits -= amountToWithdraw;

        payable(msg.sender).transfer(amountToWithdraw);
    }
}
