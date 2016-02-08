/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10890, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11719, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12337, function(sym, e) {
         sym.play("adEnd");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${TXT_Legal}", "mouseover", function(sym, e) {
         sym.play("legalOpen");

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseout", function(sym, e) {
         sym.getSymbol("CTA_ShopNow").play("scaleDown");
         sym.getSymbol("SnowAnimated").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseover", function(sym, e) {
         sym.getSymbol("CTA_ShopNow").play("scaleUp");
         sym.getSymbol("SnowAnimated").play(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${TXT_Legal}", "mouseout", function(sym, e) {
         sym.play("legalClose");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'CTA_ShopNow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4368, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 375, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 766, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0
         );

      });
      //Edge binding end

   })("CTA_ShopNow");
   //Edge symbol end:'CTA_ShopNow'

   //=========================================================
   
   //Edge symbol: 'SnowAnimated'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5943, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0000);

      });
      //Edge binding end

   })("SnowAnimated");
   //Edge symbol end:'SnowAnimated'

   //=========================================================
   
   //Edge symbol: 'SnowCombo'
   (function(symbolName) {   
   
   })("SnowCombo");
   //Edge symbol end:'SnowCombo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "ATT_OLA-728x90");