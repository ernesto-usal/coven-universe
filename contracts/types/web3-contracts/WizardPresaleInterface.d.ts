/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class WizardPresaleInterface extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    powerToCost(power: number | string): TransactionObject<BN>;

    costToPower(cost: number | string): TransactionObject<BN>;

    absorbWizard(
      id: number | string
    ): TransactionObject<{
      owner: string;
      power: BN;
      affinity: BN;
      0: string;
      1: BN;
      2: BN;
    }>;

    absorbWizardMulti(
      ids: (number | string)[]
    ): TransactionObject<{
      owners: (string)[];
      powers: (BN)[];
      affinities: (BN)[];
      0: (string)[];
      1: (BN)[];
      2: (BN)[];
    }>;

    _INTERFACE_ID_WIZARDPRESALE(): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}