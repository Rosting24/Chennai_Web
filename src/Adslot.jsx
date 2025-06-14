import { useEffect } from 'react';

const AdSlot = () => {
  useEffect(() => {
    try {
    (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fy+j-1k-55+f9"
     data-ad-client="ca-pub-4302011518434174"
     data-ad-slot="4719675291"></ins>
  );
};

export default AdSlot;


{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4302011518434174"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fy+j-1k-55+f9"
     data-ad-client="ca-pub-4302011518434174"
     data-ad-slot="4719675291"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}