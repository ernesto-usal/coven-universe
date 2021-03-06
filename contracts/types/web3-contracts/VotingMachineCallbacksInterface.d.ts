/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class VotingMachineCallbacksInterface extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    getTotalReputationSupply(
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    reputationOf(
      _owner: string,
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    balanceOfStakingToken(
      _stakingToken: string,
      _proposalId: string | number[]
    ): TransactionObject<BN>;

    mintReputation(
      _amount: number | string,
      _beneficiary: string,
      _proposalId: string | number[]
    ): TransactionObject<boolean>;

    burnReputation(
      _amount: number | string,
      _owner: string,
      _proposalId: string | number[]
    ): TransactionObject<boolean>;

    stakingTokenTransfer(
      _stakingToken: string,
      _beneficiary: string,
      _amount: number | string,
      _proposalId: string | number[]
    ): TransactionObject<boolean>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
