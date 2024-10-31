
## [v2.0.0] - 14-11-2022
### First deployment of public-website
- First deployment of new public website

## [v2.0.1] - 14-11-2022
### forcing deployment
- nuxt.config.js: removing unused settings

## [v2.0.2] - 15-11-2022
### wrapping server calls into try-catch block to avoid unhandled errors
- functions: adding prod version
- server: temporarily drop decorators in favor of raw calls
- api: surrounding every call into try-catch block
- functions: updating for prod

## [v2.0.3] - 15-11-2022
### hidding blog entry on footer except in spanish site
- middleSection: displaying blog entry only in Spanish site

## [v2.0.4] - 15-11-2022
### adding google tag manager configuration
- nuxt.config.js: adding gtm module

## [v2.0.5] - 15-11-2022
### adding defer config to GTM module
- nuxt.config.js: adding defer to GTM initialization

## [v2.0.6] - 16-11-2022
### fixing icon
- faqContent: fixing minus.svg size

## [v2.0.7] - 16-11-2022
### fixing i18n for PT site
- several: fixing pt i18n

## [v2.0.8] - 16-11-2022
### enabling crawler indexation
- nuxt.config.js: enabling indexation for bots

## [v2.0.9] - 16-11-2022
### minor fixes
- server: fixing mongo query to get SEO text on landings
- nuxt.config.js: solving trailing slash behavior on router
- nuxt.config.js: dropping trailingSlash
- uiLanguage: fixing typo
- uiHeroLandingSection: fixing template to render suffix text
- nuxt.config.js: adding fallbackLocale on browser language detection
- utils: fixing porto name in map
- layouts: adding head as function to get rid of meta merge warning

## [v2.0.10] - 16-11-2022
### fixing getCity business logic
- server: dropping unneeded condition on query to fetch city metadata

## [v2.0.11] - 16-11-2022
### fixing query for getCity function
- server: adding stage to getCity pipeline to filter neighborhood

## [v2.0.12] - 17-11-2022
### improving gclid handling and fixing i18n key on heroSection
- heroSection: fixing main hero content
- heroSection: fixing i18n key on hero
- layouts: adding gclid as mixin in every layout
- utils: adding parameter to addGclid function in order to keep more context in localStorage
- several: updating Forms gclid variable with full params coming from localstorage

## [v2.0.13] - 17-11-2022
### handling hubspot chatflow
- bottomSection: forcing hubspot chatflow refresh on site change
- mixins: adding hubspot mixin to refresh hubspot chatflow

## [v2.0.14] - 17-11-2022
### fixing hubspot mixin for chatflow rendering
- mixins: fixing hubspot chatflow call

## [v2.0.15] - 17-11-2022
### fixing hubspot chatflow refresh
- bottomSection: adding delayed timeout to refresh chatflow widget

## [v2.0.16] - 18-11-2022
### adding bricodepot PT 
- pages: adding PT to bricodepot and enabling it to navigation

## [v2.0.17] - 21-11-2022
### fixing booking wizard form
- uiMap: adding fullScreen control in UI
- several: fixing i18n keys in french
- pages: disabling scroll "block" on prices wizard
- pages: dropping bad css classes on booking resume
- pages: adding max-w to modal window in booking page
- uiBookingWizardForm: finishing refactoring
- store: adding reactivity to bookingWizard store
- uiWizardForm: dropping unused data
- uiExtraService: adding missing i18n keys
- pages: replacing form on booking page
- uiBookingWizardForm: WIP
- uiSelect: adding overflow option on big selectables
- assets: adding CSS to scrollbar
- severral: WIP on booking wizard
- Revert "several: fixing booking wizard form adding deal_id and page route"
- This reverts commit ebd18c63757294e5cff3408f342782ecdb98baf8.
- several: fixing booking wizard form adding deal_id and page route

## [v2.0.18] - 22-11-2022
### updating mobile image
- static: updating mobile image .webp

## [v2.0.19] - 22-11-2022
### updating bricodepot landing texts
- components: fixing bricodepot i18n keys

## [v2.0.20] - 23-11-2022
### fixing gtm configuration
- nuxt.config.js: updating gtm configuration

## [v2.0.21] - 24-11-2022
### fixing slot on modal for _deal page
- pages: fixing slot on _deal page

## [v2.0.22] - 24-11-2022
### fixing scrollIntoView on prices wizard for slow connections
- pages: dropping console.log
- pages: handle scrollIntoView on planComponentMounted hook

## [v2.0.23] - 25-11-2022
### fixing burger menu overlapping
- uiHeader: fixing burger menu

## [v2.0.24] - 25-11-2022
### fixing floating menu positioning in layout
- several: fixing floating menu for legal and faq menus
- pages: fixing floating menu on faq page

