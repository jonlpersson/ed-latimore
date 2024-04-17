
<!DOCTYPE html>

<html class=" no-touch" lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<meta name="format-detection" content="telephone=no">
		<meta name="msapplication-tap-highlight" content="no">

		<meta name="author" content="Cloud Cannon Limited">
		<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="N0KRbqUItrdh899bo-_abK7QGoff7tcerQRVoaBOFGrCHHi_iNXyoaWQOHyYlaA2yYsKHEE40LeyvGnbKaJhQQ" />

		<meta name="apple-mobile-web-app-title" content="CloudCannon">
        <meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="referrer" content="strict-origin-when-cross-origin">
		<title>CloudCannon</title>

        <link rel="apple-touch-startup-image" href="/apple-touch-icon.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml">
		<link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png">
		<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/manifest.json">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#034ad8">
		<meta name="theme-color" content="#034ad8">

				<script>
					!function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
					(a[e].o=a[e].o||[]).push(arguments)},g=b.createElement(c),h=b.getElementsByTagName(c)[0],
					g.async=0,g.src=d,a.__raygunNoConflict=!!f,h.parentNode.insertBefore(g,h);
					}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
				</script>

			<script crossorigin="anonymous" src="https://js.stripe.com/v3/"></script>
			<script>
				window.stripe = Stripe("pk_live_f8UOh6rdnS7jhb95oDHFX64t")
			</script>
			<script>

				window.CONSTANTS = {
					interface: "",
					MAX_UPLOAD_FILE_SIZE: "50000000",
					MAX_ZIP_UPLOAD_FILE_SIZE: "524288000",
					BETA_STATE: "off",
					BETA_ID: "editor",
					web_sockets_url: "https://sockets-v2.cloudcannon.com/",
					visual_editor_url: "https://{{stable_domain_encoded}}.proxy.cloudcannon.com/{{path}}",
					cloudvent_suffix: ".cloudvent.net",
					screenshots_url: "",
					sites_origin: "sites.cloudcannon.com",
					demo_domain: "cloudvent.net",
					editor_css: "https://cdn.cloudcannon.com/stylesheets/editor.0661367ed9923310d7ac5ea2383e0fed.css",
					visual_editor_components_css: "https://cdn.cloudcannon.com/stylesheets/visual-editor-components.98e5736a286f7767068f77f7bb839958.css",
					inner_editor_js: "https://cdn.cloudcannon.com/javascripts/inner-editor.3479c11f233387b521b82d95d8bd8ffb.js",
					editor_js: "https://cdn.cloudcannon.com/javascripts/editor.905dfb0f89bdea8e9adb00b39bcf0808.js",
					app_js: "https://cdn.cloudcannon.com/javascripts/app.f3b8d60de88205311189ce0fb0359d8a.js",
					markdown_editor_css: "https://cdn.cloudcannon.com/stylesheets/markdown-editor.f61e188acb347a237e64b46d30a20793.css",
					environment: "production",
					raygun_key: "lRi8/Rk0Ixkhci28kIs4kg==",
					proxy_url: ".proxee.co/"
				};

					rg4js("apiKey", window.CONSTANTS.raygun_key);
					rg4js('setVersion', window.CONSTANTS.raygun_version);
					rg4js("enableCrashReporting", true);

			</script>

			<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/22461532.js"></script>



		<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" type="text/css">
		<link href="https://fonts.cloudcannon.com/css/TT-Norms-Pro_500_800.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://cdn.cloudcannon.com/stylesheets/redesign.b3e195b8aac3e7301caae60d43f6a9cd.css">

		<style id="branding">
		</style>
	</head>

	<body class="with-overflow">
	<div id="banners" class="banner-messages"></div>


