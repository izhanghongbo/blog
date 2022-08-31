---
title: "GraphXR Schema"
date: 2022-08-23T16:54:09+08:00
draft: false
tags: ["GraphXR"]
categories: ["GraphXR"]
---

## GraphXR Schema

```json
{
    "labels": {
        "Vehicle": {
            "name": "Vehicle",
            "props": [
                "make",
                "model",
                "reg",
                "year"
            ]
        },
        "Email": {
            "name": "Email",
            "props": [
                "email_address"
            ]
        },
        "Phone": {
            "name": "Phone",
            "props": [
                "phoneNo"
            ]
        },
        "Crime": {
            "name": "Crime",
            "props": [
                "date",
                "id",
                "last_outcome",
                "type"
            ]
        },
        "PhoneCall": {
            "name": "PhoneCall",
            "props": [
                "call_date",
                "call_duration",
                "call_time",
                "call_type"
            ]
        },
        "Person": {
            "name": "Person",
            "props": [
                "name",
                "surname"
            ]
        },
        "Location": {
            "name": "Location",
            "props": [
                "address",
                "latitude",
                "longitude",
                "postcode"
            ]
        },
        "Officer": {
            "name": "Officer",
            "props": [
                "badge_no",
                "name",
                "rank",
                "surname"
            ]
        }
    },
    "relationships": {
        "INVOLVED_IN": {
            "name": "INVOLVED_IN",
            "props": []
        },
        "FAMILY_REL": {
            "name": "FAMILY_REL",
            "props": []
        },
        "CALLER": {
            "name": "CALLER",
            "props": []
        },
        "KNOWS_PHONE": {
            "name": "KNOWS_PHONE",
            "props": []
        },
        "INVESTIGATED_BY": {
            "name": "INVESTIGATED_BY",
            "props": []
        },
        "HAS_EMAIL": {
            "name": "HAS_EMAIL",
            "props": []
        },
        "KNOWS_SN": {
            "name": "KNOWS_SN",
            "props": []
        },
        "KNOWS": {
            "name": "KNOWS",
            "props": []
        },
        "CALLED": {
            "name": "CALLED",
            "props": []
        },
        "CURRENT_ADDRESS": {
            "name": "CURRENT_ADDRESS",
            "props": []
        },
        "OCCURRED_AT": {
            "name": "OCCURRED_AT",
            "props": []
        },
        "KNOWS_LW": {
            "name": "KNOWS_LW",
            "props": []
        },
        "PARTY_TO": {
            "name": "PARTY_TO",
            "props": []
        },
        "HAS_PHONE": {
            "name": "HAS_PHONE",
            "props": []
        }
    },
    "indexs": {},
    "schema": {
        "labels": [
            "Vehicle",
            "Area",
            "Email",
            "Phone",
            "Crime",
            "PhoneCall",
            "Object",
            "PostCode",
            "Person",
            "Location",
            "Officer"
        ],
        "relationships": [
            "INVOLVED_IN",
            "FAMILY_REL",
            "CALLER",
            "KNOWS_PHONE",
            "INVESTIGATED_BY",
            "HAS_EMAIL",
            "KNOWS_SN",
            "KNOWS",
            "CALLED",
            "CURRENT_ADDRESS",
            "OCCURRED_AT",
            "KNOWS_LW",
            "PARTY_TO",
            "HAS_PHONE"
        ],
        "maps": [
            {
                "id": "-42",
                "name": "INVOLVED_IN",
                "startLabelName": "Vehicle",
                "endLabelName": "Crime"
            },
            {
                "id": "-31",
                "name": "FAMILY_REL",
                "startLabelName": "Person",
                "endLabelName": "Person"
            },
            {
                "id": "-35",
                "name": "CALLER",
                "startLabelName": "PhoneCall",
                "endLabelName": "Phone"
            },
            {
                "id": "-38",
                "name": "KNOWS_PHONE",
                "startLabelName": "Person",
                "endLabelName": "Person"
            },
            {
                "id": "-40",
                "name": "INVESTIGATED_BY",
                "startLabelName": "Crime",
                "endLabelName": "Officer"
            },
            {
                "id": "-37",
                "name": "HAS_EMAIL",
                "startLabelName": "Person",
                "endLabelName": "Email"
            },
            {
                "id": "-33",
                "name": "KNOWS_SN",
                "startLabelName": "Person",
                "endLabelName": "Person"
            },
            {
                "id": "-32",
                "name": "KNOWS",
                "startLabelName": "Person",
                "endLabelName": "Person"
            },
            {
                "id": "-34",
                "name": "CALLED",
                "startLabelName": "PhoneCall",
                "endLabelName": "Phone"
            },
            {
                "id": "-30",
                "name": "CURRENT_ADDRESS",
                "startLabelName": "Person",
                "endLabelName": "Location"
            },
            {
                "id": "-29",
                "name": "OCCURRED_AT",
                "startLabelName": "Crime",
                "endLabelName": "Location"
            },
            {
                "id": "-39",
                "name": "KNOWS_LW",
                "startLabelName": "Person",
                "endLabelName": "Person"
            },
            {
                "id": "-41",
                "name": "PARTY_TO",
                "startLabelName": "Person",
                "endLabelName": "Crime"
            },
            {
                "id": "-36",
                "name": "HAS_PHONE",
                "startLabelName": "Person",
                "endLabelName": "Phone"
            }
        ]
    }
}

```