## [v2.0.25] - 25-11-2022
### adding blackfriday promo
- add localization -25% monthly
- add logic to ui-generic-modal in index.vue
- add blackfridayPromo.yaml and i18n localizations to index.vue
- uiWizardPlans.vue/yaml change to 25% discount
- uiPlanCard.vue and uiWizardPlans.vue price_promo done
- merge
- index.vue black friday pop up created
- server: adding price_promo to server response

## [v2.0.26] - 25-11-2022
### fixing text on popup 
- fix promo_subtitle i18n

## [v2.0.27] - 25-11-2022
### fixing booking wizard and showing promo price on resume card
- several: passing price with promo on ui plan cards
- utils: fixing closed days on booking wizard

## [v2.0.28] - 25-11-2022
### updating email addresses
- several: updating email addresses from older domains

## [v2.0.29] - 28-11-2022
### replacing modal slot to avoid rendering mismatch
- uiGenericModal: replacing nested <p>

## [v2.0.30] - 29-11-2022
### adding cookiebot
- pages: adding style to tune cookiebot cookie description
- nuxt.config.js: adding scripts only for production environment
- several: adding cookiebot cookiedeclaration text
- several: WIP on cookiebot configuration
- several: replacing Vuelidate plugin by mixin

## [v2.0.31] - 29-11-2022
### fixing hardcoded variable
- nuxt.config.js: restoring hardcoded variable

## [v2.0.32] - 29-11-2022
### adding delay for initial popup
- index.vue convert function in arrow function
- index.vue: added 5sec delay to black friday modal
- pages: adding cookiebot consent only in production environment
- nuxt.config.js: disable cookiebot temporarily in production
- several: fixing cookiebot consent text

## [v2.0.33] - 30-11-2022
### fixing cookies displayed on cookies page
- pages: fixing cookies displaying in cookies page

## [v2.0.34] - 30-11-2022
### dropping unused script
- nuxt.config.js: dropping unused cookiebot script on main config

## [v2.0.35] - 01-12-2022
### adding december promo
- uiPlanCard.vue: add conditional rendering
- uiWizardForm: updating french i18n key
- deleted black friday promo from code
- uiPlanCard.vue: fix padding
- uiPlanCard.vue: add styles to december promo
- heroSection.vue prepared december promo
- create labelPromoDecelber.vue, desktop and desktopL versions

## [v2.0.36] - 05-12-2022
### performance fine-tunning with delayed rendering
- pages: adding beforeDestroy method to business page
- store: dropping unused action
- pages: rendering form on business client on client side
- nuxt.config.js: updating nuxt-delay-hydration config
- pages: adding delayed rendering for remaining pages
- pages: adding delayed rendering to legal, booking and bricodepot
- pages: adding delayed rendering on booking and faq views
- pages: adding delayed rendering on hook mounted for index/about/business
- swiper: adding extra swiper configuration to force re-render on client side
- pages: adding loading storage in index page for rendering once fully mounted
- store: adding loading state to handle rendering page
- nuxt.config.js: adding v-scroll as plugin to avoid errors on SSR
- several: WIP
- Revert "several: adding swiper methods to be rendered only on the client-side"
- This reverts commit 2c58ccb14ac4328f598b47a2cc590b36ba10e2de.
- several: adding swiper methods to be rendered only on the client-side

## [v2.0.37] - 05-12-2022
### adding minor changes to form email input
- components: passing toLowerCase email value on input change
- pages: removing h-screen on outer HTML tag

## [v2.0.38] - 05-12-2022
### updating error response on form submission
- api: hidding real reason on form submission error

## [v2.0.39] - 16-12-2022
### test WA integration
- uiWhatsappWidget.vue: test WA

## [v2.0.40] - 16-12-2022
### restoring FR phone number
- uiWhatsappWidget: restoring original phone number

## [v2.0.41] - 22-12-2022
### çadding milano map boundaries
- utils: adding milan map bounds

## [v2.0.42] - 22-12-2022
### fixing maxZoom and italian center coordinates
- uiMap: setting maxZoom as 9 to display map boundaries

## [v2.0.43] - 22-12-2022
### updating whatsapp widget URL
- components: fixing i18n $t() on template
- components: adding default text on WA link when clicking on button

## [v2.0.44] - 23-12-2022
### fixing canonicals
- several: adding mixin to handle canonical route with trailing slash in html
- layouts: WIP on adding trailing slash for canonicals

## [v2.0.45] - 23-12-2022
### fixing canonical mixin
- mixins: updating canonicals business logic to handle trailing/no trailing slashes

