# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e13]: Sign in with your username and password
  - generic [ref=e14]:
    - generic [ref=e15]: Username
    - textbox "Username" [ref=e17]
    - generic [ref=e18]: Password
    - textbox "Password" [ref=e20]
    - link "Forgot your password?" [ref=e22] [cursor=pointer]:
      - /url: /forgotPassword?client_id=2m7mlmvibupco3qo9515360ir3&response_type=code&scope=email+openid+profile&redirect_uri=https%3A%2F%2Fapi.dev01.sphrx.xyz%2Fiam%2Fauth%2Fcallback&state=app
    - button "submit" [ref=e23] [cursor=pointer]: Sign in
    - paragraph [ref=e25]:
      - text: Need an account?
      - link "Sign up" [ref=e26] [cursor=pointer]:
        - /url: /signup?client_id=2m7mlmvibupco3qo9515360ir3&response_type=code&scope=email+openid+profile&redirect_uri=https%3A%2F%2Fapi.dev01.sphrx.xyz%2Fiam%2Fauth%2Fcallback&state=app
```