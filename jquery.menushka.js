(function($){
  $(document).ready(function(){

  var set = {
    ww_min: 963, // 980 - 14 = ;   //надо отнять ширину скролл бара =)
    nav_selector: '.nav__primary', //указываем класс родительского элемента меню
    ul_selector: '#topnav',        //eуказываем класс или id самого ul меню.
    menu_Btn_class: 'MenuBtn',     // задаём класс кнопочки гамбургера
    url_open_class: 'active',      // класс подсветки активной страницы
    menu_Btn_close_class: 'MenuBtnClose',   //класс кнопки для закрытия меню (для кнопки на весь экран и fixed)
    menu_Btn_html: '<i class="icon-reorder"></i>',  //внутри кнопочки font awsome гамбургер меню
    new_Menu_id: 'MobileMenu',             // id самого блока мобильного меню (можно сделать во весь экран и fixed)
    new_Menu_ul_id: 'ul_MobileMenu'       // id самого ul мобильного меню.
  }

  window.MobileMenu = $(set.ul_selector).html();
  //window.MobileMenu = window.MobileMenu.html();
  //console.log(window.MobileMenu);

  $(set.nav_selector).before('<span class="'+ set.menu_Btn_class +'">'+ set.menu_Btn_html +'</span>');
  $(set.nav_selector).after('<div id="'+ set.new_Menu_id +'"><span class="'+ set.menu_Btn_close_class +'"></span><ul id="'+ set.new_Menu_ul_id +'"><li><a href="/">Главная</a></li>'+ window.MobileMenu +'</ul></div>');

  //$('#' + set.new_Menu_id).attr('class', '');
  $('#' + set.new_Menu_id + ' ul').attr('class', '').attr('style', '');
  $('#' + set.new_Menu_id + ' > ul > li').attr('class', 'menu_1_li');
  $('#' + set.new_Menu_id + ' > ul > li > ul').attr('class', 'menu_2_ul');
  $('#' + set.new_Menu_id + ' > ul > li > ul > li').attr('class', 'menu_2_li');
  $('#' + set.new_Menu_id + ' > ul > li > ul > li > ul').attr('class', 'menu_3_ul');
  $('#' + set.new_Menu_id + ' > ul > li > ul > li > ul > li').attr('class', 'menu_3_li');

  $('#' + set.new_Menu_id + ' li').prepend('<i class="mI"></i>');

  // current set active class
  var full_url = location.href;
  var find_url = full_url.split('/')[3];
  var url_regex = /index.(php|html)(#)?/ig;
  //console.log(full_url);
  //console.log(find_url);
  if(find_url != 0){
    $("#" + set.new_Menu_id + " a[href*='"+ find_url +"']").each(function(idx){
      $(this).parent().addClass(set.url_open_class);
    });
  } else {
    $('#' + set.new_Menu_id + ' a[href="/"]').parent().addClass(set.url_open_class);
  }

  if(url_regex.test(find_url)){
    $('#' + set.new_Menu_id + ' a[href="/"]').parent().addClass(set.url_open_class);
  }

  var ww = $(window).width();
  window.menu_control = 0;

  window.nav_selector = set.nav_selector;
  window.new_Menu_id = set.new_Menu_id;
  window.menu_Btn_class = set.menu_Btn_class;

  $('.' + window.menu_Btn_class).bind('click', function(e){
    $('#' + window.new_Menu_id).slideToggle(900);
  });

  function MobileMenu_show(){
    $(window.nav_selector).hide();
    $('#' + window.new_Menu_id).hide();
    $('.' + window.menu_Btn_class).show();
    // console.log('show');
  }

  function MobileMenu_hide(){
    $(window.nav_selector).show();
    $('#' + window.new_Menu_id).hide();
    $('.' + window.menu_Btn_class).hide();
    // console.log('hide');
  }

  if(ww < set.ww_min){
    if(window.menu_control != 1){
      MobileMenu_show();
       window.menu_control = 1;
    }
  } else {
    if(window.menu_control != 0){
      MobileMenu_hide();
       window.menu_control = 0;
    }
  }

  $(window).resize(function(){
    ww = $(window).width();

    if(ww < set.ww_min){
      if(window.menu_control != 1){
        MobileMenu_show();
         window.menu_control = 1;
      }
    } else {
      if(window.menu_control != 0){
        MobileMenu_hide();
         window.menu_control = 0;
      }
    }


  });

  });


})(jQuery);
