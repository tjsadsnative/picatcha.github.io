var rp_response = 
    { "valuation": { "pmp": { }, "ads": [ { "type": "partner", "cpm": 0.048580, "dcpm": 0.048580, "fcc": 0, "fcl": 9, "fcp": 86400, "ad_id": 3159814 }, { "type": "direct", "cpm": 0.000000, "dcpm": 0.050000, "ad_id": 3324756 }, { "type": "partner", "cpm": 0.006130, "dcpm": 0.006130, "fcc": 0, "fcl": 5, "fcp": 86400, "ad_id": 3378778 }, { "type": "partner", "cpm": 0.004000, "dcpm": 0.004000, "fcc": 0, "fcl": 25, "fcp": 86400, "ad_id": 3476802 }, { "type": "partner", "cpm": 0.009500, "dcpm": 0.009500, "ad_id": 3568378 }, { "type": "partner", "cpm": 0.669960, "dcpm": 0.669960, "fcc": 0, "fcl": 2, "fcp": 86400, "ad_id": 3770986 }, { "type": "partner", "cpm": 0.035990, "dcpm": 0.035990, "pacing": 0.200000, "ad_id": 3868022 } ], "cpm_cnt": 7, "invalid_cpm_cnt": 0, "bid_cnt": 0, "invalid_bid_cnt": 0 }, "context": { "site_session_count": "0", "country": "us" } };

var rp_valuation = rp_response.valuation;
try { oz_onValuationLoaded_116612_2(rp_response); } catch (ignore) {}

/*
Data Center: SJC1
pid: 5746
BE Status: T
BEms: 234
AEms: 238
Alg: PT
Session Count: 1
Continent: na
Country: us
*/
