# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nykaaFilterPage.spec.ts >> Nykaa Filter Options
- Location: tests\nykaaFilterPage.spec.ts:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Girls', { exact: true }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - banner [ref=e5]:
        - generic [ref=e8]:
          - button "Skip To Main Content" [ref=e10] [cursor=pointer]
          - generic [ref=e11]:
            - button "App Download" [ref=e12] [cursor=pointer]
            - button "Help" [ref=e17] [cursor=pointer]
        - generic [ref=e22]:
          - link "Home" [ref=e23] [cursor=pointer]:
            - /url: /?ptype=homepage
            - img "Nykaa Fashion" [ref=e24]
          - generic [ref=e25]:
            - link "Women, opens in new tab" [ref=e26] [cursor=pointer]:
              - /url: /women/c/6557?root=topnav_1
              - generic [ref=e27]: Women
            - link "Men, opens in new tab" [ref=e28] [cursor=pointer]:
              - /url: /men/c/6823?root=topnav_1
              - generic [ref=e29]: Men
            - link "Kids, opens in new tab" [ref=e30] [cursor=pointer]:
              - /url: /kids/c/6266?root=topnav_1
              - generic [ref=e31]: Kids
            - link "Home, opens in new tab" [ref=e32] [cursor=pointer]:
              - /url: /home/c/8528?root=topnav_1
              - generic [ref=e33]: Home
            - generic [ref=e34] [cursor=pointer]: More
          - generic [ref=e36]:
            - textbox "Search" [ref=e45]:
              - /placeholder: Search for products, styles, brands
            - button "Switch to Nykaa Fashion" [ref=e46] [cursor=pointer]
            - generic [ref=e47] [cursor=pointer]: Account
            - generic [ref=e57] [cursor=pointer]: Wishlist
            - button "cart" [ref=e63] [cursor=pointer]:
              - generic [ref=e67]: "0"
              - generic [ref=e68]: Cart
      - main [active] [ref=e69]:
        - generic [ref=e71]:
          - heading "Buy Kids' Collection Online" [level=1] [ref=e73]
          - generic [ref=e75]:
            - link "Home" [ref=e77] [cursor=pointer]:
              - /url: /
            - generic [ref=e81]: Kids
          - generic [ref=e82]:
            - generic [ref=e84]:
              - generic [ref=e85]:
                - heading "Filters" [level=3] [ref=e86]
                - button [ref=e87] [cursor=pointer]
              - generic [ref=e93] [cursor=pointer]:
                - generic [ref=e94]: Gender
                - generic [ref=e95]: "1"
              - generic [ref=e99]:
                - generic [ref=e100] [cursor=pointer]: Category
                - generic [ref=e106]:
                  - generic [ref=e108]:
                    - generic [ref=e110] [cursor=pointer]:
                      - generic "Infant" [ref=e111]
                      - generic [ref=e112]: "41387"
                    - generic [ref=e117] [cursor=pointer]:
                      - generic "Westernwear" [ref=e118]
                      - generic [ref=e119]: "40701"
                    - generic [ref=e124] [cursor=pointer]:
                      - generic "Indianwear" [ref=e125]
                      - generic [ref=e126]: "10395"
                    - generic [ref=e131] [cursor=pointer]:
                      - generic "Winterwear" [ref=e132]
                      - generic [ref=e133]: "9066"
                    - generic [ref=e138] [cursor=pointer]:
                      - generic "Sleepwear" [ref=e139]
                      - generic [ref=e140]: "3544"
                    - generic [ref=e145] [cursor=pointer]:
                      - generic "Accessories" [ref=e146]
                      - generic [ref=e147]: "3194"
                    - generic [ref=e152] [cursor=pointer]:
                      - generic "Footwear" [ref=e153]
                      - generic [ref=e154]: "3101"
                    - generic [ref=e159] [cursor=pointer]:
                      - generic "Toys & Playtime" [ref=e160]
                      - generic [ref=e161]: "3055"
                    - generic [ref=e166] [cursor=pointer]:
                      - generic "Sports & Athleisure" [ref=e167]
                      - generic [ref=e168]: "1973"
                    - generic [ref=e173] [cursor=pointer]:
                      - generic "Innerwear" [ref=e174]
                      - generic [ref=e175]: "822"
                    - generic [ref=e180] [cursor=pointer]:
                      - generic "Personal Care" [ref=e181]
                      - generic [ref=e182]: "7"
                  - generic [ref=e186]:
                    - button "Cancel" [ref=e187] [cursor=pointer]
                    - generic [ref=e188]:
                      - button "Reset" [disabled] [ref=e189]
                      - button "Apply" [disabled] [ref=e190]
              - generic [ref=e191]: Size
              - generic [ref=e197]: Brand
              - generic [ref=e203]: Price
              - generic [ref=e209]: Discount
              - generic [ref=e215]: Curations
              - generic [ref=e221]: Launched In
              - generic [ref=e227]: Material
              - generic [ref=e233]: Color
              - generic [ref=e239]: Occasion
              - generic [ref=e245]: Pattern
              - generic [ref=e251]: Pack Size
              - generic [ref=e257]: Age
              - generic [ref=e263]: Closure
            - generic [ref=e269]:
              - generic [ref=e271]:
                - generic [ref=e272]:
                  - button "Boys" [ref=e273]
                  - button [ref=e278] [cursor=pointer]
                - button "Sort by Popularity" [ref=e284] [cursor=pointer]:
                  - generic [ref=e285]:
                    - generic [ref=e291]: Sort by
                    - generic [ref=e292]: Popularity
              - generic [ref=e296]:
                - generic [ref=e297]:
                  - link "Hopscotch Boys Navy Stripe Print Jacket and Pant" [ref=e299] [cursor=pointer]:
                    - /url: /hopscotch-boys-navy-stripe-print-jacket-and-pant/p/18930028
                    - generic [ref=e300]:
                      - generic [ref=e301]:
                        - button "Add to wishlist" [ref=e303]
                        - button "View similar products" [ref=e309]
                      - img "Hopscotch - Boys Navy Stripe Print Jacket and Pant" [ref=e312]
                    - generic [ref=e313]:
                      - generic "AD" [ref=e316]
                      - generic [ref=e317]: Hopscotch
                      - generic [ref=e318]: Boys Navy Stripe Print Jacket and Pant
                      - generic [ref=e319]:
                        - generic [ref=e320]: ₹1,179
                        - generic [ref=e321]: ₹2,349
                        - generic [ref=e322]: 50%
                  - link "Trampoline Boys Cotton Blend Knit Printed Joggers Pack of 5" [ref=e324] [cursor=pointer]:
                    - /url: /trampoline-boys-cotton-blend-knit-printed-joggers-set-of-5/p/26114362
                    - generic [ref=e325]:
                      - generic [ref=e326]:
                        - button "Add to wishlist" [ref=e328]
                        - button "View similar products" [ref=e334]
                      - img "Trampoline - Boys Cotton Blend Knit Printed Joggers Pack of 5" [ref=e337]
                    - generic [ref=e338]:
                      - generic "LATEST STYLE" [ref=e341]
                      - generic [ref=e342]: Trampoline
                      - generic [ref=e343]: Boys Cotton Blend Knit Printed Joggers Pack of 5
                      - generic [ref=e344]:
                        - generic [ref=e345]: ₹666
                        - generic [ref=e346]: ₹1,699
                        - generic [ref=e347]: 61%
                  - link "Googo Gaaga Blue Cotton Full Sleeves Shirt With Jeans" [ref=e349] [cursor=pointer]:
                    - /url: /googo-gaaga-blue-cotton-full-sleeves-shirt-with-jeans/p/24761691
                    - generic [ref=e350]: RESPONSIBLE
                    - generic [ref=e356]:
                      - generic [ref=e357]:
                        - button "Add to wishlist" [ref=e359]
                        - button "View similar products" [ref=e365]
                      - img "Googo Gaaga - Blue Cotton Full Sleeves Shirt With Jeans" [ref=e368]
                    - generic [ref=e369]:
                      - generic [ref=e370]: Googo Gaaga
                      - generic [ref=e371]: Blue Cotton Full Sleeves Shirt With Jeans
                      - generic [ref=e372]:
                        - generic [ref=e373]: ₹1,140
                        - generic [ref=e374]: ₹2,999
                        - generic [ref=e375]: 62%
                  - link "Kuchipoo Boys Joggers (Pack of 3)" [ref=e377] [cursor=pointer]:
                    - /url: /kuchipoo-boys-joggers/p/21760146
                    - generic [ref=e378]:
                      - generic [ref=e379]:
                        - button "Add to wishlist" [ref=e381]
                        - button "View similar products" [ref=e387]
                      - img "Kuchipoo - Boys Joggers (Pack of 3)" [ref=e390]
                    - generic [ref=e391]:
                      - generic [ref=e392]: Kuchipoo
                      - generic [ref=e393]: Boys Joggers (Pack of 3)
                      - generic [ref=e394]:
                        - generic [ref=e395]: ₹1,019
                        - generic [ref=e396]: ₹1,899
                        - generic [ref=e397]: 46%
                - generic [ref=e398]:
                  - link "Haus & Kinder Mini Paw Baby Socks (Pack of 3)" [ref=e400] [cursor=pointer]:
                    - /url: /haus-kinder-mini-paw-baby-socks-pack-of-3/p/28041458
                    - generic [ref=e401]:
                      - generic [ref=e402]:
                        - button "Add to wishlist" [ref=e404]
                        - button "View similar products" [ref=e410]
                      - img "Haus & Kinder - Mini Paw Baby Socks (Pack of 3)" [ref=e413]
                    - generic [ref=e414]:
                      - generic [ref=e415]:
                        - generic "AD" [ref=e417]
                        - generic "OFFER" [ref=e419]
                      - generic [ref=e420]: Haus & Kinder
                      - generic [ref=e421]: Mini Paw Baby Socks (Pack of 3)
                      - generic [ref=e422]:
                        - generic [ref=e423]: ₹280
                        - generic [ref=e424]: ₹799
                        - generic [ref=e425]: 65%
                      - generic [ref=e426]: Extra 15% Off
                  - link "max Boys Stonewashed Loose Fit Jeans" [ref=e428] [cursor=pointer]:
                    - /url: /max-boys-stonewashed-loose-fit-jeans/p/28214706
                    - generic [ref=e429]:
                      - generic [ref=e430]:
                        - button "Add to wishlist" [ref=e432]
                        - button "View similar products" [ref=e438]
                      - img "max - Boys Stonewashed Loose Fit Jeans" [ref=e441]
                    - generic [ref=e442]:
                      - generic "LATEST STYLE" [ref=e445]
                      - generic [ref=e446]: max
                      - generic [ref=e447]: Boys Stonewashed Loose Fit Jeans
                      - generic [ref=e448]: ₹499
                  - link "H&M Boys Grey Loose Fit Jeans" [ref=e451] [cursor=pointer]:
                    - /url: /h-m-boys-grey-loose-fit-jeans/p/24281103
                    - generic [ref=e452]:
                      - generic [ref=e453]:
                        - button "Add to wishlist" [ref=e455]
                        - button "View similar products" [ref=e461]
                      - img "H&M - Boys Grey Loose Fit Jeans" [ref=e464]
                    - generic [ref=e465]:
                      - generic [ref=e466]: H&M
                      - generic [ref=e467]: Boys Grey Loose Fit Jeans
                      - generic [ref=e468]:
                        - generic "gray" [ref=e469]
                        - generic "teal" [ref=e470]
                      - generic [ref=e471]: ₹1,799
                      - generic [ref=e473]: Extra 10% Off
                  - link "Napchief Brown Solid Joggers" [ref=e475] [cursor=pointer]:
                    - /url: /napchief-brown-solid-joogers/p/17321832
                    - generic [ref=e476]:
                      - generic [ref=e477]:
                        - button "Add to wishlist" [ref=e479]
                        - button "View similar products" [ref=e485]
                      - img "Napchief - Brown Solid Joggers" [ref=e488]
                    - generic [ref=e489]:
                      - generic [ref=e490]: Napchief
                      - generic [ref=e491]: Brown Solid Joggers
                      - generic [ref=e492]:
                        - generic [ref=e493]: ₹695
                        - generic [ref=e494]: ₹1,390
                        - generic [ref=e495]: 50%
                - generic [ref=e496]:
                  - link "Hopscotch Open Toe Buckle Sandals Black" [ref=e498] [cursor=pointer]:
                    - /url: /hopscotch-open-toe-buckle-sandals-black/p/22522056
                    - generic [ref=e499]:
                      - generic [ref=e500]:
                        - button "Add to wishlist" [ref=e502]
                        - button "View similar products" [ref=e508]
                      - img "Hopscotch - Open Toe Buckle Sandals Black" [ref=e511]
                    - generic [ref=e512]:
                      - generic "AD" [ref=e515]
                      - generic [ref=e516]: Hopscotch
                      - generic [ref=e517]: Open Toe Buckle Sandals Black
                      - generic [ref=e518]:
                        - generic [ref=e519]: ₹858
                        - generic [ref=e520]: ₹999
                        - generic [ref=e521]: 14%
                  - link "Nike Youth Kids SB Alleyoop Sneakers" [ref=e523] [cursor=pointer]:
                    - /url: /nike-youth-kids-sb-alleyoop-sneakers-black/p/29310467
                    - generic [ref=e524]:
                      - generic [ref=e525]:
                        - button "Add to wishlist" [ref=e527]
                        - button "View similar products" [ref=e533]
                      - img "Nike - Youth Kids SB Alleyoop Sneakers" [ref=e536]
                    - generic [ref=e537]:
                      - generic "OFFER" [ref=e540]
                      - generic [ref=e541]: Nike
                      - generic [ref=e542]: Youth Kids SB Alleyoop Sneakers
                      - generic [ref=e543]:
                        - generic "black" [ref=e544]
                        - generic "white" [ref=e545]
                      - generic [ref=e546]:
                        - generic [ref=e547]: ₹2,548
                        - generic [ref=e548]: ₹5,095
                        - generic [ref=e549]: 50%
                      - generic [ref=e550]: Lowest price ever
                  - link "AJ Dezines Pink Cotton Full Sleeves Printed Kurta & Dhoti" [ref=e554] [cursor=pointer]:
                    - /url: /aj-dezines-pink-cotton-full-sleeves-printed-kurta-dhoti/p/22639974
                    - generic [ref=e555]:
                      - generic [ref=e556]:
                        - button "Add to wishlist" [ref=e558]
                        - button "View similar products" [ref=e564]
                      - img "AJ Dezines - Pink Cotton Full Sleeves Printed Kurta & Dhoti" [ref=e567]
                    - generic [ref=e568]:
                      - generic [ref=e569]: AJ Dezines
                      - generic [ref=e570]: Pink Cotton Full Sleeves Printed Kurta & Dhoti
                      - generic [ref=e571]:
                        - generic "pink" [ref=e572]
                        - generic "black" [ref=e573]
                        - generic "teal" [ref=e574]
                      - generic [ref=e575]:
                        - generic [ref=e576]: ₹1,093
                        - generic [ref=e577]: ₹2,499
                        - generic [ref=e578]: 56%
                  - link "AWW HUNNIE Beige Corduroy Trouser" [ref=e580] [cursor=pointer]:
                    - /url: /aww-hunnie-beige-corduroy-trouser/p/22770440
                    - generic [ref=e581]:
                      - generic [ref=e582]:
                        - button "Add to wishlist" [ref=e584]
                        - button "View similar products" [ref=e590]
                      - img "AWW HUNNIE - Beige Corduroy Trouser" [ref=e593]
                    - generic [ref=e594]:
                      - generic [ref=e595]: AWW HUNNIE
                      - generic [ref=e596]: Beige Corduroy Trouser
                      - generic [ref=e597]:
                        - generic "light orange" [ref=e598]
                        - generic "green" [ref=e599]
                        - generic "black" [ref=e600]
                        - generic "maroon" [ref=e601]
                      - generic [ref=e602]:
                        - generic [ref=e603]: ₹665
                        - generic [ref=e604]: ₹1,899
                        - generic [ref=e605]: 65%
                - generic [ref=e606]:
                  - link "H&M Boys 6-Piece Bodysuit And Trousers Set" [ref=e608] [cursor=pointer]:
                    - /url: /h-m-6-piece-bodysuit-and-trousers-set/p/24099530
                    - generic [ref=e609]:
                      - generic [ref=e610]:
                        - button "Add to wishlist" [ref=e612]
                        - button "View similar products" [ref=e618]
                      - img "H&M - Boys 6-Piece Bodysuit And Trousers Set" [ref=e621]
                    - generic [ref=e622]:
                      - generic "AD" [ref=e625]
                      - generic [ref=e626]: H&M
                      - generic [ref=e627]: Boys 6-Piece Bodysuit And Trousers Set
                      - generic [ref=e628]: ₹2,299
                      - generic [ref=e630]: Extra 10% Off
                  - link "Hopscotch Boys Multi Coloured Plaid Print Shirt and Jeans Set" [ref=e632] [cursor=pointer]:
                    - /url: /hopscotch-boys-multi-coloured-plaid-print-shirt-and-jeans-set/p/18905671
                    - generic [ref=e633]:
                      - generic [ref=e634]:
                        - button "Add to wishlist" [ref=e636]
                        - button "View similar products" [ref=e642]
                      - img "Hopscotch - Boys Multi Coloured Plaid Print Shirt and Jeans Set" [ref=e645]
                    - generic [ref=e646]:
                      - generic [ref=e647]: Hopscotch
                      - generic [ref=e648]: Boys Multi Coloured Plaid Print Shirt and Jeans Set
                      - generic [ref=e649]:
                        - generic [ref=e650]: ₹1,049
                        - generic [ref=e651]: ₹1,519
                        - generic [ref=e652]: 31%
                  - link "Intellibaby Owl Sensory Teether for Babies" [ref=e654] [cursor=pointer]:
                    - /url: /intellibaby-owl-sensory-teether-for-babies/p/30386619
                    - generic [ref=e655]:
                      - button "Add to wishlist" [ref=e658]
                      - img "Intellibaby - Owl Sensory Teether for Babies" [ref=e662]
                    - generic [ref=e663]:
                      - generic "NEW ON NYKAA" [ref=e666]
                      - generic [ref=e667]: Intellibaby
                      - generic [ref=e668]: Owl Sensory Teether for Babies
                      - generic [ref=e669]:
                        - generic [ref=e670]: ₹300
                        - generic [ref=e671]: ₹599
                        - generic [ref=e672]: 50%
                      - generic [ref=e673]: First time on discount
                  - link "ETHNIKS NEURON Boys Printed Pure Cotton Angrakha Kurta With Dhoti Pants" [ref=e677] [cursor=pointer]:
                    - /url: /ethniks-neuron-boys-printed-pure-cotton-angrakha-kurta-with-dhoti-pants/p/27199027
                    - generic [ref=e678]:
                      - button "Add to wishlist" [ref=e681]
                      - img "ETHNIKS NEURON - Boys Printed Pure Cotton Angrakha Kurta With Dhoti Pants" [ref=e685]
                    - generic [ref=e686]:
                      - generic "LATEST STYLE" [ref=e689]
                      - generic [ref=e690]: ETHNIKS NEURON
                      - generic [ref=e691]: Boys Printed Pure Cotton Angrakha Kurta With Dhoti Pants
                      - generic [ref=e692]:
                        - generic "light orange" [ref=e693]
                        - generic "green" [ref=e694]
                        - generic "orange" [ref=e695]
                      - generic [ref=e696]: ₹1,999
                - link "Load More" [ref=e699] [cursor=pointer]:
                  - /url: /kids/c/6266?root=topnav_1&f=gender_filter%3D5199_&p=2
    - generic [ref=e700]:
      - generic [ref=e702]:
        - generic [ref=e703]:
          - generic [ref=e704]: Download our App
          - generic [ref=e705]:
            - link "Get it on Google Play" [ref=e706] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.fsn.nds
            - link "Download on the App Store" [ref=e708] [cursor=pointer]:
              - /url: https://itunes.apple.com/in/app/nykaa-design-studio/id1439872423?mt=8
        - generic [ref=e710]:
          - generic [ref=e711]: FOR ANY HELP, YOU MAY CALL US AT
          - generic [ref=e712]:
            - generic [ref=e713]: 1800-266-3333
            - generic [ref=e714]: "(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)"
      - generic [ref=e716]:
        - generic [ref=e717]:
          - generic [ref=e718]: Who are we
          - list [ref=e719]:
            - listitem [ref=e720]:
              - link "About Us" [ref=e721] [cursor=pointer]:
                - /url: /lp/about-us?root=footer
            - listitem [ref=e722]:
              - link "Careers" [ref=e723] [cursor=pointer]:
                - /url: /lp/careers
            - listitem [ref=e724]:
              - link "Press" [ref=e725] [cursor=pointer]:
                - /url: https://www.nykaa.com/who_are_we/#press?root=footer
        - generic [ref=e726]:
          - generic [ref=e727]: Help
          - list [ref=e728]:
            - listitem [ref=e729]:
              - link "Shipping & Return Policy" [ref=e730] [cursor=pointer]:
                - /url: /lp/shipping-and-return-policy
            - listitem [ref=e731]:
              - link "Help Center" [ref=e732] [cursor=pointer]:
                - /url: /gateway-api/omsApis/helpCenter?domain=NYKAA_FASHION
            - listitem [ref=e733]:
              - link "Terms & Conditions" [ref=e734] [cursor=pointer]:
                - /url: /lp/terms-and-conditions
            - listitem [ref=e735]:
              - link "Privacy Policy" [ref=e736] [cursor=pointer]:
                - /url: /lp/privacy-policy
            - listitem [ref=e737]:
              - link "Responsible Disclosure" [ref=e738] [cursor=pointer]:
                - /url: /lp/responsible-disclosure
            - listitem [ref=e739]:
              - link "Sell on Nykaa Fashion" [ref=e740] [cursor=pointer]:
                - /url: /cp/sellonnykaa
        - generic [ref=e741]:
          - generic [ref=e742]: Quicklinks
          - list [ref=e743]:
            - listitem [ref=e744]:
              - link "Offers" [ref=e745] [cursor=pointer]:
                - /url: /offer.html?root=nav_1&ptype=sale_page
            - listitem [ref=e746]:
              - link "Sitemap" [ref=e747] [cursor=pointer]:
                - /url: /cp/sitemap
            - listitem [ref=e748]:
              - link "Style Files" [ref=e749] [cursor=pointer]:
                - /url: /style-files/
        - generic [ref=e750]:
          - generic [ref=e751]: Follow Us
          - generic [ref=e752]:
            - link "Instagram" [ref=e753] [cursor=pointer]:
              - /url: https://www.instagram.com/nykaafashion/
            - link "Facebook" [ref=e755] [cursor=pointer]:
              - /url: https://www.facebook.com/NykaaFashion
      - generic [ref=e758]:
        - generic [ref=e759]:
          - generic [ref=e760]: Women
          - list [ref=e761]:
            - listitem [ref=e762]:
              - link "Women's Indianwear" [ref=e763] [cursor=pointer]:
                - /url: /women/indianwear/c/4
            - listitem [ref=e764]:
              - link "Women's Westernwear" [ref=e765] [cursor=pointer]:
                - /url: /women/westernwear/c/3
            - listitem [ref=e766]:
              - link "Bags" [ref=e767] [cursor=pointer]:
                - /url: /women/bags/c/89
            - listitem [ref=e768]:
              - link "Women's Footwear" [ref=e769] [cursor=pointer]:
                - /url: /women/footwear/c/3528
            - listitem [ref=e770]:
              - link "Women's Jewellery" [ref=e771] [cursor=pointer]:
                - /url: /women/jewellery/c/77
            - listitem [ref=e772]:
              - link "Lingerie" [ref=e773] [cursor=pointer]:
                - /url: /women/lingerie/c/3946
            - listitem [ref=e774]:
              - link "Women's Sportswear" [ref=e775] [cursor=pointer]:
                - /url: /women/sportswear/c/4015
            - listitem [ref=e776]:
              - link "Women's Sleep & lounge" [ref=e777] [cursor=pointer]:
                - /url: /women/lingerie/sleepwear/c/3986
            - listitem [ref=e778]:
              - link "Women's Watches" [ref=e779] [cursor=pointer]:
                - /url: /women/accessories/watches/c/4641
            - listitem [ref=e780]:
              - link "Fashion Accessories" [ref=e781] [cursor=pointer]:
                - /url: /women/accessories/c/104
        - generic [ref=e782]:
          - generic [ref=e783]: Men
          - list [ref=e784]:
            - listitem [ref=e785]:
              - link "Topwear" [ref=e786] [cursor=pointer]:
                - /url: /men/topwear/c/6824
            - listitem [ref=e787]:
              - link "Bottomwear" [ref=e788] [cursor=pointer]:
                - /url: /men/bottoms/c/6834
            - listitem [ref=e789]:
              - link "Ethnicwear" [ref=e790] [cursor=pointer]:
                - /url: /men/ethnicwear/c/6841
            - listitem [ref=e791]:
              - link "Men's Footwear" [ref=e792] [cursor=pointer]:
                - /url: /men/footwear/c/6857
            - listitem [ref=e793]:
              - link "Men's Accessories" [ref=e794] [cursor=pointer]:
                - /url: /men/personal-accessories/c/6879
            - listitem [ref=e795]:
              - link "Innerwear & Sleepwear" [ref=e796] [cursor=pointer]:
                - /url: /men/innerwear-sleepwear/c/6850
            - listitem [ref=e797]:
              - link "Men's Watches" [ref=e798] [cursor=pointer]:
                - /url: /men/watches/c/6875
            - listitem [ref=e799]:
              - link "Bags & Backpacks" [ref=e800] [cursor=pointer]:
                - /url: /men/bags/c/6867
            - listitem [ref=e801]:
              - link "Athleisure" [ref=e802] [cursor=pointer]:
                - /url: /men/sports-and-athleisure/c/6888
            - listitem [ref=e803]:
              - link "Sports & Fitness" [ref=e804] [cursor=pointer]:
                - /url: /sports-fitness-equipment/c/11219
        - generic [ref=e805]:
          - generic [ref=e806]: Kids
          - list [ref=e807]:
            - listitem [ref=e808]:
              - link "Kids Indianwear" [ref=e809] [cursor=pointer]:
                - /url: /kids/indianwear/c/6267
            - listitem [ref=e810]:
              - link "Kids Westernwear" [ref=e811] [cursor=pointer]:
                - /url: /kids/westernwear/c/6282
            - listitem [ref=e812]:
              - link "Kids Footwear" [ref=e813] [cursor=pointer]:
                - /url: /kids/footwear/c/6333
            - listitem [ref=e814]:
              - link "Kids Jewellery" [ref=e815] [cursor=pointer]:
                - /url: /kids/accessories/jewelry/c/6348
            - listitem [ref=e816]:
              - link "Feeding" [ref=e817] [cursor=pointer]:
                - /url: /kids/feeding/c/6351
            - listitem [ref=e818]:
              - link "Kids Sportswear" [ref=e819] [cursor=pointer]:
                - /url: /kids/sportswear/c/6298
            - listitem [ref=e820]:
              - link "Kids Sleepwear" [ref=e821] [cursor=pointer]:
                - /url: /kids/sleepwear/c/6372
            - listitem [ref=e822]:
              - link "Kids Accessories" [ref=e823] [cursor=pointer]:
                - /url: /kids/accessories/c/6343
            - listitem [ref=e824]:
              - link "Toys & Games" [ref=e825] [cursor=pointer]:
                - /url: /kids/toys-and-games/c/6382
            - listitem [ref=e826]:
              - link "Innerwear" [ref=e827] [cursor=pointer]:
                - /url: /kids/innerwear/c/6329
        - generic [ref=e828]:
          - generic [ref=e829]: Luxe
          - list [ref=e830]:
            - listitem [ref=e831]:
              - link "Luxury Ethnic Wear" [ref=e832] [cursor=pointer]:
                - /url: /luxe-indian-wear/c/12039
            - listitem [ref=e833]:
              - link "Luxury Westernwear" [ref=e834] [cursor=pointer]:
                - /url: /luxe-western-wear/c/12038
            - listitem [ref=e835]:
              - link "Luxury Footwear" [ref=e836] [cursor=pointer]:
                - /url: /luxe-footwear/c/12041
            - listitem [ref=e837]:
              - link "Luxury Bags" [ref=e838] [cursor=pointer]:
                - /url: /luxe-bags/c/12042
            - listitem [ref=e839]:
              - link "Luxury Accessories" [ref=e840] [cursor=pointer]:
                - /url: /luxe-accessories/c/12043
            - listitem [ref=e841]:
              - link "Luxury Watches" [ref=e842] [cursor=pointer]:
                - /url: /luxe-watches/c/12200
            - listitem [ref=e843]:
              - link "Luxury Home" [ref=e844] [cursor=pointer]:
                - /url: /luxe-home-edit/c/12045
            - listitem [ref=e845]:
              - link "Luxury Jewellery" [ref=e846] [cursor=pointer]:
                - /url: /luxe-jewellery/c/12040
            - listitem [ref=e847]:
              - link "Summer Collection" [ref=e848] [cursor=pointer]:
                - /url: /luxe-summer-collection/c/12114
            - listitem [ref=e849]:
              - link "Luxury Dresses" [ref=e850] [cursor=pointer]:
                - /url: /fluid-flowing-luxe/c/6002
        - generic [ref=e851]:
          - generic [ref=e852]: Top Brands
          - list [ref=e853]:
            - listitem [ref=e854]:
              - link "Puma" [ref=e855] [cursor=pointer]:
                - /url: /designers/puma/c/4886
            - listitem [ref=e856]:
              - link "Vero Moda" [ref=e857] [cursor=pointer]:
                - /url: /designers/vero-moda/c/4188
            - listitem [ref=e858]:
              - link "W" [ref=e859] [cursor=pointer]:
                - /url: /designers/w/c/4038
            - listitem [ref=e860]:
              - link "Biba" [ref=e861] [cursor=pointer]:
                - /url: /designers/biba/c/5274
            - listitem [ref=e862]:
              - link "Forever New" [ref=e863] [cursor=pointer]:
                - /url: /designers/forever-new/c/4495
            - listitem [ref=e864]:
              - link "Skechers" [ref=e865] [cursor=pointer]:
                - /url: /designers/skechers/c/6477
            - listitem [ref=e866]:
              - link "Fablestreet" [ref=e867] [cursor=pointer]:
                - /url: /designers/fablestreet/c/1970
            - listitem [ref=e868]:
              - link "Only" [ref=e869] [cursor=pointer]:
                - /url: /designers/only/c/4189
            - listitem [ref=e870]:
              - link "Autumnlane" [ref=e871] [cursor=pointer]:
                - /url: /designers/autumnlane/c/12071
            - listitem [ref=e872]:
              - link "Cider" [ref=e873] [cursor=pointer]:
                - /url: /designers/cider/c/15204
            - listitem [ref=e874]:
              - link "Accessorize London" [ref=e875] [cursor=pointer]:
                - /url: /designers/accessorize-london/c/6748
        - generic [ref=e876]:
          - generic [ref=e877]: House of Nykaa
          - list [ref=e878]:
            - listitem [ref=e879]:
              - link "Twenty Dresses By Nykaa Fashion" [ref=e880] [cursor=pointer]:
                - /url: /twenty-dresses-by-nykaa-fashion/c/4240
            - listitem [ref=e881]:
              - link "Nykd by Nykaa" [ref=e882] [cursor=pointer]:
                - /url: /designers/nykd-by-nykaa/c/7059
            - listitem [ref=e883]:
              - link "RSVP by Nykaa Fashion" [ref=e884] [cursor=pointer]:
                - /url: /designers/rsvp/c/4706
            - listitem [ref=e885]:
              - link "Gajra Gang by Nykaa Fashion" [ref=e886] [cursor=pointer]:
                - /url: /designers/gajra-gang/c/10009
            - listitem [ref=e887]:
              - link "Likha by Nykaa Fashion" [ref=e888] [cursor=pointer]:
                - /url: /designers/likha/c/11935
            - listitem [ref=e889]:
              - link "Mixt by Nykaa Fashion" [ref=e890] [cursor=pointer]:
                - /url: /designers/mixt-by-nykaa-fashion/c/15963
            - listitem [ref=e891]:
              - link "IYKYK" [ref=e892] [cursor=pointer]:
                - /url: /designers/iykyk-by-nykaa-fashion/c/11495
            - listitem [ref=e893]:
              - link "Kica" [ref=e894] [cursor=pointer]:
                - /url: /designers/kica/c/4629
            - listitem [ref=e895]:
              - link "Pipa Bella By Nykaa Fashion" [ref=e896] [cursor=pointer]:
                - /url: /designers/pipa-bella-by-nykaa-fashion/c/3771
            - listitem [ref=e897]:
              - link "Azai by Nykaa Fashion" [ref=e898] [cursor=pointer]:
                - /url: /designers/azai-jewellery-by-nykaa-fashion/c/13718
            - listitem [ref=e899]:
              - link "Twig & Twine" [ref=e900] [cursor=pointer]:
                - /url: /designers/twig-twine/c/12291
            - listitem [ref=e901]:
              - link "Gloot" [ref=e902] [cursor=pointer]:
                - /url: /designers/gloot/c/13564
            - listitem [ref=e903]:
              - link "Nyri" [ref=e904] [cursor=pointer]:
                - /url: /designers/nyri/c/14963
      - generic [ref=e905]: © 2026 Nykaa Fashion Ltd. All Rights Reserved
  - button "scroll-up" [ref=e907] [cursor=pointer]
