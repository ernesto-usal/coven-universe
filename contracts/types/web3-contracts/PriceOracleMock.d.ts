/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class PriceOracleMock extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    tokenPrices(
      arg0: string
    ): TransactionObject<{
      numerator: BN;
      denominator: BN;
      0: BN;
      1: BN;
    }>;

    getPrice(
      token: string
    ): TransactionObject<{
      0: BN;
      1: BN;
    }>;

    renounceOwnership(): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    setTokenPrice(
      token: string,
      numerator: number | string,
      denominator: number | string
    ): TransactionObject<void>;

    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
  };
  events: {
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
