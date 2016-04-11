(function(global) {
    // -- PRIVATE METHODS -- //
    function concat() {
        return Array.prototype.slice.call(arguments).join(' ');
    }

    // Used to look up values, either dynamic or static, and return a default
    // value if we're in "dev mode", which is determined by whether the
    // override object exists (varMap)
    function _getVar(varMap, varName, defaultValue) {
        if (!varName) {
            return 'ERROR: No varName supplied. Please check token-replacement.js';
        }

        var errorMessage = 'Default not provided to replace missing ' + varName;

        if (!defaultValue) {
            defaultValue = errorMessage;
        }

        if (typeof varMap === 'undefined') {
            return defaultValue;
        }

        return varMap[varName] ? varMap[varName] : '';
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }

    // -- END PRIVATE METHODS --//

    // Pull any non-dynamic field. This should only be used for "custom" fields
    // that don't deserve their own method, because you lose the 'safety' of
    // having a mispelled function name tell you that you're trying to access
    // something that doesn't exist, and you have to know how it's stored in
    // the adBuilderVars i.e. getWrongVarName would throw an error, while
    // getVar('wrongVarName') will simply return nothing or a default value if
    // the field doesn't exist
    function getVar(varName, defaultValue) {
        return _getVar(window.adBuilderVars, varName, defaultValue);
    }

    // Pull any dynamic field. Similar to above method, use this method
    // directly only for things we don't have explicit 'getDynamic' methods for
    // because you have to know the structure of dynamicOverrides to use it
    function getDynamicVar(varName, defaultValue) {
        return _getVar(parent.dynamicOverrides, varName, defaultValue);
    }

    // Static fields
    function getAccountName(defaultValue) {
        return getVar('account.name', defaultValue);
    }

    function getAccountPhone(defaultValue) {
        return getVar('account.phone', defaultValue);
    }

    function getAccountAddress1(defaultValue) {
        return getVar('account.address1', defaultValue);
    }

    function getAccountAddress2(defaultValue) {
        return getVar('account.address2', defaultValue);
    }

    function getAccountCity(defaultValue) {
        return getVar('account.city', defaultValue);
    }

    function getAccountState(defaultValue) {
        return getVar('account.state', defaultValue);
    }

    function getAccountPostalCode(defaultValue) {
        return getVar('account.postalCode', defaultValue);
    }

    function getTitle(defaultValue) {
        return getVar('incentive.title', defaultValue);
    }

    function getDisclaimer(defaultValue) {
        return getVar('incentive.disclaimer', defaultValue);
    }

    function getCashOption(defaultValue) {
        return getVar('incentive.cashOption', defaultValue);
    }

    function getLenderName(defaultValue) {
        return getVar('incentive.lenderName', defaultValue);
    }

    function getMsrp(defaultValue) {
        return getVar('incentive.msrp', defaultValue);
    }

    function getMinPrice(defaultValue) {
        return getVar('incentive.minPrice', defaultValue);
    }

    function getTerm(defaultValue) {
        return getVar('incentive.term', defaultValue);
    }

    function getCashDue(defaultValue) {
        return getVar('incentive.cashDue', defaultValue);
    }

    function getSecurityDeposit(defaultValue) {
        return getVar('incentive.securityDeposit', defaultValue);
    }

    function getMonthlyPayment(defaultValue) {
        return getVar('incentive.monthlyPayment', defaultValue);
    }

    function getMileageAllowance(defaultValue) {
        return getVar('incentive.mileageAllowance', defaultValue);
    }

    function getMileOverageCharge(defaultValue) {
        return getVar('incentive.mileOverageCharge', defaultValue);
    }

    function getPurchaseOptionPrice(defaultValue) {
        return getVar('incentive.purchaseOptionPrice', defaultValue);
    }

    function getCapitalizationCost(defaultValue) {
        return getVar('incentive.capitalizationCost', defaultValue);
    }

    function getAcquisitionFee(defaultValue) {
        return getVar('incentive.acquisitionFee', defaultValue);
    }

    function getApr(defaultValue) {
        return getVar('incentive.apr', defaultValue);
    }

    function getIncentivesType(defaultValue) {
        return getVar('incentivesType', defaultValue);
    }

    function getDealerLogo1(defaultValue) {
        return getVar('dealerLogo1', defaultValue);
    }

    function getOfferApr(defaultValue) {
        return getVar('offerApr', defaultValue);
    }

    function getOfferDetail(defaultValue) {
        return getVar('offerDetail', defaultValue);
    }

    function getOfferHeadline(defaultValue) {
        return getVar('offerHeadline', defaultValue);
    }

    function getOfferPrice(defaultValue) {
        return getVar('offerPrice', defaultValue);
    }

    function getOfferTerm(defaultValue) {
        return getVar('offerTerm', defaultValue);
    }

    function getCTA(defaultValue) {
        return getVar('CTA', defaultValue);
    }

    function getTextByline(defaultValue) {
        return getVar('textByline', defaultValue);
    }

    function getTextDisclaimer(defaultValue) {
        return getVar('textDisclaimer', defaultValue);
    }

    function getTextHeadline(defaultValue) {
        return getVar('textHeadline', defaultValue);
    }

    function getTextTagline(defaultValue) {
        return getVar('textTagline', defaultValue);
    }

    function getCarMake(carNum, defaultValue) {
        return getVar('car' + carNum + '.make', defaultValue);
    }

    function getCarModel(carNum, defaultValue) {
        return getVar('car' + carNum + '.model', defaultValue);
    }

    function getCarYear(carNum, defaultValue) {
        return getVar('car' + carNum + '.year', defaultValue);
    }

    function getCarMsrp(carNum, defaultValue) {
        return getVar('car' + carNum + '.msrp', defaultValue);
    }

    function getCarTrim(carNum, defaultValue) {
        return getVar('car' + carNum + '.trim', defaultValue);
    }

    function getCarUniqueTrim(carNum, defaultValue) {
        return getVar('car' + carNum + '.uniqueTrim', defaultValue);
    }

    function getCarBodyStyle(carNum, defaultValue) {
        return getVar('car' + carNum + '.bodyStyle', defaultValue);
    }

    function getCarTransmission(carNum, defaultValue) {
        return getVar('car' + carNum + '.transmission', defaultValue);
    }

    function getCarBaseMsrp(carNum, defaultValue) {
        return getVar('car' + carNum + '.baseMsrp', defaultValue);
    }

    function getCarImage1(carNum, defaultValue) {
        return getVar('car' + carNum + '.image1', defaultValue);
    }

    function getCarImage2(carNum, defaultValue) {
        return getVar('car' + carNum + '.image2', defaultValue);
    }

    function getCarImage3(carNum, defaultValue) {
        return getVar('car' + carNum + '.image3', defaultValue);
    }

    function getCarMpgHighwayMin(carNum, defaultValue) {
        return getVar('car' + carNum + '.mpgHighwayMin', defaultValue);
    }

    function getCarMpgCityMin(carNum, defaultValue) {
        return getVar('car' + carNum + '.mpgCityMin', defaultValue);
    }

    function getClickTag(defaultValue) {
        var clickTag = getQueryVariable('clickTag');

        if (clickTag) {
            return clickTag;
        } else {
            if (typeof adBuilderVars === 'undefined') {
                return defaultValue;
            } else {
                return '';
            }
        }
    }

    // Dynamic fields
    function getDynamicClickTAG() {
        if (typeof arguments[0] === 'number' && typeof arguments[1] === 'string') {
            return getDynamicVar('clickTAG' + arguments[0], arguments[1]);
        } else if (typeof arguments[0] === 'string') {
            return getDynamicVar('clickTAG', arguments[0]);
        } else {
            throw new Error('getDynamicClickTag either takes a number and a default value or just a defaultValue');
        }
    }

    function getDynamicClickTag(defaultValue) {
        return getDynamicVar('clickTag', defaultValue);
    }

    function getDynamicCopy(num1, num2, defaultValue) {
        return getDynamicVar('copy' + num1 + '_' + num2, defaultValue);
    }

    function getDynamicAlternateClick(num, defaultValue) {
        return getDynamicVar('alternateClick' + num, defaultValue);
    }

    function getDynamicItem(num, defaultValue) {
        return getDynamicVar('item' + num, defaultValue);
    }

    //-- PUBLIC METHODS --//
    global.getVar = getVar;

    global.getAccountName = getAccountName;
    global.getAccountPhone = getAccountPhone;
    global.getAccountAddress1 = getAccountAddress1;
    global.getAccountAddress2 = getAccountAddress2;
    global.getAccountCity = getAccountCity;
    global.getAccountState = getAccountState;
    global.getAccountPostalCode = getAccountPostalCode;
    global.getTitle = getTitle;
    global.getDisclaimer = getDisclaimer;
    global.getCashOption = getCashOption;
    global.getLenderName = getLenderName;
    global.getMsrp = getMsrp;
    global.getMinPrice = getMinPrice;
    global.getTerm = getTerm;
    global.getCashDue = getCashDue;
    global.getSecurityDeposit = getSecurityDeposit;
    global.getMonthlyPayment = getMonthlyPayment;
    global.getMileageAllowance = getMileageAllowance;
    global.getMileOverageCharge = getMileOverageCharge;
    global.getPurchaseOptionPrice = getPurchaseOptionPrice;
    global.getCapitalizationCost = getCapitalizationCost;
    global.getAcquisitionFee = getAcquisitionFee;
    global.getApr = getApr;
    global.getIncentivesType = getIncentivesType;
    global.getDealerLogo1 = getDealerLogo1;
    global.getOfferApr = getOfferApr;
    global.getOfferDetail = getOfferDetail;
    global.getOfferHeadline = getOfferHeadline;
    global.getOfferPrice = getOfferPrice;
    global.getOfferTerm = getOfferTerm;
    global.getCTA = getCTA;
    global.getTextByline = getTextByline;
    global.getTextDisclaimer = getTextDisclaimer;
    global.getTextHeadline = getTextHeadline;
    global.getTextTagline = getTextTagline;
    global.getCarMake = getCarMake;
    global.getCarModel = getCarModel;
    global.getCarYear = getCarYear;
    global.getCarMsrp = getCarMsrp;
    global.getCarTrim = getCarTrim;
    global.getCarUniqueTrim = getCarUniqueTrim;
    global.getCarBodyStyle = getCarBodyStyle;
    global.getCarTransmission = getCarTransmission;
    global.getCarBaseMsrp = getCarBaseMsrp;
    global.getCarImage1 = getCarImage1;
    global.getCarImage2 = getCarImage2;
    global.getCarImage3 = getCarImage3;
    global.getCarMpgHighwayMin = getCarMpgHighwayMin;
    global.getCarMpgCityMin = getCarMpgCityMin;
    global.getClickTag = getClickTag;

    global.getDynamicClickTAG = getDynamicClickTAG;
    global.getDynamicCopy = getDynamicCopy;
    global.getDynamicClickTag = getDynamicClickTag;
    global.getDynamicAlternateClick = getDynamicAlternateClick;
    global.getDynamicItem = getDynamicItem;
})(window);
