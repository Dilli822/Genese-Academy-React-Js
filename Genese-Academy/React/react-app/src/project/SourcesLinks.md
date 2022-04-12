
*********** Login/Sign In Design UI ************
// Source Code Design: https://mui.com/getting-started/templates/
// Material UI Design 


**** Articles for firebase Login/Sign in with Social Medias Google/Email/Facebook ****
// https://css-tricks.com/building-a-real-time-chat-app


<!-- https://console.firebase.google.com/u/0/project/user-details-9d8ad/database/user-details-9d8ad-default-rtdb/rules -->
{
  "rules": {
    ".read": "now < 1652292900000",  // 2022-5-12
    ".write": "now < 1652292900000",  // 2022-5-12
  }
}

<!-- Making rules for only those users who have signed in can read or write inside the appchat -->
<!-- AFTER APPLYING RULES -->
{
  "rules": {
    "chat": {
    ".read": "auth != null",  // 2022-5-12
    ".write": "auth != null",  // 2022-5-12
  }
  }
}