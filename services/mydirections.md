# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJB9XCu8_X1IkR2zQ402NoWoE&destination=place_id:ChIJV1IWONnX1IkRCWEjQQY0rgY&waypoints=place_id:ChIJVbdTwEPW1IkRv9EvOhWT0wY%7Cplace_id:ChIJ3biaF37X1IkR7R_zJhVrQzI&mode=walking&transit_routing_preference=less_walking&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJB9XCu8_X1IkR2zQ402NoWoE",
         "types" : [ "establishment", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJVbdTwEPW1IkRv9EvOhWT0wY",
         "types" : [ "premise" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ3biaF37X1IkR7R_zJhVrQzI",
         "types" : [ "establishment", "park", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJV1IWONnX1IkRCWEjQQY0rgY",
         "types" : [ "establishment", "park", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.8715206,
               "lng" : -79.24925259999999
            },
            "southwest" : {
               "lat" : 43.8619597,
               "lng" : -79.2804519
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "2.8 km",
                  "value" : 2764
               },
               "duration" : {
                  "text" : "34 mins",
                  "value" : 2026
               },
               "end_address" : "1 Riverview Rd, Markham, ON L3P 1E4, Canada",
               "end_location" : {
                  "lat" : 43.86928229999999,
                  "lng" : -79.26373529999999
               },
               "start_address" : "Markham, ON L3P, Canada",
               "start_location" : {
                  "lat" : 43.8642033,
                  "lng" : -79.27045029999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1008
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 731
                     },
                     "end_location" : {
                        "lat" : 43.8638385,
                        "lng" : -79.2804422
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gfvjGhoybNEjAA|@@H@HLf@^tAJVDHHJZRRJr@`@^TLHDFBFBJBN@b@D~@@\\@Z@NDVLh@t@tBZx@FP@N@L?NCNCNEVAHAJ@d@F`AN|@Dh@FPNr@Vj@H`@BLBHB\\@ZE\\CFGNq@fAi@x@SXQLEBABCBABAN?Z?j@?PCREPEFEDQLeBfAMJGFKREBEBG@OC"
                     },
                     "start_location" : {
                        "lat" : 43.8642033,
                        "lng" : -79.27045029999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 297
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 238
                     },
                     "end_location" : {
                        "lat" : 43.8645923,
                        "lng" : -79.27696879999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_dvjGvm{bNOq@Q_AUaAMq@Gm@EYBWBG?K?C?OAICICKEME[EQCGGMESCSIi@AI?G?I?G?E@KAKAOE[CU"
                     },
                     "start_location" : {
                        "lat" : 43.8638385,
                        "lng" : -79.2804422
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 138
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 43.8655521,
                        "lng" : -79.27599549999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uhvjG`xzbNKEECQKm@e@[a@IWIUOU]a@CCAAA?GF"
                     },
                     "start_location" : {
                        "lat" : 43.8645923,
                        "lng" : -79.27696879999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 178
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 115
                     },
                     "end_location" : {
                        "lat" : 43.8663696,
                        "lng" : -79.27419499999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eDrakefield Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "unvjG~qzbNGUECECECECACEGG[M}@O{@Ik@G]CGEESW[a@IO"
                     },
                     "start_location" : {
                        "lat" : 43.8655521,
                        "lng" : -79.27599549999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 610
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 442
                     },
                     "end_location" : {
                        "lat" : 43.8687502,
                        "lng" : -79.26841469999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDrakefield Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ysvjGtfzbN@MAKAKg@gDi@uDAGCCECEAG?oBt@E@E?E?CAGEWg@Wg@GQGMCKSyA[kBi@qDE_@o@mEEYEa@"
                     },
                     "start_location" : {
                        "lat" : 43.8663696,
                        "lng" : -79.27419499999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 104
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 69
                     },
                     "end_location" : {
                        "lat" : 43.86783339999999,
                        "lng" : -79.2681839
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWillowgate Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ubwjGpbybNvDm@"
                     },
                     "start_location" : {
                        "lat" : 43.8687502,
                        "lng" : -79.26841469999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 203
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 166
                     },
                     "end_location" : {
                        "lat" : 43.8683688,
                        "lng" : -79.2657701
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRiverview Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}|vjGbaybNAUCY?EE]E_@G[UuAWmBOeASgA"
                     },
                     "start_location" : {
                        "lat" : 43.86783339999999,
                        "lng" : -79.2681839
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "50 m",
                        "value" : 50
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 43.8688114,
                        "lng" : -79.2658349
                     },
                     "html_instructions" : "\u003cb\u003eRiverview Ave\u003c/b\u003e turns \u003cb\u003eleft\u003c/b\u003e and becomes \u003cb\u003eOvida Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "i`wjG`rxbNGCI?eAN"
                     },
                     "start_location" : {
                        "lat" : 43.8683688,
                        "lng" : -79.2657701
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 176
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 126
                     },
                     "end_location" : {
                        "lat" : 43.86928229999999,
                        "lng" : -79.26373529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiverview Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "acwjGlrxbNsAqJIo@"
                     },
                     "start_location" : {
                        "lat" : 43.8688114,
                        "lng" : -79.2658349
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1.1 km",
                  "value" : 1077
               },
               "duration" : {
                  "text" : "14 mins",
                  "value" : 849
               },
               "end_address" : "Rougehaven Parkette, Unnamed Road, Markham, ON L3P 7W5, Canada",
               "end_location" : {
                  "lat" : 43.8664146,
                  "lng" : -79.25516789999999
               },
               "start_address" : "1 Riverview Rd, Markham, ON L3P 1E4, Canada",
               "start_location" : {
                  "lat" : 43.86928229999999,
                  "lng" : -79.26373529999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "19 m",
                        "value" : 19
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 43.8693535,
                        "lng" : -79.26351989999999
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eRiverview Rd\u003c/b\u003e toward \u003cb\u003eMilne Ln\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_fwjGjexbNCQCSEE"
                     },
                     "start_location" : {
                        "lat" : 43.86928229999999,
                        "lng" : -79.26373529999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 99
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 43.8684804,
                        "lng" : -79.26331019999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eMilne Ln\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mfwjG~cxbN`@In@MTCf@GVED?"
                     },
                     "start_location" : {
                        "lat" : 43.8693535,
                        "lng" : -79.26351989999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 207
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 167
                     },
                     "end_location" : {
                        "lat" : 43.8693554,
                        "lng" : -79.26114149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_awjGtbxbN?UCWGWKU?AWa@Wc@CEYk@O[[k@AEGMGQCIEQCY?_@@W"
                     },
                     "start_location" : {
                        "lat" : 43.8684804,
                        "lng" : -79.26331019999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 402
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 343
                     },
                     "end_location" : {
                        "lat" : 43.866349,
                        "lng" : -79.258583
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePrincess St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ofwjGbuwbNjAGT?LALCPKFCJIJKDCTU@ATUFEZ_@Z]xAaBVYZ]RW~AeBr@}@"
                     },
                     "start_location" : {
                        "lat" : 43.8693554,
                        "lng" : -79.26114149999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 133
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 106
                     },
                     "end_location" : {
                        "lat" : 43.86672859999999,
                        "lng" : -79.2570037
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJames Scott Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "usvjGbewbNUyASsAa@mC"
                     },
                     "start_location" : {
                        "lat" : 43.866349,
                        "lng" : -79.258583
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "42 m",
                        "value" : 42
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 43.8663706,
                        "lng" : -79.25685729999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eRougehaven Way\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "avvjGf{vbNfA["
                     },
                     "start_location" : {
                        "lat" : 43.86672859999999,
                        "lng" : -79.2570037
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "65 m",
                        "value" : 65
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 43.8665507,
                        "lng" : -79.25608099999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRougehaven Way\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ysvjGjzvbNYkBIo@"
                     },
                     "start_location" : {
                        "lat" : 43.8663706,
                        "lng" : -79.25685729999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 43.8661963,
                        "lng" : -79.2559615
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eRougehaven Way\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}tvjGnuvbNdAW"
                     },
                     "start_location" : {
                        "lat" : 43.8665507,
                        "lng" : -79.25608099999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "69 m",
                        "value" : 69
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 43.8664146,
                        "lng" : -79.25516789999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wrvjGvtvbNCSIu@E]KWCICCAC?A?G?A"
                     },
                     "start_location" : {
                        "lat" : 43.8661963,
                        "lng" : -79.2559615
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1.3 km",
                  "value" : 1284
               },
               "duration" : {
                  "text" : "16 mins",
                  "value" : 950
               },
               "end_address" : "Forest Therapy Trail, Tuclor Ln, Markham, ON L3P 3C6, Canada",
               "end_location" : {
                  "lat" : 43.87150680000001,
                  "lng" : -79.24942980000002
               },
               "start_address" : "Rougehaven Parkette, Unnamed Road, Markham, ON L3P 7W5, Canada",
               "start_location" : {
                  "lat" : 43.8664146,
                  "lng" : -79.25516789999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "35 m",
                        "value" : 35
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.8663965,
                        "lng" : -79.2548529
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e toward \u003cb\u003eSchouten Crescent\u003c/b\u003e",
                     "polyline" : {
                        "points" : "atvjGxovbN?A?GBCBC@CBC?A?C?C?ACAA?CAA?AA?AAA?C@A@I"
                     },
                     "start_location" : {
                        "lat" : 43.8664146,
                        "lng" : -79.25516789999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 127
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 43.8667901,
                        "lng" : -79.25336899999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCharlotte Angliss Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "_tvjGxmvbN?OAMCOg@kC[aBCK"
                     },
                     "start_location" : {
                        "lat" : 43.8663965,
                        "lng" : -79.2548529
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 248
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 169
                     },
                     "end_location" : {
                        "lat" : 43.8675904,
                        "lng" : -79.250749
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mvvjGpdvbNFGBI@M@I?KGOMSIOIMGQEMAK?YA]M_@AEQW[e@EE]g@Me@?AEg@?w@@U"
                     },
                     "start_location" : {
                        "lat" : 43.8667901,
                        "lng" : -79.25336899999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 481
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 365
                     },
                     "end_location" : {
                        "lat" : 43.8704439,
                        "lng" : -79.25260589999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRouge Valley Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "m{vjGdtubNACAICKCIIMGQSe@Uc@KQGKEGIEQGKAICE@C@EBABKNA@EHUVSHGDS@CAEAGCGECAC?E@E@CBGBIFIFCBC@GHEBCDCBA@ABCDEJCHEFCLKXIVERGJAHCDCDCDA@C@CDEDEDEBEBCBMLIHKJEFCDCD?BADAHAHAF?J?RANAJCXCTABAJ?FCJEDEB"
                     },
                     "start_location" : {
                        "lat" : 43.8675904,
                        "lng" : -79.250749
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 390
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 303
                     },
                     "end_location" : {
                        "lat" : 43.8715206,
                        "lng" : -79.24946489999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eRouge Valley Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gmwjGx_vbNCAE?ECGEMIIGUOGGWOCEEGAEAC?EAG?K?K?a@@U?U?K?E@A?G@G@EBK@MBK@K@EBMBG@GBEBGPa@Pc@J[@I?C@C?AAC?CACACCIQe@Oc@M[O[IKCEECCCEAAACCACECCCA?A?EBEBCBEBEBGFGDEDC@C@EA"
                     },
                     "start_location" : {
                        "lat" : 43.8704439,
                        "lng" : -79.25260589999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "3 m",
                        "value" : 3
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 43.87150680000001,
                        "lng" : -79.24942980000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTuclor Ln\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_twjGblubN@E"
                     },
                     "start_location" : {
                        "lat" : 43.8715206,
                        "lng" : -79.24946489999999
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "gfvjGhoybNGhCBRl@|BP`@d@^fAl@l@^HNFZFbBBx@Ff@Lh@t@tBb@jAB\\C^M|@HfBTfBVdAVj@H`@FVDx@Id@y@vA}@rAWPEFCR?fACd@KXWRsBrASZKFWAa@qBc@sBMgAF_@?OAYS_AW{@OoA@c@MmAQI_Aq@[a@IWYk@a@e@CAGFGUKGKGGKo@aEKe@Y]e@q@?YuAqJIGMA{Bv@IA_@m@_@y@KY_BwKu@gFEa@vDm@Eo@Ec@{@_Gc@mCQCeANsAqJMaACSEEpAWzAQCm@Sm@s@mAgAyBY{@Cy@@WjAGb@A^Od@]t@s@hDyDbEyEi@mDa@mCfA[c@{CdAWCSOsAOa@EQBOHM?GCCIC?I@YE]cAmFCKFGDW@Ui@aAM_@Ae@A]M_@S]a@k@]g@Me@Ei@@mAKc@{@iBS]OM]IOAWXGJUVSH[FICWKWJq@l@MVYx@Y`AMRq@l@_@b@GXKfBGl@IPI@a@S_Ao@MWAe@@yABWVsAZw@^mA?MYw@]_AYg@SOMMECGBUNYTI?@E"
         },
         "summary" : "Drakefield Rd",
         "warnings" : [
            "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
         ],
         "waypoint_order" : [ 0, 1 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
