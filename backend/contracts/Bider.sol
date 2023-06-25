// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "./TenderOwner.sol";

contract Bider is TenderPoster {
    using SafeMath for uint;
    //include Rejected Status

    enum statuschoices {
        Waiting,
        Approved,
        Rejected
    }

    struct biderDetails {
        address bidowner;
        string companyName;
        string contact;
        string goodsDealsWith;
        string tenderOwnerName;
        uint bidsTenderIndex;
        statuschoices choice;
        string goodsDescription;
    }
    mapping(uint => biderDetails) bidItems;
    uint bidstenderlength = 0;

    function writeBiderDetails(
        uint _tenderIndex,
        string memory _companyName,
        string memory _contact,
        string memory _goodsDealsWith
    ) public {
        //check for empty values
        require(
            bytes(_companyName).length > 0,
            "please provide the company name"
        );
        require(
            bytes(_goodsDealsWith).length > 0,
            "please provide the url for goods deal with"
        );
        require(
            bytes(_contact).length > 0,
            "please provide the company contact"
        );
        //require to bid onlyonce
        require(
            msg.sender != bidItems[_tenderIndex].bidowner,
            "Can Only Bid Once"
        );
        uint _bidsindex = bidstenderlength;
        bidItems[_tenderIndex] = biderDetails(
            msg.sender,
            _companyName,
            _contact,
            _goodsDealsWith,
            tenderItems[_tenderIndex].companyName,
            _bidsindex,
            statuschoices.Waiting,
            tenderItems[_tenderIndex].tenderDescription
        );
        bidstenderlength = bidstenderlength.add(1);
        //status
        //choice = statuschoices.Waiting;
    }

    function readBiderDetails()
        public
        view
        returns (biderDetails[] memory tenders)
    {
        tenders = new biderDetails[](bidstenderlength);
        for (uint i = 0; i < bidstenderlength; i++) {
            tenders[i] = bidItems[i];
        }
    }

    //function to return only bider details
    function viewBiderTenders() public view returns (biderDetails[] memory) {
        uint tenderlength = 0;
        uint allbidertenderlength = bidstenderlength;
        for (uint i = 0; i < allbidertenderlength; i++) {
            if (bidItems[i].bidowner == msg.sender) {
                tenderlength += 1;
            }
        }
        biderDetails[] memory tenders = new biderDetails[](tenderlength);
        uint j = 0;
        for (uint i = 0; i < allbidertenderlength; i++) {
            if (bidItems[i].bidowner == msg.sender) {
                biderDetails storage mybids = bidItems[i];
                tenders[j] = mybids;
                j += 1;
            }
        }
        return tenders;
    }

    function getTotalBindsLength() public view returns (uint) {
        return bidstenderlength;
    }

    //Approve function
    function approveTender(
        uint _tenderbidsIndex
    )
        public
        onlyOwner(_tenderbidsIndex)
        returns (address, string memory, string memory, string memory)
    {
        require(
            msg.sender == tenderItems[_tenderbidsIndex].owner,
            "Only The Owner can Approve"
        );
        require(
            bidItems[_tenderbidsIndex].choice == statuschoices.Waiting,
            "Waitng Aproval"
        );
        // choice = statuschoices.Approved;
        bidItems[_tenderbidsIndex].choice = statuschoices.Approved;
        return (
            bidItems[_tenderbidsIndex].bidowner,
            bidItems[_tenderbidsIndex].companyName,
            bidItems[_tenderbidsIndex].contact,
            bidItems[_tenderbidsIndex].goodsDealsWith
        );
    }

    //DisplayOnlyApproved Tenders
    function onlyApproveTender(
        uint _tenderbidsIndex
    )
        public
        view
        returns (address, string memory, string memory, string memory)
    {
        //require(msg.sender != address(this),"Only The Owner can Approve");
        require(
            bidItems[_tenderbidsIndex].choice == statuschoices.Approved,
            "Waitng Aproval"
        );
        // choice = statuschoices.Approved;
        //bidItems[_tenderbidsIndex].choice = statuschoices.Approved;
        return (
            bidItems[_tenderbidsIndex].bidowner,
            bidItems[_tenderbidsIndex].companyName,
            bidItems[_tenderbidsIndex].contact,
            bidItems[_tenderbidsIndex].goodsDealsWith
        );
    }

    //function display only approved tenders volume 2
    function showOnlyApprovedTender()
        public
        view
        returns (biderDetails[] memory tenders)
    {
        uint tenderlength = 0;
        for (uint i = 0; i < bidstenderlength; i++) {
            if (bidItems[i].choice == statuschoices.Approved) {
                tenderlength++;
            }
        }
        tenders = new biderDetails[](tenderlength);
        uint j = 0;
        for (uint i = 0; i < tenderIndex; i++) {
            if (bidItems[i].choice == statuschoices.Approved) {
                tenders[j] = bidItems[i];
                j++;
            }
        }
    }

    //Rejected Tenders
    //added
    function rejectTender(
        uint _tenderbidsIndex
    )
        public
        onlyOwner(_tenderbidsIndex)
        returns (address, string memory, string memory, string memory)
    {
        require(
            msg.sender == tenderItems[_tenderbidsIndex].owner,
            "Only The Owner can Approve"
        );
        require(
            bidItems[_tenderbidsIndex].choice == statuschoices.Waiting,
            "Waitng Aproval"
        );
        // choice = statuschoices.Approved;
        bidItems[_tenderbidsIndex].choice = statuschoices.Rejected;
        return (
            bidItems[_tenderbidsIndex].bidowner,
            bidItems[_tenderbidsIndex].companyName,
            bidItems[_tenderbidsIndex].contact,
            bidItems[_tenderbidsIndex].goodsDealsWith
        );
    }
}