<div class="devise-container" id="devise-view-element">
	<div class="devise-content">
		<div class="devise-header devise-header--half-width">
				<h1 class="cloudcannon-logo">CloudCannon</h1>

				<span class="button-premise">Don't have an account?</span>

	<a tabindex="2" class="c-button c-button--secondary js-has-email-param" data-original="/register" href="/register">Sign Up</a>

		</div>
		<div class="devise-body devise-body--full-width">	<div class="c-signup-layout">
		<div class="c-signup-layout__body c-signup-layout__body--left-panel">
			<div class="left-panel-container" style="z-index: 2;">
				<iframe src="https://auth-screens.cloudcannon.com/" style="height: 100%;border: 0;"></iframe>
			</div>
		</div>
		<div class="c-signup-layout__body">

			<h3 class="app-body-title">Log in to CloudCannon</h3>

				<blockquote class="c-inline-toast c-inline-toast--error">You need to log in or sign up before continuing.</blockquote>


			<div class="js-login-options">
				<div style="display: flex;flex-direction: column;" class="u-vertical-flow">
					<a class="c-button c-button--github c-button--justified-icon js-oauth-github" href="/github_oauth/authorize" class="github" tabindex="1">
						<i class="legacy-icon-github-light"></i>
						<span>Log in with GitHub</span>
					</a>
					<a class="c-button c-button--bitbucket c-button--justified-icon js-oauth-bitbucket" href="/bitbucket/authorize" class="bitbucket" tabindex="1">
						<i class="legacy-icon-bitbucket-light"></i>
						<span>Log in with Bitbucket</span>
					</a>
					<a class="c-button c-button--gitlab c-button--justified-icon js-oauth-gitlab" href="/gitlab/authorize" class="gitlab" tabindex="1">
						<i class="legacy-icon-gitlab-light"></i>
						<span>Log in with GitLab</span>
					</a>
				</div>

				<p class="c-or-split">or</p>

				<button class="c-button c-button--secondary c-button--full-width js-email-button" tabindex="1">
					<span>Log in with email</span>
				</button>
			</div>

			<div class="js-email-login-form" style="display: none;">
				<form class="new_user" id="new_user" action="/users/sign_in" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="AKVEhb-_4cnRcdYLp9OgztydQKTZ6LBTzbBeIPwRUUb1-61UkmKl3xUSMSycqdqUu8ZQP0c-t_rSCGJadf0kbQ" autocomplete="off" />
					<label for="user_email">Email Address</label>
					<div class="input-email-address-container">
						<input tabindex="1" value="" autofocus="autofocus" class="" autocomplete="email" type="email" name="user[email]" id="user_email" />

					</div>

					<label for="user_password">
						Password
						<a tabindex="2" class="sublabel js-has-email-param" data-original="/users/password/new" href="/users/password/new">Forgot your password?</a>
					</label>
					<div class="input-password-container">
						<input tabindex="1" autocomplete="off" type="password" name="user[password]" id="user_password" />
					</div>


					<button name="button" type="submit" tabindex="1" class="c-button c-button--full-width" data-text-on-click="Logging in">Log in</button>
</form>				<hr>
				<button class="c-button c-button--secondary c-button--full-width js-cancel-email-button" tabindex="1">
					<span>Return to login options</span>
				</button>
			</div>
		</div>
	</div>
</div>
	</div>
</div>

<script crossorigin="anonymous" src="https://cdn.cloudcannon.com/jquery-3.6.0.min.js"></script>
<script crossorigin="anonymous" src="https://cdn.cloudcannon.com/javascripts/shared.c5ef5112a8762439a31dca89fc10ea4d.js"></script>

<script src="https://status.cloudcannon.com/embed/script.js"></script>
<script crossorigin="anonymous" src="https://cdn.cloudcannon.com/javascripts/devise.1b2c29fb35b1337d2b5e2d048f9489de.js"></script>



		<div id="messages" class="snack-bar-messages"></div>
		<style>
			#hubspot-messages-iframe-container { 
				display: none !important;
			}
			#hubspot-messages-iframe-container.active {
				display: initial !important
			}
		</style>
	</body>
</html>

