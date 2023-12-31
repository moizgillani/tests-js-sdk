
# Service Instance

## Structure

`ServiceInstance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Instance UUID generated by OF. |
| `name` | `string` | Required | User display name for Service Instance Id.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `serviceName` | `string \| undefined` | Optional | Name of the Service.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `createdAt` | `string \| undefined` | Optional | Auto derived time of creation. |
| `modifiedAt` | `string \| undefined` | Optional | Last modified time. |
| `labels` | [`EdgeServiceLaunchParams \| undefined`](../../doc/models/edge-service-launch-params.md) | Optional | - |
| `projectName` | `string \| undefined` | Optional | Name of the service Instance Project(Project Name).<br>**Default**: `'default'`<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `revision` | [`Revision`](../../doc/models/revision.md) | Required | - |
| `nameSpace` | `string \| undefined` | Optional | Name space inside cluster.<br>**Default**: `'default'` |
| `deploymentType` | [`DeploymentTypeEnum \| undefined`](../../doc/models/deployment-type-enum.md) | Optional | Default MEC platform for deploying service.<br>**Default**: `DeploymentTypeEnum.PrivateMEC` |
| `solutionRegulations` | [`RegionItem[] \| undefined`](../../doc/models/region-item.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `edsDiscoveryIntent` | [`EdsDiscoveryIntent \| undefined`](../../doc/models/eds-discovery-intent.md) | Optional | - |
| `workLoadType` | [`WorkloadTypeEnum \| undefined`](../../doc/models/workload-type-enum.md) | Optional | Default service type.<br>**Default**: `WorkloadTypeEnum.Container` |
| `clusterInfo` | [`ClusterMetadata \| undefined`](../../doc/models/cluster-metadata.md) | Optional | - |
| `virtualMachineInfo` | [`VirtualMachine \| undefined`](../../doc/models/virtual-machine.md) | Optional | - |
| `workload` | [`EdgeServiceWorkload[] \| undefined`](../../doc/models/edge-service-workload.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `rafayClusterInfra` | [`ClusterInfra \| undefined`](../../doc/models/cluster-infra.md) | Optional | - |
| `customerId` | `string \| undefined` | Optional | Id of particular customer.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `userId` | `string \| undefined` | Optional | Id of a user.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |

## Example (as JSON)

```json
{
  "clusterInfo": {
    "cloud": {
      "clusterConfig": {
        "autoCreateNetworkInfra": true,
        "networkNatMode": "single"
      },
      "commonConfig": {
        "blueprint": {
          "name": "default",
          "version": "latest"
        },
        "cloudCredentials": {
          "clusterProvisioning": {
            "provider": "AWS"
          },
          "name": "acme-aws-qa-mdp-5"
        },
        "k8sVersion": "1.21"
      },
      "distribution": "AmazonEKS",
      "nodeConfigs": [
        {
          "autoCreateServiceRoles": true,
          "enableAlbAccess": true,
          "enableAppMeshAccess": true,
          "enableAsgAccess": true,
          "enableDnsAccess": true,
          "enableEfsAccess": true,
          "enableFullAccessToEcr": true,
          "endPointAccessType": "private",
          "instanceType": "m5.xlarge",
          "isManagedNodeGroup": false,
          "isSpotInstanceNeeded": false,
          "isWavelengthZone": false,
          "labels": {},
          "name": "ng-22",
          "nodeAmiFamily": "AmazonLinux2",
          "nodePrivateNetworking": false,
          "nodeVolumeSize": 80,
          "nodeVolumeType": "gp3",
          "nodes": 2,
          "nodesMax": 2,
          "nodesMin": 2,
          "tags": {},
          "useVolumeEncryption": true
        },
        {
          "autoCreateServiceRoles": true,
          "enableAlbAccess": true,
          "enableAppMeshAccess": true,
          "enableAsgAccess": true,
          "enableDnsAccess": true,
          "enableEfsAccess": true,
          "enableFullAccessToEcr": true,
          "endPointAccessType": "private",
          "instanceType": "t3.xlarge",
          "isManagedNodeGroup": false,
          "isSpotInstanceNeeded": false,
          "isWavelengthZone": true,
          "labels": {},
          "name": "ng-wavelength-test22",
          "nodeAmiFamily": "AmazonLinux2",
          "nodePrivateNetworking": false,
          "nodeVolumeSize": 80,
          "nodeVolumeType": "gp2",
          "nodes": 2,
          "nodesMax": 2,
          "nodesMin": 2,
          "subnetCidrBlock": "192.168.192.0/19",
          "tags": {},
          "useVolumeEncryption": true
        }
      ]
    },
    "clusterType": "publicCloud",
    "description": "Cluster details.",
    "name": "dev-acme-aws-us-west-2-wl1-den-wlz-1"
  },
  "createdAt": "2022-08-19T13:07:42.560Z",
  "customerId": "acme",
  "deploymentType": "PublicMEC",
  "id": "e0abe65f-b294-4673-a60c-d31f26ca7a8c",
  "labels": {
    "key": "key8",
    "value": "value0"
  },
  "modifiedAt": "2022-08-19T13:07:42.560Z",
  "name": "mongodb-customer-prerun-2",
  "nameSpace": "default",
  "projectName": "vesa-pi7-pubmec-dev-proj",
  "revision": {
    "additionalParams": [],
    "version": "2.3.4"
  },
  "serviceName": "mongodb-customer-prerun-2",
  "solutionRegulations": [
    {
      "region": "us-west-2",
      "zones": [
        {
          "zone": "us-west-2-wl1-den-wlz-1"
        }
      ]
    }
  ],
  "userId": "acme-user",
  "workLoadType": "container"
}
```