## [v2.0.46] - 27-12-2022
### adding partnership - b2b integration
- utils: parametrize expirationTime for gclid and partnership referrer code
- nuxt.config.js: excluding partnerships routes from sitemap
- server: adding partnership_code into firestore metadata
- pages: disable loading button until form has no errors
- pages: drop finally clause on partnership views when submitting form to avodi double click before reloading
- pages: adding extra validation on partner form
- pages: removing watcher on full load in index page
- pages: injecting partnership code on lead page
- layouts: dropping referrer partner injection from layouts
- pages: refactoring collaboration routes
- pages: adding fade  transition to collaborate page
- components: getting referrer code from localstorage on form submission
- pages: restoring @hook:mounted on formSection component in index page
- pages: adding scroll behavior to form if we are coming from referrer url
- pages: adding missing title for booking page
- layouts: injecting partnership code as mixin
- mixins: adding partnershipcode to inject it into localStorage for later use
- pages: adding breakpoints for collaborate page
- pages: adding missing i18n keys and form submission business logic
- server: adding collaborator form metadata on firestore server
- pages: improving checkbox behavior when clicking itself
- pages: adding i18n keys in collaborate view
- nuxt.config.js: excluding routes from robots.txt
- pages: adding meta to noindex collaborate page
- utils: adding helper function to exclude localized routes in robots.txt
- pages: adding missing validation in collaborate form
- pages: WIP - adding form and validations
- layout: adding partnershipPage
- uiField: adding conditional required check to display "*" on fields

## [v2.0.47] - 27-12-2022
### adding missing serverfile to nuxt.config.js for vercel deployment
- vercel.json: adding entry

## [v2.0.48] - 28-12-2022
### p
- utils: fixing cookie duration from 39 to 90 days
- f
- pages: updating title on partnership lead page
- utils: adding 90 days to partnership referrer "cookie"
- pages: updating proxy page layout
- layouts: adding simple page without logo for lead partnership form

## [v2.0.49] - 28-12-2022
### uupdating copy on partnership lead form submission
- pages: updating form_submission text on lead form

## [v2.0.50] - 02-01-2023
### dropping december promotion
- delete december promo label from statics and components
- delete december promo label from heroSection.vue and double price from uiPlanCard.vue

## [v2.1.0] - 02-01-2023
### refactoring payment link
- components: removing unused component
- components: adding warn title to not allow prepaid cards
- components: setting adyen environment using production key instead of development to allow deploy it into staging
- pages: removing extra '>' in template
- pages: removing console.log
- components: adding onConfigSuccess event to card component to allow user to handle the payment thru the adyen web component
- pages: adding error on UI when payment method cannot be loaded
- pages: adding toast message on error and "bubbleup" current country to country list on billing form
- several: adding i18n keys for payment link component and view
- pages: adding business logic to handle the full payment process
- components: export adyen payment method in checkout mixin for later usage
- layouts: dropping nuxt-link on payment link layout
- nuxt.config.js: adding key in publicConfig
- plugins: injecting another backend into axios client
- components:  adding payment flow in card component
- .env: adding backend url endpoint
- components: WIP in card
- pages: fetching payment link metadata and check validness displaying the right content to user
- plugins: injecting gateway client in axios plugin
- nuxt.config.js: adding varenvs to publicruntimeconfig
- .env: adding api gateway environment variables
- components: adding loadingPage component with i18n keys
- api: WIP on checkout
- several: WIP on payment
- api: fixing amount to authorize the payment in checkout
- several: WIP handling card payments
- api: adding business logic to handle paymentIntent (WIP)
- .env: adding adyen missing configuration
- several: WIP on payment flow
- components: adding style in form dropdown
- pages: adding noindex for payment page
- pages: adding breakpoints to payment page
- several: WIP on checkout
- checkout: adding chargebee business logic to init the wrapper
- g
- .env: adding missing environment variables
- several: adding chargebee config flags
- pages: WIP on payment _id page
- components: adding common card logos
- uiInput: adding fallback content on internal value
- checkout: adding error exclamation on missing select input in form
- checkout: adding country and states as selects if Spain is selected with related business logic
- components: adjusting z-index on uiSelect to avoid component clashing and call focus() method on uiInput only if exists
- utils: adding zipCode validation
- nuxt.config.js: injecting adyen var envs in publicRuntimeConfig
- pages: adding paymentlink page with related layout
- components: adding checkout components (card, mixin, form, directdebit as WIP)
- store: adding checkout store to handle form metadata
- package.json: adding adyen-web dependency

## [v2.1.1] - 02-01-2023
### updating adyen dependency
- pages: adding text-center on error payment link and passing adyen dependency to devDependency

## [v2.1.2] - 02-01-2023
### fixing layout on payment page
- pages: fixing text position on error in payment page

## [v2.1.3] - 03-01-2023
### replace hardcoded payment amount by link metadata
- pages: dropping hardcoded amount by payment link amount and format it using the locale
- components: fixing uiInput with tel type when current locale not match in the locale list
- utils: adding helper method to handle currency format

## [v2.1.4] - 04-01-2023
### updating whatsapp widget text
- components: updating WA text

## [v2.1.5] - 10-01-2023
### fixing copy in default card
- components: fixing text on default card

