module.exports.Si6_Device = [		
{		
    name : 'hrsg1',		
    host : '182.253.210.3',		
    port : 102,		
    rack : 0,		
    slot : 1,		
    driver : 's7ip',		
    items : 'blok2'
},	
{		 
    name : 'hrsg2',		
    host : '182.253.210.3',		
    port : 103,		
    rack : 0,		
    slot : 1,		
    driver : 's7ip',		
    items : 'blok2'
},	
{		
    name : 'meter',		
    host : '192.168.0.128',		
    port : 502,		
    node : 1,		
    driver : 'modbus',		
    items : 'ion8600'
},
];