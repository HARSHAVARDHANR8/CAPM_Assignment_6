sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/deloitte/sap/capmassignment/test/integration/FirstJourney',
		'com/deloitte/sap/capmassignment/test/integration/pages/A_SalesOrder_FullList',
		'com/deloitte/sap/capmassignment/test/integration/pages/A_SalesOrder_FullObjectPage'
    ],
    function(JourneyRunner, opaJourney, A_SalesOrder_FullList, A_SalesOrder_FullObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/deloitte/sap/capmassignment') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheA_SalesOrder_FullList: A_SalesOrder_FullList,
					onTheA_SalesOrder_FullObjectPage: A_SalesOrder_FullObjectPage
                }
            },
            opaJourney.run
        );
    }
);