## [v2.1.6] - 13-01-2023
### reducing hydration delay on mobile
- nuxt.config.js: adjusting delay hidration on mobile to 500ms

## [v2.1.7] - 18-01-2023
### adding email validation to forms
- .env: dropping keys for  development environment
- api: changing isValidEmail criteria on backend to check deliverability of emails
- api: adding comment
- package.json: removing unused dependency
- vercel.json: adding api endpoint to validate emails
- several: adding validationEmailMixin to forms
- mixins: adding validationEmail mixin to ensure deliverability for emails in forms
- api: adding email validation endpoint with timeout control
- .env: adding email API key and URL
- several: WIP

## [v2.1.8] - 18-01-2023
### adding id to email fields to track GTM conversions
- several: adding id to email field

## [v2.1.9] - 30-01-2023
### fixing italian typo on prices card
- fix italian localization

## [v2.1.10] - 06-02-2023
### adding SEO optimizations - v1
- nuxt.config.js: excluding blog route in robots.txt
- server: updating cities query
- components: replacing h6 with spans in sectionCard
- components: replacing li for  nuxt-link on dropdown menu
- components: dropping debug content in template
- components: adding internal links for storages in burguer menu
- components: WIP on uiHeader
- components: refactoring uiWarehouseMenu to add storages in header with i18n keys
- mixins: dropping only language hreflang from meta in helper method
- nuxt.config.js: removing trailing slash on every URL (3.1.2)
- nuxt.config.js: WIP on trailing slash
- package.json: adding nuxt-redirect module
- nuxt.config.js: adding custom module and router middleware to handle 301 redirects accordingly
- middleware: adding custom middleware to handle rootRedirect on right locales
- modules: adding custom module to handle rootRedirections for nuxt-i18n
- several: WIP on i18n

## [v2.1.11] - 13-02-2023
### updating vercel.json for blog deployment
- vercel.json: updating routing to blog endpoints
- nuxt.config.js: adding blog sitemap into robots.txt file
- vercel.json: adding routes for blog robots.txt and sitemap.xml
- vercel.json: adding /blog routes for reverse proxy

## [v2.1.12] - 14-02-2023
### changing collaborate/lead.vue form to allow submit data without email
- pages: set email as non required field in partnership lead form

## [v2.1.13] - 14-02-2023
### replacing li for nuxt-link in burguer menu
- components: dropping unused code in burguer menu

## [v2.1.14] - 15-02-2023
### uupdating titles and meta descriptions for SEO
- pages: updating meta descriptions
- pages: adding fixings titles on about and faq

## [v2.1.15] - 15-02-2023
### updating herosection h1 tag for SEO 
- components: changing h1 order in herosection for seo

## [v2.1.16] - 16-02-2023
### updating blog url in footer 
- change blog url on middleSection.vue footer

## [v2.1.17] - 16-02-2023
### fixing robots to allow /blog url
- nuxt.config.js: updating robots.txt

## [v2.1.18] - 17-02-2023
### updating IG link on footer
- components: updating IG url on spanish/italian sites

## [v2.1.19] - 20-02-2023
### fixing sitemap dynamic routes generation
- nuxt.config.js: fixing excluded routes from sitemap generation
- nuxt.config.js: exclude calculator urls from sitemap
- utils: rewriting sitemapRoutes function to create correct dynamic routes
- server: updating query to fetch cities to build the sitemap

## [v2.1.20] - 22-02-2023
### fixing sitemap redirection error in search console
- nuxt.config.js: excluding from sitemap and robots resume pages

## [v2.1.21] - 13-03-2023
### aadd livensa promo integration
- components: drop unused business logic on livensa form
- pages: add noindex nofollow to bricodepot page
- i18n: add missing keys for livensa views
- components: extends sectionOne component for livensa
- server: add livensaPromo key on form submission (firestore)
- pages: fix i18n and add english to livensa pages
- components: extend formSection to add livensaPromo key on submit
- components: fix background salmon height
- nuxt.config.js: exclude promo pages from sitemap
- pages: refactor body content on livensa view
- f
- components: add "supercomponent" to update i18n for livensa promo page
- static: adding livensa logo
- store: adding livensa state to handle prices
- pages: adding livensa promotion

## [v2.1.22] - 13-03-2023
### refactor formSection code for livensa and add livensa origin on footer form as well
- server: fix decorator condition
- pages: refactor formSection to avoid duplicated code

