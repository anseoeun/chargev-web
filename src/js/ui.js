import Vue from 'vue'
import $ from 'jquery'

Vue.mixin({
   data(){
      return{
        scrollBtmShow: false, 
      }
    },
    mounted(){
      if(document.body.scrollHeight > window.innerHeight * 2) {
        this.scrollBtmShow = true
      }
    },
    methods: {
      gnbMenu(){
        $('.header .menu.mo-ver').on('click', function(){
          if($('.header').hasClass('on-mo')){
            $('.header').removeClass('on-mo');
            $('body').attr('overflow', 'hidden');
          }else{
            $('.header').addClass('on-mo');
            $('body').attr('overflow', '');
          }
        });
        $('.header .menu.pc-ver').on('click', function(){
          if($('.header').hasClass('on-pc')){
            $('.header').removeClass('on-pc');
          }else{
            $('.header').addClass('on-pc');
          }
        });

        $('.gnb-menu .link-menu').on('click', function(e){
          e.preventDefault()
    
          const body = $("html, body");
          let id = $(this).attr('href').split('#')[1]
    
          $('.header').removeClass('on')
          if($(this).parents('li').length > 0){
            $('[data-evt="tab-btns"] li').removeClass('on')
            $(this).parents('li').addClass('on');
          }else{
            $('[data-evt="tab-btns"] a').removeClass('on');
            $(this).addClass('on');
          }
    
          setTimeout(function(){
            if($('#'+id).length <= 0 ) return
            body.stop().animate({scrollTop:$('#'+id).offset().top}, 500);
          },100)
        });        
      },
      scrollBtm(){
        window.scrollTo(0, document.body.scrollHeight);
      },
      toggleSlide(e, target){
        let $btn = $(e.currentTarget);
        let $cont = $(target)
        
        if($cont.is(':hidden')){
            $cont.slideDown();
            $btn.addClass('on');
        }else{
            $cont.slideUp();
            $btn.removeClass('on');
        }
      },
      checkIcon(e, arr, i){
        e.stopPropagation();
        e.preventDefault();
        const el = e.currentTarget.querySelector('i')
        if(el.classList.contains('on')){
          if(Array.isArray(this[arr])) this.$set(this[arr], i, false)
          else this[arr] = false
        }else{
          if(Array.isArray(this[arr]))  this.$set(this[arr], i, true)
          else this[arr] = true
        }
      },
      sizeCheck(){
        if(document.body.clientWidth <= 1023){
          this.ver = 'mo'
        }else{
          this.ver = 'pc'
        }
      }
    }
  })
