/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class GenesisProtocolCallbacksMock extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    proposalsBlockNumbers(arg0: string | number[]): TransactionObject<BN>;

    getTotalReputationSupply(
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    balanceOfStakingToken(
      _stakingToken: string,
      arg1: string | number[]
    ): TransactionObject<BN>;

    reputationOf(
      _owner: string,
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    renounceOwnership(): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    mintReputation(
      _amount: number | string,
      _beneficiary: string,
      arg2: string | number[]
    ): TransactionObject<boolean>;

    burnReputation(
      _amount: number | string,
      _beneficiary: string,
      arg2: string | number[]
    ): TransactionObject<boolean>;

    stakingTokenTransfer(
      _stakingToken: string,
      _beneficiary: string,
      _amount: number | string,
      arg3: string | number[]
    ): TransactionObject<boolean>;

    setParameters(
      _params: (number | string)[],
      _voteOnBehalf: string
    ): TransactionObject<string>;

    executeProposal(
      _proposalId: string | number[],
      _decision: number | string
    ): TransactionObject<boolean>;

    propose(
      _numOfChoices: number | string,
      _paramsHash: string | number[],
      arg2: string,
      _proposer: string,
      _organization: string
    ): TransactionObject<string>;

    burnReputationTest(
      _amount: number | string,
      _beneficiary: string,
      arg2: string | number[]
    ): TransactionObject<boolean>;

    setProposal(_proposalId: string | number[]): TransactionObject<boolean>;

    stakingToken(): TransactionObject<string>;
    genesisProtocol(): TransactionObject<string>;
    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
    reputation(): TransactionObject<string>;
  };
  events: {
    NewProposal: ContractEvent<{
      _proposalId: string;
      _organization: string;
      _numOfChoices: BN;
      _proposer: string;
      _paramsHash: string;
      0: string;
      1: string;
      2: BN;
      3: string;
      4: string;
    }>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    LogAddress: ContractEvent<string>;
    LogInt: ContractEvent<BN>;
    LogString: ContractEvent<string>;
    LogUint: ContractEvent<BN>;
    LogBytes: ContractEvent<string>;
    LogBytes32: ContractEvent<string>;
    LogBool: ContractEvent<boolean>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
