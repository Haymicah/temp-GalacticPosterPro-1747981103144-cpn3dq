import React from 'react';

export function Logo() {
  return (
    <>
      {/* Mobile Logo */}
      <pre className="font-mono text-terminal-green text-[8px] leading-none whitespace-pre md:hidden">
        {`                .:***********+++..                               
          ..+*******=-.    .-=+**++++++++                        
        .*****..             .+*+.    .++.                       
       ****...                .+++++. .++++.                     
    .-***.                     .+++. .++*+++.                    
    +**                        .*++     .++++-                   
   .**.                        .=+++++++++++++ .                 
   ***.                ........  ...........+++. ..........      
   **              .***********+*+++++++++++++++++++++++++++*=.  
   **          .+****+.               ..=++++++.           .+++. 
   **       . ****..                 .**++.  ++.            ..++.
   **      .***-                  ..***=    .++               ++-
   **     -***.                  .*+*+       +*              .++.
   ##   .+##..                 .*****+**++*++++++++.        .+++ 
   ##   .*#.                ..************..   *+++.     . ++++  
   #*+..###              .***************+    ++++-    .+*+++ .  
.############***************:.*****. ****    .****+*+*++++.      
###. .. ........********..   *****:. .***   .****+..             
##*            ..******#*********+    .**********.               
.###...####.        .***********.       .*+***+.                 
  .#####-###..                           +**+.                   
          .####...                  ..:****.                     
            .:########*==......=+*******..                       
               .. .+###########****.....`}
      </pre>

      {/* Desktop Logo */}
      <pre className="hidden md:block font-mono text-terminal-green text-xs leading-none whitespace-pre">
        {`                    +++++++++++===                                                                                                        
              +++++++++*++++++++===+=======                                                                                               
          +*+++=                =+=      -+=                                                                                              
        *+++                     =+=      ===                                                                                             
       ++*                        ===+   ====++                                                                                           
     *+*                          ==+       ====                                                                                          
    #**                            ==:......=====                                                                                         
    **                              +========= ===                                                    ===                          +++    
   ***                   +++++++++++++++======================+                                       ==+                          +++    
   **+              *****+*+++++++++++++=+===+====================+                                                                       
   ##            #****                     +=+=-===              ===                =========      ======         ==+-===++     ++++++    
   ##          *#*#                      +++=   ===               ===                    ===          ===        ===    ++         +++    
   ##        ###                       +++      ===                ==                  .==-           +==        -=+   ===         +++    
   ##      *%##                      +++        ===               :==                 ===             ===        ==-+==            +++    
   %%     %%#                      +++++++++++++=++===+           ==+                ==+.....         ===        ===               =++    
   %%    :%%                     **+++++++++=+     +=+          ===                 +========      =========      ====+====     +++++++++ 
   %%    %%+                  *******++*+++++     ++++        ====                                              ===     =++               
  %@%%%%%%%%%%%%%%%%%%%%%#####*- +***+  *+++     ++++++++++====                                                  +==++++=+                
 @@%   @@@%%@%%%%%%%%##%###     *****    +++     ++++++++*                                                                                
@@@               %%%%###*     ###**:     ++    ++++++                                                                                    
*@@      @@         %%%%%##%%#######      *+****++++                                                                                      
  @@@@@@@@@@                                  ***                                                                                         
    @@@@  @@@%                              ****                                                                                          
            @@@@@                        ###*.                                                                                            
               @@@%@@%@%@%%%##***%%#%######                                                                                               
                     .*@@%%%%%%%%%%%%.`}
      </pre>
    </>
  );
}