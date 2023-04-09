$(function () {
  // copy content to clipboard
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  // copy coupone code to clipboard
  $(".bh-button").on("click", function () {
    copyToClipboard(".bh-mainbg-title");
    $(".coupon-alert").fadeIn("slow");
  });
});
