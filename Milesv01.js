
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program converts miles to kilometers." 
                   +  "\n Please, give a distance in miles:  " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   


var distance_in_miles = 10 ;

 var distance_in_kilometers ;
 while ( distance_in_miles < )
 {
    distance_in_kilometers = 1.6093 * distance_in_miles ;
    tools.printf( "\n %10.2f %10.2f",
                    distance_in_miles, distance_in_kilometers ) ;
    distance_in_miles = distance_in_miles + 10 ;
 }
                         
   tools.printf( "\n %.3f miles is %.3f kilometers.\n\n",
                 distance_in_miles,  distance_in_kilometers ) ;

                 


                         
   process.exit() ;

} ) ;





