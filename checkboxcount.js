$.fn.checkboxcount = function () {
    $("body").append("<button type='button' class='btn btn-success position-fixed shadow-lg d-none' style='bottom:4%;left:50%;' id='coun_Btn'><span class = 'font-weight-bold mr-2' > 0 </span>Save Profiles</button>");
      let coun_Btn = $("#coun_Btn");
      let chK_box = $(this).filter("input[type='checkbox']"); 
      chK_box.each(function () {
        $(this).addClass('ck_count');
        $(this).click(function () {
          if ($(this).is(":checked") == true) {
            if (coun_Btn.hasClass('d-none')) {
              coun_Btn.removeClass("d-none");
            }
            let ch_count = $("input.ck_count:checkbox:checked").length;
            coun_Btn.children("span").text(ch_count);
          } else {
            let ch_count = $("input.ck_count:checkbox:checked").length;
            if (ch_count == 0) {
              coun_Btn.addClass("d-none");
            } else {
              coun_Btn.children("span").text(ch_count);
            }

          }
        });
      });
    };