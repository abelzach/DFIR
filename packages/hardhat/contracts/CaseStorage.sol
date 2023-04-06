// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CaseStorage {
    mapping (bytes32 => string) public cases;
    mapping (bytes32 => Evidences) public evidences;

    string[] private arrayFir;
    string[] private arrayEvidence;

    struct Evidences {
        string caseId;
        string cid;
        string desc;
    }

    function convertStrToBytes32(string memory str) public pure returns (bytes32) {
        return keccak256(abi.encode(str));
    }

    function setCase(string memory caseId, string memory ipfsHash) public {
        arrayFir.push(caseId);
        cases[convertStrToBytes32(caseId)] = ipfsHash;
    }

    function getCase(string memory caseId) public view returns (string memory) {
        return cases[convertStrToBytes32(caseId)];
    }

    function casesReturn() public view returns(string[] memory) {
        return arrayFir;
    }

    function evidencesReturn() public view returns(string[] memory) {
        return arrayEvidence;
    }

    function setEvidence(string memory caseId, Evidences calldata evid) public {
        arrayEvidence.push(caseId);
        evidences[convertStrToBytes32(caseId)] = evid;
    }

    function getEvidence(string memory caseId) public view returns (Evidences memory) {
        return evidences[convertStrToBytes32(caseId)];
    }
}
