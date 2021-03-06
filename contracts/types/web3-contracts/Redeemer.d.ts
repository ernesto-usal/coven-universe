/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class Redeemer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    redeem(
      _contributionReward: string,
      _genesisProtocol: string,
      _proposalId: string | number[],
      _avatar: string,
      _beneficiary: string
    ): TransactionObject<{
      gpRewards: (BN)[];
      gpDaoBountyReward: (BN)[];
      executed: boolean;
      winningVote: BN;
      crReputationReward: BN;
      crNativeTokenReward: BN;
      crEthReward: BN;
      crExternalTokenReward: BN;
      0: (BN)[];
      1: (BN)[];
      2: boolean;
      3: BN;
      4: BN;
      5: BN;
      6: BN;
      7: BN;
    }>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