## [v2.1.23] - 27-03-2023
### add missing landing content and hydartion on demand
- components: add provider to googlemap image
- components: add class to fake map image
- pages: add lazy hydration to landing pages
- several: set the provider for nuxt-img on template
- components: set sourceset on sectionTen image
- nuxt.config.js: add imgix default modifiers and public config variable  to set the provider on runtime
- nuxt.config.js: adding imgix configuration
- several: SEO fixings
- components: add sizes and fixed with for images
- nuxt.config.js: add screen breakpoints to nuxt-image
- pages: add lazy hydration to components
- components: add lazy to nuxt-img
- nuxt.config.js: remove nuxt-delay-hydration
- components: render map only if there are markers in landingMapSection
- components: add splash screen on googleMap component to avoid rendering blank block
- pages: fix hideContent computed to display neighborhoods
- utils: add helper method to find a given marker
- pages: add mapSection
- components: refactor mapSection
- nuxt.config.js: uninstall vue-google-map plugin
- package.json: drop vue2-google-maps dependency
- components: add style to set the marker label position
- components: adding googleMap custom component to handle viewport displaying to avoid injecting the script on the page load
- several: WIP on OSM
- components: drop unused code in neighborhoodlinks component
- pages: add canonicals to neighborhoods landing pages
- pages: change livensa component name
- server: project canonical variable from db on getCity function
- components: drop unused code in neighborhoodlinks
- components: add animation to neighborhoodlinks component
- pages: droo unused code for neighborhoodlinks
- components: refactor neighborhoodlinks for top searched locations
- server: update mongodb query to fetch cities with visits
- add transition to cities and fix neighborhoodsLinks.vue
- add shadow in component, add cursor pointer, hide cities in mobile, chevron is only shown when there are more than 9 cities
- add visual part to hide more than 9 locations
- modify mongo database

## [v2.1.24] - 27-03-2023
### fix scroll on page when go to landing page from burguer menu
- components: remove commented line
- components: fix uiHeader scroll on burguer menu

## [v2.1.25] - 28-03-2023
### add prune-html to improve pagespeed rank
- pages: add lazy hydration to landing pages
- components: drop console.log
- several: add id to main div to allow prune-html
- components: refactor faqSection to allow hydration
- components: update sizes and provider on nuxt-imgs
- vercelignore: add folder
- nuxt.config.js: add prune behavior to html
- package.json: add dependency
- static: add .webp images

## [v2.1.26] - 28-03-2023
### aadd placeholder to client-only components
- several: add placeholder for client-only components

## [v2.1.27] - 28-03-2023
### add email to footer
- components: add email to footer with i18n keys

## [v2.1.28] - 18-04-2023
### add ld+json and seo changes in neighborhood landing pages
- pages: fix transition to form on prices view when coming from landing page
- components: change images width to auto in hiringSection
- components: set image heights to 100px in hiringSection
- components: add srcset in nuxt-image on hiringSection
- static: replace .svg with .webp images in hiringSection
- components: fix i18n keys in hiringSection
- components: fix PT i18n keys in hiringSection
- several: update leave-to transition to 0seg
- components: rename phone icon component
- components: update timeout on router push in site switcher
- components: fix header dimensions in french site
- store: add action to reset loading state completely
- pages: add transition opacity 0s on index page
- components: fix i18n key for PT in middleSection
- components: add timeout before change site to avoid displaying wrong data
- pages: add hook:mounted in pending components and clear store on route change to reset pricing metadata
- pages: fix layout in warehouses and set store for plans
- components: update css in hiringSection and add email in "write us" part
- server: fix query for cities
- components: add contact data in middleSection in the footer
- components: update uiWizardPlans business logic to handle layout and fetch calls
- i18n: update keys for middleSection component from footer
- components: add new svg icons as inline-svg
- pages: update business logic on plan mounted to handle if we come from landing page or not in pricing view
- components: replace <p> with div and v-html in sectionContent
- components: add extended component for sectionOne in landing pages
- components: update translate method to pass context in sectionOne
- components: add breakpoints and i18n keys in hiringSection
- store: add fromLandingPage in pricesWizard state
- i18n: add keys for hiringSection and uiWizardPlans
- components: add prop to uiWizardPlans to set the layout if we are coming from landing page
- pages: add first version of new city landing
- components: add i18n (ES) keys in hiringSection and fix html markup
- server: update cities query
- static: add hiringSection images
- components: add hiringSection for new CTAs (WIP)
- pages: add ld+json for landing pages
- server: update projection in db call to fetch cities
- utils: add helper method to capitalize first letter in strings
- pages: add json+ld script for faq in index
- pages: add json+ld script in faq page
- components: save in vuex faqEntries content to create the ld+json entries in main page
- store: add seo to handle component fetching data to add later into the page head

## [v2.1.29] - 18-04-2023
### add ciudadela integration
- nuxt.config.js: add ciudadelaPage to render hook
- components: update formSection to pass through ciudadelaPromo field
- i18n: add english keys for ciudadela view
- static: add ciudadela logo
- pages: add ciudadela view
- server: update firestore function to add ciudadela promo field

## [v2.1.30] - 18-04-2023
### add new banner in hero section
- tailwind.config.js: add granular screens for mobile
- components: add new banner in hero section
- static: add new labels

