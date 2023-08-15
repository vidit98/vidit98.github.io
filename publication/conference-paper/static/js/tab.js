// function openTab(event, tabName) {
//     // Hide all tab content
//     var tabContent = document.getElementsByClassName("tab-content");
//     for (var i = 0; i < tabContent.length; i++) {
//       tabContent[i].style.display = "none";
//     }
  
//     // Remove active class from all tab buttons
//     var tabs = document.getElementsByClassName("tab");
//     for (var i = 0; i < tabs.length; i++) {
//       tabs[i].classList.remove("active");
//     }
  
//     // Show the selected tab content and add active class to the button
//     document.getElementById(tabName).style.display = "block";
//     event.currentTarget.classList.add("active");
//   }

  var TabBlock = {
    s: {
      animLen: 200
    },
    
    init: function() {
      TabBlock.bindUIActions();
      TabBlock.hideInactive();
    },
    
    bindUIActions: function() {
      $('.tabBlock-tabs').on('click', '.tabBlock-tab', function(){
        TabBlock.switchTab($(this));
      });
    },
    
    hideInactive: function() {
      var $tabBlocks = $('.tabBlock');
      
      $tabBlocks.each(function(i) {
        var 
          $tabBlock = $($tabBlocks[i]),
          $panes = $tabBlock.find('.tabBlock-pane'),
          $activeTab = $tabBlock.find('.tabBlock-tab.is-active');
        
        $panes.hide();
        $($panes[$activeTab.index()]).show();
      });
    },
    
    switchTab: function($tab) {
      var $context = $tab.closest('.tabBlock');
      
      if (!$tab.hasClass('is-active')) {
        $tab.siblings().removeClass('is-active');
        $tab.addClass('is-active');
     
        TabBlock.showPane($tab.index(), $context);
      }
     },
    
    showPane: function(i, $context) {
      var $panes = $context.find('.tabBlock-pane');
     
      // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
      $panes.slideUp(TabBlock.s.animLen);
      $($panes[i]).slideDown(TabBlock.s.animLen);
    }
  };
  
  $(function() {
    TabBlock.init();
  });