@description('Location for all resources.')
param location string = resourceGroup().location

@description('app sevice plan sku')
@allowed([
  'F1'
])
param appServicePlanSku string = 'F1'

@description('name of the web app')
param webAppAccountName string = 'app${uniqueString(resourceGroup().id)}'

@description('name of the web app')
param appServicePlanName string = 'appplan${uniqueString(resourceGroup().id)}'


module webAppModule 'modules/webapp.bicep' = {
  name: 'webAppDeploy'
  params: {
    location: location
    appServicePlanSku: appServicePlanSku
    webAppAccountName: webAppAccountName
    appServicePlanName: appServicePlanName
  }
}