## [v2.1.31] - 18-04-2023
### fix scale in label in hero section
- components: fix scale for new label in hero section

## [v2.1.32] - 24-04-2023
### fixing SEO in /prices to avoid google search error and typo in hiringSection component
- i18n: add new keys in wizardPage and update pricesPage title
- layouts: add h1 for SEO in wizardPage
- components: save origin in state on /prices navigation for SEO
- store: add state to handle title in prices page for SEO (priceswizard.js)
- pages: update title in /prices for SEO
- i18n: add new keys for english in hiring section
- components: add title based on route for storages/warehouses in hiringSection

## [v2.1.33] - 26-04-2023
### add fedex message in footer
- bottomSection: add i18n keys for fedex message
- bottomSection: add feder text in spanish (WIP)

## [v2.2.0] - 05-05-2023
### Mexico deployment
- static: add missing MX map
- pages: add missing mapState in faq for displayBanner
- i18n: add cookies/legal/policy in english for MX
- i18n: add english conditions for MX
- pages: add conditions for MX
- pages: add cookies/legal/privacy for MX in spanish
- middleware: drop commented console.log
- several: remove trailing space in i18n keys
- several: restore social name for mexican company in legal components
- pages: disable temporarily the payment link for MX
- bottomSection: add fedex message in MX i18n keys
- static: add mexican hero label
- several: add missing i18n keys for MX
- static: add temporal label for MX
- components: add missing keys in middle section for MX
- pages: replace hardcoded currencyCode by payment link metadata
- i18n: add extra key to i18n for accept-language header in /countries call
- nuxt.config.js: add MX chargebee config for checkout
- several: update mexican phone number
- several: update mexican email
- nuxt.config.js: add GTMetrix in userAgents to prune it
- components: add MX i18n keys for footer email
- components: fix delivery/pick up number format in uiPlanCard
- components: update form_id key in form for MX
- middleware: fix business logic to detect current country from headers
- components: remove transition and add z-index on dropdown
- components: replace v-if with v-show in uiSiteSwitcher
- middleware: WIP on i18n
- components: drop unused props in uiHeader
- pages: add new header surrounded in a fixed div
- components: add transition uiSiteSwitcher
- components: fix heroSection margins for site switcher
- several: add site switcher banner to pages and layouts
- components: add uiSiteSwitcher component to mimic apple.com behavior
- static: add queretaro image
- store: update site store state
- components: drop stroke on X-Icon and add it by class
- store: add site store to handle switching the site
- i18n: add missing language keys for uiLanguage component
- pages: refactor code to add mixin instead of utility for formatting the currency
- components: pass currencyCode thru prop for drawing planes
- mixins: add formatCurrency as filter
- server: update getPlanes query to project currency in response
- utils: adding queretaro as valid city on hero select
- components: refactor i18n in uiLanguage from json to yaml files
- components: hide warehouses in MX in header, burgermenu and footer
- utils: add queretaro map bounds
- i18n: add queretaro to i18n keys
- components: fix form_id i18n key in checkout form
- several: add mx translation keys

## [v2.2.1] - 05-05-2023
### fixing text in MX site
- several: fix text in MX keys

## [v2.2.2] - 05-05-2023
### fix text in mexican site
- sectionFive: fix text in MX site

## [v2.2.3] - 08-05-2023
### fix h1 in resume view
- layouts: hide header section on resume page in layout

## [v2.2.4] - 18-05-2023
### clear landingCities state on site change to avoid painting non filled content
- bottomSection: clear landingCities store on site change

## [v2.2.5] - 18-05-2023
### add cache to SSR pages
- vercel.json: update rule
- vercel.json: add cache control headers for static pages
- vercel.json: WIP on cache pages

## [v2.2.6] - 18-05-2023
### fix url order in vercel.json for caching pages
- vercel.json: fix url order for cache

## [v2.2.7] - 18-05-2023
### reset landingPages store to avoid display store content on wrong pages
- pages: reset landingCities store before route leave on warehouses/storages

## [v2.2.8] - 19-05-2023
### drop cache on pages in vercel.json due to bad pagespeed
- vercel.json: drop cache on pages

## [v2.2.9] - 24-05-2023
### update opening hours in MX
- footer: update time for MX

## [v2.2.10] - 29-05-2023
### restore payment link for MX
- payment: disable middleware in payment view for MX

## [v2.2.11] - 06-07-2023
### added livro de elogios e reclamaçoes for portugal site in footer
- middleSection: add "livro de elegios" on footer for Portugal site

## [v2.2.12] - 18-07-2023
### add GA4 event on form submission
- pages: send GA4 event on pricing form submission
- uiWizardForm: propagate event metadata on form submission in pricing

## [v2.2.13] - 26-07-2023
### add icex flag in footer
- bottomSection: add icex flag on attribution message
- static: add icex flag

