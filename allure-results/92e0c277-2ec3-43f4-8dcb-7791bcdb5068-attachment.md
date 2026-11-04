# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nykaaFilterPage.spec.ts >> Nykaa Filter Options
- Location: tests\nykaaFilterPage.spec.ts:13:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Women', { exact: true }) resolved to 3 elements:
    1) <span class="css-1a1fz9d">Women</span> aka getByRole('link', { name: 'Women, opens in new tab' })
    2) <div title="Women" class="css-rvx26o">Women</div> aka getByTitle('Women')
    3) <div class="ct-title">Women</div> aka getByText('Women').nth(2)

Call log:
  - waiting for getByText('Women', { exact: true })

```

# Page snapshot

```yaml
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
        - generic [ref=e77]:
          - heading "Buy Kids' Collection Online" [level=1] [ref=e78]
          - generic [ref=e80]: 100,352 items
        - generic [ref=e82]:
          - link "Home" [ref=e84] [cursor=pointer]:
            - /url: /
          - generic [ref=e88]: Kids
        - generic [ref=e89]:
          - generic [ref=e91]:
            - generic [ref=e92]:
              - heading "Filters" [level=3] [ref=e93]
              - button [ref=e94] [cursor=pointer]
            - generic [ref=e99]:
              - generic [ref=e100] [cursor=pointer]:
                - generic [ref=e101]: Gender
                - generic [ref=e102]: "1"
              - generic [ref=e107]:
                - generic [ref=e108] [cursor=pointer]:
                  - radio [ref=e110]
                  - generic [ref=e112]:
                    - generic "Girls" [ref=e113]
                    - generic [ref=e114]: "100394"
                - generic [ref=e115] [cursor=pointer]:
                  - radio [checked] [ref=e117]
                  - generic [ref=e122]:
                    - generic "Boys" [ref=e123]
                    - generic [ref=e124]: "92074"
                - generic [ref=e125] [cursor=pointer]:
                  - radio [ref=e127]
                  - generic [ref=e129]:
                    - generic "Women" [ref=e130]
                    - generic [ref=e131]: "45"
                - generic [ref=e132] [cursor=pointer]:
                  - radio [ref=e134]
                  - generic [ref=e136]:
                    - generic "Men" [ref=e137]
                    - generic [ref=e138]: "35"
            - generic [ref=e139]: Category
            - generic [ref=e145]: Size
            - generic [ref=e151]: Brand
            - generic [ref=e157]: Price
            - generic [ref=e163]: Discount
            - generic [ref=e169]: Curations
            - generic [ref=e175]: Launched In
            - generic [ref=e181]: Material
            - generic [ref=e187]: Color
            - generic [ref=e193]: Occasion
            - generic [ref=e199]: Pattern
            - generic [ref=e205]: Pack Size
            - generic [ref=e211]: Age
            - generic [ref=e217]: Closure
          - generic [ref=e223]:
            - generic [ref=e225]:
              - button "Girls" [ref=e227]
              - button "Sort by Popularity" [ref=e235] [cursor=pointer]:
                - generic [ref=e236]:
                  - generic [ref=e242]: Sort by
                  - generic [ref=e243]: Popularity
            - generic [ref=e247]:
              - generic [ref=e248]:
                - link "My Milestones Cotton Navy Blue Floral Dress With Bloomer And Hairband" [ref=e250] [cursor=pointer]:
                  - /url: /my-milestones-cotton-navy-blue-floral-dress-with-bloomer-and-hairband/p/23593531
                  - generic [ref=e251]:
                    - generic [ref=e252]:
                      - button "Add to wishlist" [ref=e254]
                      - button "View similar products" [ref=e260]
                    - img "My Milestones - Cotton Navy Blue Floral Dress With Bloomer And Hairband" [ref=e263]
                  - generic [ref=e264]:
                    - generic "AD" [ref=e267]
                    - generic [ref=e268]: My Milestones
                    - generic [ref=e269]: Cotton Navy Blue Floral Dress With Bloomer And Hairband
                    - generic [ref=e270]:
                      - generic [ref=e271]: ₹3,396
                      - generic [ref=e272]: ₹3,995
                      - generic [ref=e273]: 15%
                - link "BITIYA BY BHAMA Girls Ethnic Silk Blend Half Sleeves Floral Flared Lehenga and Blouse Set - Beige" [ref=e275] [cursor=pointer]:
                  - /url: /bitiya-by-bhama-silk-blend-half-sleeves-floral-flared-lehenga-and-blouse-set-beige/p/21691626
                  - generic [ref=e276]:
                    - generic [ref=e277]:
                      - button "Add to wishlist" [ref=e279]
                      - button "View similar products" [ref=e285]
                    - img "BITIYA BY BHAMA - Girls Ethnic Silk Blend Half Sleeves Floral Flared Lehenga and Blouse Set - Beige" [ref=e288]
                  - generic [ref=e289]:
                    - generic [ref=e290]: BITIYA BY BHAMA
                    - generic [ref=e291]: Girls Ethnic Silk Blend Half Sleeves Floral Flared Lehenga and Blouse Set - Beige
                    - generic [ref=e292]:
                      - generic [ref=e293]: ₹1,440
                      - generic [ref=e294]: ₹4,499
                      - generic [ref=e295]: 68%
                - link "H&M Girls Red Cotton Dress" [ref=e297] [cursor=pointer]:
                  - /url: /h-m-girls-red-cotton-dress/p/29308928
                  - generic [ref=e298]:
                    - generic [ref=e299]:
                      - button "Add to wishlist" [ref=e301]
                      - button "View similar products" [ref=e307]
                    - img "H&M - Girls Red Cotton Dress" [ref=e310]
                  - generic [ref=e311]:
                    - generic [ref=e312]: H&M
                    - generic [ref=e313]: Girls Red Cotton Dress
                    - generic [ref=e314]: ₹499
                    - generic [ref=e316]: Extra 10% Off
                - link "Trampoline Multi-Color Cotton Blend Solid Joggers (Pack of 3)" [ref=e318] [cursor=pointer]:
                  - /url: /trampoline-multi-color-cotton-blend-solid-joggers-pack-of-3/p/23835044
                  - generic [ref=e319]:
                    - generic [ref=e320]:
                      - button "Add to wishlist" [ref=e322]
                      - button "View similar products" [ref=e328]
                    - img "Trampoline - Multi-Color Cotton Blend Solid Joggers (Pack of 3)" [ref=e331]
                  - generic [ref=e332]:
                    - generic [ref=e333]: Trampoline
                    - generic [ref=e334]: Multi-Color Cotton Blend Solid Joggers (Pack of 3)
                    - generic [ref=e335]:
                      - generic [ref=e336]: ₹1,004
                      - generic [ref=e337]: ₹2,545
                      - generic [ref=e338]: 61%
              - generic [ref=e339]:
                - link "My Milestones Cotton Multi-Color Floral Dress With Bloomer And Hairband" [ref=e341] [cursor=pointer]:
                  - /url: /my-milestones-cotton-multi-color-floral-dress-with-bloomer-and-hairband/p/23593532
                  - generic [ref=e342]:
                    - generic [ref=e343]:
                      - button "Add to wishlist" [ref=e345]
                      - button "View similar products" [ref=e351]
                    - img "My Milestones - Cotton Multi-Color Floral Dress With Bloomer And Hairband" [ref=e354]
                  - generic [ref=e355]:
                    - generic "AD" [ref=e358]
                    - generic [ref=e359]: My Milestones
                    - generic [ref=e360]: Cotton Multi-Color Floral Dress With Bloomer And Hairband
                    - generic [ref=e361]:
                      - generic [ref=e362]: ₹3,651
                      - generic [ref=e363]: ₹4,295
                      - generic [ref=e364]: 15%
                - link "Indi-Loom Couture Girls Pink Printed Kurta Palazzo Set with Dupatta" [ref=e366] [cursor=pointer]:
                  - /url: /indi-loom-couture-girls-pink-printed-kurta-palazzo-set-with-dupatta/p/26959340
                  - generic [ref=e367]:
                    - generic [ref=e368]:
                      - button "Add to wishlist" [ref=e370]
                      - button "View similar products" [ref=e376]
                    - img "Indi-Loom Couture - Girls Pink Printed Kurta Palazzo Set with Dupatta" [ref=e379]
                  - generic [ref=e380]:
                    - generic "LATEST STYLE" [ref=e383]
                    - generic [ref=e384]: Indi-Loom Couture
                    - generic [ref=e385]: Girls Pink Printed Kurta Palazzo Set with Dupatta
                    - generic [ref=e386]:
                      - generic [ref=e387]: ₹1,596
                      - generic [ref=e388]: ₹4,199
                      - generic [ref=e389]: 62%
                - link "ANTHRILO Cool Blue Summer Heart Oversized T-Shirt And Pant" [ref=e391] [cursor=pointer]:
                  - /url: /anthrilo-cool-blue-summer-heart-oversized-t-shirt-and-pant/p/26832878
                  - generic [ref=e392]:
                    - generic [ref=e393]:
                      - button "Add to wishlist" [ref=e395]
                      - button "View similar products" [ref=e401]
                    - img "ANTHRILO - Cool Blue Summer Heart Oversized T-Shirt And Pant" [ref=e404]
                  - generic [ref=e405]:
                    - generic "LATEST STYLE" [ref=e408]
                    - generic [ref=e409]: ANTHRILO
                    - generic [ref=e410]: Cool Blue Summer Heart Oversized T-Shirt And Pant
                    - generic [ref=e411]:
                      - generic [ref=e412]: ₹792
                      - generic [ref=e413]: ₹2,199
                      - generic [ref=e414]: 64%
                - link "The Natkhat Tales Blue Girls Cotton Denim Jeans" [ref=e416] [cursor=pointer]:
                  - /url: /the-natkhat-tales-blue-girls-cotton-denim-jeans/p/28306233
                  - generic [ref=e417]:
                    - generic [ref=e418]:
                      - button "Add to wishlist" [ref=e420]
                      - button "View similar products" [ref=e426]
                    - img "The Natkhat Tales - Blue Girls Cotton Denim Jeans" [ref=e429]
                  - generic [ref=e430]:
                    - generic [ref=e431]: The Natkhat Tales
                    - generic [ref=e432]: Blue Girls Cotton Denim Jeans
                    - generic [ref=e433]:
                      - generic [ref=e434]: ₹660
                      - generic [ref=e435]: ₹1,199
                      - generic [ref=e436]: 45%
              - generic [ref=e437]:
                - link "My Milestones Cotton Peach Embroidered Dress With Bloomer And Hairband" [ref=e439] [cursor=pointer]:
                  - /url: /my-milestones-cotton-peach-embroidered-dress-with-bloomer-and-hairband/p/23593533
                  - generic [ref=e440]:
                    - generic [ref=e441]:
                      - button "Add to wishlist" [ref=e443]
                      - button "View similar products" [ref=e449]
                    - img "My Milestones - Cotton Peach Embroidered Dress With Bloomer And Hairband" [ref=e452]
                  - generic [ref=e453]:
                    - generic "AD" [ref=e456]
                    - generic [ref=e457]: My Milestones
                    - generic [ref=e458]: Cotton Peach Embroidered Dress With Bloomer And Hairband
                    - generic [ref=e459]:
                      - generic [ref=e460]: ₹3,651
                      - generic [ref=e461]: ₹4,295
                      - generic [ref=e462]: 15%
                - link "Hopscotch Girls Beige All-Over Print Full-Sleeve Casual Dress with Headband" [ref=e464] [cursor=pointer]:
                  - /url: /hopscotch-girls-beige-all-over-print-full-sleeve-casual-dress-with-headband/p/18905093
                  - generic [ref=e465]:
                    - generic [ref=e466]:
                      - button "Add to wishlist" [ref=e468]
                      - button "View similar products" [ref=e474]
                    - img "Hopscotch - Girls Beige All-Over Print Full-Sleeve Casual Dress with Headband" [ref=e477]
                  - generic [ref=e478]:
                    - generic [ref=e479]: Hopscotch
                    - generic [ref=e480]: Girls Beige All-Over Print Full-Sleeve Casual Dress with Headband
                    - generic [ref=e481]:
                      - generic [ref=e482]: ₹475
                      - generic [ref=e483]: ₹999
                      - generic [ref=e484]: 52%
                - link "StyloBug Girls All Over Print V-Neck Kurta & Pant Multi (Set of 2)" [ref=e486] [cursor=pointer]:
                  - /url: /stylo-bug-girls-all-over-print-v-neck-kurta-pant-multi-set-of-2/p/17079025
                  - generic [ref=e487]:
                    - generic [ref=e488]:
                      - button "Add to wishlist" [ref=e490]
                      - button "View similar products" [ref=e496]
                    - img "StyloBug - Girls All Over Print V-Neck Kurta & Pant Multi (Set of 2)" [ref=e499]
                  - generic [ref=e500]:
                    - generic [ref=e501]: StyloBug
                    - generic [ref=e502]: Girls All Over Print V-Neck Kurta & Pant Multi (Set of 2)
                    - generic [ref=e503]:
                      - generic [ref=e504]: ₹984
                      - generic [ref=e505]: ₹2,398
                      - generic [ref=e506]: 59%
                - link "FASHION DREAM Girls Mustard Yellow Foil Printed Silk Blend A-Line Kurta with Palazzo" [ref=e508] [cursor=pointer]:
                  - /url: /fashion-dream-girls-mustard-yellow-foil-printed-silk-blend-a-line-kurta-with-palazzo/p/29327792
                  - generic [ref=e509]:
                    - generic [ref=e510]:
                      - button "Add to wishlist" [ref=e512]
                      - button "View similar products" [ref=e518]
                    - img "FASHION DREAM - Girls Mustard Yellow Foil Printed Silk Blend A-Line Kurta with Palazzo" [ref=e521]
                  - generic [ref=e522]:
                    - generic [ref=e523]: FASHION DREAM
                    - generic [ref=e524]: Girls Mustard Yellow Foil Printed Silk Blend A-Line Kurta with Palazzo
                    - generic [ref=e525]:
                      - generic "orange" [ref=e526]
                      - generic "dark red" [ref=e527]
                    - generic [ref=e528]:
                      - generic [ref=e529]: ₹1,200
                      - generic [ref=e530]: ₹2,999
                      - generic [ref=e531]: 60%
              - generic [ref=e532]:
                - link "Hopscotch Girls Blue and White Stripe Print Top with Shirt Pant" [ref=e534] [cursor=pointer]:
                  - /url: /hopscotch-girls-blue-and-white-stripe-print-top-with-shirt-and-pant/p/18885186
                  - generic [ref=e535]:
                    - generic [ref=e536]:
                      - button "Add to wishlist" [ref=e538]
                      - button "View similar products" [ref=e544]
                    - img "Hopscotch - Girls Blue and White Stripe Print Top with Shirt Pant" [ref=e547]
                  - generic [ref=e548]:
                    - generic "AD" [ref=e551]
                    - generic [ref=e552]: Hopscotch
                    - generic [ref=e553]: Girls Blue and White Stripe Print Top with Shirt Pant
                    - generic [ref=e554]:
                      - generic [ref=e555]: ₹1,099
                      - generic [ref=e556]: ₹1,679
                      - generic [ref=e557]: 35%
                - link "Nike Youth Kids SB Alleyoop Sneakers" [ref=e559] [cursor=pointer]:
                  - /url: /nike-youth-kids-sb-alleyoop-sneakers-black/p/29310467
                  - generic [ref=e560]:
                    - generic [ref=e561]:
                      - button "Add to wishlist" [ref=e563]
                      - button "View similar products" [ref=e569]
                    - img "Nike - Youth Kids SB Alleyoop Sneakers" [ref=e572]
                  - generic [ref=e573]:
                    - generic "OFFER" [ref=e576]
                    - generic [ref=e577]: Nike
                    - generic [ref=e578]: Youth Kids SB Alleyoop Sneakers
                    - generic [ref=e579]:
                      - generic "black" [ref=e580]
                      - generic "white" [ref=e581]
                    - generic [ref=e582]:
                      - generic [ref=e583]: ₹2,548
                      - generic [ref=e584]: ₹5,095
                      - generic [ref=e585]: 50%
                    - generic [ref=e586]: Lowest price ever
                - link "PSPeaches Girls Pink Floral Striped Empire Pure Cotton Kurta With Sharara (Set of 2)" [ref=e590] [cursor=pointer]:
                  - /url: /pspeaches-girls-pink-floral-striped-empire-pure-cotton-kurta-with-sharara-set-of-2/p/15983913
                  - generic [ref=e591]:
                    - generic [ref=e592]:
                      - button "Add to wishlist" [ref=e594]
                      - button "View similar products" [ref=e600]
                    - img "PSPeaches - Girls Pink Floral Striped Empire Pure Cotton Kurta With Sharara (Set of 2)" [ref=e603]
                  - generic [ref=e604]:
                    - generic [ref=e605]: PSPeaches
                    - generic [ref=e606]: Girls Pink Floral Striped Empire Pure Cotton Kurta With Sharara (Set of 2)
                    - generic [ref=e607]:
                      - generic [ref=e608]: ₹854
                      - generic [ref=e609]: ₹3,711
                      - generic [ref=e610]: 77%
                - link "AJ Dezines Pink Printed and Lace Work Pure Cotton Kurti and Dhoti" [ref=e612] [cursor=pointer]:
                  - /url: /aj-dezines-pink-printed-and-lace-work-pure-cotton-kurti-and-dhoti/p/26244908
                  - generic [ref=e613]:
                    - generic [ref=e614]:
                      - button "Add to wishlist" [ref=e616]
                      - button "View similar products" [ref=e622]
                    - img "AJ Dezines - Pink Printed and Lace Work Pure Cotton Kurti and Dhoti" [ref=e625]
                  - generic [ref=e626]:
                    - generic "LATEST STYLE" [ref=e629]
                    - generic [ref=e630]: AJ Dezines
                    - generic [ref=e631]: Pink Printed and Lace Work Pure Cotton Kurti and Dhoti
                    - generic [ref=e632]:
                      - generic "pink" [ref=e633]
                      - generic "navy" [ref=e634]
                      - generic "black" [ref=e635]
                      - generic "red" [ref=e636]
                    - generic [ref=e637]:
                      - generic [ref=e638]: ₹1,330
                      - generic [ref=e639]: ₹3,499
                      - generic [ref=e640]: 62%
              - link "Load More" [ref=e641] [cursor=pointer]:
                - /url: /kids/c/6266?root=topnav_1&f=gender_filter%3D5199_&p=2
  - generic [ref=e642]:
    - generic [ref=e644]:
      - generic [ref=e645]:
        - generic [ref=e646]: Download our App
        - generic [ref=e647]:
          - link "Get it on Google Play" [ref=e648] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.fsn.nds
          - link "Download on the App Store" [ref=e650] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/nykaa-design-studio/id1439872423?mt=8
      - generic [ref=e652]:
        - generic [ref=e653]: FOR ANY HELP, YOU MAY CALL US AT
        - generic [ref=e654]:
          - generic [ref=e655]: 1800-266-3333
          - generic [ref=e656]: "(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)"
    - generic [ref=e658]:
      - generic [ref=e659]:
        - generic [ref=e660]: Who are we
        - list [ref=e661]:
          - listitem [ref=e662]:
            - link "About Us" [ref=e663] [cursor=pointer]:
              - /url: /lp/about-us?root=footer
          - listitem [ref=e664]:
            - link "Careers" [ref=e665] [cursor=pointer]:
              - /url: /lp/careers
          - listitem [ref=e666]:
            - link "Press" [ref=e667] [cursor=pointer]:
              - /url: https://www.nykaa.com/who_are_we/#press?root=footer
      - generic [ref=e668]:
        - generic [ref=e669]: Help
        - list [ref=e670]:
          - listitem [ref=e671]:
            - link "Shipping & Return Policy" [ref=e672] [cursor=pointer]:
              - /url: /lp/shipping-and-return-policy
          - listitem [ref=e673]:
            - link "Help Center" [ref=e674] [cursor=pointer]:
              - /url: /gateway-api/omsApis/helpCenter?domain=NYKAA_FASHION
          - listitem [ref=e675]:
            - link "Terms & Conditions" [ref=e676] [cursor=pointer]:
              - /url: /lp/terms-and-conditions
          - listitem [ref=e677]:
            - link "Privacy Policy" [ref=e678] [cursor=pointer]:
              - /url: /lp/privacy-policy
          - listitem [ref=e679]:
            - link "Responsible Disclosure" [ref=e680] [cursor=pointer]:
              - /url: /lp/responsible-disclosure
          - listitem [ref=e681]:
            - link "Sell on Nykaa Fashion" [ref=e682] [cursor=pointer]:
              - /url: /cp/sellonnykaa
      - generic [ref=e683]:
        - generic [ref=e684]: Quicklinks
        - list [ref=e685]:
          - listitem [ref=e686]:
            - link "Offers" [ref=e687] [cursor=pointer]:
              - /url: /offer.html?root=nav_1&ptype=sale_page
          - listitem [ref=e688]:
            - link "Sitemap" [ref=e689] [cursor=pointer]:
              - /url: /cp/sitemap
          - listitem [ref=e690]:
            - link "Style Files" [ref=e691] [cursor=pointer]:
              - /url: /style-files/
      - generic [ref=e692]:
        - generic [ref=e693]: Follow Us
        - generic [ref=e694]:
          - link "Instagram" [ref=e695] [cursor=pointer]:
            - /url: https://www.instagram.com/nykaafashion/
          - link "Facebook" [ref=e697] [cursor=pointer]:
            - /url: https://www.facebook.com/NykaaFashion
    - generic [ref=e700]:
      - generic [ref=e701]:
        - generic [ref=e702]: Women
        - list [ref=e703]:
          - listitem [ref=e704]:
            - link "Women's Indianwear" [ref=e705] [cursor=pointer]:
              - /url: /women/indianwear/c/4
          - listitem [ref=e706]:
            - link "Women's Westernwear" [ref=e707] [cursor=pointer]:
              - /url: /women/westernwear/c/3
          - listitem [ref=e708]:
            - link "Bags" [ref=e709] [cursor=pointer]:
              - /url: /women/bags/c/89
          - listitem [ref=e710]:
            - link "Women's Footwear" [ref=e711] [cursor=pointer]:
              - /url: /women/footwear/c/3528
          - listitem [ref=e712]:
            - link "Women's Jewellery" [ref=e713] [cursor=pointer]:
              - /url: /women/jewellery/c/77
          - listitem [ref=e714]:
            - link "Lingerie" [ref=e715] [cursor=pointer]:
              - /url: /women/lingerie/c/3946
          - listitem [ref=e716]:
            - link "Women's Sportswear" [ref=e717] [cursor=pointer]:
              - /url: /women/sportswear/c/4015
          - listitem [ref=e718]:
            - link "Women's Sleep & lounge" [ref=e719] [cursor=pointer]:
              - /url: /women/lingerie/sleepwear/c/3986
          - listitem [ref=e720]:
            - link "Women's Watches" [ref=e721] [cursor=pointer]:
              - /url: /women/accessories/watches/c/4641
          - listitem [ref=e722]:
            - link "Fashion Accessories" [ref=e723] [cursor=pointer]:
              - /url: /women/accessories/c/104
      - generic [ref=e724]:
        - generic [ref=e725]: Men
        - list [ref=e726]:
          - listitem [ref=e727]:
            - link "Topwear" [ref=e728] [cursor=pointer]:
              - /url: /men/topwear/c/6824
          - listitem [ref=e729]:
            - link "Bottomwear" [ref=e730] [cursor=pointer]:
              - /url: /men/bottoms/c/6834
          - listitem [ref=e731]:
            - link "Ethnicwear" [ref=e732] [cursor=pointer]:
              - /url: /men/ethnicwear/c/6841
          - listitem [ref=e733]:
            - link "Men's Footwear" [ref=e734] [cursor=pointer]:
              - /url: /men/footwear/c/6857
          - listitem [ref=e735]:
            - link "Men's Accessories" [ref=e736] [cursor=pointer]:
              - /url: /men/personal-accessories/c/6879
          - listitem [ref=e737]:
            - link "Innerwear & Sleepwear" [ref=e738] [cursor=pointer]:
              - /url: /men/innerwear-sleepwear/c/6850
          - listitem [ref=e739]:
            - link "Men's Watches" [ref=e740] [cursor=pointer]:
              - /url: /men/watches/c/6875
          - listitem [ref=e741]:
            - link "Bags & Backpacks" [ref=e742] [cursor=pointer]:
              - /url: /men/bags/c/6867
          - listitem [ref=e743]:
            - link "Athleisure" [ref=e744] [cursor=pointer]:
              - /url: /men/sports-and-athleisure/c/6888
          - listitem [ref=e745]:
            - link "Sports & Fitness" [ref=e746] [cursor=pointer]:
              - /url: /sports-fitness-equipment/c/11219
      - generic [ref=e747]:
        - generic [ref=e748]: Kids
        - list [ref=e749]:
          - listitem [ref=e750]:
            - link "Kids Indianwear" [ref=e751] [cursor=pointer]:
              - /url: /kids/indianwear/c/6267
          - listitem [ref=e752]:
            - link "Kids Westernwear" [ref=e753] [cursor=pointer]:
              - /url: /kids/westernwear/c/6282
          - listitem [ref=e754]:
            - link "Kids Footwear" [ref=e755] [cursor=pointer]:
              - /url: /kids/footwear/c/6333
          - listitem [ref=e756]:
            - link "Kids Jewellery" [ref=e757] [cursor=pointer]:
              - /url: /kids/accessories/jewelry/c/6348
          - listitem [ref=e758]:
            - link "Feeding" [ref=e759] [cursor=pointer]:
              - /url: /kids/feeding/c/6351
          - listitem [ref=e760]:
            - link "Kids Sportswear" [ref=e761] [cursor=pointer]:
              - /url: /kids/sportswear/c/6298
          - listitem [ref=e762]:
            - link "Kids Sleepwear" [ref=e763] [cursor=pointer]:
              - /url: /kids/sleepwear/c/6372
          - listitem [ref=e764]:
            - link "Kids Accessories" [ref=e765] [cursor=pointer]:
              - /url: /kids/accessories/c/6343
          - listitem [ref=e766]:
            - link "Toys & Games" [ref=e767] [cursor=pointer]:
              - /url: /kids/toys-and-games/c/6382
          - listitem [ref=e768]:
            - link "Innerwear" [ref=e769] [cursor=pointer]:
              - /url: /kids/innerwear/c/6329
      - generic [ref=e770]:
        - generic [ref=e771]: Luxe
        - list [ref=e772]:
          - listitem [ref=e773]:
            - link "Luxury Ethnic Wear" [ref=e774] [cursor=pointer]:
              - /url: /luxe-indian-wear/c/12039
          - listitem [ref=e775]:
            - link "Luxury Westernwear" [ref=e776] [cursor=pointer]:
              - /url: /luxe-western-wear/c/12038
          - listitem [ref=e777]:
            - link "Luxury Footwear" [ref=e778] [cursor=pointer]:
              - /url: /luxe-footwear/c/12041
          - listitem [ref=e779]:
            - link "Luxury Bags" [ref=e780] [cursor=pointer]:
              - /url: /luxe-bags/c/12042
          - listitem [ref=e781]:
            - link "Luxury Accessories" [ref=e782] [cursor=pointer]:
              - /url: /luxe-accessories/c/12043
          - listitem [ref=e783]:
            - link "Luxury Watches" [ref=e784] [cursor=pointer]:
              - /url: /luxe-watches/c/12200
          - listitem [ref=e785]:
            - link "Luxury Home" [ref=e786] [cursor=pointer]:
              - /url: /luxe-home-edit/c/12045
          - listitem [ref=e787]:
            - link "Luxury Jewellery" [ref=e788] [cursor=pointer]:
              - /url: /luxe-jewellery/c/12040
          - listitem [ref=e789]:
            - link "Summer Collection" [ref=e790] [cursor=pointer]:
              - /url: /luxe-summer-collection/c/12114
          - listitem [ref=e791]:
            - link "Luxury Dresses" [ref=e792] [cursor=pointer]:
              - /url: /fluid-flowing-luxe/c/6002
      - generic [ref=e793]:
        - generic [ref=e794]: Top Brands
        - list [ref=e795]:
          - listitem [ref=e796]:
            - link "Puma" [ref=e797] [cursor=pointer]:
              - /url: /designers/puma/c/4886
          - listitem [ref=e798]:
            - link "Vero Moda" [ref=e799] [cursor=pointer]:
              - /url: /designers/vero-moda/c/4188
          - listitem [ref=e800]:
            - link "W" [ref=e801] [cursor=pointer]:
              - /url: /designers/w/c/4038
          - listitem [ref=e802]:
            - link "Biba" [ref=e803] [cursor=pointer]:
              - /url: /designers/biba/c/5274
          - listitem [ref=e804]:
            - link "Forever New" [ref=e805] [cursor=pointer]:
              - /url: /designers/forever-new/c/4495
          - listitem [ref=e806]:
            - link "Skechers" [ref=e807] [cursor=pointer]:
              - /url: /designers/skechers/c/6477
          - listitem [ref=e808]:
            - link "Fablestreet" [ref=e809] [cursor=pointer]:
              - /url: /designers/fablestreet/c/1970
          - listitem [ref=e810]:
            - link "Only" [ref=e811] [cursor=pointer]:
              - /url: /designers/only/c/4189
          - listitem [ref=e812]:
            - link "Autumnlane" [ref=e813] [cursor=pointer]:
              - /url: /designers/autumnlane/c/12071
          - listitem [ref=e814]:
            - link "Cider" [ref=e815] [cursor=pointer]:
              - /url: /designers/cider/c/15204
          - listitem [ref=e816]:
            - link "Accessorize London" [ref=e817] [cursor=pointer]:
              - /url: /designers/accessorize-london/c/6748
      - generic [ref=e818]:
        - generic [ref=e819]: House of Nykaa
        - list [ref=e820]:
          - listitem [ref=e821]:
            - link "Twenty Dresses By Nykaa Fashion" [ref=e822] [cursor=pointer]:
              - /url: /twenty-dresses-by-nykaa-fashion/c/4240
          - listitem [ref=e823]:
            - link "Nykd by Nykaa" [ref=e824] [cursor=pointer]:
              - /url: /designers/nykd-by-nykaa/c/7059
          - listitem [ref=e825]:
            - link "RSVP by Nykaa Fashion" [ref=e826] [cursor=pointer]:
              - /url: /designers/rsvp/c/4706
          - listitem [ref=e827]:
            - link "Gajra Gang by Nykaa Fashion" [ref=e828] [cursor=pointer]:
              - /url: /designers/gajra-gang/c/10009
          - listitem [ref=e829]:
            - link "Likha by Nykaa Fashion" [ref=e830] [cursor=pointer]:
              - /url: /designers/likha/c/11935
          - listitem [ref=e831]:
            - link "Mixt by Nykaa Fashion" [ref=e832] [cursor=pointer]:
              - /url: /designers/mixt-by-nykaa-fashion/c/15963
          - listitem [ref=e833]:
            - link "IYKYK" [ref=e834] [cursor=pointer]:
              - /url: /designers/iykyk-by-nykaa-fashion/c/11495
          - listitem [ref=e835]:
            - link "Kica" [ref=e836] [cursor=pointer]:
              - /url: /designers/kica/c/4629
          - listitem [ref=e837]:
            - link "Pipa Bella By Nykaa Fashion" [ref=e838] [cursor=pointer]:
              - /url: /designers/pipa-bella-by-nykaa-fashion/c/3771
          - listitem [ref=e839]:
            - link "Azai by Nykaa Fashion" [ref=e840] [cursor=pointer]:
              - /url: /designers/azai-jewellery-by-nykaa-fashion/c/13718
          - listitem [ref=e841]:
            - link "Twig & Twine" [ref=e842] [cursor=pointer]:
              - /url: /designers/twig-twine/c/12291
          - listitem [ref=e843]:
            - link "Gloot" [ref=e844] [cursor=pointer]:
              - /url: /designers/gloot/c/13564
          - listitem [ref=e845]:
            - link "Nyri" [ref=e846] [cursor=pointer]:
              - /url: /designers/nyri/c/14963
    - generic [ref=e847]: © 2026 Nykaa Fashion Ltd. All Rights Reserved
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
> 29 |                     await this.page.getByText(option,{exact:true}).click();
     |                                                                    ^ Error: locator.click: Error: strict mode violation: getByText('Women', { exact: true }) resolved to 3 elements:
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