/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class ReputationFromToken extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    redeems(arg0: string): TransactionObject<boolean>;

    initialize(
      _avatar: string,
      _tokenContract: string,
      _curve: string
    ): TransactionObject<void>;

    redeem(_beneficiary: string): TransactionObject<BN>;

    tokenContract(): TransactionObject<string>;
    avatar(): TransactionObject<string>;
    curve(): TransactionObject<string>;
  };
  events: {
    Redeem: ContractEvent<{
      _beneficiary: string;
      _sender: string;
      _amount: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
