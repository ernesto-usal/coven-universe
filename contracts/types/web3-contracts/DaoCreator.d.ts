/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class DaoCreator extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    locks(arg0: string): TransactionObject<string>;

    addFounders(
      _avatar: string,
      _founders: (string)[],
      _foundersReputationAmount: (number | string)[]
    ): TransactionObject<boolean>;

    forgeOrg(
      _orgName: string,
      _tokenName: string,
      _tokenSymbol: string,
      _founders: (string)[],
      _foundersReputationAmount: (number | string)[],
      _cowvenGrate: string,
      _cowvenDescription: string
    ): TransactionObject<string>;

    setSchemes(
      _avatar: string,
      _schemes: (string)[],
      _params: (string | number[])[],
      _permissions: (string | number[])[],
      _metaData: string
    ): TransactionObject<void>;
  };
  events: {
    NewOrg: ContractEvent<{
      _avatar: string;
      _cowvenId: string;
      _grate: string;
      _cowvenDescription: string;
      _reputation: string;
      _token: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;
    InitialSchemesSet: ContractEvent<string>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
