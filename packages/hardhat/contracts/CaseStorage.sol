// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CaseStorage {
    mapping (bytes32 => string) public cases;
    mapping (bytes32 => string) public evidences;

    function setCase(bytes32 caseId, string memory ipfsHash) public {
        cases[caseId] = ipfsHash;
    }

    function getCase(bytes32 caseId) public view returns (string memory) {
        return cases[caseId];
    }

    function setEvidence(bytes32 caseId, string memory ipfsHash) public {
        evidences[caseId] = ipfsHash;
    }

    function getEvidence(bytes32 caseId) public view returns (string memory) {
        return evidences[caseId];
    }
}
