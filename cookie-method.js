/**
* To use
* with Osano Cookie Consent (https://www.osano.com/cookieconsent/download/)
* v2.1 – 30.01.2021
* vektorkneter.de
*
* The cookie-method is written after docu of orestbida.
* This Docs can be looked up here: https://github.com/orestbida/cookieconsent
*/

document.addEventListener('DOMContentLoaded', function () {
  var cc = initCookieConsent();
  let $cookieExpireTime = 2 * 28 * 24 * 3600;

  // Google Analytics tracking ID
  // You may use the old format UA-XXXXXXXX-X or the newer one G-XXXXXXXXXX
  let $tracking_id = "G-LMLBK5YKV0";

  // Set Google Analytics Cookie domain & path (needed for clearing cookies – have look in the inspector to get the values needed)
  // If set to false, values from window.location.hostname and window.location.pathname will be used
  let $tracking_cookie_domain = false; // eg. ".example.com"
  let $tracking_cookie_path = false;   // eg. "/"

// run plugin with config object
cc.run({
	autorun : true,
	delay : 0,
	current_lang : 'de',
	auto_language : true,
	autoclear_cookies : true,
	cookie_expiration : 56,
	autoload_css: true,
	theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.2/dist/cookieconsent.css',

	onAccept: function(cookie){
		console.log("onAccept fired ...");
		if ( cc.allowedCategory('analytics_cookies') ){

			// cc.loadScript('https://www.google-analytics.com/analytics.js', function(){
			// 	ga('create', 'G-LMLBK5YKV0', {
      //     cookieFlags: 'max-age=$cookieExpireTime;secure;samesite=none'
      //   }, 'auto');
			// 	ga('send', 'pageview');
      //   console.log('ga loaded');
      //   console.log('$cookieExpireTime');
		  //   })

      /* –  – NO FUTHER SETTINGS NEEDED BELOW THIS LINE –  – */
      function embedTrackingCode(){
          // add <script> to head
          var gascript = document.createElement("script");
          gascript.async = true;
          gascript.src = "https://www.googletagmanager.com/gtag/js?id="+$tracking_id;
          document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);

          // track pageview
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', $tracking_id, {
            'anonymize_ip': true,

            // self inserted
            'cookie_prefix' : 'Analytics Cookie',
            'cookie_domain' : 'cube-outdoor.com',
            'cookie_expires': $cookieExpireTime, //56 days, in seconds
            'cookie_update' : false, //first cookie accept is measured for exp time
            // 'user_id' : 'USER_ID'
          });
      };

      embedTrackingCode();

      // cc.loadScript('https://www.googletagmanager.com/gtag/js?id=G-LMLBK5YKV0', function() {
      //   window.dataLayer = window.dataLayer || [];
      //   function gtag() {
      //     dataLayer.push(arguments);
      //   };
      //   gtag('js', new Date());
      //   // sets the gtag while max-age is set in seconds equally here to 2 months
      //   // if not set it will be a session cookie
      //   gtag('config', 'G-LMLBK5YKV0', {
      //     'cookie_prefix' : 'Analytics Cookie',
      //     'cookie_domain' : 'cube-outdoor.com',
      //     'cookie_expires': cookieExpireTime, //56 days, in seconds
      //     'cookie_update' : false //first cookie accept is measured for exp time
      //     // 'user_id' : 'USER_ID'
      //   });
      //   console.log('gtag cookie loaded');
      // })

		// Delete line below, only for simulation purpose
		// document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);
	 }
  },

	onChange: function(cookie){
		console.log("onChange fired ...");
		// do something ...

		// Delete line below, only for simulation purpose
		// document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);
	},

	languages : {
    'de' : {
      consent_modal : {
        title :  "<i class=\"bi bi-palette\"></i> Cookie-Hinweis",
        description :  'Wir verwenden Cookies um Ihnen die bestmögliche Nutzung unserer Webseite ermöglichen, sowie unsere Webseite fortlaufend verbessern. Sie können Ihre freiwillige Zustimmung jederzeit widerrufen. Weitere Informationen und Einstellungsmöglichkeiten finden Sie unter "Einstellungen" und in unseren Datenschutz-Hinweisen. <a aria-label="Cookie policy" data-cc="c-settings" class="cc-link" href="https://cube-outdoor.com/jekyll_tutorial/privacy">Datenschutz</a>',
        primary_btn: {
          text: 'Alle akzeptieren',
          role: 'accept_all'				//'accept_selected' or 'accept_all'
        },
        // secondary_btn: {
        // 	text : 'Deny all',
        // 	role : 'accept_necessary'				//'settings' or 'accept_necessary'
        // }
        secondary_btn: {
          text : 'Einstellungen',
          role : 'settings'				//'settings' or 'accept_necessary'
        }
      },
      settings_modal : {
        title : '<div>Cookie-Einstellungen </div><div style="font-size: .8em; font-weight: 200; color: #859198; margin-top: 5px;">Powered by <a href="https://github.com/orestbida/cookieconsent/" aria-label="powered by cookie-consent" style="text-decoration: underline;">cookie-consent</a></div>',
        save_settings_btn : "Speichern",
        accept_all_btn : "Alle akzeptieren",
        cookie_table_headers : [
          {col1: "Name" },
          {col2: "Domain" },
          {col3: "Ablauf" },
          {col4: "Beschreibung" },
          {col5: "Typ" }
        ],
        blocks : [
          {
            title : "Cookieverwendung",
            description: 'Wir verwenden Cookies um Basis Funktionalitäten der Website bereitzustellen und die Verwendung der Website zu verbessern. Sie haben für jede Kategorie eine Optionsmöglichkeit die Sie jederzeit verändern können. Für mehr Informationen und zur Veränderung Ihrer Einstellung lesen Sie unsere <a href="#" class="cc-link">Datenschutz</a>-Erklärung im Abschnitt "Cookies".'
          },{
            title : "Notwendige Cookies",
            description: 'Diese Cookies sind essentiell zur korrekten Funktionsweise der Website. Ohne diese Cookies wird die Website nicht korrekt funktionieren.',
            toggle : {
              value : 'necessary_cookies',
              enabled : true,
              readonly: true							//cookie categories with readonly=true are all treated as "necessary cookies"
            }
          },{
            title : "Optionale Cookies",
            description: 'Diese Cookies speichern Ihre Auswahl beim letzten Besuch der Website.',
            toggle : {
              value : 'preferences_cookies',	//there are no default categories => you specify them
              enabled : true,
              readonly: false
            }
          },{
            title : "Analytische Cookies",
            description: 'Diese Cookies Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht haben und auf welche Links Sie geklickt haben. Alle Daten sind anonymisiert und können nicht zur Identifizierung verwendet werden.',
            toggle : {
              value : 'analytics_cookies',
              enabled : false,
              readonly: false
            },
            cookie_table: [
              {
                col1: '_ga',
                col2: 'google.com',
                col3: '2 years',
                col4: 'description ...' ,
                col5: 'Permanent cookie'
              },
              {
                col1: '_gat',
                col2: 'google.com',
                col3: '1 minute',
                col4: 'description ...' ,
                col5: 'Permanent cookie'
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'description ...' ,
                col5: 'Permanent cookie'
              }
            ]
          }
          // {
          //   title : "More information",
          //   description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact">contact me</a>.',
          // }
        ]
      }
    },

		'en' : {
			consent_modal : {
				title :  "Cookie-Notice",
				description :  'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only upon approval. <a aria-label="Cookie policy" data-cc="c-settings" class="cc-link" href="#">Change preferences</a>',
				primary_btn: {
					text: 'Accept all',
					role: 'accept_all'				//'accept_selected' or 'accept_all'
				},
				// secondary_btn: {
				// 	text : 'Deny all',
				// 	role : 'accept_necessary'				//'settings' or 'accept_necessary'
				// }
				secondary_btn: {
					text : 'Preference',
					role : 'settings'				//'settings' or 'accept_necessary'
				}
			},
			settings_modal : {
				title : '<div>Cookie settings</div><div style="font-size: .8em; font-weight: 200; color: #859198; margin-top: 5px;">Powered by <a href="https://github.com/orestbida/cookieconsent/" aria-label="powered by cookie-consent" style="text-decoration: underline;">cookie-consent</a></div>',
				save_settings_btn : "Save settings",
				accept_all_btn : "Accept all",
				cookie_table_headers : [
					{col1: "Name" },
					{col2: "Domain" },
					{col3: "Expiration" },
					{col4: "Description" },
					{col5: "Type" }
				],
				blocks : [
					{
						title : "Cookie usage",
						description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details about cookies and how I use them, read the full <a href="#" class="cc-link">cookie policy</a>.'
					},{
						title : "Strictly necessary cookies",
						description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
						toggle : {
							value : 'necessary_cookies',
							enabled : true,
							readonly: true							//cookie categories with readonly=true are all treated as "necessary cookies"
						}
					},{
						title : "Preferences cookies",
						description: 'These cookies allow the website to remember the choices you have made in the past.',
						toggle : {
							value : 'preferences_cookies',	//there are no default categories => you specify them
							enabled : true,
							readonly: false
						}
					},{
						title : "Analytics cookies",
						description: 'These cookies cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
						toggle : {
							value : 'analytics_cookies',
							enabled : false,
							readonly: false
						},
						cookie_table: [
							{
								col1: '_ga',
								col2: 'google.com',
								col3: '2 years',
								col4: 'description ...' ,
								col5: 'Permanent cookie'
							},
							{
								col1: '_gat',
								col2: 'google.com',
								col3: '1 minute',
								col4: 'description ...' ,
								col5: 'Permanent cookie'
							},
							{
								col1: '_gid',
								col2: 'google.com',
								col3: '1 day',
								col4: 'description ...' ,
								col5: 'Permanent cookie'
							}
						]
					},{
						title : "More information",
						description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact">contact me</a>.',
					}
				]
			}
		}
	}
})
});

var darkmode = false;

function toggleDarkmode(){
    if(!darkmode){
        document.getElementById('theme').innerText = 'dark theme';
		document.body.className='d_mode c_darkmode';
        darkmode = true;
    }else{
        document.getElementById('theme').innerText = 'light theme';
		document.body.className='d_mode';
        darkmode = false;
    }
}
