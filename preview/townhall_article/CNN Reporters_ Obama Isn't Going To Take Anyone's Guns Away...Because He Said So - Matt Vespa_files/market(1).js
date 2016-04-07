var rp_response = 
    { "valuation": { "pmp": { }, "ads": [ { "type": "partner", "cpm": 0.335420, "dcpm": 0.335420, "fcc": 1, "fcl": 6, "fcp": 86400, "ad_id": 3196955 }, { "type": "partner", "cpm": 0.050000, "dcpm": 0.050000, "ad_id": 3305918 }, { "type": "direct", "cpm": 0.000000, "dcpm": 0.050000, "ad_id": 3324756 }, { "type": "partner", "cpm": 0.030140, "dcpm": 0.030140, "fcc": 0, "fcl": 5, "fcp": 86400, "ad_id": 3417387 }, { "type": "partner", "cpm": 0.000000, "dcpm": 0.000000, "pacing": 0.100000, "ad_id": 3561438 }, { "type": "partner", "cpm": 0.009810, "dcpm": 0.009810, "fcc": 0, "fcl": 3, "fcp": 86400, "pacing": 0.200000, "ad_id": 3649850 }, { "type": "partner", "cpm": 0.612670, "dcpm": 0.612670, "fcc": 1, "fcl": 2, "fcp": 86400, "ad_id": 3770980 }, { "type": "partner", "cpm": 0.022610, "dcpm": 0.022610, "ad_id": 3832270 }, { "type": "partner", "cpm": 0.439120, "dcpm": 0.439120, "fcc": 1, "fcl": 7, "fcp": 86400, "ad_id": 3847902 }, { "type": "partner", "cpm": 0.084410, "dcpm": 0.084410, "fcc": 0, "fcl": 5, "fcp": 86400, "ad_id": 3873606 } ], "cpm_cnt": 10, "invalid_cpm_cnt": 0, "bid_cnt": 0, "invalid_bid_cnt": 0 }, "context": { "site_session_count": "4", "country": "us" } };

var rp_valuation = rp_response.valuation;
try { oz_onValuationLoaded_80422_2(rp_response); } catch (ignore) {}

/*
Data Center: SJC1
pid: 3343
BE Status: T
BEms: 234
AEms: 238
Alg: PT
Session Count: 5
Continent: na
Country: us
*/
