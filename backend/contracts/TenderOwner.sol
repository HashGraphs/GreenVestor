// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";

contract TenderPoster {
    using SafeMath for uint;
    //enums for state

    struct TenderDetails {
        address owner;
        string companyName;
        string tenderDescription;
        string deadlineDate;
        string contactEmail;
        string email;
        uint tenderAmount;
        uint tendersindex;
    }
    mapping(uint => TenderDetails) public tenderItems;

    uint tenderIndex = 0;
    //modifier fo the owner
    modifier onlyOwner(uint _index) {
        require(
            tenderItems[_index].owner == msg.sender,
            "only owner can perform this"
        );
        _;
    }

    function writeTenderDetails(
        string memory _companyName,
        string memory _tenderDescription,
        string memory _deadlineDate,
        string memory _contactEmail,
        string memory _email,
        uint _tenderAmount
    ) public {
        require(
            bytes(_companyName).length > 0,
            "please provide the company name"
        );
        require(
            bytes(_tenderDescription).length > 0,
            "please provide the description"
        );
        require(bytes(_deadlineDate).length > 0, "please provide the deadline");
        require(bytes(_contactEmail).length > 0, "please provide the Email");
        require(bytes(_email).length > 0, "please provide the Email");
        require(_tenderAmount > 0, "Amount should not be negative");
        uint _tendersindex = tenderIndex;
        tenderItems[tenderIndex] = TenderDetails(
            msg.sender,
            _companyName,
            _tenderDescription,
            _deadlineDate,
            _contactEmail,
            _email,
            _tenderAmount,
            _tendersindex
        );
        tenderIndex = tenderIndex + 1;
    }

    function readTenderDetails()
        public
        view
        returns (TenderDetails[] memory tenders)
    {
        tenders = new TenderDetails[](tenderIndex);
        for (uint i = 0; i < tenderIndex; i++) {
            tenders[i] = tenderItems[i];
        }
    }

    //function return only my tenders
    function myTenders() public view returns (TenderDetails[] memory) {
        uint tenderlength = 0;
        uint alltenderLength = tenderIndex;
        for (uint i = 0; i < alltenderLength; i++) {
            if (tenderItems[i].owner == msg.sender) {
                tenderlength += 1;
            }
        }
        TenderDetails[] memory tenders = new TenderDetails[](tenderlength);
        uint j = 0;
        for (uint i = 0; i < alltenderLength; i++) {
            if (tenderItems[i].owner == msg.sender) {
                TenderDetails storage mytenders = tenderItems[i];
                tenders[j] = mytenders; // assign to tenders[j] instead of myTenders
                j += 1;
            }
        }
        return tenders;
    }

    //function to return the number of tender items
    function tenderTotals() public view returns (uint) {
        return tenderIndex;
    }

    //delete Tender
    function deleteTender(uint _index) public onlyOwner(_index) {
        require(msg.sender != address(this), "Only The Owner can delete");
        delete tenderItems[_index];
    }
}
