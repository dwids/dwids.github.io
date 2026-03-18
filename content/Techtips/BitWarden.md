---
title: Password Manager - BitWarden
date: 2026-03-18
tags:
  - techtip
  - opensource
draft: false

---



## Why Use a Password Manager? 

A good password manager should help you in these ways:

### 1. You can’t out‑remember modern security requirements
Strong passwords must be long, unique, and strongly‑random. Humans can’t reliably do that for multiple sites.

### 2. It generates strongly‑random passwords automatically
No patterns, no guessable substitutions. The manager creates high‑quality secrets for every site.

### 3. Reusing passwords is the #1 way accounts get hacked
If one site leaks, attackers try the same secret everywhere. Unique passwords break that chain.

### 4. It auto‑fills only on the correct site
Prevents phishing by refusing to fill on look‑alike domains.

### 5. It stores everything encrypted and with 2FA
Your *vault* is locked with one strong master *passphrase* (see below); everything inside is encrypted. Plus Two Factor Authentication (also, below); not just a single passphrase.  

### 6. It can audit your security
It flags reused, weak, or breached passwords and guides you to fix them.

### 7. It reduces stress and mistakes
No resets, no guessing, no “temporary” secrets that become permanent.

### Summary
A good password manager generates strongly‑random passwords, stores them securely, and audits your account safety so you don’t have to.


## Passphrase?

You should lock down your password managers vault with yes, a *phrase* - series of **words**. The longer it is, the harder it is to guess.

`orangemelbournekangaroo` has a lot more 'randomness' (entropy) than `H8i*ii)p`

## Two Factor Authentication (2FA) ?

That second *challenge* after you enter the passphrase. I use the free Google Authenticator, it's running offline and generating those 'random' 6 digit numbers, changing every 30 seconds. The Password manager is using the same system..and checks the current[^1] 6 digit number via the challenge.   Here is GA in action:

![Google Authenticator image](https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Google_Authenticator_screenshot_%282023%29.jpg/120px-Google_Authenticator_screenshot_%282023%29.jpg)

[^1]: The technology is Time-Based One Time Passwords. It uses the current time (UTC nee Greenwich) as input to generate the 6 digit nbr.

There are other forms of 2FA.

Just to repeat:

> [!info] You really should use both
> I'd strongly suggest you use a long Passphrase and 2FA



## BitWarden
I'm currently evaluating [BitWarden](https://bitwarden.com/)  

It is [Open source](https://opensource.com/resources/what-open-source). In fact their website says 

> The source code for Bitwarden is hosted on GitHub and everyone is free to review, audit, and contribute to the Bitwarden codebase.

It's a good model; a form of [freenium](https://en.wikipedia.org/wiki/Freemium). I'm using the **free** version.  It has apps on Android and iPad etc, plus browser plugins..to make life easier. I use 2FA and a long passphrase.  Everything is synced up, so a change on one is quickly propagated to the others.

![BitWarden image](https://bitwarden.com/assets/XZp5wAmrJeP41sIS18dvQ/2929de21238c825d283ca567aaf98f24/Home_Hero_-_Light.png?w=1400&fm=avif)

> Last updated: 18 Mar 2026 at 15:33 