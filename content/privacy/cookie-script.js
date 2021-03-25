<script>
<!-- Jetpack -->
console.log("Jetpack Statistik Script aktiviert");
apply_filters ( 'jetpack_honor_dnt_header_for_stats', bool true)
<!-- End Jetpack -->
<!-- ContactForm7 -->
<script>
  console.log("Contact Form 7 aktiviert");
  add_filter( 'wpcf7_load_js', '__return_true' );
  add_filter( 'wpcf7_load_css', '__return_true' );
</script>
<!-- End ContactForm7 -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-167092046-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-167092046-1');
  console.log('Analytics Script started');
</script>
