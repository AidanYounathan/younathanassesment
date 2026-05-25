# Younathan Assessment

Personal link-in-bio page, live at [aidantree.dev](https://aidantree.dev).

Built with React, TypeScript, and Tailwind. Hey Alex 

---

## Use it

Visit **[aidantree.dev](https://aidantree.dev)** and click whatever you need: LinkedIn, portfolio, resume, GitHub.

If you want to run it locally:

```bash
git clone https://github.com/AidanYounathan/younathanassesment.git
cd younathanassesment
npm install
npm run dev
```

---

## My Feature Write-up

**What is the feature?**

I built two features: a StatusBadge and a NowBuilding card. The StatusBadge is a small badge under your name that shows whether you're open to opportunities, casually looking, or not available, with a pulsing dot so you can read it quick and grab attention. The NowBuilding card sits at the top of your link stack. You put in what you're working on right now, a name, a quick description, and a link, and that's what people see first when they land on your page. It's for developers, designers, freelancers, anyone using Linktree as a professional introduction who wants the page to show off what they are working on at the moment.

**Why does Linktree need it?**

I built this because I have seen many other devs have this on there personal sites and think that if Linktree built this into their product then it could be really useful. Your Linktree bio can say whatever you want but your status can get lost in it. The StatusBadge allows for a clear and dedicated indicator to show whether or not you are available.

The NowBuilding card idea was drawn from Discord. During my time at Codestack we found a VSCode plugin that would display what you were working on as your status or activity on discord. If someone lands on your page and sees a card that says "currently building Apple 3.0" with a link to the repo, they are more inclined to click on whatever you are working on instead of going to your github, checking your activity, skimming all your repos. This way you can show off what you are doing now.

**How did I build it?**

The `StatusBadge` component takes a status value, one of `"open"`, `"casual"`, or `"unavailable"`, and maps it to a config object that holds the label and the colors for the dot and badge. If you need to add a new status later it's one line in the config and nothing else changes. `NowBuilding` takes a project name, description, and an optional link, and wraps everything in an anchor tag if the link is there, otherwise it just renders as a plain block. The pulsing dot is a Tailwind animation class.

I kept both components display-only with no data fetching. The values are hardcoded in `App.tsx` for this prototype which was the right call for scope, but connecting these to a real user profile would be the first thing I'd do if this were going into production.

**How would I approach this at production scale?**

Both features are user-level fields, an availability status stored on the user profile, and a now-building entry with a title, description, and url. Neither changes that often, so the read path is simple: cache the profile data so it loads fast and clear the cache when the user updates it. Most users aren't changing their status more than a few times a month so there's no real load concern on the write side. Unless you are me who is doing 72 different projects at a time and constantly switching

The thing I'd think hardest about is the NowBuilding URL field since it's an open link on a public page. It needs the same link safety checks that apply to any user-submitted link in the system, and I'd want to rate limit edits so someone can't cycle through URLs to game anything or be malicious. For rollout I'd enable it for a small group of users first before opening it up, and I'd measure success by whether pages with the feature get more outbound clicks than pages without it, because the whole point of both features is to give visitors a reason to reach out, and click-through is the most honest signal that it's working. Also I would check if said users were even utilizing it too, if the actual user doesn't use it at all then there is no point of rolling it out globally.


Sorry it got a little lengthy, my sentences tend to run-on. Thanks Alex for the opportunity!
---

