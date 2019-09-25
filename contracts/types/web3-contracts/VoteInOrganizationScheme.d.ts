/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class VoteInOrganizationScheme extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    parameters(
      arg0: string | number[]
    ): TransactionObject<{
      intVote: string;
      voteParams: string;
      0: string;
      1: string;
    }>;

    organizationsProposals(
      arg0: string,
      arg1: string | number[]
    ): TransactionObject<{
      originalIntVote: string;
      originalProposalId: string;
      vote: BN;
      exist: boolean;
      0: string;
      1: string;
      2: BN;
      3: boolean;
    }>;

    proposalsInfo(
      arg0: string,
      arg1: string | number[]
    ): TransactionObject<{
      blockNumber: BN;
      avatar: string;
      0: BN;
      1: string;
    }>;

    balanceOfStakingToken(
      _stakingToken: string,
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    reputationOf(
      _owner: string,
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    getTotalReputationSupply(
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    getParametersHash(
      _voteParams: string | number[],
      _intVote: string
    ): TransactionObject<string>;

    stakingTokenTransfer(
      _stakingToken: string,
      _beneficiary: string,
      _amount: number | string,
      _proposalId: string | number[]
    ): TransactionObject<boolean>;

    mintReputation(
      _amount: number | string,
      _beneficiary: string,
      _proposalId: string | number[]
    ): TransactionObject<boolean>;

    burnReputation(
      _amount: number | string,
      _beneficiary: string,
      _proposalId: string | number[]
    ): TransactionObject<boolean>;

    executeProposal(
      _proposalId: string | number[],
      _param: number | string
    ): TransactionObject<boolean>;

    setParameters(
      _voteParams: string | number[],
      _intVote: string
    ): TransactionObject<string>;

    proposeVote(
      _avatar: string,
      _originalIntVote: string,
      _originalProposalId: string | number[],
      _vote: number | string,
      _descriptionHash: string
    ): TransactionObject<string>;
  };
  events: {
    NewVoteProposal: ContractEvent<{
      _avatar: string;
      _proposalId: string;
      _intVoteInterface: string;
      _originalIntVote: string;
      _originalProposalId: string;
      _vote: BN;
      _descriptionHash: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: BN;
      6: string;
    }>;
    ProposalExecuted: ContractEvent<{
      _avatar: string;
      _proposalId: string;
      _param: BN;
      _callReturnValue: string;
      0: string;
      1: string;
      2: BN;
      3: string;
    }>;
    ProposalDeleted: ContractEvent<{
      _avatar: string;
      _proposalId: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
