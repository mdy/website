!function(){var o=new MelodyDemo("melo-demo-app","github.com/gin-gonic/gin");setTimeout(function(){$('[data-toggle="tooltip"]').tooltip()},1e3),$("#promo-demo-btn").click(function(){var e=$("#promo-demo-input").val();o.setPackage(""),$(window).scrollTo("#demo",800,{offset:-65,onAfter:function(){o.setPackage(e),o.runQuery()}})})}();