## [v2.2.14] - 31-07-2023
### remove shop address in footer
- i18n: add missing keys for pt demand names in english and clear unused keys
- middleSection: drop shop store address in footer

## [v2.2.15] - 14-09-2023
### add gtag integration for phones and upgrading node environment to v18
- package.json: add missing dependency for vercel (fetch-native)
- vercel.json: upgrade builder version
- package.json: update dependencies for node 18
- nuxt.config.js: drop debug option in google-gtag configuration
- nuxt.config.js: add google gtag configuration for phone conversion
- package.json: add gtag module
- .env: add google gtag variables

## [v2.2.16] - 26-09-2023
### addadd cbre collaboration page
- components: send cbrePromo on form submission
- server: add cbrePromo field to do the backend call
- pages: add layout to cbre
- layouts: add promo page layout
- i18n: add cbrePage english translations
- pages: add cbre promo
- nuxt.config: add cbre page to show it for pagespeed
- static: add cbre image
- nuxt.config.js: drop unused buildmodule and fix postcss configuration
- package.json: remove unused module after nuxt update

## [v2.2.17] - 03-10-2023
### minor changes on cbre - c200 promo
- static: update c200 image
- several: rename cbre to c200

## [v2.2.18] - 16-10-2023
### update MX pricing content
- i18n: update uiWizardPlans translations
- uiWizardPlans: remove discount text in MX
- i18n: update uiPlanCard translations
- uiPlanCard: change pricing features for MX

## [v2.2.19] - 18-10-2023
### fix production error due to wrong v-if 
- uiPlanCard: fix appendChild error on production bundle

## [v2.2.20] - 25-10-2023
### fix promo labels in hero for mexican sites and add new media
- static: remove unused label
- sectionNine: add new media (diariodequeretaro)
- i18n: update english flag for mexico
- static: update promotion label for mexican site
- sectionNine: add diariodequeretaro logo (pending: link and restrict to MX site)
- static: add .svg for diariodequeretaro press

## [v2.2.21] - 25-10-2023
### replace feder logo
- footer: replace feder image

## [v2.2.22] - 04-11-2023
### update french conditions
- pages: update conditions for France site

## [v2.2.23] - 10-11-2023
### update french general conditions
- conditions: update general conditions for french site

## [v2.2.24] - 17-11-2023
###  add black friday promo for PT and ES markets
- components: add dynamic format for lables in herosection
- i18n: add context for labels to handle promos
- static: update labels for black friday
- static: add updated label for spanish market
- components: update img src for labels in heroSection
- i18n: add key to handle hero labels

## [v2.2.25] - 21-11-2023
### update black friday labels 
- static: update black friday label format
- i18n: update label formats
- i18n: update format for labels from png to svg
- static: update label_es for blackfriday promo

## [v2.2.26] - 21-11-2023
### ffix hydration error
- pages: fix hydration error on _city page

## [v2.2.27] - 30-11-2023
### add WA widget on every screen
- uiPlanCard: change recogida by recoleccion in MX
- uiWhatsappWidget: display in all screens for MX

## [v2.2.28] - 01-12-2023
### drop black friday promo
- i18n: undo black friday configuration
- static: remove black friday images

## [v2.2.29] - 12-12-2023
### add christmas promo
- LogoIconChristmas: replace .svg image by inline svg
- several: replace logo icon for icon with santas hat
- uiWizardPlans: update text for promotion
- uiPlanCard: add promotion price
- LogoChristmas: add logo with santas hat
- static: add santas.svg

## [v2.2.30] - 12-12-2023
### add promo label in hero section
- i18n: update label for ES/PT in english
- static: add christmas promo labels

## [v2.2.31] - 03-01-2024
### quit christmas hat
- several: drop christmas promo
- LogoIconChristmas: remove commented code
- several: drop christmas logo when December is over

## [v2.2.32] - 09-01-2024
### uupdate french legal texts
- legal: update business data in french texts

## [v2.2.33] - 10-01-2024
### add wework landing page
- mixins: fix hreflangs for excluded languages (i.e. promo pages)
- pages: update wework image
- pages: add wework logo (v1)
- pages: add wework landing page for collab

## [v2.2.34] - 11-01-2024
### uupdate general conditions for ES and PT (5th clause)
- pages: update 5th condition for ES/PT

## [v2.2.35] - 11-01-2024
### fix PT text in general conditions
- conditions: fix typo in PT clause

## [v2.2.36] - 05-02-2024
### fix release-transaction http call
- checkout: fix HTTP call to release chargebee transaction in card component
- functions: upgrade node verstion to 18

## [v2.2.37] - 15-02-2024
### update livensa routes and fix seo attributes
- store: update livensa cities and prices
- pages: fix nuxt head in livensa pages
- mixins: add locales as argument to helper function nuxtI18nHeadFixer
- layouts: add livensa layout to handle nuxt Head explicitly on every page

