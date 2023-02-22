# Facebook Login Authentication Setup - Firebase

# Before you begin

1. Add Firebase to your project.
2. On the Facebook for Developers site : https://developers.facebook.com/, get the App ID and an App Secret for your app : -
   - Click My apps tab
   - Create a new app (complete the process)
   - Once reached dashboard, goto "settings" -> "Basic"
   - You will find your AppID & App secret.
3. In the Firebase console, open the Auth section.
4. On the Sign in method tab, enable the Facebook sign-in method and specify the App ID and App Secret you got from Facebook.
5. Then, make sure your OAuth redirect URI (e.g. my-app-12345.firebaseapp.com/\_\_/auth/handler) is listed as one of your OAuth redirect URIs in your Facebook app's settings page on the Facebook for Developers site in the Product Settings > Facebook Login config.
