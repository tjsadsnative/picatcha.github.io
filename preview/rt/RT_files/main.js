var clickTagVar = document.getElementById("clickTag");

//clickTagVar.addEventListener("click", function(){
//    window.open(window.PUB_CLICKTHROUGH);
//});

clickTagVar.addEventListener("mouseover", function(){
    rollover();
});

clickTagVar.addEventListener("mouseout", function(){
    rollout();
});


function rollover() {
                
overCTA();   
        
}

function rollout() {
   TweenMax.to("#cta", .3, {scale:1, ease:Power1.easeOut});
}
    
function overCTA(){
    var myTimeline2 = new TimelineMax();
    myTimeline2.addLabel("overCTA")
                .to("#cta", .3, {scale:1.1, ease:Power1.easeOut})
                .to("#cta_arrow", .3, {opacity:0, ease:Power1.easeOut},"+=.5")
                .to("#cta_arrow", .3, {opacity:1, ease:Power1.easeOut})
                .to("#cta_arrow", .3, {opacity:0, ease:Power1.easeOut},"+=.3")
                .to("#cta_arrow", .3, {opacity:1, ease:Power1.easeOut});
}  


/* Animations */
/* ************************************************************ */

function firstFrame(){
            var In = .4;
            var bn = 400;

            TweenMax.to("#loading_dc", .3, {opacity:0, display:"none"});

            var myTimeline = new TimelineMax;
                myTimeline.addLabel("NoLPAV")

                .to("#copy1", In, {},"+=.5")

                .to(["#copy1", "#copy1_blur"], In, {left:88, ease: Circ.easeOut})
                .to("#copy1_blur", .1, {display:"none"}, "-=.4")
                .to("#copy1", In, {left:bn, opacity:0, ease: Circ.easeOut},"+=2")                
                
                .to(["#copy2", "#copy2_blur"], In, {left:84, ease: Circ.easeOut})
                .to("#copy2_blur", .1, {display:"none"}, "-=.4")
                .to("#copy2", In, {left:bn, opacity:0, ease: Circ.easeOut},"+=2")
                
                .to(["#copy3", "#copy3_blur"], In, {left:83, ease: Circ.easeOut})
                .to("#copy3_blur", .1, {display:"none"}, "-=.4")
                .to("#copy3", In, {left:bn, opacity:0, ease: Circ.easeOut},"+=2")
                
                .to(["#copy4", "#copy4_blur"], In, {left:22, ease: Circ.easeOut})
                .to("#copy4_blur", .1, {display:"none"}, "-=.4")
                .to("#copy4", In, {},"+=.5")
                ;
                
                //stats.setTimeline(myTimeline)
                ;
            };         
firstFrame ();