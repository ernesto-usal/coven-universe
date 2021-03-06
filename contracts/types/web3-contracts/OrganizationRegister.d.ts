/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class OrganizationRegister extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    parameters(
      arg0: string | number[]
    ): TransactionObject<{
      fee: BN;
      token: string;
      beneficiary: string;
      0: BN;
      1: string;
      2: string;
    }>;

    organizationsRegistry(arg0: string, arg1: string): TransactionObject<BN>;

    getParametersHash(
      _token: string,
      _fee: number | string,
      _beneficiary: string
    ): TransactionObject<string>;

    setParameters(
      _token: string,
      _fee: number | string,
      _beneficiary: string
    ): TransactionObject<string>;

    addOrPromoteAddress(
      _avatar: string,
      _record: string,
      _amount: number | string
    ): TransactionObject<void>;
  };
  events: {
    OrgAdded: ContractEvent<{
      _registry: string;
      _org: string;
      0: string;
      1: string;
    }>;
    Promotion: ContractEvent<{
      _registry: string;
      _org: string;
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
