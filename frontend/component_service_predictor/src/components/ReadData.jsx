// dataTransform.js

const originalData = [
   {
    "Id": 48,
    "Time": "2022-06-03T08:09:29Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 104
   },
   {
    "Id": 5,
    "Time": "2022-05-12T02:05:42Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 70
   },
   {
    "Id": 24,
    "Time": "2022-05-27T06:25:04Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 104
   },
   {
    "Id": 23,
    "Time": "2022-05-12T20:36:47Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 231
   },
   {
    "Id": 42,
    "Time": "2022-06-28T04:06:30Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 39
   },
   {
    "Id": 44,
    "Time": "2022-06-15T17:30:33Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 215
   },
   {
    "Id": 37,
    "Time": "2022-06-25T15:39:58Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 202
   },
   {
    "Id": 1,
    "Time": "2022-06-28T01:17:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 39,
    "Time": "2022-05-13T03:23:02Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.533982405902761
   },
   {
    "Id": 26,
    "Time": "2022-06-09T02:21:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.9
   },
   {
    "Id": 2,
    "Time": "2022-06-01T21:02:41Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 190
   },
   {
    "Id": 34,
    "Time": "2022-05-06T19:46:07Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 195
   },
   {
    "Id": 47,
    "Time": "2022-05-30T09:02:29Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 44,
    "Time": "2022-06-07T20:54:38Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.0564368045602506
   },
   {
    "Id": 32,
    "Time": "2022-06-16T19:53:48Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 34
   },
   {
    "Id": 25,
    "Time": "2022-05-09T10:36:00Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.411252795359877
   },
   {
    "Id": 22,
    "Time": "2022-05-08T10:33:05Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 332
   },
   {
    "Id": 9,
    "Time": "2022-05-10T09:05:26Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1315
   },
   {
    "Id": 6,
    "Time": "2022-05-26T15:48:32Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 51
   },
   {
    "Id": 20,
    "Time": "2022-05-08T17:09:11Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 55
   },
   {
    "Id": 47,
    "Time": "2022-06-08T00:46:47Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 91
   },
   {
    "Id": 12,
    "Time": "2022-06-13T09:02:11Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1345
   },
   {
    "Id": 4,
    "Time": "2022-06-07T03:43:41Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 263
   },
   {
    "Id": 42,
    "Time": "2022-06-27T03:29:55Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 312
   },
   {
    "Id": 5,
    "Time": "2022-06-23T11:02:43Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1750
   },
   {
    "Id": 45,
    "Time": "2022-05-11T13:16:32Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1779
   },
   {
    "Id": 33,
    "Time": "2022-05-20T02:50:20Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.762040191170272
   },
   {
    "Id": 14,
    "Time": "2022-05-12T15:06:55Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 25,
    "Time": "2022-06-25T11:08:14Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 262
   },
   {
    "Id": 2,
    "Time": "2022-06-08T20:46:11Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 304
   },
   {
    "Id": 7,
    "Time": "2022-06-03T19:01:05Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.9
   },
   {
    "Id": 43,
    "Time": "2022-05-22T11:05:17Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1590
   },
   {
    "Id": 3,
    "Time": "2022-06-12T06:40:10Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 30
   },
   {
    "Id": 3,
    "Time": "2022-06-06T06:35:59Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.827011927454973
   },
   {
    "Id": 47,
    "Time": "2022-05-28T20:46:27Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 109
   },
   {
    "Id": 13,
    "Time": "2022-05-11T03:11:53Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 403
   },
   {
    "Id": 1,
    "Time": "2022-05-07T09:44:50Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1580
   },
   {
    "Id": 34,
    "Time": "2022-06-27T04:19:39Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 203
   },
   {
    "Id": 28,
    "Time": "2022-05-09T15:57:35Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 44
   },
   {
    "Id": 7,
    "Time": "2022-05-02T15:33:29Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 22,
    "Time": "2022-05-28T05:24:46Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 48
   },
   {
    "Id": 34,
    "Time": "2022-06-10T23:04:57Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1434
   },
   {
    "Id": 44,
    "Time": "2022-05-20T08:34:29Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.6
   },
   {
    "Id": 45,
    "Time": "2022-05-17T04:51:58Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.246072784540505
   },
   {
    "Id": 19,
    "Time": "2022-06-04T13:31:15Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1665
   },
   {
    "Id": 30,
    "Time": "2022-06-11T21:31:15Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 198
   },
   {
    "Id": 31,
    "Time": "2022-06-13T13:46:42Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 29
   },
   {
    "Id": 17,
    "Time": "2022-06-17T05:25:02Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 20,
    "Time": "2022-05-26T06:06:30Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 22,
    "Time": "2022-05-09T02:05:21Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.1420432072351505
   },
   {
    "Id": 34,
    "Time": "2022-05-13T20:51:45Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 249
   },
   {
    "Id": 31,
    "Time": "2022-06-14T21:59:05Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 413
   },
   {
    "Id": 21,
    "Time": "2022-06-03T01:26:34Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1300
   },
   {
    "Id": 27,
    "Time": "2022-05-09T05:13:41Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 1
   },
   {
    "Id": 26,
    "Time": "2022-06-07T19:41:35Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 93
   },
   {
    "Id": 6,
    "Time": "2022-05-27T23:46:46Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 222
   },
   {
    "Id": 42,
    "Time": "2022-06-17T22:02:34Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1047
   },
   {
    "Id": 29,
    "Time": "2022-06-27T20:22:38Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 371
   },
   {
    "Id": 38,
    "Time": "2022-05-18T18:36:54Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1724
   },
   {
    "Id": 31,
    "Time": "2022-05-05T23:19:11Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.557899218348005
   },
   {
    "Id": 21,
    "Time": "2022-06-27T13:06:53Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 374
   },
   {
    "Id": 7,
    "Time": "2022-06-27T21:18:03Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 225
   },
   {
    "Id": 32,
    "Time": "2022-05-28T10:16:16Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 35
   },
   {
    "Id": 17,
    "Time": "2022-06-27T23:49:20Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1230
   },
   {
    "Id": 19,
    "Time": "2022-05-21T12:46:28Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 96
   },
   {
    "Id": 40,
    "Time": "2022-05-12T04:55:54Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 36
   },
   {
    "Id": 39,
    "Time": "2022-06-04T02:56:03Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 348
   },
   {
    "Id": 17,
    "Time": "2022-05-09T05:29:27Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 3,
    "Time": "2022-05-07T16:15:39Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 59
   },
   {
    "Id": 6,
    "Time": "2022-06-28T13:49:14Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 61
   },
   {
    "Id": 10,
    "Time": "2022-05-09T09:14:01Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1800
   },
   {
    "Id": 23,
    "Time": "2022-05-30T05:05:19Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1593
   },
   {
    "Id": 6,
    "Time": "2022-05-06T05:00:42Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 255
   },
   {
    "Id": 33,
    "Time": "2022-06-18T12:26:52Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.1
   },
   {
    "Id": 48,
    "Time": "2022-06-25T16:29:17Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 104
   },
   {
    "Id": 47,
    "Time": "2022-05-24T05:15:47Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 23,
    "Time": "2022-06-26T09:05:19Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 300
   },
   {
    "Id": 4,
    "Time": "2022-05-22T23:13:12Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 43
   },
   {
    "Id": 35,
    "Time": "2022-06-06T11:23:40Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 144
   },
   {
    "Id": 40,
    "Time": "2022-05-12T07:55:15Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 15,
    "Time": "2022-06-13T06:03:10Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 253
   },
   {
    "Id": 46,
    "Time": "2022-05-03T22:05:15Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 291
   },
   {
    "Id": 45,
    "Time": "2022-06-21T16:34:04Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.780763097085265
   },
   {
    "Id": 10,
    "Time": "2022-05-27T15:05:19Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 354
   },
   {
    "Id": 23,
    "Time": "2022-06-25T08:31:34Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 450
   },
   {
    "Id": 31,
    "Time": "2022-06-21T14:37:28Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 118
   },
   {
    "Id": 6,
    "Time": "2022-06-03T18:21:34Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 10
   },
   {
    "Id": 25,
    "Time": "2022-06-14T01:45:54Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 435
   },
   {
    "Id": 28,
    "Time": "2022-06-01T18:40:22Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 54
   },
   {
    "Id": 36,
    "Time": "2022-06-30T05:14:36Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 19,
    "Time": "2022-05-16T16:26:30Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 21,
    "Time": "2022-06-06T19:04:15Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1712
   },
   {
    "Id": 44,
    "Time": "2022-06-16T04:04:33Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 20,
    "Time": "2022-06-21T14:25:38Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 54
   },
   {
    "Id": 43,
    "Time": "2022-05-29T10:08:51Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 300
   },
   {
    "Id": 4,
    "Time": "2022-05-16T08:00:59Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 89
   },
   {
    "Id": 42,
    "Time": "2022-05-09T09:11:26Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1179
   },
   {
    "Id": 45,
    "Time": "2022-06-26T05:57:26Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 369
   },
   {
    "Id": 19,
    "Time": "2022-06-20T13:46:58Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1650
   },
   {
    "Id": 8,
    "Time": "2022-05-05T11:01:26Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 21
   },
   {
    "Id": 24,
    "Time": "2022-05-04T04:55:48Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 37
   },
   {
    "Id": 40,
    "Time": "2022-06-09T16:33:46Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 93
   },
   {
    "Id": 36,
    "Time": "2022-05-15T14:06:56Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 26
   },
   {
    "Id": 23,
    "Time": "2022-06-09T23:05:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 321
   },
   {
    "Id": 50,
    "Time": "2022-06-06T13:37:24Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 300
   },
   {
    "Id": 47,
    "Time": "2022-06-14T04:29:38Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 119
   },
   {
    "Id": 10,
    "Time": "2022-06-19T18:36:52Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1760
   },
   {
    "Id": 14,
    "Time": "2022-06-20T09:17:11Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 25,
    "Time": "2022-05-02T17:27:26Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.354209407795604
   },
   {
    "Id": 45,
    "Time": "2022-05-13T23:56:07Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 37
   },
   {
    "Id": 22,
    "Time": "2022-06-21T03:15:52Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 210
   },
   {
    "Id": 47,
    "Time": "2022-06-03T00:49:50Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 26
   },
   {
    "Id": 28,
    "Time": "2022-05-08T10:59:39Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 4,
    "Time": "2022-06-05T00:21:58Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 13,
    "Time": "2022-06-10T15:00:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 79
   },
   {
    "Id": 20,
    "Time": "2022-06-14T12:34:19Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 16,
    "Time": "2022-06-22T02:38:08Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1744
   },
   {
    "Id": 29,
    "Time": "2022-06-22T14:04:56Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.3
   },
   {
    "Id": 23,
    "Time": "2022-05-09T15:32:27Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1422
   },
   {
    "Id": 21,
    "Time": "2022-05-29T16:46:08Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.7
   },
   {
    "Id": 31,
    "Time": "2022-05-16T23:49:29Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 393
   },
   {
    "Id": 50,
    "Time": "2022-06-07T09:20:30Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 199
   },
   {
    "Id": 24,
    "Time": "2022-06-02T22:34:24Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 20
   },
   {
    "Id": 13,
    "Time": "2022-06-04T18:32:04Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 231
   },
   {
    "Id": 29,
    "Time": "2022-05-14T13:38:51Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 87
   },
   {
    "Id": 28,
    "Time": "2022-06-07T12:07:56Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 33
   },
   {
    "Id": 31,
    "Time": "2022-05-24T09:35:36Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 102
   },
   {
    "Id": 49,
    "Time": "2022-06-02T02:02:04Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 19,
    "Time": "2022-06-04T19:05:47Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 295
   },
   {
    "Id": 24,
    "Time": "2022-06-30T05:18:25Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 26,
    "Time": "2022-06-06T02:45:28Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 89
   },
   {
    "Id": 45,
    "Time": "2022-06-07T19:16:44Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1398
   },
   {
    "Id": 32,
    "Time": "2022-05-18T07:43:11Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 377
   },
   {
    "Id": 9,
    "Time": "2022-06-16T18:04:01Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 48,
    "Time": "2022-05-06T18:11:27Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 31,
    "Time": "2022-06-18T12:33:03Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 50
   },
   {
    "Id": 27,
    "Time": "2022-06-27T14:43:40Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 119
   },
   {
    "Id": 7,
    "Time": "2022-06-19T05:59:36Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 119
   },
   {
    "Id": 14,
    "Time": "2022-05-21T20:03:16Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 265
   },
   {
    "Id": 2,
    "Time": "2022-06-01T06:08:22Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 337
   },
   {
    "Id": 29,
    "Time": "2022-06-20T12:34:34Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1785
   },
   {
    "Id": 21,
    "Time": "2022-06-12T05:42:56Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1398
   },
   {
    "Id": 14,
    "Time": "2022-05-29T13:59:44Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 50
   },
   {
    "Id": 24,
    "Time": "2022-06-23T02:05:25Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 95
   },
   {
    "Id": 25,
    "Time": "2022-05-18T23:31:09Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 55
   },
   {
    "Id": 5,
    "Time": "2022-06-24T17:00:51Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1456
   },
   {
    "Id": 22,
    "Time": "2022-06-03T22:35:39Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 39
   },
   {
    "Id": 15,
    "Time": "2022-06-14T16:03:35Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 100
   },
   {
    "Id": 27,
    "Time": "2022-06-09T15:48:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 8,
    "Time": "2022-05-18T16:12:39Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 27
   },
   {
    "Id": 46,
    "Time": "2022-05-01T06:33:20Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 297
   },
   {
    "Id": 9,
    "Time": "2022-06-18T10:48:23Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 64
   },
   {
    "Id": 12,
    "Time": "2022-05-12T21:22:48Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 35
   },
   {
    "Id": 14,
    "Time": "2022-05-28T05:42:44Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 18,
    "Time": "2022-05-09T01:20:26Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 41,
    "Time": "2022-05-10T04:13:09Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 5,
    "Time": "2022-06-19T00:00:52Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 125
   },
   {
    "Id": 43,
    "Time": "2022-05-27T18:46:04Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 29,
    "Time": "2022-05-10T05:58:45Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 5,
    "Time": "2022-05-29T00:32:05Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.72617889354469
   },
   {
    "Id": 21,
    "Time": "2022-06-06T17:28:15Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 404
   },
   {
    "Id": 46,
    "Time": "2022-05-28T12:10:01Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.984918787063702
   },
   {
    "Id": 38,
    "Time": "2022-06-03T14:43:07Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 348
   },
   {
    "Id": 23,
    "Time": "2022-06-21T05:32:11Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 96
   },
   {
    "Id": 1,
    "Time": "2022-05-12T09:47:44Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1700
   },
   {
    "Id": 12,
    "Time": "2022-05-14T09:28:28Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.542305510145011
   },
   {
    "Id": 3,
    "Time": "2022-05-15T18:09:14Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 298
   },
   {
    "Id": 40,
    "Time": "2022-05-11T14:11:38Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 20
   },
   {
    "Id": 40,
    "Time": "2022-06-15T17:27:20Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 11,
    "Time": "2022-05-06T16:01:26Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 110
   },
   {
    "Id": 5,
    "Time": "2022-06-20T12:05:53Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.760612448135802
   },
   {
    "Id": 16,
    "Time": "2022-05-23T01:33:32Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1455
   },
   {
    "Id": 35,
    "Time": "2022-05-03T17:36:01Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 120
   },
   {
    "Id": 28,
    "Time": "2022-05-19T19:47:20Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 35
   },
   {
    "Id": 46,
    "Time": "2022-06-30T03:37:30Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 89
   },
   {
    "Id": 20,
    "Time": "2022-05-25T02:23:13Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 45
   },
   {
    "Id": 7,
    "Time": "2022-05-28T23:52:38Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 80
   },
   {
    "Id": 45,
    "Time": "2022-05-25T09:44:21Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 44
   },
   {
    "Id": 44,
    "Time": "2022-05-05T09:52:26Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 29
   },
   {
    "Id": 20,
    "Time": "2022-06-09T03:52:58Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 62
   },
   {
    "Id": 3,
    "Time": "2022-06-01T18:55:45Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 60
   },
   {
    "Id": 7,
    "Time": "2022-05-14T13:26:37Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 92
   },
   {
    "Id": 16,
    "Time": "2022-05-17T20:48:22Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 25,
    "Time": "2022-06-17T23:54:14Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.9
   },
   {
    "Id": 18,
    "Time": "2022-05-16T21:44:23Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 93
   },
   {
    "Id": 11,
    "Time": "2022-05-06T20:00:16Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 443
   },
   {
    "Id": 15,
    "Time": "2022-05-12T03:24:44Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 111
   },
   {
    "Id": 10,
    "Time": "2022-05-27T18:48:48Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 9
   },
   {
    "Id": 18,
    "Time": "2022-06-12T14:23:46Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 50,
    "Time": "2022-05-24T13:05:02Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 444
   },
   {
    "Id": 6,
    "Time": "2022-06-29T02:58:38Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 375
   },
   {
    "Id": 19,
    "Time": "2022-06-20T02:33:46Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1666
   },
   {
    "Id": 19,
    "Time": "2022-06-24T02:03:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 17,
    "Time": "2022-06-06T23:08:28Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1210
   },
   {
    "Id": 30,
    "Time": "2022-05-13T08:52:53Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 353
   },
   {
    "Id": 11,
    "Time": "2022-06-28T19:18:20Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 10,
    "Time": "2022-06-24T09:38:45Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 37,
    "Time": "2022-06-23T05:33:32Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 92
   },
   {
    "Id": 50,
    "Time": "2022-06-21T13:02:07Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 64
   },
   {
    "Id": 20,
    "Time": "2022-06-28T05:59:38Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 9
   },
   {
    "Id": 26,
    "Time": "2022-05-02T04:59:29Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 345
   },
   {
    "Id": 48,
    "Time": "2022-06-21T08:14:33Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 316
   },
   {
    "Id": 21,
    "Time": "2022-05-25T08:41:35Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 263
   },
   {
    "Id": 17,
    "Time": "2022-05-13T19:38:08Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 40
   },
   {
    "Id": 41,
    "Time": "2022-06-06T13:10:26Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 22,
    "Time": "2022-06-25T20:18:23Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 65
   },
   {
    "Id": 7,
    "Time": "2022-05-09T12:13:56Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.632488490834493
   },
   {
    "Id": 1,
    "Time": "2022-06-28T23:08:17Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 40,
    "Time": "2022-06-28T18:33:06Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 43,
    "Time": "2022-05-20T15:01:58Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 275
   },
   {
    "Id": 22,
    "Time": "2022-05-02T07:48:17Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 240
   },
   {
    "Id": 18,
    "Time": "2022-06-23T07:57:30Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 16,
    "Time": "2022-05-10T14:45:14Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 27
   },
   {
    "Id": 6,
    "Time": "2022-05-04T21:10:32Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 368
   },
   {
    "Id": 25,
    "Time": "2022-06-30T22:11:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 112
   },
   {
    "Id": 42,
    "Time": "2022-06-30T03:23:08Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.769654221016504
   },
   {
    "Id": 36,
    "Time": "2022-05-16T17:11:50Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 15,
    "Time": "2022-06-28T11:29:13Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 93
   },
   {
    "Id": 46,
    "Time": "2022-06-18T17:38:32Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1031
   },
   {
    "Id": 11,
    "Time": "2022-05-07T18:50:08Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 385
   },
   {
    "Id": 3,
    "Time": "2022-06-19T04:00:29Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 115
   },
   {
    "Id": 43,
    "Time": "2022-05-07T01:46:19Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 27,
    "Time": "2022-06-22T07:08:06Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1683
   },
   {
    "Id": 35,
    "Time": "2022-06-12T09:01:03Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.654081298210941
   },
   {
    "Id": 11,
    "Time": "2022-06-26T04:18:32Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 389
   },
   {
    "Id": 26,
    "Time": "2022-06-18T19:57:25Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 228
   },
   {
    "Id": 20,
    "Time": "2022-06-15T16:45:30Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 29
   },
   {
    "Id": 18,
    "Time": "2022-06-07T02:38:27Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 47,
    "Time": "2022-06-26T10:29:44Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 7,
    "Time": "2022-05-22T15:47:34Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.8075987083108767
   },
   {
    "Id": 39,
    "Time": "2022-05-09T08:23:43Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 46
   },
   {
    "Id": 26,
    "Time": "2022-05-29T05:21:41Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 265
   },
   {
    "Id": 10,
    "Time": "2022-06-06T17:21:56Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1581
   },
   {
    "Id": 31,
    "Time": "2022-06-13T19:53:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.7
   },
   {
    "Id": 30,
    "Time": "2022-06-24T15:39:38Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 274
   },
   {
    "Id": 15,
    "Time": "2022-06-29T01:08:01Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 337
   },
   {
    "Id": 30,
    "Time": "2022-06-04T22:21:26Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 44,
    "Time": "2022-05-01T15:13:41Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.2380008735038635
   },
   {
    "Id": 6,
    "Time": "2022-06-23T17:33:09Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 376
   },
   {
    "Id": 7,
    "Time": "2022-05-05T13:18:09Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.2723528870797076
   },
   {
    "Id": 37,
    "Time": "2022-06-15T00:53:57Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 89
   },
   {
    "Id": 44,
    "Time": "2022-05-15T18:00:32Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 44
   },
   {
    "Id": 20,
    "Time": "2022-05-19T10:27:24Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 58
   },
   {
    "Id": 14,
    "Time": "2022-05-09T12:01:34Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 364
   },
   {
    "Id": 21,
    "Time": "2022-05-28T06:46:43Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1491
   },
   {
    "Id": 29,
    "Time": "2022-05-23T18:32:35Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.417613669912043
   },
   {
    "Id": 9,
    "Time": "2022-05-03T12:48:06Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 14,
    "Time": "2022-05-10T02:55:24Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 11,
    "Time": "2022-05-29T10:17:50Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 120
   },
   {
    "Id": 4,
    "Time": "2022-06-25T22:35:06Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 34
   },
   {
    "Id": 43,
    "Time": "2022-06-02T08:59:33Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 82
   },
   {
    "Id": 29,
    "Time": "2022-06-14T19:10:37Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 1
   },
   {
    "Id": 9,
    "Time": "2022-05-20T11:47:05Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 49
   },
   {
    "Id": 16,
    "Time": "2022-05-21T01:03:05Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 27
   },
   {
    "Id": 19,
    "Time": "2022-05-26T00:09:14Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 377
   },
   {
    "Id": 24,
    "Time": "2022-06-14T08:05:06Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.5
   },
   {
    "Id": 23,
    "Time": "2022-06-18T19:07:58Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 123
   },
   {
    "Id": 44,
    "Time": "2022-05-21T16:46:11Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 260
   },
   {
    "Id": 27,
    "Time": "2022-05-26T21:27:20Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1470
   },
   {
    "Id": 35,
    "Time": "2022-05-27T13:21:34Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 79
   },
   {
    "Id": 21,
    "Time": "2022-06-02T11:18:05Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1640
   },
   {
    "Id": 26,
    "Time": "2022-06-16T14:33:51Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 32,
    "Time": "2022-05-11T06:13:36Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1558
   },
   {
    "Id": 21,
    "Time": "2022-06-24T04:29:18Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.032346707895526
   },
   {
    "Id": 28,
    "Time": "2022-05-18T19:01:02Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 38
   },
   {
    "Id": 11,
    "Time": "2022-06-10T14:57:19Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 247
   },
   {
    "Id": 9,
    "Time": "2022-05-26T20:01:50Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.52453023046626
   },
   {
    "Id": 30,
    "Time": "2022-06-11T11:19:44Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 256
   },
   {
    "Id": 45,
    "Time": "2022-05-05T04:52:00Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 44
   },
   {
    "Id": 39,
    "Time": "2022-05-03T14:03:10Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 41
   },
   {
    "Id": 5,
    "Time": "2022-05-22T12:43:51Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.996014571623977
   },
   {
    "Id": 43,
    "Time": "2022-06-20T17:33:12Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 18,
    "Time": "2022-06-29T22:26:12Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 213
   },
   {
    "Id": 25,
    "Time": "2022-05-03T06:45:54Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.998739239093917
   },
   {
    "Id": 33,
    "Time": "2022-05-01T04:00:38Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 62
   },
   {
    "Id": 13,
    "Time": "2022-06-16T09:20:12Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 387
   },
   {
    "Id": 9,
    "Time": "2022-05-11T08:31:41Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 60
   },
   {
    "Id": 26,
    "Time": "2022-06-07T18:45:02Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.869027293045341
   },
   {
    "Id": 38,
    "Time": "2022-06-15T03:59:22Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 309
   },
   {
    "Id": 3,
    "Time": "2022-05-27T06:31:30Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 124
   },
   {
    "Id": 9,
    "Time": "2022-05-30T14:08:01Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 25
   },
   {
    "Id": 50,
    "Time": "2022-05-21T16:36:24Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 363
   },
   {
    "Id": 33,
    "Time": "2022-05-13T05:53:12Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 352
   },
   {
    "Id": 41,
    "Time": "2022-05-06T01:09:58Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.152016856790821
   },
   {
    "Id": 9,
    "Time": "2022-05-18T21:05:23Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 422
   },
   {
    "Id": 16,
    "Time": "2022-06-02T17:40:47Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.1649636071146836
   },
   {
    "Id": 3,
    "Time": "2022-06-29T22:33:09Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 95
   },
   {
    "Id": 1,
    "Time": "2022-06-29T22:23:48Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 9
   },
   {
    "Id": 34,
    "Time": "2022-06-21T04:35:53Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 433
   },
   {
    "Id": 9,
    "Time": "2022-05-20T12:23:14Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1697
   },
   {
    "Id": 17,
    "Time": "2022-05-10T15:23:39Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 29,
    "Time": "2022-05-08T22:00:34Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 87
   },
   {
    "Id": 32,
    "Time": "2022-06-20T05:53:54Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 397
   },
   {
    "Id": 33,
    "Time": "2022-06-07T12:29:39Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.4610482187501335
   },
   {
    "Id": 17,
    "Time": "2022-06-05T03:39:07Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 43
   },
   {
    "Id": 28,
    "Time": "2022-05-17T08:03:15Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 59
   },
   {
    "Id": 11,
    "Time": "2022-06-20T09:55:41Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 47
   },
   {
    "Id": 34,
    "Time": "2022-05-27T20:00:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 177
   },
   {
    "Id": 48,
    "Time": "2022-06-22T06:00:32Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 308
   },
   {
    "Id": 26,
    "Time": "2022-05-15T22:43:29Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 29,
    "Time": "2022-05-06T09:45:34Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 119
   },
   {
    "Id": 35,
    "Time": "2022-05-25T10:00:04Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.6
   },
   {
    "Id": 16,
    "Time": "2022-05-22T07:50:03Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 57
   },
   {
    "Id": 15,
    "Time": "2022-05-23T21:06:15Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 381
   },
   {
    "Id": 41,
    "Time": "2022-05-23T11:09:49Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.625255295664392
   },
   {
    "Id": 9,
    "Time": "2022-05-26T18:34:09Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 73
   },
   {
    "Id": 40,
    "Time": "2022-05-01T00:19:55Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 291
   },
   {
    "Id": 48,
    "Time": "2022-06-21T04:13:43Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 34
   },
   {
    "Id": 16,
    "Time": "2022-05-04T05:16:55Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1664
   },
   {
    "Id": 28,
    "Time": "2022-06-07T11:31:30Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 36
   },
   {
    "Id": 35,
    "Time": "2022-05-27T22:00:52Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 108
   },
   {
    "Id": 47,
    "Time": "2022-05-25T10:28:22Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 26
   },
   {
    "Id": 46,
    "Time": "2022-06-17T13:33:21Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.929791054327954
   },
   {
    "Id": 50,
    "Time": "2022-05-09T03:25:11Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 262
   },
   {
    "Id": 13,
    "Time": "2022-05-15T22:24:54Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 90
   },
   {
    "Id": 8,
    "Time": "2022-05-01T19:51:35Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1600
   },
   {
    "Id": 50,
    "Time": "2022-06-26T11:10:48Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1368
   },
   {
    "Id": 8,
    "Time": "2022-06-04T22:55:47Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 6,
    "Time": "2022-06-07T14:19:48Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 1,
    "Time": "2022-06-27T21:17:21Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 434
   },
   {
    "Id": 27,
    "Time": "2022-05-20T19:45:15Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 38,
    "Time": "2022-06-01T07:11:20Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 55
   },
   {
    "Id": 27,
    "Time": "2022-06-21T17:17:53Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 43,
    "Time": "2022-05-27T23:04:57Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 348
   },
   {
    "Id": 46,
    "Time": "2022-06-11T03:09:49Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 182
   },
   {
    "Id": 15,
    "Time": "2022-05-30T23:01:49Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 318
   },
   {
    "Id": 47,
    "Time": "2022-05-24T13:39:39Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 24,
    "Time": "2022-05-26T07:34:57Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.1069008611983167
   },
   {
    "Id": 41,
    "Time": "2022-05-05T00:26:58Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 264
   },
   {
    "Id": 37,
    "Time": "2022-06-28T18:23:11Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.540437363800695
   },
   {
    "Id": 2,
    "Time": "2022-06-29T18:42:51Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 93
   },
   {
    "Id": 8,
    "Time": "2022-05-07T00:43:42Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 36
   },
   {
    "Id": 36,
    "Time": "2022-06-26T04:53:04Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 40,
    "Time": "2022-05-12T16:25:45Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 29,
    "Time": "2022-05-26T21:41:34Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 140
   },
   {
    "Id": 29,
    "Time": "2022-05-25T20:53:21Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 103
   },
   {
    "Id": 2,
    "Time": "2022-06-14T15:29:27Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 219
   },
   {
    "Id": 41,
    "Time": "2022-05-05T09:59:11Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1700
   },
   {
    "Id": 41,
    "Time": "2022-05-26T08:54:24Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.410000498905488
   },
   {
    "Id": 13,
    "Time": "2022-06-09T06:04:51Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.28242957918222
   },
   {
    "Id": 12,
    "Time": "2022-05-05T21:50:28Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.4822843986025775
   },
   {
    "Id": 39,
    "Time": "2022-05-20T22:52:31Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.8
   },
   {
    "Id": 41,
    "Time": "2022-06-23T02:41:50Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 377
   },
   {
    "Id": 4,
    "Time": "2022-06-23T05:12:43Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 30
   },
   {
    "Id": 16,
    "Time": "2022-05-19T21:20:48Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 50
   },
   {
    "Id": 24,
    "Time": "2022-06-06T07:17:54Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.9289472748863457
   },
   {
    "Id": 30,
    "Time": "2022-05-12T23:43:31Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1435
   },
   {
    "Id": 44,
    "Time": "2022-05-17T23:32:45Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.577743538243144
   },
   {
    "Id": 32,
    "Time": "2022-06-08T08:29:18Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 14,
    "Time": "2022-05-30T21:15:56Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 37
   },
   {
    "Id": 17,
    "Time": "2022-05-25T00:08:12Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1760
   },
   {
    "Id": 26,
    "Time": "2022-05-02T05:23:23Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.0617349309108577
   },
   {
    "Id": 25,
    "Time": "2022-05-15T19:10:41Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 280
   },
   {
    "Id": 35,
    "Time": "2022-05-09T03:24:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 117
   },
   {
    "Id": 15,
    "Time": "2022-05-23T04:38:41Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 46,
    "Time": "2022-06-24T18:48:40Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.2
   },
   {
    "Id": 47,
    "Time": "2022-06-07T09:31:59Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 40
   },
   {
    "Id": 14,
    "Time": "2022-05-12T20:40:04Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.432169639072472
   },
   {
    "Id": 11,
    "Time": "2022-05-19T07:13:01Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 105
   },
   {
    "Id": 3,
    "Time": "2022-06-12T21:23:01Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 122
   },
   {
    "Id": 10,
    "Time": "2022-05-01T20:42:30Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 8
   },
   {
    "Id": 27,
    "Time": "2022-06-25T02:18:23Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 85
   },
   {
    "Id": 40,
    "Time": "2022-06-14T18:31:14Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 47,
    "Time": "2022-06-14T19:44:22Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 34,
    "Time": "2022-05-13T07:29:59Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 71
   },
   {
    "Id": 39,
    "Time": "2022-05-05T20:47:28Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 49
   },
   {
    "Id": 43,
    "Time": "2022-06-08T17:13:22Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 106
   },
   {
    "Id": 2,
    "Time": "2022-06-22T10:39:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 4,
    "Time": "2022-06-17T07:14:41Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 246
   },
   {
    "Id": 11,
    "Time": "2022-05-22T01:06:23Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 28
   },
   {
    "Id": 44,
    "Time": "2022-06-30T22:32:17Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 36
   },
   {
    "Id": 38,
    "Time": "2022-05-12T05:24:54Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 56
   },
   {
    "Id": 30,
    "Time": "2022-06-10T00:01:20Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1654
   },
   {
    "Id": 44,
    "Time": "2022-05-23T00:22:18Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 58
   },
   {
    "Id": 7,
    "Time": "2022-05-12T08:33:48Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 91
   },
   {
    "Id": 41,
    "Time": "2022-05-21T19:51:54Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 28,
    "Time": "2022-06-18T09:59:13Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 16,
    "Time": "2022-05-23T15:44:44Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 12,
    "Time": "2022-06-24T01:28:37Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 46,
    "Time": "2022-06-11T19:02:43Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 102
   },
   {
    "Id": 32,
    "Time": "2022-05-07T00:11:56Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1541
   },
   {
    "Id": 16,
    "Time": "2022-06-16T12:45:16Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.8810940412429344
   },
   {
    "Id": 27,
    "Time": "2022-05-07T16:33:54Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 85
   },
   {
    "Id": 2,
    "Time": "2022-05-06T20:48:50Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 91
   },
   {
    "Id": 7,
    "Time": "2022-05-13T22:39:16Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 287
   },
   {
    "Id": 45,
    "Time": "2022-06-12T13:22:15Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.280011451894348
   },
   {
    "Id": 26,
    "Time": "2022-05-18T13:07:07Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.8632688178265253
   },
   {
    "Id": 40,
    "Time": "2022-05-19T23:24:02Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 18,
    "Time": "2022-06-25T14:13:54Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 298
   },
   {
    "Id": 3,
    "Time": "2022-05-20T20:12:30Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.2
   },
   {
    "Id": 10,
    "Time": "2022-05-05T21:47:49Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 347
   },
   {
    "Id": 22,
    "Time": "2022-06-02T18:29:57Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.69778036117471
   },
   {
    "Id": 12,
    "Time": "2022-06-29T13:37:42Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 56
   },
   {
    "Id": 15,
    "Time": "2022-05-11T11:58:00Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 77
   },
   {
    "Id": 33,
    "Time": "2022-05-10T15:44:15Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.333722979542163
   },
   {
    "Id": 1,
    "Time": "2022-05-14T21:15:29Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.252056310856487
   },
   {
    "Id": 38,
    "Time": "2022-05-09T04:20:54Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1870
   },
   {
    "Id": 30,
    "Time": "2022-05-29T20:14:17Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 33,
    "Time": "2022-05-21T00:11:51Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.050989505374654
   },
   {
    "Id": 1,
    "Time": "2022-05-23T10:00:10Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.6
   },
   {
    "Id": 36,
    "Time": "2022-05-13T11:20:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 32
   },
   {
    "Id": 37,
    "Time": "2022-05-08T18:20:43Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 348
   },
   {
    "Id": 10,
    "Time": "2022-06-07T11:45:49Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 16,
    "Time": "2022-06-21T03:11:17Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.6859181203855815
   },
   {
    "Id": 49,
    "Time": "2022-05-23T02:47:05Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.8
   },
   {
    "Id": 50,
    "Time": "2022-05-23T10:33:40Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 176
   },
   {
    "Id": 41,
    "Time": "2022-05-27T23:52:49Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 274
   },
   {
    "Id": 48,
    "Time": "2022-06-01T05:07:12Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 35
   },
   {
    "Id": 5,
    "Time": "2022-05-28T03:30:19Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.784579445403493
   },
   {
    "Id": 43,
    "Time": "2022-06-20T20:27:46Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 210
   },
   {
    "Id": 15,
    "Time": "2022-05-13T07:50:37Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 95
   },
   {
    "Id": 45,
    "Time": "2022-05-02T11:25:12Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 302
   },
   {
    "Id": 49,
    "Time": "2022-05-26T10:26:09Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 49,
    "Time": "2022-05-03T11:34:13Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 49
   },
   {
    "Id": 42,
    "Time": "2022-05-06T23:38:54Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 366
   },
   {
    "Id": 5,
    "Time": "2022-06-23T06:41:21Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1390
   },
   {
    "Id": 8,
    "Time": "2022-05-09T12:19:43Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1573
   },
   {
    "Id": 35,
    "Time": "2022-06-03T19:30:59Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1325
   },
   {
    "Id": 25,
    "Time": "2022-06-01T09:23:40Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1369
   },
   {
    "Id": 36,
    "Time": "2022-06-11T02:51:43Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 52
   },
   {
    "Id": 18,
    "Time": "2022-05-20T06:13:45Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 36,
    "Time": "2022-06-19T13:23:43Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 27
   },
   {
    "Id": 35,
    "Time": "2022-05-04T23:37:30Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1737
   },
   {
    "Id": 15,
    "Time": "2022-06-27T01:47:15Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 326
   },
   {
    "Id": 46,
    "Time": "2022-06-19T19:04:47Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 86
   },
   {
    "Id": 12,
    "Time": "2022-06-22T21:04:58Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.690052669430663
   },
   {
    "Id": 35,
    "Time": "2022-05-21T09:27:46Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.988576675088139
   },
   {
    "Id": 10,
    "Time": "2022-05-05T15:16:55Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 30,
    "Time": "2022-05-29T02:53:16Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1250
   },
   {
    "Id": 18,
    "Time": "2022-05-25T00:20:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 240
   },
   {
    "Id": 31,
    "Time": "2022-05-30T21:58:48Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 25
   },
   {
    "Id": 28,
    "Time": "2022-05-30T09:46:13Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 6
   },
   {
    "Id": 23,
    "Time": "2022-06-27T22:36:32Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1497
   },
   {
    "Id": 8,
    "Time": "2022-05-29T19:50:57Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 27
   },
   {
    "Id": 6,
    "Time": "2022-05-23T18:45:54Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 27,
    "Time": "2022-06-26T02:09:12Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 48,
    "Time": "2022-06-29T23:42:04Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 90
   },
   {
    "Id": 4,
    "Time": "2022-06-09T03:45:26Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 82
   },
   {
    "Id": 43,
    "Time": "2022-06-24T17:24:43Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1434
   },
   {
    "Id": 30,
    "Time": "2022-05-11T19:09:41Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 33,
    "Time": "2022-05-26T01:00:34Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 212
   },
   {
    "Id": 30,
    "Time": "2022-05-22T12:35:16Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 267
   },
   {
    "Id": 9,
    "Time": "2022-05-02T13:13:33Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 6
   },
   {
    "Id": 48,
    "Time": "2022-06-09T07:18:36Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 13,
    "Time": "2022-05-28T06:14:45Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.1
   },
   {
    "Id": 23,
    "Time": "2022-05-11T14:50:34Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 80
   },
   {
    "Id": 14,
    "Time": "2022-06-09T19:43:49Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.883191370481606
   },
   {
    "Id": 11,
    "Time": "2022-05-06T07:56:22Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 394
   },
   {
    "Id": 46,
    "Time": "2022-05-08T11:26:43Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.882826368874091
   },
   {
    "Id": 19,
    "Time": "2022-05-30T19:30:06Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 113
   },
   {
    "Id": 50,
    "Time": "2022-05-24T06:15:41Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 65
   },
   {
    "Id": 43,
    "Time": "2022-05-02T02:23:32Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 117
   },
   {
    "Id": 2,
    "Time": "2022-05-02T07:24:10Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 220
   },
   {
    "Id": 11,
    "Time": "2022-05-07T00:00:26Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 275
   },
   {
    "Id": 39,
    "Time": "2022-05-21T09:11:15Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 33
   },
   {
    "Id": 27,
    "Time": "2022-05-20T16:04:22Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 82
   },
   {
    "Id": 44,
    "Time": "2022-06-09T20:11:44Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 26
   },
   {
    "Id": 50,
    "Time": "2022-05-13T00:03:58Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1439
   },
   {
    "Id": 22,
    "Time": "2022-05-19T02:06:43Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 6,
    "Time": "2022-06-21T17:50:42Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 67
   },
   {
    "Id": 7,
    "Time": "2022-05-19T07:14:37Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 97
   },
   {
    "Id": 26,
    "Time": "2022-05-19T13:36:19Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 32,
    "Time": "2022-06-14T17:23:07Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 450
   },
   {
    "Id": 49,
    "Time": "2022-06-02T19:26:20Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 56
   },
   {
    "Id": 10,
    "Time": "2022-06-17T21:14:28Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1521
   },
   {
    "Id": 9,
    "Time": "2022-05-19T16:41:33Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 36,
    "Time": "2022-06-16T10:52:41Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 6,
    "Time": "2022-06-29T14:50:21Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 210
   },
   {
    "Id": 21,
    "Time": "2022-05-23T01:36:54Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 402
   },
   {
    "Id": 32,
    "Time": "2022-05-10T14:37:32Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 9,
    "Time": "2022-06-05T05:05:32Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.37954839497905
   },
   {
    "Id": 42,
    "Time": "2022-05-04T00:31:11Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 216
   },
   {
    "Id": 19,
    "Time": "2022-06-07T01:33:05Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 32,
    "Time": "2022-06-14T11:44:57Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 15,
    "Time": "2022-05-01T13:12:10Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 95
   },
   {
    "Id": 31,
    "Time": "2022-05-11T11:08:12Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 82
   },
   {
    "Id": 32,
    "Time": "2022-05-13T04:58:29Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 47,
    "Time": "2022-06-26T11:13:01Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 12,
    "Time": "2022-05-10T04:48:40Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 49
   },
   {
    "Id": 17,
    "Time": "2022-05-23T23:09:11Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 33
   },
   {
    "Id": 13,
    "Time": "2022-05-24T00:58:38Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 78
   },
   {
    "Id": 24,
    "Time": "2022-06-21T15:12:57Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 42
   },
   {
    "Id": 35,
    "Time": "2022-06-21T13:10:10Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.827448942272162
   },
   {
    "Id": 2,
    "Time": "2022-06-09T08:21:48Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 1,
    "Time": "2022-05-29T01:45:10Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.642271875126
   },
   {
    "Id": 30,
    "Time": "2022-06-13T06:05:02Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 8
   },
   {
    "Id": 42,
    "Time": "2022-06-19T03:02:05Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 176
   },
   {
    "Id": 45,
    "Time": "2022-06-03T05:06:52Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 323
   },
   {
    "Id": 31,
    "Time": "2022-05-17T04:05:58Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.682924179967196
   },
   {
    "Id": 16,
    "Time": "2022-05-03T10:01:42Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1364
   },
   {
    "Id": 36,
    "Time": "2022-05-10T12:45:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 45
   },
   {
    "Id": 13,
    "Time": "2022-05-24T18:41:08Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 27,
    "Time": "2022-05-03T22:07:55Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 355
   },
   {
    "Id": 41,
    "Time": "2022-05-06T07:11:28Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1687
   },
   {
    "Id": 36,
    "Time": "2022-05-09T05:38:12Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 14,
    "Time": "2022-06-16T00:37:05Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.4
   },
   {
    "Id": 43,
    "Time": "2022-06-16T21:30:41Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1488
   },
   {
    "Id": 49,
    "Time": "2022-05-22T16:32:08Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1377
   },
   {
    "Id": 32,
    "Time": "2022-05-18T00:34:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1475
   },
   {
    "Id": 36,
    "Time": "2022-06-27T16:29:04Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 39
   },
   {
    "Id": 31,
    "Time": "2022-06-06T19:21:21Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1337
   },
   {
    "Id": 49,
    "Time": "2022-05-03T10:13:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1560
   },
   {
    "Id": 32,
    "Time": "2022-06-04T06:36:55Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1550
   },
   {
    "Id": 3,
    "Time": "2022-06-20T16:43:18Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 398
   },
   {
    "Id": 2,
    "Time": "2022-06-20T14:48:18Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 217
   },
   {
    "Id": 12,
    "Time": "2022-06-06T09:36:25Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1644
   },
   {
    "Id": 41,
    "Time": "2022-06-13T13:11:33Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1771
   },
   {
    "Id": 37,
    "Time": "2022-05-18T14:22:03Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 9
   },
   {
    "Id": 28,
    "Time": "2022-06-09T05:23:13Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 40,
    "Time": "2022-05-18T20:27:16Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 100
   },
   {
    "Id": 29,
    "Time": "2022-05-15T07:07:10Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 27,
    "Time": "2022-06-17T20:56:42Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1341
   },
   {
    "Id": 24,
    "Time": "2022-06-17T03:01:41Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 52
   },
   {
    "Id": 17,
    "Time": "2022-05-17T12:45:08Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.286194759007277
   },
   {
    "Id": 32,
    "Time": "2022-05-14T23:13:53Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 25
   },
   {
    "Id": 16,
    "Time": "2022-06-18T10:52:44Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 67
   },
   {
    "Id": 47,
    "Time": "2022-06-17T20:57:18Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 3
   },
   {
    "Id": 37,
    "Time": "2022-06-27T00:30:42Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 26,
    "Time": "2022-05-13T19:45:09Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 98
   },
   {
    "Id": 17,
    "Time": "2022-05-25T21:48:09Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 81
   },
   {
    "Id": 48,
    "Time": "2022-06-14T10:10:26Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 82
   },
   {
    "Id": 48,
    "Time": "2022-06-25T12:04:22Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 297
   },
   {
    "Id": 2,
    "Time": "2022-05-02T05:43:34Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 49,
    "Time": "2022-05-27T02:12:14Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 33,
    "Time": "2022-05-16T02:16:40Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 5,
    "Time": "2022-06-23T20:53:35Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.1
   },
   {
    "Id": 37,
    "Time": "2022-05-23T15:59:17Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 48,
    "Time": "2022-06-02T21:45:34Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 39,
    "Time": "2022-06-13T10:51:05Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 90
   },
   {
    "Id": 24,
    "Time": "2022-06-14T22:34:17Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 32,
    "Time": "2022-06-30T11:08:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 3,
    "Time": "2022-06-13T00:44:10Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.5503867230755426
   },
   {
    "Id": 6,
    "Time": "2022-06-03T15:23:27Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 11,
    "Time": "2022-06-25T12:15:59Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 224
   },
   {
    "Id": 50,
    "Time": "2022-06-17T09:01:50Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 377
   },
   {
    "Id": 36,
    "Time": "2022-05-26T03:39:25Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 9
   },
   {
    "Id": 4,
    "Time": "2022-06-23T23:50:43Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 34,
    "Time": "2022-06-03T02:57:08Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1385
   },
   {
    "Id": 49,
    "Time": "2022-06-02T18:33:33Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.207512486493865
   },
   {
    "Id": 33,
    "Time": "2022-05-20T15:07:22Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 36
   },
   {
    "Id": 42,
    "Time": "2022-06-19T08:39:27Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 36
   },
   {
    "Id": 42,
    "Time": "2022-06-16T22:11:02Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.9
   },
   {
    "Id": 27,
    "Time": "2022-06-16T11:16:38Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 382
   },
   {
    "Id": 29,
    "Time": "2022-06-02T01:46:16Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.714329101849293
   },
   {
    "Id": 41,
    "Time": "2022-06-21T09:28:21Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.2
   },
   {
    "Id": 34,
    "Time": "2022-06-16T01:32:34Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 447
   },
   {
    "Id": 15,
    "Time": "2022-06-23T08:05:29Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 363
   },
   {
    "Id": 1,
    "Time": "2022-06-07T08:39:49Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 6
   },
   {
    "Id": 3,
    "Time": "2022-05-12T06:44:37Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.0382190282704906
   },
   {
    "Id": 30,
    "Time": "2022-06-22T23:36:06Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 180
   },
   {
    "Id": 39,
    "Time": "2022-06-12T09:50:01Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 112
   },
   {
    "Id": 38,
    "Time": "2022-06-08T17:46:59Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 8,
    "Time": "2022-05-21T21:04:59Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 48
   },
   {
    "Id": 18,
    "Time": "2022-05-28T00:21:09Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 17,
    "Time": "2022-05-08T08:31:01Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 32
   },
   {
    "Id": 49,
    "Time": "2022-06-28T15:45:01Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1530
   },
   {
    "Id": 14,
    "Time": "2022-05-21T20:21:21Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 45
   },
   {
    "Id": 47,
    "Time": "2022-06-22T04:47:09Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 56
   },
   {
    "Id": 36,
    "Time": "2022-06-22T20:24:00Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 29
   },
   {
    "Id": 7,
    "Time": "2022-06-26T19:35:36Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 91
   },
   {
    "Id": 37,
    "Time": "2022-06-01T16:12:42Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 4,
    "Time": "2022-05-21T23:07:40Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 44
   },
   {
    "Id": 27,
    "Time": "2022-05-25T04:38:41Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 340
   },
   {
    "Id": 45,
    "Time": "2022-06-05T11:11:32Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 37
   },
   {
    "Id": 30,
    "Time": "2022-06-24T06:17:06Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1455
   },
   {
    "Id": 4,
    "Time": "2022-05-14T11:42:22Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 292
   },
   {
    "Id": 6,
    "Time": "2022-05-02T08:37:26Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 223
   },
   {
    "Id": 21,
    "Time": "2022-06-12T21:34:23Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 250
   },
   {
    "Id": 28,
    "Time": "2022-05-13T09:16:37Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 53
   },
   {
    "Id": 23,
    "Time": "2022-05-27T22:41:55Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1340
   },
   {
    "Id": 49,
    "Time": "2022-05-07T03:48:31Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 58
   },
   {
    "Id": 45,
    "Time": "2022-06-29T16:47:07Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1445
   },
   {
    "Id": 2,
    "Time": "2022-05-15T20:33:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 10
   },
   {
    "Id": 34,
    "Time": "2022-05-04T15:01:14Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 293
   },
   {
    "Id": 47,
    "Time": "2022-06-09T00:25:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 42,
    "Time": "2022-06-25T01:50:35Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.519238045364715
   },
   {
    "Id": 50,
    "Time": "2022-05-23T04:38:57Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1400
   },
   {
    "Id": 20,
    "Time": "2022-06-30T20:00:49Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 25
   },
   {
    "Id": 16,
    "Time": "2022-05-09T14:21:51Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.6
   },
   {
    "Id": 29,
    "Time": "2022-06-05T05:54:26Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.333381495415518
   },
   {
    "Id": 39,
    "Time": "2022-06-16T02:41:34Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 461
   },
   {
    "Id": 11,
    "Time": "2022-06-21T18:05:54Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 72
   },
   {
    "Id": 3,
    "Time": "2022-06-04T23:24:10Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 5,
    "Time": "2022-06-01T00:48:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.4
   },
   {
    "Id": 22,
    "Time": "2022-06-17T17:06:13Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.6
   },
   {
    "Id": 5,
    "Time": "2022-06-28T06:46:31Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1523
   },
   {
    "Id": 14,
    "Time": "2022-05-06T13:30:37Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 306
   },
   {
    "Id": 37,
    "Time": "2022-06-19T12:40:03Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.52320098294241
   },
   {
    "Id": 23,
    "Time": "2022-06-18T16:45:24Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 376
   },
   {
    "Id": 9,
    "Time": "2022-05-16T22:24:02Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.7
   },
   {
    "Id": 42,
    "Time": "2022-06-23T16:26:14Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.8030472784239073
   },
   {
    "Id": 19,
    "Time": "2022-06-17T17:04:01Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 15,
    "Time": "2022-06-30T13:37:33Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 120
   },
   {
    "Id": 23,
    "Time": "2022-06-17T02:44:30Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 399
   },
   {
    "Id": 22,
    "Time": "2022-06-21T16:09:58Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 8
   },
   {
    "Id": 6,
    "Time": "2022-06-15T13:51:50Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 312
   },
   {
    "Id": 13,
    "Time": "2022-06-17T15:59:54Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 544
   },
   {
    "Id": 37,
    "Time": "2022-06-16T15:27:30Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.529580349828434
   },
   {
    "Id": 38,
    "Time": "2022-06-02T22:25:23Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 53
   },
   {
    "Id": 8,
    "Time": "2022-06-02T17:20:30Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1429
   },
   {
    "Id": 5,
    "Time": "2022-06-08T13:17:06Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.867436233290086
   },
   {
    "Id": 19,
    "Time": "2022-05-03T07:01:03Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1712
   },
   {
    "Id": 24,
    "Time": "2022-06-23T23:45:21Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 25,
    "Time": "2022-05-17T23:42:24Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 37
   },
   {
    "Id": 30,
    "Time": "2022-06-28T07:21:28Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 310
   },
   {
    "Id": 1,
    "Time": "2022-05-25T03:32:03Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 286
   },
   {
    "Id": 28,
    "Time": "2022-06-19T08:29:25Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 1
   },
   {
    "Id": 38,
    "Time": "2022-05-25T21:05:43Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 50,
    "Time": "2022-05-07T21:21:33Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 448
   },
   {
    "Id": 46,
    "Time": "2022-06-11T09:31:45Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 398
   },
   {
    "Id": 12,
    "Time": "2022-06-25T08:18:50Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 25
   },
   {
    "Id": 10,
    "Time": "2022-05-25T08:33:28Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 41,
    "Time": "2022-05-15T10:38:00Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 289
   },
   {
    "Id": 18,
    "Time": "2022-06-10T17:46:17Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 100
   },
   {
    "Id": 38,
    "Time": "2022-05-25T11:32:37Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 72
   },
   {
    "Id": 24,
    "Time": "2022-05-25T04:47:33Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 94
   },
   {
    "Id": 31,
    "Time": "2022-05-04T01:41:06Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 94
   },
   {
    "Id": 2,
    "Time": "2022-05-25T15:52:51Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 406
   },
   {
    "Id": 42,
    "Time": "2022-05-27T18:23:38Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 495
   },
   {
    "Id": 38,
    "Time": "2022-05-06T20:06:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 6
   },
   {
    "Id": 46,
    "Time": "2022-06-24T19:36:27Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1072
   },
   {
    "Id": 25,
    "Time": "2022-06-15T15:14:31Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 366
   },
   {
    "Id": 1,
    "Time": "2022-06-09T14:04:18Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 50
   },
   {
    "Id": 38,
    "Time": "2022-06-11T04:31:02Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 181
   },
   {
    "Id": 34,
    "Time": "2022-06-10T12:30:24Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 347
   },
   {
    "Id": 6,
    "Time": "2022-06-20T15:06:27Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 60
   },
   {
    "Id": 19,
    "Time": "2022-05-23T07:36:49Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 117
   },
   {
    "Id": 12,
    "Time": "2022-05-18T20:55:34Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1529
   },
   {
    "Id": 34,
    "Time": "2022-06-29T07:20:54Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1419
   },
   {
    "Id": 1,
    "Time": "2022-06-14T07:01:40Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.954554326862477
   },
   {
    "Id": 31,
    "Time": "2022-06-12T13:05:50Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 65
   },
   {
    "Id": 14,
    "Time": "2022-05-06T18:34:37Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.53667605834637
   },
   {
    "Id": 19,
    "Time": "2022-05-23T17:34:59Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 250
   },
   {
    "Id": 40,
    "Time": "2022-05-22T13:59:28Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 349
   },
   {
    "Id": 48,
    "Time": "2022-05-12T01:56:34Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 26
   },
   {
    "Id": 35,
    "Time": "2022-05-24T16:19:43Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1647
   },
   {
    "Id": 18,
    "Time": "2022-05-30T07:29:25Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 102
   },
   {
    "Id": 17,
    "Time": "2022-06-08T15:27:31Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.260973471318461
   },
   {
    "Id": 21,
    "Time": "2022-06-05T00:55:51Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 88
   },
   {
    "Id": 13,
    "Time": "2022-06-05T07:06:14Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 223
   },
   {
    "Id": 38,
    "Time": "2022-06-05T14:13:44Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1585
   },
   {
    "Id": 33,
    "Time": "2022-05-10T10:06:47Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.4
   },
   {
    "Id": 49,
    "Time": "2022-06-06T15:31:31Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1394
   },
   {
    "Id": 4,
    "Time": "2022-05-30T14:58:22Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 47
   },
   {
    "Id": 48,
    "Time": "2022-05-28T18:04:34Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 35
   },
   {
    "Id": 14,
    "Time": "2022-05-27T17:18:06Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 44
   },
   {
    "Id": 29,
    "Time": "2022-06-23T10:50:01Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 95
   },
   {
    "Id": 41,
    "Time": "2022-05-20T01:01:55Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1515
   },
   {
    "Id": 34,
    "Time": "2022-05-07T09:54:12Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 52
   },
   {
    "Id": 25,
    "Time": "2022-06-14T08:08:36Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1643
   },
   {
    "Id": 13,
    "Time": "2022-06-07T03:24:30Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 286
   },
   {
    "Id": 30,
    "Time": "2022-06-24T06:14:56Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 271
   },
   {
    "Id": 49,
    "Time": "2022-06-21T12:15:41Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.27821704253774
   },
   {
    "Id": 17,
    "Time": "2022-05-01T12:55:10Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.016341002811957
   },
   {
    "Id": 43,
    "Time": "2022-06-28T06:57:48Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 29,
    "Time": "2022-05-29T23:47:59Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 2,
    "Time": "2022-05-27T08:34:57Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 40,
    "Time": "2022-06-13T19:48:07Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 89
   },
   {
    "Id": 8,
    "Time": "2022-05-09T12:13:17Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1357
   },
   {
    "Id": 5,
    "Time": "2022-06-06T18:13:49Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 287
   },
   {
    "Id": 49,
    "Time": "2022-06-05T12:35:22Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.708348856156524
   },
   {
    "Id": 39,
    "Time": "2022-05-18T13:10:48Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.694670306093528
   },
   {
    "Id": 26,
    "Time": "2022-06-06T21:59:58Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 5
   },
   {
    "Id": 37,
    "Time": "2022-06-05T04:17:27Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.7
   },
   {
    "Id": 5,
    "Time": "2022-06-05T01:06:32Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.409465608938223
   },
   {
    "Id": 33,
    "Time": "2022-05-19T16:09:22Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 61
   },
   {
    "Id": 21,
    "Time": "2022-05-09T21:40:22Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.400077739731234
   },
   {
    "Id": 13,
    "Time": "2022-06-28T19:01:22Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.823136274805755
   },
   {
    "Id": 35,
    "Time": "2022-05-30T03:59:33Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 94
   },
   {
    "Id": 25,
    "Time": "2022-05-22T20:48:03Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 45
   },
   {
    "Id": 13,
    "Time": "2022-06-12T22:26:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 300
   },
   {
    "Id": 22,
    "Time": "2022-06-04T17:55:41Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 26
   },
   {
    "Id": 44,
    "Time": "2022-05-04T03:09:21Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 40,
    "Time": "2022-05-22T10:03:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 443
   },
   {
    "Id": 8,
    "Time": "2022-06-03T00:36:16Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 8,
    "Time": "2022-06-18T14:11:56Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 28,
    "Time": "2022-06-12T10:46:20Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 57
   },
   {
    "Id": 12,
    "Time": "2022-06-02T21:54:01Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 25
   },
   {
    "Id": 44,
    "Time": "2022-06-22T19:24:57Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 7,
    "Time": "2022-06-29T21:21:13Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 118
   },
   {
    "Id": 37,
    "Time": "2022-06-08T10:58:57Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 9,
    "Time": "2022-06-24T20:26:17Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.714092622213577
   },
   {
    "Id": 23,
    "Time": "2022-05-23T20:40:00Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 372
   },
   {
    "Id": 39,
    "Time": "2022-05-18T20:38:30Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 184
   },
   {
    "Id": 15,
    "Time": "2022-06-30T15:28:03Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 272
   },
   {
    "Id": 8,
    "Time": "2022-06-09T14:12:56Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 46
   },
   {
    "Id": 7,
    "Time": "2022-06-16T20:11:03Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 83
   },
   {
    "Id": 46,
    "Time": "2022-05-21T03:29:19Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 426
   },
   {
    "Id": 17,
    "Time": "2022-05-23T11:17:38Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.4
   },
   {
    "Id": 34,
    "Time": "2022-06-01T23:11:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1650
   },
   {
    "Id": 8,
    "Time": "2022-06-20T01:28:45Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 20,
    "Time": "2022-06-12T18:58:22Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 47
   },
   {
    "Id": 26,
    "Time": "2022-06-22T21:50:43Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 27,
    "Time": "2022-05-01T03:12:04Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1310
   },
   {
    "Id": 21,
    "Time": "2022-05-11T20:59:36Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1765
   },
   {
    "Id": 31,
    "Time": "2022-06-12T05:07:49Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.1007537194492745
   },
   {
    "Id": 39,
    "Time": "2022-06-02T05:50:45Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 116
   },
   {
    "Id": 36,
    "Time": "2022-05-15T15:22:18Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 33,
    "Time": "2022-06-09T00:16:29Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 35
   },
   {
    "Id": 20,
    "Time": "2022-05-23T04:38:09Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 31
   },
   {
    "Id": 11,
    "Time": "2022-05-04T08:34:48Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 42
   },
   {
    "Id": 18,
    "Time": "2022-06-27T11:20:31Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 79
   },
   {
    "Id": 8,
    "Time": "2022-05-16T09:07:13Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 41,
    "Time": "2022-06-19T03:27:54Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 10,
    "Time": "2022-05-10T19:19:42Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 37,
    "Time": "2022-05-21T14:46:03Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 253
   },
   {
    "Id": 39,
    "Time": "2022-06-04T20:30:15Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1342
   },
   {
    "Id": 16,
    "Time": "2022-05-02T17:24:00Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 48
   },
   {
    "Id": 23,
    "Time": "2022-06-15T11:11:04Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 90
   },
   {
    "Id": 40,
    "Time": "2022-05-21T14:34:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 38,
    "Time": "2022-05-09T18:52:55Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 2,
    "Time": "2022-05-06T21:13:51Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 244
   },
   {
    "Id": 38,
    "Time": "2022-06-26T13:54:57Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 211
   },
   {
    "Id": 36,
    "Time": "2022-05-06T07:00:57Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 48
   },
   {
    "Id": 48,
    "Time": "2022-05-10T19:49:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 37,
    "Time": "2022-06-03T03:33:09Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 1,
    "Time": "2022-05-19T10:40:13Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1352
   },
   {
    "Id": 24,
    "Time": "2022-06-23T10:14:14Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 81
   },
   {
    "Id": 34,
    "Time": "2022-06-23T20:40:56Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 59
   },
   {
    "Id": 15,
    "Time": "2022-06-23T12:01:06Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 85
   },
   {
    "Id": 31,
    "Time": "2022-06-12T04:21:12Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 120
   },
   {
    "Id": 43,
    "Time": "2022-06-22T04:26:33Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1648
   },
   {
    "Id": 21,
    "Time": "2022-06-26T15:31:44Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.19257242900969
   },
   {
    "Id": 14,
    "Time": "2022-06-19T23:44:53Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 344
   },
   {
    "Id": 4,
    "Time": "2022-06-03T16:57:24Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 37
   },
   {
    "Id": 32,
    "Time": "2022-06-07T04:00:01Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 328
   },
   {
    "Id": 17,
    "Time": "2022-05-08T07:09:07Z",
    "Machine": "Dozer_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 9
   },
   {
    "Id": 50,
    "Time": "2022-05-05T16:57:01Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 43
   },
   {
    "Id": 5,
    "Time": "2022-06-21T11:20:42Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 276
   },
   {
    "Id": 33,
    "Time": "2022-05-14T09:43:59Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.014178900447844
   },
   {
    "Id": 44,
    "Time": "2022-06-18T05:32:08Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 41
   },
   {
    "Id": 24,
    "Time": "2022-05-26T04:44:24Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.2597192407396935
   },
   {
    "Id": 3,
    "Time": "2022-05-01T08:01:41Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 243
   },
   {
    "Id": 24,
    "Time": "2022-06-07T12:15:03Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 56
   },
   {
    "Id": 12,
    "Time": "2022-06-23T00:10:54Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.7
   },
   {
    "Id": 49,
    "Time": "2022-05-11T21:15:07Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 13,
    "Time": "2022-06-10T06:17:06Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.719444354190909
   },
   {
    "Id": 40,
    "Time": "2022-06-21T03:03:40Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 354
   },
   {
    "Id": 33,
    "Time": "2022-06-22T06:01:52Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.425671506354378
   },
   {
    "Id": 47,
    "Time": "2022-06-20T10:39:17Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 125
   },
   {
    "Id": 20,
    "Time": "2022-06-02T02:28:19Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 18,
    "Time": "2022-06-15T16:21:53Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 10,
    "Time": "2022-05-13T18:58:13Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 44,
    "Time": "2022-06-17T08:14:08Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 329
   },
   {
    "Id": 7,
    "Time": "2022-05-19T10:03:33Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 258
   },
   {
    "Id": 39,
    "Time": "2022-06-01T06:07:39Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 87
   },
   {
    "Id": 35,
    "Time": "2022-05-18T05:49:35Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 94
   },
   {
    "Id": 35,
    "Time": "2022-05-13T05:51:14Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 85
   },
   {
    "Id": 38,
    "Time": "2022-05-17T15:25:35Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1443
   },
   {
    "Id": 18,
    "Time": "2022-05-05T19:26:24Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 26,
    "Time": "2022-06-23T00:44:20Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 190
   },
   {
    "Id": 22,
    "Time": "2022-06-17T08:17:44Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 8
   },
   {
    "Id": 13,
    "Time": "2022-06-21T05:48:44Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 89
   },
   {
    "Id": 50,
    "Time": "2022-05-12T19:31:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 391
   },
   {
    "Id": 1,
    "Time": "2022-06-17T11:44:09Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1655
   },
   {
    "Id": 34,
    "Time": "2022-06-10T03:56:00Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 43
   },
   {
    "Id": 43,
    "Time": "2022-05-09T20:57:26Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 79
   },
   {
    "Id": 42,
    "Time": "2022-05-30T10:48:15Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 424
   },
   {
    "Id": 46,
    "Time": "2022-05-19T23:03:11Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 270
   },
   {
    "Id": 12,
    "Time": "2022-06-30T15:55:21Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 28
   },
   {
    "Id": 46,
    "Time": "2022-05-12T10:21:07Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 80
   },
   {
    "Id": 48,
    "Time": "2022-05-13T05:10:04Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 28,
    "Time": "2022-06-29T06:59:28Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 51
   },
   {
    "Id": 37,
    "Time": "2022-05-20T18:34:35Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 92
   },
   {
    "Id": 50,
    "Time": "2022-05-08T23:35:46Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 51
   },
   {
    "Id": 10,
    "Time": "2022-06-01T05:43:24Z",
    "Machine": "Excavator_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 359
   },
   {
    "Id": 42,
    "Time": "2022-06-13T18:49:21Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 38
   },
   {
    "Id": 22,
    "Time": "2022-05-17T15:55:05Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 4,
    "Time": "2022-06-03T21:24:15Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 78
   },
   {
    "Id": 22,
    "Time": "2022-06-18T01:20:27Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 205
   },
   {
    "Id": 10,
    "Time": "2022-06-17T04:21:38Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 222
   },
   {
    "Id": 12,
    "Time": "2022-06-28T17:11:12Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1720
   },
   {
    "Id": 39,
    "Time": "2022-05-23T20:13:07Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.36001650764642
   },
   {
    "Id": 45,
    "Time": "2022-05-08T05:33:36Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.9
   },
   {
    "Id": 19,
    "Time": "2022-06-30T18:55:06Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 122
   },
   {
    "Id": 35,
    "Time": "2022-05-24T20:26:17Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 76
   },
   {
    "Id": 33,
    "Time": "2022-06-17T17:43:46Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 302
   },
   {
    "Id": 3,
    "Time": "2022-06-28T02:33:43Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 53
   },
   {
    "Id": 28,
    "Time": "2022-06-08T09:20:40Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 26
   },
   {
    "Id": 45,
    "Time": "2022-06-11T06:26:08Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1440
   },
   {
    "Id": 36,
    "Time": "2022-06-07T10:24:30Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 20,
    "Time": "2022-05-02T14:34:40Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 38
   },
   {
    "Id": 2,
    "Time": "2022-06-03T05:13:41Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 1
   },
   {
    "Id": 4,
    "Time": "2022-05-21T11:13:39Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 335
   },
   {
    "Id": 12,
    "Time": "2022-05-16T12:24:13Z",
    "Machine": "Dozer_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 40
   },
   {
    "Id": 20,
    "Time": "2022-05-12T09:48:46Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 19,
    "Time": "2022-05-20T13:06:28Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 8,
    "Time": "2022-06-26T11:53:34Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 59
   },
   {
    "Id": 45,
    "Time": "2022-05-19T02:10:45Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 412
   },
   {
    "Id": 25,
    "Time": "2022-05-04T18:38:30Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 45
   },
   {
    "Id": 22,
    "Time": "2022-05-07T11:39:05Z",
    "Machine": "Excavator_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.8165667133854075
   },
   {
    "Id": 20,
    "Time": "2022-06-02T11:23:52Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 41
   },
   {
    "Id": 4,
    "Time": "2022-06-11T14:27:32Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 104
   },
   {
    "Id": 18,
    "Time": "2022-06-17T10:14:19Z",
    "Machine": "Dozer_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 202
   },
   {
    "Id": 1,
    "Time": "2022-05-05T13:42:55Z",
    "Machine": "Excavator_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1755
   },
   {
    "Id": 42,
    "Time": "2022-05-29T01:20:19Z",
    "Machine": "Dozer_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 39
   },
   {
    "Id": 23,
    "Time": "2022-06-16T13:19:07Z",
    "Machine": "Articulated_Truck_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 0
   },
   {
    "Id": 25,
    "Time": "2022-05-20T16:53:50Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 283
   },
   {
    "Id": 11,
    "Time": "2022-06-16T21:07:33Z",
    "Machine": "Backhoe_Loader_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 88
   },
   {
    "Id": 49,
    "Time": "2022-06-19T15:31:30Z",
    "Machine": "Excavator_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 45
   },
   {
    "Id": 19,
    "Time": "2022-05-02T02:13:44Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 395
   },
   {
    "Id": 8,
    "Time": "2022-05-03T16:47:08Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1391
   },
   {
    "Id": 17,
    "Time": "2022-05-04T08:45:50Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 26
   },
   {
    "Id": 11,
    "Time": "2022-05-04T17:43:01Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 99
   },
   {
    "Id": 15,
    "Time": "2022-05-04T19:25:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 78
   },
   {
    "Id": 48,
    "Time": "2022-05-05T04:11:17Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 372
   },
   {
    "Id": 37,
    "Time": "2022-05-05T07:38:09Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.98
   },
   {
    "Id": 44,
    "Time": "2022-05-05T10:47:46Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 59
   },
   {
    "Id": 1,
    "Time": "2022-05-06T02:09:45Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 12,
    "Time": "2022-05-06T03:01:06Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.77
   },
   {
    "Id": 15,
    "Time": "2022-05-06T10:05:16Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 88
   },
   {
    "Id": 45,
    "Time": "2022-05-06T13:34:08Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1362
   },
   {
    "Id": 31,
    "Time": "2022-05-07T08:23:17Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 117
   },
   {
    "Id": 4,
    "Time": "2022-05-07T16:10:36Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 259
   },
   {
    "Id": 27,
    "Time": "2022-05-07T16:16:35Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 283
   },
   {
    "Id": 46,
    "Time": "2022-05-07T18:40:29Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 826
   },
   {
    "Id": 5,
    "Time": "2022-05-08T03:05:07Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1413
   },
   {
    "Id": 23,
    "Time": "2022-05-08T04:46:58Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 288
   },
   {
    "Id": 47,
    "Time": "2022-05-08T05:37:47Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 24,
    "Time": "2022-05-08T09:06:59Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.95
   },
   {
    "Id": 7,
    "Time": "2022-05-08T21:48:22Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 398
   },
   {
    "Id": 21,
    "Time": "2022-05-09T01:16:11Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1300
   },
   {
    "Id": 25,
    "Time": "2022-05-09T05:26:50Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.79
   },
   {
    "Id": 47,
    "Time": "2022-05-10T02:49:51Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 117
   },
   {
    "Id": 48,
    "Time": "2022-05-10T03:54:56Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 24,
    "Time": "2022-05-10T20:00:10Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 37
   },
   {
    "Id": 31,
    "Time": "2022-05-10T21:45:28Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 924
   },
   {
    "Id": 12,
    "Time": "2022-05-11T06:12:11Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1424
   },
   {
    "Id": 16,
    "Time": "2022-05-11T22:26:16Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1554
   },
   {
    "Id": 19,
    "Time": "2022-05-11T23:22:16Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1481
   },
   {
    "Id": 9,
    "Time": "2022-05-12T02:03:47Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 27,
    "Time": "2022-05-12T08:53:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 77
   },
   {
    "Id": 35,
    "Time": "2022-05-12T15:23:18Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 87
   },
   {
    "Id": 2,
    "Time": "2022-05-13T00:30:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 86
   },
   {
    "Id": 35,
    "Time": "2022-05-14T05:52:16Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 97
   },
   {
    "Id": 10,
    "Time": "2022-05-14T06:37:02Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 37,
    "Time": "2022-05-14T10:29:15Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 279
   },
   {
    "Id": 11,
    "Time": "2022-05-14T11:35:47Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 272
   },
   {
    "Id": 25,
    "Time": "2022-05-14T19:11:53Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 416
   },
   {
    "Id": 34,
    "Time": "2022-05-14T20:47:51Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 200
   },
   {
    "Id": 13,
    "Time": "2022-05-14T23:41:06Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 87
   },
   {
    "Id": 8,
    "Time": "2022-05-15T09:33:08Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 60
   },
   {
    "Id": 38,
    "Time": "2022-05-15T10:30:42Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1421
   },
   {
    "Id": 50,
    "Time": "2022-05-15T19:24:52Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 221
   },
   {
    "Id": 36,
    "Time": "2022-05-15T21:26:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 7,
    "Time": "2022-05-16T02:29:41Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 113
   },
   {
    "Id": 30,
    "Time": "2022-05-16T03:40:19Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 282
   },
   {
    "Id": 40,
    "Time": "2022-05-16T23:30:20Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 384
   },
   {
    "Id": 5,
    "Time": "2022-05-17T02:48:57Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1538
   },
   {
    "Id": 42,
    "Time": "2022-05-17T22:40:47Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 59
   },
   {
    "Id": 29,
    "Time": "2022-05-18T02:55:12Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 102
   },
   {
    "Id": 26,
    "Time": "2022-05-18T05:19:47Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.28
   },
   {
    "Id": 40,
    "Time": "2022-05-18T09:59:27Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 9,
    "Time": "2022-05-18T10:27:02Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.01
   },
   {
    "Id": 43,
    "Time": "2022-05-18T13:23:17Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1736
   },
   {
    "Id": 29,
    "Time": "2022-05-18T19:22:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 203
   },
   {
    "Id": 31,
    "Time": "2022-05-18T19:57:01Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 40
   },
   {
    "Id": 1,
    "Time": "2022-05-19T09:18:17Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.22
   },
   {
    "Id": 46,
    "Time": "2022-05-19T12:38:46Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.68
   },
   {
    "Id": 16,
    "Time": "2022-05-19T14:42:25Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 27
   },
   {
    "Id": 28,
    "Time": "2022-05-20T00:08:40Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 58
   },
   {
    "Id": 38,
    "Time": "2022-05-20T04:26:18Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 45
   },
   {
    "Id": 25,
    "Time": "2022-05-20T11:50:18Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 378
   },
   {
    "Id": 8,
    "Time": "2022-05-21T01:46:50Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 25
   },
   {
    "Id": 9,
    "Time": "2022-05-21T05:34:03Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 887
   },
   {
    "Id": 30,
    "Time": "2022-05-21T13:33:32Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1661
   },
   {
    "Id": 2,
    "Time": "2022-05-21T16:35:51Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 249
   },
   {
    "Id": 42,
    "Time": "2022-05-21T22:25:01Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 980
   },
   {
    "Id": 4,
    "Time": "2022-05-22T05:58:24Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 45
   },
   {
    "Id": 29,
    "Time": "2022-05-22T15:03:09Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 1,
    "Time": "2022-05-23T00:40:36Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1340
   },
   {
    "Id": 35,
    "Time": "2022-05-23T06:49:18Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 110
   },
   {
    "Id": 4,
    "Time": "2022-05-23T06:55:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 98
   },
   {
    "Id": 46,
    "Time": "2022-05-23T19:54:28Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 77
   },
   {
    "Id": 25,
    "Time": "2022-05-23T22:25:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 46
   },
   {
    "Id": 18,
    "Time": "2022-05-24T01:46:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 22,
    "Time": "2022-05-24T08:19:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 32
   },
   {
    "Id": 45,
    "Time": "2022-05-24T12:53:15Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.84
   },
   {
    "Id": 32,
    "Time": "2022-05-24T14:22:12Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 33
   },
   {
    "Id": 48,
    "Time": "2022-05-25T00:27:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 16,
    "Time": "2022-05-25T06:27:45Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.73
   },
   {
    "Id": 10,
    "Time": "2022-05-25T07:56:46Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1331
   },
   {
    "Id": 39,
    "Time": "2022-05-25T14:34:41Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 708
   },
   {
    "Id": 45,
    "Time": "2022-05-25T23:33:08Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 58
   },
   {
    "Id": 41,
    "Time": "2022-05-26T08:10:33Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 27,
    "Time": "2022-05-26T10:14:42Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 4
   },
   {
    "Id": 23,
    "Time": "2022-05-26T11:21:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 427
   },
   {
    "Id": 37,
    "Time": "2022-05-26T13:46:18Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 101
   },
   {
    "Id": 22,
    "Time": "2022-05-26T20:33:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 243
   },
   {
    "Id": 33,
    "Time": "2022-05-27T00:58:30Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.31
   },
   {
    "Id": 11,
    "Time": "2022-05-27T06:51:44Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 56
   },
   {
    "Id": 18,
    "Time": "2022-05-27T08:54:27Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 90
   },
   {
    "Id": 50,
    "Time": "2022-05-27T16:53:38Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 622
   },
   {
    "Id": 39,
    "Time": "2022-05-27T20:33:12Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.63
   },
   {
    "Id": 38,
    "Time": "2022-05-28T17:54:20Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 5,
    "Time": "2022-05-28T20:01:11Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.42
   },
   {
    "Id": 33,
    "Time": "2022-05-29T02:05:09Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 58
   },
   {
    "Id": 9,
    "Time": "2022-05-30T00:47:39Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 61
   },
   {
    "Id": 30,
    "Time": "2022-05-30T06:13:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 9
   },
   {
    "Id": 41,
    "Time": "2022-05-30T10:10:00Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1597
   },
   {
    "Id": 29,
    "Time": "2022-05-30T10:18:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.84
   },
   {
    "Id": 20,
    "Time": "2022-05-30T13:23:00Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 7,
    "Time": "2022-05-30T13:25:59Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 87
   },
   {
    "Id": 16,
    "Time": "2022-05-30T18:37:35Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 56
   },
   {
    "Id": 20,
    "Time": "2022-06-02T12:24:24Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 24
   },
   {
    "Id": 47,
    "Time": "2022-06-02T12:46:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 35
   },
   {
    "Id": 2,
    "Time": "2022-06-02T13:50:33Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 42,
    "Time": "2022-06-02T16:47:26Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 341
   },
   {
    "Id": 13,
    "Time": "2022-06-03T00:22:59Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.01
   },
   {
    "Id": 6,
    "Time": "2022-06-03T06:19:56Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 62
   },
   {
    "Id": 35,
    "Time": "2022-06-03T11:08:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.36
   },
   {
    "Id": 14,
    "Time": "2022-06-03T12:54:34Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 32,
    "Time": "2022-06-03T13:25:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1726
   },
   {
    "Id": 43,
    "Time": "2022-06-04T02:31:02Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 100
   },
   {
    "Id": 28,
    "Time": "2022-06-04T21:52:27Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 61
   },
   {
    "Id": 22,
    "Time": "2022-06-05T08:51:53Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 26,
    "Time": "2022-06-07T13:54:10Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 75
   },
   {
    "Id": 17,
    "Time": "2022-06-07T14:21:31Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 8
   },
   {
    "Id": 14,
    "Time": "2022-06-07T14:42:16Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.79
   },
   {
    "Id": 28,
    "Time": "2022-06-07T15:25:41Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 3
   },
   {
    "Id": 49,
    "Time": "2022-06-07T23:26:06Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 12.92
   },
   {
    "Id": 12,
    "Time": "2022-06-08T09:05:27Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 34
   },
   {
    "Id": 20,
    "Time": "2022-06-08T19:17:04Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 65
   },
   {
    "Id": 49,
    "Time": "2022-06-08T22:13:29Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 17,
    "Time": "2022-06-08T22:40:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 539
   },
   {
    "Id": 39,
    "Time": "2022-06-09T07:11:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 50
   },
   {
    "Id": 30,
    "Time": "2022-06-09T15:42:25Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 270
   },
   {
    "Id": 32,
    "Time": "2022-06-09T16:00:08Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 206
   },
   {
    "Id": 21,
    "Time": "2022-06-10T07:46:38Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 249
   },
   {
    "Id": 33,
    "Time": "2022-06-10T11:21:26Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.59
   },
   {
    "Id": 13,
    "Time": "2022-06-10T12:18:52Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 383
   },
   {
    "Id": 21,
    "Time": "2022-06-10T12:26:28Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1161
   },
   {
    "Id": 48,
    "Time": "2022-06-10T12:47:22Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 77
   },
   {
    "Id": 50,
    "Time": "2022-06-10T15:20:57Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 51
   },
   {
    "Id": 39,
    "Time": "2022-06-10T21:18:32Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 124
   },
   {
    "Id": 6,
    "Time": "2022-06-10T21:54:26Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 323
   },
   {
    "Id": 10,
    "Time": "2022-06-10T22:31:11Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 12,
    "Time": "2022-06-11T05:41:29Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 42
   },
   {
    "Id": 47,
    "Time": "2022-06-11T17:11:40Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 4
   },
   {
    "Id": 26,
    "Time": "2022-06-12T04:25:48Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 259
   },
   {
    "Id": 41,
    "Time": "2022-06-12T07:23:07Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 226
   },
   {
    "Id": 24,
    "Time": "2022-06-12T13:19:39Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 105
   },
   {
    "Id": 34,
    "Time": "2022-06-12T13:55:32Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1709
   },
   {
    "Id": 23,
    "Time": "2022-06-12T14:15:44Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 88
   },
   {
    "Id": 43,
    "Time": "2022-06-12T14:26:30Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 293
   },
   {
    "Id": 1,
    "Time": "2022-06-12T18:29:41Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 1444
   },
   {
    "Id": 23,
    "Time": "2022-06-13T01:00:57Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1622
   },
   {
    "Id": 3,
    "Time": "2022-06-13T10:39:44Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 124
   },
   {
    "Id": 13,
    "Time": "2022-06-13T14:28:05Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Water in Fuel",
    "Value": 776
   },
   {
    "Id": 21,
    "Time": "2022-06-14T03:43:47Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 13.11
   },
   {
    "Id": 17,
    "Time": "2022-06-14T19:34:37Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 15.7
   },
   {
    "Id": 31,
    "Time": "2022-06-15T05:05:30Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.81
   },
   {
    "Id": 40,
    "Time": "2022-06-15T18:26:13Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 49,
    "Time": "2022-06-16T03:34:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1484
   },
   {
    "Id": 14,
    "Time": "2022-06-16T19:12:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 49
   },
   {
    "Id": 22,
    "Time": "2022-06-17T05:41:51Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.2
   },
   {
    "Id": 33,
    "Time": "2022-06-17T21:33:42Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 398
   },
   {
    "Id": 34,
    "Time": "2022-06-17T22:12:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 65
   },
   {
    "Id": 10,
    "Time": "2022-06-18T21:12:12Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 338
   },
   {
    "Id": 32,
    "Time": "2022-06-18T21:14:46Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 2
   },
   {
    "Id": 20,
    "Time": "2022-06-19T09:14:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 29
   },
   {
    "Id": 42,
    "Time": "2022-06-19T14:49:37Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.83
   },
   {
    "Id": 26,
    "Time": "2022-06-19T16:20:55Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 10
   },
   {
    "Id": 3,
    "Time": "2022-06-20T17:14:49Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 58
   },
   {
    "Id": 19,
    "Time": "2022-06-20T18:03:11Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Hydraulic Pump Rate",
    "Value": 84
   },
   {
    "Id": 36,
    "Time": "2022-06-20T19:53:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Oil Pressure",
    "Value": 34
   },
   {
    "Id": 27,
    "Time": "2022-06-21T17:05:44Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Speed",
    "Value": 1594
   },
   {
    "Id": 19,
    "Time": "2022-06-22T03:16:50Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 7
   },
   {
    "Id": 46,
    "Time": "2022-06-22T05:57:27Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 295
   },
   {
    "Id": 11,
    "Time": "2022-06-22T09:19:59Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 437
   },
   {
    "Id": 8,
    "Time": "2022-06-22T10:24:37Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 10
   },
   {
    "Id": 34,
    "Time": "2022-06-23T09:07:45Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 387
   },
   {
    "Id": 41,
    "Time": "2022-06-23T14:04:08Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "System Voltage",
    "Value": 14.99
   },
   {
    "Id": 7,
    "Time": "2022-06-23T22:04:30Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.12
   },
   {
    "Id": 49,
    "Time": "2022-06-24T06:33:28Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Pressure",
    "Value": 61
   },
   {
    "Id": 37,
    "Time": "2022-06-24T08:48:18Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 5
   },
   {
    "Id": 2,
    "Time": "2022-06-24T19:49:46Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 281
   },
   {
    "Id": 50,
    "Time": "2022-06-24T22:02:12Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 232
   },
   {
    "Id": 36,
    "Time": "2022-06-25T03:09:34Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Brake Control",
    "Value": 2
   },
   {
    "Id": 15,
    "Time": "2022-06-25T06:47:25Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 306
   },
   {
    "Id": 44,
    "Time": "2022-06-25T19:08:58Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 4.61
   },
   {
    "Id": 15,
    "Time": "2022-06-25T22:53:21Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 291
   },
   {
    "Id": 24,
    "Time": "2022-06-26T09:29:43Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 32
   },
   {
    "Id": 3,
    "Time": "2022-06-26T12:12:38Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.06
   },
   {
    "Id": 45,
    "Time": "2022-06-26T13:36:30Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 303
   },
   {
    "Id": 44,
    "Time": "2022-06-26T15:25:15Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 22
   },
   {
    "Id": 38,
    "Time": "2022-06-27T02:53:27Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 237
   },
   {
    "Id": 18,
    "Time": "2022-06-27T08:56:16Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 6
   },
   {
    "Id": 3,
    "Time": "2022-06-27T22:52:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 394
   },
   {
    "Id": 5,
    "Time": "2022-06-27T23:12:14Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Pedal Sensor",
    "Value": 3.78
   },
   {
    "Id": 44,
    "Time": "2022-06-28T02:12:26Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Temparature",
    "Value": 383
   },
   {
    "Id": 6,
    "Time": "2022-06-28T02:42:28Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 1
   },
   {
    "Id": 40,
    "Time": "2022-06-28T18:02:23Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Engine",
    "Parameter": "Temparature",
    "Value": 81
   },
   {
    "Id": 6,
    "Time": "2022-06-28T18:25:33Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Drive",
    "Parameter": "Transmission Pressure",
    "Value": 332
   },
   {
    "Id": 36,
    "Time": "2022-06-29T00:33:59Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 20
   },
   {
    "Id": 18,
    "Time": "2022-06-29T16:29:54Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 263
   },
   {
    "Id": 43,
    "Time": "2022-06-29T16:52:23Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Fuel",
    "Parameter": "Level",
    "Value": 7
   },
   {
    "Id": 28,
    "Time": "2022-06-29T20:00:46Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 23
   },
   {
    "Id": 4,
    "Time": "2022-06-30T14:09:21Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Air Filter Pressure",
    "Value": 26
   },
   {
    "Id": 14,
    "Time": "2022-06-30T14:47:40Z",
    "Machine": "Asphalt_Paver_1",
    "Component": "Misc",
    "Parameter": "Exhaust Gas Temparature",
    "Value": 195
   }
  ]

  const transformData = (data) => {
    return data.reduce((acc, { Machine, Component, Time, Parameter, Value }) => {
      if (!acc[Machine]) {
        acc[Machine] = {};
      }
      if (!acc[Machine][Component]) {
        acc[Machine][Component] = [];
      }
      
      const existingTimeIndex = acc[Machine][Component].findIndex(entry => entry.Time === Time);
      
      if (existingTimeIndex !== -1) {
        // Update existing entry for this time, replace null with 0
        acc[Machine][Component][existingTimeIndex][Parameter] = Value === null ? 0 : Value;
      } else {
        // Create new entry for this time with null values replaced by 0
        acc[Machine][Component].push({ Time: Time, [Parameter]: Value === null ? 0 : Value });
      }
  
      return acc;
    }, {});
  };

  const ReadData = transformData(originalData);

// Export the transformed data
export default ReadData;