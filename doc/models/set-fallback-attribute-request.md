
# Set Fallback Attribute Request

## Structure

`SetFallbackAttributeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`DeviceList[] \| undefined`](../../doc/models/device-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | - |
| `carrierName` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "carrierName": "the name of the mobile service provider",
  "devices": [
    {
      "deviceIds": [
        {
          "id": "id6",
          "kind": "imei"
        },
        {
          "id": "id7",
          "kind": "eid"
        },
        {
          "id": "id8",
          "kind": "esn"
        }
      ]
    },
    {
      "deviceIds": [
        {
          "id": "id7",
          "kind": "eid"
        }
      ]
    }
  ]
}
```