```

# Test source

```ts
  1  | import{Page,Locator} from "@playwright/test"
  2  | 
  3  | export class NykaaFilterPage{
  4  | 
  5  |     private readonly page:Page;
  6  | 
  7  |     //Locators-fliters
  8  | 
  9  |     //private readonly filterOpt:Locator;
  10 | 
  11 | 
  12 |     constructor(page:Page){
  13 |         this.page=page;
  14 |         //this.filterOpt=this.page.locator("div[class='css-8c6tij']");
  15 | 
  16 |     }
  17 | async getAllFilters() {
  18 | 
  19 |     const categories = await this.page.locator('div.css-8c6tij').allTextContents();
  20 |     const filterMap: Record<string, string[]> = {};
  21 |         for (const category of categories) {
  22 |             await this.page.getByText(`${category}`,{ exact: true }).click();
  23 |             filterMap[category] = await this.page.locator(`xpath=//div[text()="${category}"]/ancestor::div[contains(@class,'css')]//div[@title]`).allTextContents();
  24 |             for (const [category, options] of Object.entries(filterMap)) {
  25 |                 for (const option of options) {
  26 |                     console.log(`${category} -> ${option}`);
  27 | 
  28 |                     // validation or click
> 29 |                     await this.page.getByText(option,{exact:true}).first().click();
     |                                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 |                 }
  31 |             }
  32 |         console.log(filterMap)
  33 |         }
  34 |     return filterMap;
  35 | }
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 |     // async filterOptions():Promise<any>{
  43 |     //     const filterOptions=await this.filterOpt.allTextContents()
  44 |     //     console.log(filterOptions)
  45 |     // }
  46 | 
  47 | }
```