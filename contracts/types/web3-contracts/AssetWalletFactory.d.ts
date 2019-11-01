/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class AssetWalletFactory extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    assetsWallets(arg0: number | string): TransactionObject<string>;

    renounceOwnership(): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    getAssetsRegistry(): TransactionObject<string>;

    createWallet(_assetId: number | string): TransactionObject<boolean>;

    assetsRegistriesRegistry(): TransactionObject<string>;
    assetsRegistryIdHash(): TransactionObject<string>;
    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
  };
  events: {
    AssetWalletCreated: ContractEvent<{
      id: BN;
      wallet: string;
      0: BN;
      1: string;
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