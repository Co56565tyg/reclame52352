!function(e){function i(o,s){elementorFrontend.isEditMode()||o.find(".premium-nav-widget-container").css({visibility:"inherit",opacity:"inherit"});var u=o.find(".premium-nav-widget-container").data("settings");if(u){var t,e,n,m=o.find(".premium-mobile-menu"),r=o.find(".premium-hamburger-toggle"),i=o.find(".premium-mobile-menu-close"),a=o.find(".premium-mega-content-centered"),d=o.find('.premium-nav-menu-container li[data-full-width="true"]'),l={},c=!1,p="stickyPos"+o.data("id"),v="stickyWidth"+o.data("id"),f=!!o.hasClass("premium-disable-scroll-yes"),g=getComputedStyle(o[0]).getPropertyValue("--pa-mega-menu-delay")||300;if(o.find("div[data-mega-content]").each(function(e,i){var t=s(i),n=t.data("mega-content");if(0<s(n).length){var m=s(n);m.attr("data-menu-id",o.data("id")),t.append(m.clone(!0).addClass("pa-cloned-element"))}}),elementorFrontend.isEditMode()||s('div[data-menu-id="'+o.data("id")+'"]').not(".pa-cloned-element").remove(),window.PaCurrStickyDevice=elementorFrontend.getCurrentDeviceMode(),elementorFrontend.isEditMode()&&!f&&s("body").removeClass("premium-scroll-disabled"),a.each(function(e,i){s(i).closest(".premium-nav-menu-item").addClass("premium-mega-item-static")}),"slide"!==u.mobileLayout&&"slide"!==u.mainLayout||o.addClass("premium-ver-hamburger-menu"),u.rn_badges&&(e=u.rn_badges,n=["hor","ver"].includes(u.mainLayout)?o.find(".premium-nav-menu-container"):o.find(".premium-mobile-menu-container"),e.forEach(function(e){var i=n.find(e.selector+":not(.has-pa-badge)").length;""!==e.selector&&i&&function(e,i){for(var t=function(e){return'<span class="premium-rn-badge elementor-repeater-item-'+e.id+'">'+e.text+"</span>"}(e),n=o.find(".premium-nav-menu-container "+e.selector+":not(.has-pa-badge)"),m=o.find(".premium-mobile-menu-container "+e.selector+":not(.has-pa-badge)"),r=""!==u.hoverEffect?"premium-badge-"+u.hoverEffect:"",a=0;a<i.length;a++)["hor","ver"].includes(u.mainLayout)&&o.find(n[i[a]-1]).css("position","relative").addClass("has-pa-badge "+r).append(t),o.find(m[i[a]-1]).css("position","relative").addClass("has-pa-badge "+r).append(t)}(e,function(e,i){for(var t=F(e),n=[],m=0;m<t;m++){var r=F(i);n.includes(r)||n.push(r)}return n}(e.max,i))})),"dot"===u.hoverEffect)o.find(".premium-mega-content-container .premium-badge-dot, .premium-sub-menu .premium-badge-dot").each(function(e,i){s(i).mouseenter(function(){s(i).removeClass("premium-badge-dot")}).mouseleave(function(){s(i).addClass("premium-badge-dot")})});u.closeAfterClick&&m.find(".premium-menu-link").on("click.paAfterClick",function(){s(this).parent(".premium-nav-menu-item").hasClass("menu-item-has-children")||("slide"===u.mainLayout||"slide"===u.mobileLayout?i.click():r.click())});var h=null,C=null;if(k(u),o.hasClass("premium-nav-hor")&&(s(window).resize(),b()),I(),["hor","ver"].includes(u.mainLayout))if("hover"===u.submenuEvent)o.find(".premium-nav-menu-item").on("mouseenter.PaItemHover",function(e){e.stopPropagation(),clearTimeout(t),s(this).siblings().removeClass("premium-item-hovered"),s(this).addClass("premium-item-hovered"),s(this).hasClass("premium-sub-menu-item")&&s(this).parents(".premium-nav-menu-item").addClass("premium-item-hovered")}),o.on("mouseleave.PaItemHover",function(e){t=setTimeout(function(){o.find(".premium-item-hovered").removeClass("premium-item-hovered")},g)}),o.find(".premium-sub-menu, .premium-mega-content-container").on("mouseenter.PaItemHover",function(e){var i=s(this).parents(".premium-nav-menu-item").first();clearTimeout(t),i.siblings().removeClass("premium-item-hovered"),i.addClass("premium-item-hovered")}).on("mouseleave.PaItemHover",function(e){clearTimeout(t)});else{var y="item"===u.submenuTrigger?" > .premium-menu-link":" > .premium-menu-link > .premium-dropdown-icon",w=o.find(".premium-nav-menu-container .premium-nav-menu-item.menu-item-has-children"+y);elementorFrontend.isEditMode()&&o.off("mouseleave.PaItemHover"),w.off("click.PaItemClick"),w.on("click.PaItemClick",function(e){e.preventDefault(),e.stopPropagation();var i=s(this).parents(".premium-nav-menu-item").first();i.siblings().removeClass("premium-item-hovered").find(".premium-item-hovered").removeClass("premium-item-hovered"),i.toggleClass("premium-item-hovered")})}i.on("click",function(){o.find(".premium-mobile-menu-outer-container, .premium-nav-slide-overlay").removeClass("premium-vertical-toggle-open"),s("body").removeClass("premium-scroll-disabled")}),r.on("click",function(){"slide"===u.mobileLayout||"slide"===u.mainLayout?(o.find(".premium-mobile-menu-outer-container, .premium-nav-slide-overlay").addClass("premium-vertical-toggle-open"),f&&s("body").addClass("premium-scroll-disabled")):s(m).hasClass("premium-active-menu")?o.find(".premium-mobile-menu-container").slideUp("slow",function(){m.removeClass("premium-active-menu"),o.find(".premium-mobile-menu-container").show()}):m.addClass("premium-active-menu"),r.toggleClass("premium-toggle-opened")}),m.find(".premium-nav-menu-item.menu-item-has-children a, .premium-mega-nav-item a").on("click",function(e){if(!(s(this).find(".premium-dropdown-icon").length<1)){var i=s(this).parent(".premium-nav-menu-item");e.stopPropagation(),e.preventDefault(),i.hasClass("premium-active-menu")?i.toggleClass("premium-active-menu"):(m.find(".premium-active-menu").toggleClass("premium-active-menu"),i.toggleClass("premium-active-menu"),s(i).parents(".premium-nav-menu-item.menu-item-has-children").toggleClass("premium-active-menu"))}}),s(document).on("click",".premium-nav-slide-overlay",function(){o.find(".premium-mobile-menu-outer-container, .premium-nav-slide-overlay").removeClass("premium-vertical-toggle-open"),s("body").removeClass("premium-scroll-disabled")}),s(document).on("click.PaCloseMegaMenu",function(e){var i=s(e.target).closest(".premium-tabs-nav-list-item").length;s(e.target).closest(".premium-nav-widget-container").length||i||(s(m).hasClass("premium-active-menu")&&r.click(),"click"===u.submenuEvent&&o.find(".premium-nav-menu-container .premium-item-hovered").removeClass("premium-item-hovered"))}),s(window).on("resize",function(){window.PaCurrStickyDevice!==elementorFrontend.getCurrentDeviceMode()&&(c=!0,window.PaCurrStickyDevice=elementorFrontend.getCurrentDeviceMode()),k(u),o.hasClass("premium-nav-hor")&&b(),I()}),o.hasClass("premium-ver-toggle-yes")&&o.hasClass("premium-ver-click")&&o.find(".premium-ver-toggler").on("click",function(){o.find(".premium-nav-widget-container").toggleClass("premium-ver-collapsed",500)})}function b(){d.each(function(e,i){var t,n,m,r,a;t=s(i),n=elementorFrontend.config.experimentalFeatures.container,m=o.parents(".e-con").last(),r=(m=!n||m.length<1?o.closest(".elementor-top-section"):m).outerWidth(),a=m.offset().left-t.offset().left,s(t).removeClass("premium-mega-item-static").find(".premium-mega-content-container, > .premium-sub-menu").css({width:r+"px",left:a+"px"})})}function k(e){e.breakpoint>=s(window).outerWidth()&&!h?(o.find(".premium-ver-toggler").css("display","none"),o.addClass("premium-hamburger-menu"),o.find(".premium-active-menu").removeClass("premium-active-menu"),function(e){if(!e.length)return;var i=elementorFrontend.config.experimentalFeatures.container,t=o.parents(".e-con").last();t=!i||t.length<1?o.closest(".elementor-top-section"):t;var n=s(t).outerWidth(),m=o.offset().top,r=s(t).offset().top+s(t).outerHeight()-m,a=o.offset().left-s(t).offset().left;s(e).css({width:n+"px",left:"-"+a+"px",top:r+"px"})}(o.find(".premium-stretch-dropdown .premium-mobile-menu-container")),C=!(h=!0)):e.breakpoint<s(window).outerWidth()&&!C&&(o.hasClass("premium-ver-toggle-yes")&&o.find(".premium-ver-toggler").css("display","flex"),r.removeClass("premium-toggle-opened"),o.find(".premium-mobile-menu-container .premium-active-menu").removeClass("premium-active-menu"),o.removeClass("premium-hamburger-menu premium-ham-dropdown"),o.find(".premium-vertical-toggle-open").removeClass("premium-vertical-toggle-open"),o.find(".premium-nav-default").removeClass("premium-nav-default"),h=!(C=!0))}function I(){o.hasClass("premium-nav-sticky-yes")&&s("#"+u.stickyOptions.targetId).length&&!u.stickyOptions.disableOn.includes(elementorFrontend.getCurrentDeviceMode())?((l=u.stickyOptions).spacerClass="premium-sticky-spacer-"+s("#"+l.targetId).data("id"),s("#"+l.targetId).addClass("premium-sticky-active"),function(e){var i=v+elementorFrontend.getCurrentDeviceMode(),t=s("#"+e.targetId).hasClass("premium-sticky-parent");t&&s("#"+e.targetId).css({position:"relative",width:"inherit"});window[i]=s("#"+e.targetId).outerWidth()+"px",t&&s("#"+e.targetId).css({position:"fixed",width:window[i]})}(l),0===s("."+l.spacerClass).length&&s('<div class="'+l.spacerClass+'"></div>').insertBefore("#"+l.targetId),s(window).on("load",P),s(window).on("scroll.PaStickyNav",P)):(s(window).off("scroll.PaStickyNav"),s("."+l.spacerClass).remove(),s("#"+l.targetId).removeClass("premium-sticky-parent premium-sticky-active premium-sticky-parent-"+o.data("id")).css({top:"unset",width:"inherit",position:"relative"}))}function P(){var e=elementorFrontend.elements.$wpAdminBar.height()?elementorFrontend.elements.$wpAdminBar.height():0,i=s(window).scrollTop()+e,t=v+elementorFrontend.getCurrentDeviceMode();if(window[p]&&!c||(window[p]=s("."+l.spacerClass).offset().top,c=!1),i>=window[p]?(s("."+l.spacerClass).css("height",s("#"+l.targetId).outerHeight()+"px"),s("#"+l.targetId).addClass("premium-sticky-parent premium-sticky-parent-"+o.data("id")).css({width:window[t],top:e,position:"fixed"})):(s("."+l.spacerClass).css("height","0px"),s("#"+l.targetId).removeClass("premium-sticky-parent premium-sticky-parent-"+o.data("id")).css({top:"unset",width:"inherit",position:"relative"})),l.onScroll){var n=document.querySelector("#"+l.targetId+".premium-sticky-parent");if(n)s("#"+l.targetId+".premium-sticky-parent").addClass("premium-sticky-scroll-yes"),new Headroom(n,{tolerance:5,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp",offset:{up:s("#"+l.targetId).outerHeight()+150}}}).init()}else s("#"+l.targetId+".premium-sticky-parent").removeClass("premium-sticky-scroll-yes")}function F(e){return Math.floor(Math.random()*e)+1}}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-nav-menu.default",i)})}(jQuery);