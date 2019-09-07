import Web3 from "web3"
import {path as rootPath} from "app-root-path"

export type tEthereumAddress = string
export type tGetConfiguration = () => IConfiguration

export const getPathDeployedWizardsContracts = (ethereumNetwork: string) =>
  `${rootPath}/migrations/data/wizards-${ethereumNetwork}-addresses.json`

export const getPathDeployedDaoContracts = (ethereumNetwork: string) =>
  `${rootPath}/migrations/data/dao-${ethereumNetwork}-addresses.json`

export interface IWizardsAddresses {
  WizardWalletFactory: tEthereumAddress
  WizardsERC721AddressesProvider: tEthereumAddress
  WizardGuild: tEthereumAddress
}

export interface IDaoAddresses {
  Avatar: tEthereumAddress
  Reputation: tEthereumAddress
  Controller: tEthereumAddress
  DAOToken: tEthereumAddress
  ContributionReward: tEthereumAddress
  QuorumVote: tEthereumAddress
}

export interface IContractsAddresses extends IWizardsAddresses, IDaoAddresses {}

export interface IConfiguration {
  network: string
  web3: Web3
  web3WS: Web3
  addresses: IContractsAddresses
}

export let configuration: IConfiguration

export const initConfiguration = async (
  ethereumNetwork: string = "development",
) => {
  const httpProvider = new Web3.providers.HttpProvider(<string>(
    process.env[`URL_ETHEREUM_HTTP_PROVIDER_${ethereumNetwork.toUpperCase()}`]
  ))
  const wsProvider = new Web3.providers.WebsocketProvider(<string>(
    process.env[`URL_ETHEREUM_HTTP_PROVIDER_${ethereumNetwork.toUpperCase()}`]
  ))
  configuration = {
    web3: new Web3(httpProvider),
    web3WS: new Web3(wsProvider),
    addresses: {
      ...(<IDaoAddresses>require(getPathDeployedDaoContracts(ethereumNetwork))),
      ...(<IWizardsAddresses>(
        require(getPathDeployedWizardsContracts(ethereumNetwork))
      )),
    },
    network: ethereumNetwork,
  }
}

export const getConfiguration = () => {
  return configuration
}
