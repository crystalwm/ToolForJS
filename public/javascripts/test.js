/**
 * Created by John on 2015-05-16.
 */
;
(function ($) {
    $.wf_bug = {
        a:function(){
            $.wf_bug.b();
            $.wf_bug.c();
        },
        b:function(){
            $.wf_bug.c();

        },
        c:function(){
        }
    }}) (jQuery);
