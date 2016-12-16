AMP.DSQ.push(
    function ()
    {
        AMP.DS.init(
            {
                tagId     : adMarketplaceTagId,
                searchTerm: encodeURIComponent(JSON.stringify(adMarketplaceKeywords)),
                waitTime  : 3000
            }
        );
        AMP.DS.detect(
            function (results)
            {
                if (results.DFP === true)
                {
                    // This code block will be executed if DFP units are blocked.
                    // This is the place where you want to make an Ajax call to get and display replacement ads.

                    $.post(
                        '/ajax/adMarketplace.php',
                        {
                            'keyword' : adMarketplaceKeywords,
                            'location': adMarketplaceLocation,
                            'referrer': location.href
                        },
                        function (data)
                        {
                            if (data)
                            {
                                if (typeof adMarketplaceSelector == 'undefined')
                                {
                                    adMarketplaceSelector = '#top-300x250-A';

                                    var adDiv = $(adMarketplaceSelector).parent();
                                    adDiv.removeClass('ad').replaceWith(data);
                                }
                                else
                                {
                                    var adDiv = $(adMarketplaceSelector);
                                    adDiv.removeAttr('style').removeData('adlocation').replaceWith(data);
                                }
                            }
                        }
                        , "text"
                    );
                }
            }
        );
    }
);