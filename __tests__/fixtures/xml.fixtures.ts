export const planes = `<?xml version = "1.0" encoding = "utf-8"?>
<!-- xslplanes.2.xml -->
<?xml-stylesheet type = "text/xsl" href = "xslplanes.2.xsl" ?>
<empty/>
<planes owner="John">
   <plane>
      <year> 1977 </year>
      <make> Cessna </make>
      <model> Skyhawk </model>
      <color> Light blue and white </color>
   </plane>
   <plane>
      <year> 1975 </year>
      <make> Piper </make>
      <model> Apache </model>
      <color> White </color>
   </plane>   
   <plane>
      <year> 1960 </year>
      <make> Cessna </make>
      <model> Centurian </model>
      <color> Yellow and white </color>
   </plane>
   <plane>
      <year> 1956 </year>
      <make> Piper </make>
      <model> Tripacer </model>
      <color> Blue </color>
   </plane>
</planes>
`;

export const complex = `<?xml version="1.0"?>
<catalog>
   <product description="Cardigan Sweater" product_image="cardigan.jpg">
      <catalog_item gender="Men">
         <item_number>QWZ5671</item_number>
         <price>39.95</price>
         <sale eligible="no"/>
         <size description="Medium">
            <color_swatch image="red_cardigan.jpg">Red</color_swatch>
            <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
         </size>
         <size description="Large">
            <color_swatch image="red_cardigan.jpg">Red</color_swatch>
            <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
         </size>
      </catalog_item>
      <catalog_item gender="Women">
         <item_number>RRX9856</item_number>
         <price>42.50</price>
         <sale eligible="yes"/>         
         <size description="Small">
            <color_swatch image="red_cardigan.jpg">Red</color_swatch>
            <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
            <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
         </size>
         <size description="Medium">
            <color_swatch image="red_cardigan.jpg">Red</color_swatch>
            <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
            <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
            <color_swatch image="black_cardigan.jpg">Black</color_swatch>
         </size>
         <size description="Large">
            <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
            <color_swatch image="black_cardigan.jpg">Black</color_swatch>
         </size>
         <size description="Extra Large">
            <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
            <color_swatch image="black_cardigan.jpg">Black</color_swatch>
         </size>
      </catalog_item>
   </product>
</catalog>`;
