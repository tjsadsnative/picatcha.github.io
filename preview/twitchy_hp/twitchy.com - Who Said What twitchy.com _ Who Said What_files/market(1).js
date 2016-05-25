var rp_response = 
    { "valuation": { "pmp": { "seat_ids": [ 2254 ], "deals": [ { "id": 45136, "class": 4, "floor": 5.000000, "ad_ids": [ 3168958 ], "network_ids": [ 1986 ] } ] }, "ads": [ { "type": "partner", "cpm": 0.032440, "dcpm": 0.032440, "ad_id": 3159816 }, { "type": "direct", "cpm": 0.000000, "dcpm": 0.050000, "ad_id": 3324758 }, { "type": "partner", "cpm": 0.060410, "dcpm": 0.060410, "fcc": 0, "fcl": 5, "fcp": 86400, "ad_id": 3378782 }, { "type": "partner", "cpm": 0.018490, "dcpm": 0.018490, "fcc": 0, "fcl": 25, "fcp": 86400, "ad_id": 3476808 }, { "type": "partner", "cpm": 0.009500, "dcpm": 0.009500, "ad_id": 3568382 }, { "type": "partner", "cpm": 0.843400, "dcpm": 0.843400, "fcc": 0, "fcl": 2, "fcp": 86400, "ad_id": 3770988 }, { "type": "partner", "cpm": 0.032980, "dcpm": 0.032980, "pacing": 0.200000, "ad_id": 3868024 } ], "cpm_cnt": 7, "invalid_cpm_cnt": 0, "bid_cnt": 0, "invalid_bid_cnt": 0 }, "context": { "site_session_count": "0", "country": "us" } };

var rp_valuation = rp_response.valuation;
try { oz_onValuationLoaded_116612_15(rp_response); } catch (ignore) {}

/*
Data Center: SJC1
pid: 14703
BE Status: T
BEms: 233
AEms: 237
Alg: PT
Session Count: 1
Continent: na
Country: us
*/
