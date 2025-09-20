// SPDX-License-Identifier: ISC
pragma solidity >=0.8.0 <0.9.0;

contract WhoIsThis {
    struct Report {
        uint256 id;
        string title;
        uint256 good;
        uint256 bad;
        address[] voters;
        uint256 voterCount;
    }

    uint256 reportCount = 0;
    // mapping(uint256=>Report) report;
    Report[] reports;

    function report(string memory _title) external {
        reports.push(Report({
            id: reportCount,
            title: _title,
            good: 0,
            bad: 0,
            voters: [],
            voterCount: 0
        }));

        reportCount++;
    }

    function vote(uint256 _reportId) external {

    }

    function getAllReports() external view{

    }
}