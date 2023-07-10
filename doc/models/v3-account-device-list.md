
# V3 Account Device List

Array of devices.

## Structure

`V3AccountDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `hasMoreData` | `boolean` | Required | Has more device flag? |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Last seen device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V3AccountDevice[]`](../../doc/models/v3-account-device.md) | Required | Account device list. |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "hasMoreData": true,
  "lastSeenDeviceId": "15-digit IMEI",
  "maxPageSize": 1000,
  "deviceList": [
    {
      "deviceId": "deviceId6",
      "mdn": "mdn4",
      "model": "model6",
      "make": "make4",
      "firmware": "firmware2",
      "fotaEligible": false,
      "status": "status2",
      "licenseAssigned": false,
      "protocol": "protocol4",
      "softwareList": [
        {
          "name": "name9",
          "version": "version5",
          "upgradeTime": "upgradeTime7"
        }
      ],
      "fileList": [
        {
          "name": "name3",
          "version": "version9",
          "upgradeTime": "upgradeTime1"
        },
        {
          "name": "name4",
          "version": "version0",
          "upgradeTime": "upgradeTime2"
        },
        {
          "name": "name5",
          "version": "version1",
          "upgradeTime": "upgradeTime3"
        }
      ],
      "createTime": "createTime6",
      "upgradeTime": "upgradeTime4",
      "updateTime": "updateTime8",
      "refreshTime": "refreshTime6"
    },
    {
      "deviceId": "deviceId7",
      "mdn": "mdn5",
      "model": "model5",
      "make": "make3",
      "firmware": "firmware1",
      "fotaEligible": true,
      "status": "status1",
      "licenseAssigned": true,
      "protocol": "protocol5",
      "softwareList": [
        {
          "name": "name0",
          "version": "version6",
          "upgradeTime": "upgradeTime8"
        },
        {
          "name": "name1",
          "version": "version7",
          "upgradeTime": "upgradeTime9"
        }
      ],
      "fileList": [
        {
          "name": "name4",
          "version": "version0",
          "upgradeTime": "upgradeTime2"
        }
      ],
      "createTime": "createTime5",
      "upgradeTime": "upgradeTime5",
      "updateTime": "updateTime7",
      "refreshTime": "refreshTime7"
    }
  ]
}
```