## [v2.2.38] - 15-02-2024
### add students landing page and update livensa text
- pages: add students page logo and update text
- pages: update livensa text
- pages: add temporal image to students page
- nuxt.config.js: render studentsPage for performance tools
- several: handle studentsPromo when form is submitted
- pages: add generic landing page for students

## [v2.2.39] - 20-02-2024
### add missing i18n text in students landing page
- package.json: set node engine
- pages: add missing i18n text into students landing page

## [v2.2.40] - 22-02-2024
### add video in sectionOne and fix minor bugs
- hiringSection: fix mobileL layout
- heroSection: add padding to image on mobile breakpoints
- uiBurgerWarehouseMenu: fix controls on mobile
- legalLayout: fix margins on mobile and tablet
- uiPlanCard: fix hydration error
- sectionOne: fix layout for different breakpoints
- sectionOne: add city on video title on concrete landing pages
- pages: set renderVideo prop on sectionOne component
- sectionOne: add video title
- uiVideo: set thumbnail alt with title prop
- sectionOne: add video
- uiVideo: add prop to set title
- uiVideo: add component to handle youtube videos
- sectionOne: add YT embed video - WIP
- sectionOne: add YT embed video - WIP
- pages: add hydration to sectionOne

## [v2.2.41] - 23-02-2024
### make video smaller
- sectionOne: resize video to smaller size

## [v2.2.42] - 01-03-2024
### drop christmas message from pricing page
- i18n: dix title to drop christmas message
- uiWizardPlans: fix title to drop christmas message

## [v2.2.43] - 04-03-2024
### add locker key to update 1m2 spaces
- i18n: add locker key
- several: add locker key in i18n for 1m2 space
- server: update db query to fetch prices from server
- static: add locker.svg image for 1m2 space

## [v2.2.44] - 08-03-2024
### aadd MX video
- pages: set hydration on section one in warehouse pages
- sectionOne: add YT links for MX video

## [v2.2.45] - 13-03-2024
### update mexican conditions
- conditions: update MX clause 10th

## [v2.2.46] - 05-04-2024
### updating MX conditions
- several: update 10th condition for MX site

## [v2.2.47] - 08-04-2024
### add resa residences integration
- static: add resa image
- server: store resa promo flag into firestore document
- nuxt.config: discard resa-page from performance bots
- form/upperSection: add resa promo variable on form submission
- i18n: add resa promo translations
- pages: fix MX conditions text
- pages: add resa promo page
- store: add resa promo store

## [v2.2.48] - 11-04-2024
### adding plan selection and highlighting in planes component
- uiWizardPlans: add slideTo when plan is selected
- several: set highlight and isSelect props
- uiPlanCard: add highlight mode and change border color when is selected
- uiButtonPillsGroup: change style
- i18n: add popular key in uiPlanCard component
- store: change default payment period to biannual
- server: project pickup_promo and popular from db in get_prices

## [v2.2.49] - 12-04-2024
### added portugal video
- sectionOne: add PT video id
- yarn.lock: update caniuse

## [v2.2.50] - 25-04-2024
### add logistics page and minor refactoring on existing code
- generalDescription: fix width on mobile
- logistics: remove commented code
- i18n: add EN keys for logistics
- logistics/sectionFive: change text order
- generalDescription: replace image
- static: add warehouse image
- nuxt.config.js: add logistics page to pagespeed
- pages: add logistics page
- mixins: fix i18n-og meta entries
- logistics: add logistics landing page
- business: set new props in ui-card-viewer template on components
- uiHeader: add props to hide on demand different parts from header
- uiHeroLandingSection: render conditionally buttons
- uiCardViewer: replace slots by props
- uiCardSectionThree: remove required from props

## [v2.2.51] - 25-04-2024
### fix meta on several pages
- logistics/livensa/resa: fix custom meta

## [v2.2.52] - 25-04-2024
### hide whatsapp icon temporarily
- uiWhatsappWidget: hide temporarily

## [v2.2.53] - 26-04-2024
### restore whatsapp widget
- uiWhatsappWidget: restore whatsapp icon

## [v2.2.54] - 07-05-2024
### add flag on form submissions to know if deals are comming from B2B
- formSection: pass business lead property on form submission
- firestore: pass business lead property on lead creation
- pages: add meta page name to logistics page

## [v2.2.55] - 02-09-2024
### update discount in prices page
- vercel.json: update vercel builder to 0.25.0
- uiWizardPlans: update % of discount

## [v2.2.56] - 11-09-2024
### update customer service schedule
- Feature/update atc time
- uiButton: drop dummy comment
- change atc time from 20 to 19
- uiButton: adding dummy comment

## [v2.2.57] - 12-09-2024
### restore default payment period on prices page to monthly
- store: set monthly as default payment period to render prices wizard
