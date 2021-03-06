/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import {Contract, ContractOptions, EventOptions} from "web3-eth-contract";
import {EventLog} from "web3-core";
import {EventEmitter} from "events";
import {Callback, TransactionObject, ContractEvent} from "./types";

export class Controller extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    globalConstraintsRegisterPre(
      arg0: string
    ): TransactionObject<{
      isRegistered: boolean;
      index: BN;
      0: boolean;
      1: BN;
    }>;

    globalConstraintsPre(
      arg0: number | string
    ): TransactionObject<{
      gcAddress: string;
      params: string;
      0: string;
      1: string;
    }>;

    globalConstraintsRegisterPost(
      arg0: string
    ): TransactionObject<{
      isRegistered: boolean;
      index: BN;
      0: boolean;
      1: BN;
    }>;

    schemes(
      arg0: string
    ): TransactionObject<{
      paramsHash: string;
      permissions: string;
      0: string;
      1: string;
    }>;

    globalConstraintsPost(
      arg0: number | string
    ): TransactionObject<{
      gcAddress: string;
      params: string;
      0: string;
      1: string;
    }>;

    getNativeReputation(_avatar: string): TransactionObject<string>;

    isSchemeRegistered(
      _scheme: string,
      _avatar: string
    ): TransactionObject<boolean>;

    getSchemeParameters(
      _scheme: string,
      _avatar: string
    ): TransactionObject<string>;

    getSchemePermissions(
      _scheme: string,
      _avatar: string
    ): TransactionObject<string>;

    getGlobalConstraintParameters(
      _globalConstraint: string,
      arg1: string
    ): TransactionObject<string>;

    globalConstraintsCount(
      _avatar: string
    ): TransactionObject<{
      0: BN;
      1: BN;
    }>;

    isGlobalConstraintRegistered(
      _globalConstraint: string,
      _avatar: string
    ): TransactionObject<boolean>;

    mintReputation(
      _amount: number | string,
      _to: string,
      _avatar: string
    ): TransactionObject<boolean>;

    burnReputation(
      _amount: number | string,
      _from: string,
      _avatar: string
    ): TransactionObject<boolean>;

    mintTokens(
      _amount: number | string,
      _beneficiary: string,
      _avatar: string
    ): TransactionObject<boolean>;

    registerScheme(
      _scheme: string,
      _paramsHash: string | number[],
      _permissions: string | number[],
      _avatar: string
    ): TransactionObject<boolean>;

    unregisterScheme(
      _scheme: string,
      _avatar: string
    ): TransactionObject<boolean>;

    unregisterSelf(_avatar: string): TransactionObject<boolean>;

    addGlobalConstraint(
      _globalConstraint: string,
      _params: string | number[],
      _avatar: string
    ): TransactionObject<boolean>;

    removeGlobalConstraint(
      _globalConstraint: string,
      _avatar: string
    ): TransactionObject<boolean>;

    upgradeController(
      _newController: string,
      _avatar: string
    ): TransactionObject<boolean>;

    genericCall(
      _contract: string,
      _data: string | number[],
      _avatar: string,
      _value: number | string
    ): TransactionObject<{
      0: boolean;
      1: string;
    }>;

    sendEther(
      _amountInWei: number | string,
      _to: string,
      _avatar: string
    ): TransactionObject<boolean>;

    externalTokenTransfer(
      _externalToken: string,
      _to: string,
      _value: number | string,
      _avatar: string
    ): TransactionObject<boolean>;

    externalTokenTransferFrom(
      _externalToken: string,
      _from: string,
      _to: string,
      _value: number | string,
      _avatar: string
    ): TransactionObject<boolean>;

    externalTokenApproval(
      _externalToken: string,
      _spender: string,
      _value: number | string,
      _avatar: string
    ): TransactionObject<boolean>;

    metaData(_metaData: string, _avatar: string): TransactionObject<boolean>;

    newController(): TransactionObject<string>;
    avatar(): TransactionObject<string>;
    nativeReputation(): TransactionObject<string>;
    nativeToken(): TransactionObject<string>;
  };
  events: {
    MintReputation: ContractEvent<{
      _sender: string;
      _to: string;
      _amount: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    BurnReputation: ContractEvent<{
      _sender: string;
      _from: string;
      _amount: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    MintTokens: ContractEvent<{
      _sender: string;
      _beneficiary: string;
      _amount: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    RegisterScheme: ContractEvent<{
      _sender: string;
      _scheme: string;
      0: string;
      1: string;
    }>;
    UnregisterScheme: ContractEvent<{
      _sender: string;
      _scheme: string;
      0: string;
      1: string;
    }>;
    UpgradeController: ContractEvent<{
      _oldController: string;
      _newController: string;
      0: string;
      1: string;
    }>;
    AddGlobalConstraint: ContractEvent<{
      _globalConstraint: string;
      _params: string;
      _when: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    RemoveGlobalConstraint: ContractEvent<{
      _globalConstraint: string;
      _index: BN;
      _isPre: boolean;
      0: string;
      1: BN;
      2: boolean;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
