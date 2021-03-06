/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class RepAllocation extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    reputationAllocations(arg0: string): TransactionObject<BN>;

    balanceOf(_beneficiary: string): TransactionObject<BN>;

    renounceOwnership(): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    addBeneficiary(
      _beneficiary: string,
      _amount: number | string
    ): TransactionObject<void>;

    addBeneficiaries(
      _beneficiaries: (string)[],
      _amounts: (number | string)[]
    ): TransactionObject<void>;

    freeze(): TransactionObject<void>;

    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
    isFreeze(): TransactionObject<boolean>;
  };
  events: {
    BeneficiaryAddressAdded: ContractEvent<{
      _beneficiary: string;
      _amount: BN;
      0: string;
      1: BN;
    }>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
