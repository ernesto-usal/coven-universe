/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class AssetWallet extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: number | string,
      _data: string | number[]
    ): TransactionObject<string>;

    genericCall(data: string | number[]): TransactionObject<void>;

    assetOwned(): TransactionObject<BN>;
    assetWalletFactory(): TransactionObject<string>;
  };
  events: {
    GenericCallSuccess: ContractEvent<{
      result: BN;
      numOperations: BN;
      0: BN;
      1: BN;
    }>;
    ReceivedEth: ContractEvent<{
      sender: string;
      amount: BN;
      0: string;
      1: BN;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}