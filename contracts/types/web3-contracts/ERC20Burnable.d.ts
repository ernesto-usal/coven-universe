/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class ERC20Burnable extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    balanceOf(account: string): TransactionObject<BN>;

    allowance(owner: string, spender: string): TransactionObject<BN>;

    approve(
      spender: string,
      value: number | string
    ): TransactionObject<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string
    ): TransactionObject<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): TransactionObject<boolean>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): TransactionObject<boolean>;

    transfer(
      recipient: string,
      amount: number | string
    ): TransactionObject<boolean>;

    burn(amount: number | string): TransactionObject<void>;

    burnFrom(account: string, amount: number | string): TransactionObject<void>;

    totalSupply(): TransactionObject<BN>;
  };
  events: {
    Transfer: ContractEvent<{
      from: string;
      to: string;
      value: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    Approval: ContractEvent<{
      owner: string;
      spender: string;
      value: BN;
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
